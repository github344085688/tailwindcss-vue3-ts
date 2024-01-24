/**
 * Created by f on 2022/9/28.
 */

// import Dashboard from "@/layouts/dashboard";
import Invoices from "@/layouts/invoices";
import InvoicesList from "@/layouts/invoices/invoices-list";
import ImportExport from "@/layouts/invoices/import-export";
import Service from "@/layouts/service";
import Export from "@/layouts/invoices/export";
import InvoiceHistory from "@/layouts/invoice-history";
import NavigationExample from "@/layouts/navigationExample";

declare interface SideNavList {
    groupName: string;
    children?: Array<SideNavChildren>;
}

declare interface thirdIChildren {
    parentName?: string;
    title: string;
    path?: string;
    name?: string;
    component?: any;
    children?: Array<any>;
    isPrivate?: boolean
}

declare interface SideNavChildren {
    parentName?: string;
    title: string;
    icon?: any;
    path?: string;
    name?: string;
    component?: any;
    children?: Array<thirdIChildren>;
    isPrivate?: boolean
}

const SideNavConfig: Array<SideNavList> = [
    {
        groupName: "",
        children: [
            {
                title: "Dashboard",
                name: "Dashboard",
                path: "dashboard",
                component: async () => await import('@/layouts/dashboard'),
                icon: `<svg width="24" height="24" class="fill-color" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"/>
                        </svg>`,
                children: [],
            },
            {
                title: "NavigationExample",
                name: "NavigationExample",
                path: "navigationExample",
                component: async () => await import('@/layouts/navigationExample'),
                isPrivate: true,
            },
        ],
    },
    {
        groupName: "css demo",

        children: [
            {
                title: "Demos",
                name: "Demos",
                icon: `<svg width="22" height="16"  class="fill-color" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H16V0H2C0.9 0 0 0.9 0 2V13H2C2 14.66 3.34 16 5 16C6.66 16 8 14.66 8 13H14C14 14.66 15.34 16 17 16C18.66 16 20 14.66 20 13H22V8L19 4ZM5 14.5C4.17 14.5 3.5 13.83 3.5 13C3.5 12.17 4.17 11.5 5 11.5C5.83 11.5 6.5 12.17 6.5 13C6.5 13.83 5.83 14.5 5 14.5ZM18.5 5.5L20.46 8H16V5.5H18.5ZM17 14.5C16.17 14.5 15.5 13.83 15.5 13C15.5 12.17 16.17 11.5 17 11.5C17.83 11.5 18.5 12.17 18.5 13C18.5 13.83 17.83 14.5 17 14.5Z" />
                       </svg>`,
                children: [
                    {
                        parentName: "Demos",
                        path: "Demos/Latest",
                        name: "Latest",
                        title: "Latest",
                        children: [
                            {
                                parentName: "Demos",
                                path: "Demos/circularMenu",
                                name: "circularMenu",
                                title: "Circular Menu",
                                component: async () => await import('@/layouts/menu/circular.vue'),
                            }, {
                                parentName: "Demos",
                                path: "Demos/dropFly",
                                name: "dropFly",
                                title: "Drop Fly",
                                component: async () => await import('@/layouts/menu/drop_fly.vue'),
                            }, {
                                parentName: "Demos",
                                path: "Demos/clickDroplist",
                                name: "clickDroplist",
                                title: "Click Droplist",
                                component: async () => await import('@/layouts/menu/click-droplist.vue'),
                            }, {
                                parentName: "Demos",
                                path: "Demos/ultimateTreeMenu",
                                name: "ultimateTreeMenu",
                                title: "Tree Menu",
                                component: async () => await import('@/layouts/menu/ultimate-tree-menu.vue'),
                            }, {
                                parentName: "Demos",
                                path: "Demos/ultimateTreeMenuv2",
                                name: "ultimateTreeMenuv2",
                                title: "Tree Menu v2",
                                component: async () => await import('@/layouts/menu/ultimate-tree-menu2.vue'),
                            }, {
                                parentName: "Demos",
                                path: "Demos/VerticalSlide",
                                name: "VerticalSlide",
                                title: "Vertical Slide",
                                component: async () => await import('@/layouts/menu/vertical-slide-concertina.vue'),
                            }, {
                                parentName: "Demos",
                                path: "Demos/slideDown",
                                name: "slideDown",
                                title: "slide down ",
                                component: async () => await import('@/layouts/menu/slide-down.vue'),
                            }, {
                                parentName: "Demos",
                                path: "Demos/Demonstrations",
                                name: "Demonstrations",
                                title: "Demonstrations",
                                component: async () => await import('@/layouts/menu/Demonstrations.vue'),
                            },
                        ],
                    },
                    {
                        parentName: "TMS",
                        path: "TMS/invoice-history",
                        name: "InvoiceasHistorya",
                        component: InvoiceHistory,
                        title: "Invoice Historya",
                    },
                    {
                        parentName: "TMS",
                        path: "TMS/invoice-history",
                        name: "Exporte",
                        title: "Exporte",
                        children: [
                            {
                                path: "invoices-listss",
                                name: "InvoicesListss",
                                title: "InvoicesListss",
                                component: InvoicesList,
                            },
                            {
                                path: "import-exportq",
                                name: "ImportExportq",
                                title: "ImportExportq",
                                component: ImportExport,
                            },
                            {
                                path: "exportw",
                                name: "Exporte",
                                title: "Exporte",
                                component: Export,
                            },
                            {
                                path: "exportw",
                                name: "Exporte",
                                title: "Exporte",
                                component: Export,
                            },
                            {
                                path: "exportw",
                                name: "Exporte",
                                title: "Exporte",
                                component: Export,
                            },
                        ],
                    },
                    {
                        parentName: "TMS",
                        path: "TMS/invoice-history",
                        name: "Import",
                        title: "Import",
                        children: [
                            {
                                path: "invoices-listss",
                                name: "InvoicesListss",
                                title: "InvoicesListss",
                                component: InvoicesList,
                            },
                            {
                                path: "import-exportq",
                                name: "ImportExportq",
                                title: "ImportExportq",
                                component: ImportExport,
                            },
                            {
                                path: "exportw",
                                name: "Exporte",
                                title: "Exporte",
                                component: Export,
                            },
                            {
                                path: "exportw",
                                name: "Exporte",
                                title: "Exporte",
                                component: Export,
                            },
                            {
                                path: "exportw",
                                name: "Exporte",
                                title: "Exporte",
                                component: Export,
                            },
                        ],
                    },
                ],
            },
            {
                title: "Menus",
                name: "Menus",
                icon: `<svg width="20" height="21" class="fill-color" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 9.94737V3.31579L10 0L6.66667 3.31579V5.52632H0V21H20V9.94737H13.3333ZM4.44444 18.7895H2.22222V16.5789H4.44444V18.7895ZM4.44444 14.3684H2.22222V12.1579H4.44444V14.3684ZM4.44444 9.94737H2.22222V7.73684H4.44444V9.94737ZM11.1111 18.7895H8.88889V16.5789H11.1111V18.7895ZM11.1111 14.3684H8.88889V12.1579H11.1111V14.3684ZM11.1111 9.94737H8.88889V7.73684H11.1111V9.94737ZM11.1111 5.52632H8.88889V3.31579H11.1111V5.52632ZM17.7778 18.7895H15.5556V16.5789H17.7778V18.7895ZM17.7778 14.3684H15.5556V12.1579H17.7778V14.3684Z" />
                        </svg>`,
                children: [
                    {
                        path: "invoices-list",
                        name: "InvoicesList",
                        title: "InvoicesList",
                        children: [
                            {
                                path: "invoices-lists",
                                name: "InvoicesLists",
                                title: "InvoicesLists",
                                component: InvoicesList,
                            },
                            {
                                path: "import-export",
                                name: "ImportExport",
                                title: "ImportExport",
                                component: ImportExport,
                            },
                            {
                                path: "export",
                                name: "Export",
                                title: "Export",
                                component: Export,
                            },
                        ],
                    },
                    {
                        path: "Service/import-export",
                        name: "ImportExport",
                        title: "ImportExport",
                        component: ImportExport,
                    },
                    {
                        path: "export",
                        name: "Export",
                        title: "Export",
                        component: Export,
                    },
                ],
            },
        ],
    },
    {
        groupName: "Layouts Business",
        children: [
            {
                title: "Layouts ",
                name: "Layouts",
                icon: `<svg width="20" height="22" class="fill-color" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.7778 16.5V9.9C17.7778 8.69 16.7778 7.7 15.5556 7.7H3.33333V5.5L0 8.8L3.33333 12.1V9.9H7.77778V13.2H0V16.5C0 17.71 1 18.7 2.22222 18.7H4.44444C4.44444 20.526 5.93333 22 7.77778 22C9.62222 22 11.1111 20.526 11.1111 18.7H20V16.5H17.7778ZM7.77778 19.8C7.16667 19.8 6.66667 19.305 6.66667 18.7C6.66667 18.095 7.16667 17.6 7.77778 17.6C8.38889 17.6 8.88889 18.095 8.88889 18.7C8.88889 19.305 8.38889 19.8 7.77778 19.8ZM15.5556 13.2H11.1111V9.9H15.5556V13.2ZM14.4444 0V2.2H5.55556V4.4H14.4444V6.6L17.7778 3.3L14.4444 0Z"  />
                        </svg>`,
                children: [
                    {
                        parentName: "Payments",
                        path: "payments/business",
                        name: "Business",
                        component: Invoices,
                        title: "Business",
                    },
                    {
                        parentName: "Payments",
                        path: "payments/invoice-history",
                        name: "businessHistory",
                        component: InvoiceHistory,
                        title: "Business History",
                    }
                ],
            },
            {
                title: "Boxes",
                name: "Boxes",
                icon: `<svg width="11" height="18" class="fill-color" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.80001 7.9C3.53001 7.31 2.80001 6.7 2.80001 5.75C2.80001 4.66 3.81001 3.9 5.50001 3.9C7.28001 3.9 7.94001 4.75 8.00001 6H10.21C10.14 4.28 9.09001 2.7 7.00001 2.19V0H4.00001V2.16C2.06001 2.58 0.500007 3.84 0.500007 5.77C0.500007 8.08 2.41001 9.23 5.20001 9.9C7.70001 10.5 8.20001 11.38 8.20001 12.31C8.20001 13 7.71001 14.1 5.50001 14.1C3.44001 14.1 2.63001 13.18 2.52001 12H0.320007C0.440007 14.19 2.08001 15.42 4.00001 15.83V18H7.00001V15.85C8.95001 15.48 10.5 14.35 10.5 12.3C10.5 9.46 8.07001 8.49 5.80001 7.9Z"  />
                        </svg>`,
                children: [
                    {
                        parentName: "Payments",
                        path: "payments/business",
                        name: "Business",
                        component: Invoices,
                        title: "Business",
                    },
                    {
                        parentName: "Payments",
                        path: "payments/invoice-history",
                        name: "businessHistory",
                        component: InvoiceHistory,
                        title: "Business History",
                    }
                ],
            },
            {
                title: "Mozilla",
                name: "Mozilla",
                icon: `<svg width="11" height="18" class="fill-color" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.80001 7.9C3.53001 7.31 2.80001 6.7 2.80001 5.75C2.80001 4.66 3.81001 3.9 5.50001 3.9C7.28001 3.9 7.94001 4.75 8.00001 6H10.21C10.14 4.28 9.09001 2.7 7.00001 2.19V0H4.00001V2.16C2.06001 2.58 0.500007 3.84 0.500007 5.77C0.500007 8.08 2.41001 9.23 5.20001 9.9C7.70001 10.5 8.20001 11.38 8.20001 12.31C8.20001 13 7.71001 14.1 5.50001 14.1C3.44001 14.1 2.63001 13.18 2.52001 12H0.320007C0.440007 14.19 2.08001 15.42 4.00001 15.83V18H7.00001V15.85C8.95001 15.48 10.5 14.35 10.5 12.3C10.5 9.46 8.07001 8.49 5.80001 7.9Z"  />
                        </svg>`,
                children: [
                    {
                        parentName: "Payments",
                        path: "payments/business",
                        name: "Business",
                        component: Invoices,
                        title: "Business",
                    },
                    {
                        parentName: "Payments",
                        path: "payments/invoice-history",
                        name: "businessHistory",
                        component: InvoiceHistory,
                        title: "Business History",
                    }
                ],
            },
            {
                title: "Explorer",
                name: "Explorer",
                icon: `<svg width="11" height="18" class="fill-color" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.80001 7.9C3.53001 7.31 2.80001 6.7 2.80001 5.75C2.80001 4.66 3.81001 3.9 5.50001 3.9C7.28001 3.9 7.94001 4.75 8.00001 6H10.21C10.14 4.28 9.09001 2.7 7.00001 2.19V0H4.00001V2.16C2.06001 2.58 0.500007 3.84 0.500007 5.77C0.500007 8.08 2.41001 9.23 5.20001 9.9C7.70001 10.5 8.20001 11.38 8.20001 12.31C8.20001 13 7.71001 14.1 5.50001 14.1C3.44001 14.1 2.63001 13.18 2.52001 12H0.320007C0.440007 14.19 2.08001 15.42 4.00001 15.83V18H7.00001V15.85C8.95001 15.48 10.5 14.35 10.5 12.3C10.5 9.46 8.07001 8.49 5.80001 7.9Z"  />
                        </svg>`,
                children: [
                    {
                        parentName: "Payments",
                        path: "payments/business",
                        name: "Business",
                        component: Invoices,
                        title: "Business",
                    },
                    {
                        parentName: "Payments",
                        path: "payments/invoice-history",
                        name: "businessHistory",
                        component: InvoiceHistory,
                        title: "Business History",
                    }
                ],
            },
        ],
    },
    {
        groupName: "Opacity",
        children: [
            {
                title: "Opacity ",
                name: "Opacity",
                icon: `<svg width="22" height="21"  class="fill-color" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.8 4.42105H15.4V2.21053C15.4 0.983684 14.421 0 13.2 0H8.8C7.579 0 6.6 0.983684 6.6 2.21053V4.42105H2.2C0.979 4.42105 0.011 5.40474 0.011 6.63158L0 18.7895C0 20.0163 0.979 21 2.2 21H19.8C21.021 21 22 20.0163 22 18.7895V6.63158C22 5.40474 21.021 4.42105 19.8 4.42105ZM13.2 4.42105H8.8V2.21053H13.2V4.42105Z"  />
                    </svg>`,
            },
            {
                title: "Settings",
                name: "Settings",
                icon: `<svg width="20" height="20" class="fill-color" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z"  />
                        </svg>`,
            },
        ],
    },
];

export default SideNavConfig;
