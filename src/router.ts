import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
    { name: "Home", path: "/", component: () => import("@/pages/home/HomePage.vue"), },
    { name: "City", path: "/:id", component: () => import("@/pages/home/HomePage.vue"), }
];
const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return { top: 0 };
    },
    routes,
});
export default router;