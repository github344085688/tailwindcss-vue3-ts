import {Options} from 'vue-class-component';
import template from "./topBar.vue";
import './topBar.scss';
import BaseVue from '@/utils/base-vue';

@Options({
    mixins: [template],
    name: 'TopBar',
    components: {},
    provide() {
        return {
            changeView: this.sideSpread
        }
    }

})
export default class TopBar extends BaseVue {
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
    }

    public mounted() {


    }

    public changeView(router: any): void {
        this.routers = router;
    }

    public toggleTheme() {
        const htmlClasses = document.documentElement.classList;
        if (htmlClasses.contains('dark')) {
            htmlClasses.remove('dark');
            localStorage.theme = 'light'; // 可选：将主题保存到本地存储中
        } else {
            htmlClasses.add('dark');
            localStorage.theme = 'dark'; // 可选：将主题保存到本地存储中
        }
    }

}
