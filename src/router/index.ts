import Main from "@/layouts";
import {filterRouterTopMap} from "@/utils/utils";
import UserRouters from "./user-routers";
import MainRouters from "./main-routers";
import NavigationExample from "@/layouts/navigationExample";
import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
    RouteLocationNormalized,
    RouteLocationNormalizedLoaded,
    Router,
    RouteRecordNormalized,
} from "vue-router";

type ScrollPositionCoordinates = {
    behavior?: ScrollOptions["behavior"];
    left?: number;
    top?: number;
};

interface ScrollPositionElement extends ScrollToOptions {
    el: string | Element;
}

const childrenRouters = () => {
    let childRouters: Array<any> = [];
    filterRouterTopMap(MainRouters, childRouters, [
        "path",
        "name",
        "component",
        "redirect",
    ]);
    return childRouters;
};
const mainRoutes: any = [
    {
        path: "/main",
        name: "Main",
        component: Main,
        redirect: {name: "Dashboard"},
        children: childrenRouters(),
    },
];
const navigationExample: any = [
    {
        path: "/navigationExample",
        name: "NavigationExample",
        component: NavigationExample,
    },
];

const routes: Array<RouteRecordRaw> = [...UserRouters, ...mainRoutes, ...navigationExample];

const router: Router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    async scrollBehavior(
        to: RouteLocationNormalized,
        from: RouteLocationNormalizedLoaded,
        savedPosition: ScrollPositionCoordinates | null
    ): Promise<ScrollPositionCoordinates | ScrollPositionElement | false | void> {
        if (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            return {el: to.hash};
        }
        const [component]: RouteRecordNormalized[] = to.matched;

        if (component && component.meta && component.meta.scrollToTop) {
            return {left: 0, top: 0};
        }
    },
});

export default router;
