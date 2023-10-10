/**
 * Created by f on 2022/9/28.
 */


declare interface UserChildrenRouter {
    path: string,
    name: string,
    component?: any
}

declare interface UserRouter {
    path: string;
    name: string;
    component?: any;
    redirect?: any;
    children?: Array<UserChildrenRouter>;
    meta?: any;
}

const userRouters: Array<UserRouter> = [
    {
        path: "/",
        name: "SignIn",
        component: '',
        redirect: {name: 'Dashboard'},
        children: []
    },
];

export default userRouters;
