import {Options} from 'vue-class-component';
import template from "./menu.vue";
import BaseVue from '@/utils/base-vue';
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue'
import {ChevronDownIcon, XMarkIcon} from '@heroicons/vue/20/solid';
import {cloneDeep, findIndex, forEach, indexOf} from 'lodash-es';

@Options({
    mixins: [template],
    name: 'BaseMenu',
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        ChevronDownIcon,
        XMarkIcon
    },
    props: {
        name: {
            type: String,
            default: '',
        },
        selectdata: {
            type: Object,
            default: {},
        },
        placeholder: {
            type: String,
            default: 'Select',
        },
        label: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
        returnStructure: {
            type: String,
            default: '',
        },
        adaptiv: {
            type: Boolean,
            default: false,
        },
        modelValue: {
            type: [Object, String, Number],
            default: '',
        },
        addMes: {
            type: Object,
            default: {},
        },
        allowClear: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        error: {
            type: String,
            default: '',
        },
        multiple: {
            type: Boolean,
            default: false,
        }
    },
    watch: {
        error: {handler: 'watchError'},
        selectdata: {handler: 'watchSelectdata'},
        modelValue: {handler: 'watchModelValue'},
    }
})
export default class BaseMenu extends BaseVue {


    public isOpen: boolean = false;
    public selectedItem: any = '';

    public name!: string;
    public selectdata!: any;
    public placeholder!: string;
    public multiple!: any;
    public modelValue!: any;
    public label!: string;
    public value!: string;
    public returnStructure!: string;
    public allowClear!: boolean;
    public error!: any;

    public priSelectdata: Array<any> = [];
    public cloneDeepSelectdata: Array<any> = [];
    public transitionValue: any = '';
    public multipleValues: Array<any> = [];
    public multipleModelValues: Array<any> = [];
    public errorMsg: any = '';
    public isError: boolean = false;


    public filtersName(item: any) {
        if (item && item[this.label]) return item[this.label];
        else return item;

    }

    public watchError(val: any, oldVal: any) {
    }

    public watchSelectdata(val: any, oldVal: any) {
        if (val) {
            this.cloneDeepSelectdata = cloneDeep(this.selectdata);
            this.priSelectdata = val;
        }
        if (this.label && val && val.length > 0) {
            this.assignmentTransitionValue(this.modelValue);
        }
    }

    public watchModelValue(val: any, oldVal: any) {
        if (!val) {
            this.transitionValue = '';
        }
        if (this.selectdata && this.selectdata.length > 0) {
            this.assignmentTransitionValue(val);
        } else {
            this.transitionValue = val;
        }

    }

    public mounted() {
        if (this.modelValue && typeof (this.modelValue) == 'object') this.transitionValue = this.modelValue[this.label];
        else if (this.label && this.selectdata && this.selectdata.length > 0) {
            this.assignmentTransitionValue(this.modelValue);
        } else {
            this.transitionValue = this.modelValue;
        }
        if (this.selectdata) {
            this.priSelectdata = this.selectdata;
            this.cloneDeepSelectdata = cloneDeep(this.selectdata);
        }

    }


    public selectItem(item: any) {
        this.isOpen = false;
        if (!this.multiple) {
            if (this.returnStructure === 'obj') {
                this.transitionValue = item[this.label];
                this.$emit('update:modelValue', item);
                this.$emit('emitChoose', item);
                return;
            }

            if (item[this.label]) this.transitionValue = item[this.label];
            else this.transitionValue = item;
            if (item[this.value]) this.$emit('update:modelValue', item[this.value]);
            else if (item) this.$emit('update:modelValue', item);
            this.$emit('emitChoose', item);
            return;

        } else {
            if (item[this.label]) {
                if (this.multipleValues.indexOf(item[this.label]) > -1) return;
                this.multipleValues.push(item[this.label]);
            }
            if (item[this.value]) {
                if (this.multipleModelValues.indexOf(item[this.value]) > -1) {

                } else {
                    this.multipleModelValues.push(item[this.value]);
                }
                this.$emit('update:modelValue', this.multipleModelValues);
                this.$emit('emitChoose', item);

            } else {
                this.multipleValues.push(item);
                this.priSelectdata = cloneDeep(this.cloneDeepSelectdata);
                forEach(this.multipleValues, (val: any) => {
                    const findIndexof = indexOf(this.priSelectdata, val);
                    this.priSelectdata.splice(findIndexof, 1);
                });
                this.$emit('update:modelValue', this.multipleValues);
                this.$emit('emitChoose', item);

            }

            // this.$emit('emitChoose', item);


        }

    }

    public onAllowClear() {
        this.transitionValue = null;
        this.$emit('update:modelValue', null);
    }

    public removeItem(name: string) {
        const indexOf = this.multipleValues.indexOf(name);
        if (indexOf > -1) {
            this.multipleValues.splice(indexOf, 1);
            this.priSelectdata = cloneDeep(this.cloneDeepSelectdata);
            forEach(this.multipleValues, (item: any) => {
                const findIndexof = findIndex(this.priSelectdata, {[this.label]: item});
                this.priSelectdata.splice(findIndexof, 1);
            });

        }


    }

    private assignmentTransitionValue(value: any): void {
        /* let keyByPriSelectdatas: any = {};
         this.selectdata.forEach((data: any): void => {
             keyByPriSelectdatas[data[this.value]] = data;
         });
         if (keyByPriSelectdatas[value]) this.transitionValue = keyByPriSelectdatas[value][this.label];*/
    }


}
