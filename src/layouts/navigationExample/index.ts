import {Options} from "vue-class-component";
import template from "./navigationExample.vue";
import "./navigationExample.scss";
import BaseVue from "@/utils/base-vue";
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
    components: {},
    props: {
        sideSpread: {},
    },
})
export default class SideNavigation extends BaseVue {
    public changeView!: any;
    public SideNavConfig: Array<any> = [
        {
            groupName: "",
            children: [
                {
                    title: "Dashboard",
                    name: "Dashboard",
                    path: "dashboard",
                    icon: require("@/assets/img/dashboard.svg"),
                    children: [],
                }
            ],
        },
        {
            groupName: "MAIN MENU",
            children: [
                {
                    title: "TMS",
                    name: "TMS",
                    icon: require("@/assets/img/tms2.svg"),
                    children: [
                        {
                            parentName: "TMS",
                            path: "TMS/invoices",
                            name: "Invoices",
                            title: "Invoices",
                            // redirect: { name: "Service" },
                            children: [
                                {
                                    path: "invoices-list",
                                    name: "InvoicesList",
                                },
                                {
                                    path: "import-export",
                                    name: "ImportExport",
                                },
                                {
                                    path: "export",
                                    name: "Export",
                                },
                            ],
                        },
                        {
                            parentName: "TMS",
                            path: "TMS/invoice-history",
                            name: "InvoiceHistory",
                            title: "Invoice History",
                        },
                    ],
                },
                {
                    title: "Service",
                    name: "Service",
                    path: "service",
                    icon: require("@/assets/img/service.svg"),
                },
            ],
        },
        {
            groupName: "MY BUSINESS",
            children: [
                {
                    title: "Payments ",
                    name: "Payments",
                    icon: require("@/assets/img/brokerage.svg"),
                    children: [
                        {
                            parentName: "Payments",
                            path: "payments/business",
                            name: "Business",
                            title: "Business",
                        },
                        {
                            parentName: "Payments",
                            path: "payments/invoice-history",
                            name: "businessHistory",
                            title: "Business History",
                        },
                    ],
                },
                {
                    title: "Business Info  ",
                    name: "BusinessInfo",
                    icon: require("@/assets/img/payments.svg"),
                },
            ],
        },
        {
            groupName: "GENERAL",
            children: [
                {
                    title: "Message Center ",
                    name: "MessageCenter",
                    icon: require("@/assets/img/businessInfo.svg"),
                },
                {
                    title: "Settings",
                    name: "Settings",
                    icon: require("@/assets/img/MessageCenter.svg"),
                },
            ],
        },
    ];
    public itemChildsLink: string = "Invoices";
    public isFold: boolean = false;
    public isLevelSmall: boolean = false;
    public isFoldDetails: boolean = false;
    public navName: string = "TMS";
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
        if (item.path && item.name) this.setRouter({name: item.name});
    }

    public foldChildetails(event: any, item: any): void {
        let botton: any = event.target.parentNode.parentNode.parentNode;
        if (botton) {
            botton.blur();
        }
        this.itemChildsLink = item.name;
        if (item.path && item.name) this.setRouter({name: item.name});
    }

    public logOut(): void {
        this.setRouter({name: "SignIn"});
    }

    private filterNavigations() {
        let privateSideNavConfig = cloneDeep(this.SideNavConfig);
        forEach(privateSideNavConfig, (nav: any) => {

            if (nav.children && isArray(nav.children)) {
                forEach(nav.children, children => {
                    if (children.isPrivate) nav.children = nav.children.filter((item: any) => item !== children);
                    if (children.children && isArray(children.children)) {
                        forEach(children.children, chi => {
                            if (chi.isPrivate) children.children = children.children.filter((item: any) => item !== chi);
                            console.log(chi);
                        })
                    }
                })
            }


        })
        return privateSideNavConfig;


    }
}
