import {Options} from 'vue-class-component';
import template from "./basic-button.vue";
import BaseVue from '@/utils/base-vue';

@Options({
    mixins: [template],
    name: 'basic-button',
    components: {},
    props: {},

})
export default class BasicButton extends BaseVue {


}
