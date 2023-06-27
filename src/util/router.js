import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "index",
        component: () => import("../containers/core/homepage.vue"),
    },
    {
        path: "/slides",
        name: "slides",
        component: () => import("../containers/slides/Cover.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;