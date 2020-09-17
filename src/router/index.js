/*
 * @Author: xz
 * @Date: 2020-09-15 09:30:33
 * @LastEditors: xz
 * @LastEditTime: 2020-09-15 09:56:18
 * @FilePath: \my_homepage\my_homepage\src\router\index.js
 * @Description: 路由配置
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/message",
    name: "Message",
    // lazyload
    component: () => import("../views/Message.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
