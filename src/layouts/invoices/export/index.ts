import {Options} from 'vue-class-component';
import template from "./export.vue";
import BaseVue from '@/utils/base-vue';

@Options({
    mixins: [template],
    name: 'Export',
    components: {},
    props: {
        propMessage: String
    },
})
export default class Export extends BaseVue {

}
