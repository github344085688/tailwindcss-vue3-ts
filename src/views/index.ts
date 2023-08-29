import {Options} from 'vue-class-component';
import BaseVue from "@/utils/base-vue";
import AdjustableWindow from "@/components/adjustable-window";
import HighlightView from "@/components/highlight-view";
import template from './HomeView.vue';
@Options({
    mixins: [template],
    name: 'PrimaryModal',
    components: {
        AdjustableWindow,
        HighlightView
    },

})
export default class HomeView extends BaseVue {

}


