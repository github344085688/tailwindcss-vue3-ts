import {Options} from "vue-class-component";
import template from "./dashboard.vue";
import BaseVue from "@/utils/base-vue";
import {marked} from "marked";
import hljs from "highlight.js";
import "./dashboard.scss";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import AdjustableWindow from "@/components/adjustable-window";
import sideNavigation from '@/layouts/navigationExample';
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue'
import {ChevronDownIcon} from '@heroicons/vue/20/solid'
import {Switch} from '@headlessui/vue'

@Options({
    mixins: [template],
    name: "Dashboard",
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        ChevronDownIcon,
        Switch
    },
    props: {},
})
export default class Dashboard extends BaseVue {
    public isSideSpread: boolean = true;
    public markedHtml: string = "";
    public enabled: boolean = false;
    public htmlGrildCode: string = '';
    public sideSpread: any = {};
    public routers: any = {};
    public solutions = [
        {
            name: 'Insights',
            description: 'Measure actions your users take',
            href: '##',
            icon: `
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <path
          d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
          stroke="#FB923C"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
          stroke="#FDBA74"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
          stroke="#FDBA74"
          stroke-width="2"
        />
      </svg>
    `,
        },
        {
            name: 'Automations',
            description: 'Create your own targeted content',
            href: '##',
            icon: `
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <path
          d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
          stroke="#FB923C"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
          stroke="#FDBA74"
          stroke-width="2"
        />
      </svg>
    `,
        },
        {
            name: 'Reports',
            description: 'Keep track of your growth',
            href: '##',
            icon: `
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
        <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
        <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
        <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
        <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
        <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
      </svg>
    `,
        },
    ];

    public togoaside(isSpread: boolean): void {
        this.isSideSpread = isSpread;


    }

}
