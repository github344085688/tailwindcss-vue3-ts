import {Options} from 'vue-class-component';
import template from "./layout.vue";
import './layout.scss';
import BaseVue from '@/utils/base-vue';
import SideNav from './sideNavBar';
import TopBar from './topBar';
import {ref} from "vue";

@Options({
    mixins: [template],
    name: 'Layouts',
    components: {
        SideNav,
        TopBar,
    },
    provide() {
        return {
            changeView: this.sideSpread
        }
    }

})
export default class Layouts extends BaseVue {
    public isSideSpread: boolean = true;
    public sideSpread: any = {};
    public routers: any = {};
    public treeRef: any;

    public togoaside(isSpread: boolean): void {
        this.isSideSpread = isSpread;
        this.sideSpread.bb = isSpread;
        this.sideSpread.aaa = 'bbb';
        // this.treeRef.value?.test();


    }

    public beforeCreate(): void {
        this.treeRef = ref<any>();
    }

    public mounted() {


    }

    public changeView(router: any): void {
        this.routers = router;
    }


}
