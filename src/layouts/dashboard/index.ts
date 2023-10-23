import {Options} from "vue-class-component";
import template from "./dashboard.vue";
import BaseVue from "@/utils/base-vue";
import {marked} from "marked";
import hljs from "highlight.js";
import "./dashboard.scss";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import AdjustableWindow from "@/components/adjustable-window";

import sideNavigation from '@/layouts/navigationExample';

@Options({
    mixins: [template],
    name: "Dashboard",
    components: {
        highlightjs: hljsVuePlugin.component,
        AdjustableWindow,
        sideNavigation
    },
    props: {},
})
export default class Dashboard extends BaseVue {
    public isSideSpread: boolean = true;
    public markedHtml: string = "";
    public htmlGrildCode: string = '';
    public sideSpread: any = {};
    public routers: any = {};
    public treeRef: any;

    public togoaside(isSpread: boolean): void {
        this.isSideSpread = isSpread;


    }

}
