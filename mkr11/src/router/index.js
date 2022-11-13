import { createWebHashHistory, createRouter } from "vue-router";

import HomePage from "@/pages/HomePage/index.vue";
import FilterPage from "@/pages/FilterPage/index.vue";
import SearchPage from "@/pages/SearchPage/index.vue";
import AboutPage from "@/pages/AboutPage/index.vue"
const routes = [{
        path: "/",
        component: HomePage,
        name: "HomePage"
    },
    {
        path: "/search",
        component: SearchPage,
        name: "SearchPage"
    },
    {
        path: "/filter",
        component: FilterPage,
        name: "FilterPage"
    },
    {
        path: "/about",
        component: AboutPage,
        name: "AboutPage"
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;