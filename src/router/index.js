import Vue from "vue";
import VueRouter from "vue-router";
import { Icon } from "element-ui";
//import Home from "../views/Home.vue";
//引入布局组件(默认读取目录的index.vue)
// import Layout from '@/views/Layout/' -------->也可以这样写（仅限index）
import Layout from '@/views/Layout/index.vue'
Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "login",
        hidden: true,
        meta: {
            name: "主页",
            title: "OfferClear-登录"
        }
        //component: Home
    },
    {
        path: "/login",
        name: "Login",
        //component: () => import("../views/Login/index.vue")
        hidden: true,
        meta: {
            name: "登录",
            title: "OfferClear-欢迎"
        },
        component: () =>
            import ("../views/Login/index.vue")

    },
    //-----------以下为商城的router-------------//
    {
        path: "/mainpage",
        name: "mainpage",
        //component: () => import("../views/Login/index.vue")
        hidden: true,
        meta: {
            name: "首页",
            title: "WA-首页"
        },
        component: () =>
            import ("../views/WAShop/index.vue")

    },
    {
        path: "/loginShop",
        name: "LoginShop",
        //component: () => import("../views/Login/index.vue")
        hidden: true,
        meta: {
            name: "WA登录",
            title: "WA登录"
        },
        component: () =>
            import ("../views/Loginshop/index.vue")

    },
    {
        path: "/aboutWA",
        name: "AboutWA",
        //component: () => import("../views/Login/index.vue")
        hidden: true,
        meta: {
            name: "关于我们",
            title: "WA-关于我们"
        },
        component: () =>
            import ("../views/WAShop/aboutWA.vue")

    },
    {
        path: "/WAproduct",
        name: "WAproduct",
        //component: () => import("../views/Login/index.vue")
        hidden: true,
        meta: {
            name: "品牌概念",
            title: "WA-品牌概念"
        },
        component: () =>
            import ("../views/WAShop/WA.vue")

    },
    {
        path: "/womenclothList",
        name: "womenclothList",
        //component: () => import("../views/Login/index.vue")
        hidden: true,
        meta: {
            name: "womenclothList",
            title: "WA女装列表"
        },
        component: () =>
            import ("../views/WAShop/womenclothList.vue")

    },
    {
        path: "/womenClouthFirst",
        name: "womenClouthFirst",
        //component: () => import("../views/Login/index.vue")
        hidden: true,
        meta: {
            name: "womenClouthFirst",
            title: "WA女装导购"
        },
        component: () =>
            import ("../views/WAShop/womenClouthFirst.vue")

    },
    {
        path: "/womenClouthSecond",
        name: "womenClouthSecond",
        //component: () => import("../views/Login/index.vue")
        hidden: true,
        meta: {
            name: "womenClouthSecond",
            title: "WA女装分类"
        },
        component: () =>
            import ("../views/WAShop/womenClouthSecond.vue")

    },
    {
        path: "/womenclothXQ",
        name: "womenclothXQ",
        //component: () => import("../views/Login/index.vue")
        hidden: true,
        meta: {
            name: "womenclothXQ",
            title: "WA女装详情"
        },
        component: () =>
            import ("../views/WAShop/womenclothXQ.vue")

    },
    {
        path: "/menClouthFirst",
        name: "menClouthFirst",
        hidden: true,
        meta: {
            name: "menClouthFirst",
            title: "WA男装导购"
        },
        component: () =>
            import ("../views/WAShop/menClouthFirst.vue")

    },
    {
        path: "/menClouthFirst",
        name: "menClouthFirst",
        hidden: true,
        meta: {
            name: "menClouthFirst",
            title: "WA男装导购"
        },
        component: () =>
            import ("../views/WAShop/menClouthFirst.vue")

    },
    {
        path: "/menClouthSecond",
        name: "menClouthSecond",
        hidden: true,
        meta: {
            name: "menClouthSecond",
            title: "WA男装分类"
        },
        component: () =>
            import ("../views/WAShop/menClouthSecond.vue")

    },
    {
        path: "/menclothList",
        name: "menclothList",
        hidden: true,
        meta: {
            name: "menclothList",
            title: "WA男装列表"
        },
        component: () =>
            import ("../views/WAShop/menclothList.vue")

    },
    {
        path: "/menclothXQ",
        name: "menclothXQ",
        hidden: true,
        meta: {
            name: "menclothXQ",
            title: "WA男装详情"
        },
        component: () =>
            import ("../views/WAShop/menclothXQ.vue")

    },
    {
        path: "/Profile",
        name: "Profile",
        hidden: true,
        meta: {
            name: "Profile",
            title: "个人中心"
        },
        component: () =>
            import ("../views/WAShop/Profile.vue")

    },
    {
        path: "/WXList",
        name: "WXList",
        hidden: true,
        meta: {
            name: "WXList",
            title: "微信关注"
        },
        component: () =>
            import ("../views/WAShop/WXList.vue")

    },
    //商城router结束-----------------------------------------
    {
        path: "/console",
        name: "Console",
        redirect: "infoIndex",
        meta: {
            name: "控制台",
            icon: 'console'
        },
        component: Layout,
        children: [{
            path: "/index",
            name: "Index",
            meta: {
                name: "首页"
            },
            component: () =>
                import ("../views/Console/index.vue")
        }]
    },
    /**
     * 信息管理部分----------------------------->
     */
    {
        path: "/info",
        name: "Info",
        meta: {
            name: "信息",
            icon: "console"
        },
        component: Layout,
        children: [

            {
                path: "/infoIndex",
                name: "infoIndex",
                meta: {
                    name: "信息列表",
                    title: "OfferClear-信息列表"
                },
                component: () =>
                    import ("../views/Info/index.vue")
            },
            {
                path: "/infoCategory",
                name: "infoCategory",
                meta: {
                    name: "信息管理"
                },
                component: () =>
                    import ("../views/Info/category.vue")
            },
            {
                path: "/infoDetailed",
                name: "infoDetailed",
                hidden: true,
                meta: {
                    name: "信息详情"
                },
                component: () =>
                    import ("../views/Info/detailed.vue")
            },
        ]
    },
    /**
     * 用户列表部分
     */
    {
        path: "/User",
        name: "User",
        meta: {
            name: "用户管理",
            icon: "message"
        },
        component: Layout,
        children: [

            {
                path: "/userIndex",
                name: "UserIndex",
                meta: {
                    name: "用户列表"
                },
                component: () =>
                    import ("../views/Info/usercategory.vue")
            },
        ]
    },
    // {
    //     path: "/User",
    //     name: "User",
    //     meta: {
    //         name: "用户管理",
    //         icon: "message"
    //     },
    //     component: Layout,
    //     children: [

    //         {
    //             path: "/userIndex",
    //             name: "UserIndex",
    //             meta: {
    //                 name: "用户列表"
    //             },
    //             component: () =>
    //                 import ("../views/User/index.vue")
    //         },
    //     ]
    // },
    /**
     * 关于我们
     */
    {
        path: "/aboutus",
        name: "aboutus",
        meta: {
            name: "关于我们",
            icon: "message"
        },
        component: Layout,
        children: [

            {
                path: "/aboutusin",
                name: "aboutusin",
                meta: {
                    name: "About us"
                },
                component: () =>
                    import ("../views/Info/aboutus.vue")
            },
        ]
    },
    // {
    //     path: "/aboutus",
    //     name: "Aboutus",
    //     //component: () => import("../views/Login/index.vue")
    //     // hidden: true,
    //     meta: {
    //         name: "关于我们",
    //         title: "关于我们",
    //         icon: "message"
    //     },
    //     component: Layout,
    //     children: [{
    //         component: () =>
    //             import ("../views/Info/aboutus.vue")
    //     }]

    // }
];

const router = new VueRouter({
    routes
});


export default router;
// export default shoprouter;