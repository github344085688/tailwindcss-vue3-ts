import {Options} from 'vue-class-component';
import template from "./import-export.vue";
import BaseVue from '@/utils/base-vue';
import './import-export.scss';

@Options({
    mixins: [template],
    name: 'ImportExport',
    components: {},
    props: {
        propMessage: String
    },
})
export default class ImportExport extends BaseVue {


}
