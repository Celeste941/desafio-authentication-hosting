import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      isAuthRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/* Protección de rutas => GUARDIAN */
router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.isAuthRequired)) {
    if (!store.state.loggedUser) {
      next("/"); 
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
