import {Options} from "vue-class-component";
import template from "./navigationExample.vue";
import "./navigationExample.scss";
import BaseVue from "@/utils/base-vue";
import groupName from "./groupName";
import secondItems from "./secondItems";
import SideNavConfig from "@/router/main-routers";
import {find, forEach, cloneDeep, isArray} from "lodash-es";
import Dashboard from "@/layouts/dashboard";
import Invoices from "@/layouts/invoices";
import InvoicesList from "@/layouts/invoices/invoices-list";
import ImportExport from "@/layouts/invoices/import-export";
import Export from "@/layouts/invoices/export";
import InvoiceHistory from "@/layouts/invoice-history";
import Service from "@/layouts/service";

@Options({
    mixins: [template],
    name: "SideNav",
    components: {
        groupName,
        secondItems
    },
    props: {
        sideSpread: {},
    },
})
export default class NavigationExample extends BaseVue {
    public changeView!: any;

    public itemChildsLink: string = "Invoices";
    public isFold: boolean = false;
    public isLevelSmall: boolean = false;
    public isFoldDetails: boolean = false;
    public navName: string = "TMS";
    public fourthItemActiveName: string = "";

    public isClickParentLevel: boolean = false;
    public navLink: Array<any> = [];

    public countSideSpread(value: number, oldValue: number): void {
    }

    public mounted(): void {
        this.navLink = this.filterNavigations();


    }

    public togoaside(isfold: any): void {
        if (this.isFoldDetails) {
            this.isLevelSmall = true;
        }
        if (isfold) {
        }
        this.isFold = !isfold;
    }

    public foldDetails(isFoldDetails: any, item: any): void {
        if (this.navName == item.title) {
            this.navName = "";
            return;
        } else this.navName = item.title;
        // if (item.path && item.name) this.setRouter({name: item.name});
    }

    public foldChildetails(event: any, item: any, father: any): void {
        let botton: any = event.target.parentNode.parentNode.parentNode;
        if (botton) {
            botton.blur();
        }
        this.itemChildsLink = item.title;
        this.navName = father.title;
        // if (item.path && item.name) this.setRouter({name: item.name});
    }

    public logOut(): void {
        this.setRouter({name: "SignIn"});
    }

    private filterNavigations() {
        let privateSideNavConfig = cloneDeep(SideNavConfig);
        forEach(privateSideNavConfig, (nav: any) => {

            if (nav.children && isArray(nav.children)) {
                forEach(nav.children, children => {
                    if (children.isPrivate) nav.children = nav.children.filter((item: any) => item !== children);
                    if (children.children && isArray(children.children)) {
                        forEach(children.children, chi => {
                            if (chi.isPrivate) children.children = children.children.filter((item: any) => item !== chi);
                        })
                    }
                })
            }


        })
        return privateSideNavConfig;


    }
}
