import {Options} from 'vue-class-component';
import template from "./service.vue";
import './service.scss';
import BaseVue from '@/utils/base-vue';

@Options({
    mixins: [template],
    name: 'Service',
    components: {},
})
export default class Service extends BaseVue {


}
