import {Options} from 'vue-class-component';
import template from "./invoices.vue";
import BaseVue from '@/utils/base-vue';
import {ref} from "vue/dist/vue";

@Options({
    mixins: [template],
    name: 'Invoices',
    components: {},
    props: {
        propMessage: String
    },
})
export default class Invoices extends BaseVue {
    public changeView!: any;

    public itemChildsLink: string = "Invoices";
    public isFold: boolean = false;
    public isLevelSmall: boolean = false;
    public isFoldDetails: boolean = false;
    public navName: string = "TMS";
    public parentLevel: any = "";
    public isClickParentLevel: boolean = false;
    public navLink: Array<any> = [];

    public countSideSpread(value: number, oldValue: number): void {
    }

    public mounted(): void {

    }


}
