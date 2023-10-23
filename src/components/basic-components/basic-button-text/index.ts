import {Options} from 'vue-class-component';
import template from "./basic-button-text.vue";
import BaseVue from '@/utils/base-vue';

@Options({
    mixins: [template],
    name: 'BasicButtonText',
    components: {},
    props: {},

})
export default class BasicButtonText extends BaseVue {


}
