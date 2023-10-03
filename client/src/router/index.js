import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/Signup.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/post",
      name: "post",
      component: () => import("../views/NewPost.vue"),
    },
    // {
    //   path: "/products/:id",
    //   name: "detail",
    //   component: () => import("../views/Detail.vue"),
    // },
  ],
});

router.beforeEach((to, from, next) => {
  if (
    !localStorage.access_token &&
    to.path !== "/login" &&
    to.path !== "/signup"
  ) {
    next("/login");
  } else if (
    localStorage.access_token &&
    (to.path === "/login" || to.path === "/signup")
  ) {
    next("/");
  } else {
    next();
  }
});

export default router;
