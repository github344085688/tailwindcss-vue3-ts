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
        HighlightView,
    },

})
export default class HomeView extends BaseVue {
    public links: any = [
        {href: '/account-settings', label: 'Account settings'},
        {href: '/support', label: 'Support'},
        {href: '/license', label: 'License'},
        {href: '/sign-out', label: 'Sign out'}
    ]
    public linksa: any = ['Accounatsettinasdgs', 'Supssasdport', 'Liceasdnaase', 'Signs asdout'];
    public pageSize: any = 'Support';

    public pageSizePage(item: any) {

    }
}


