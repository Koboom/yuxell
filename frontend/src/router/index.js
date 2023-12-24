import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import EinstellungView from "../views/Einstellungs.vue"
import KundenView from "../views/KundenView.vue"
import DriversView from "../views/DriversView.vue"
import KundeView from "../views/KundeView.vue"
import DriverView from "../views/DriverView.vue"
import RegisterView from "../views/Registerview.vue"
import LoginView from "../views/LoginView.vue"
import DenemeView from "../views/DenemeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path:"/deneme",
      name: "Deneme",
      component: DenemeView
    },
    {
      path:"/login",
      name:"Login",
      component: LoginView
    },
    {
      path:"/register",
      name: "Register",
      component: RegisterView
    },
    {
      path:"/kunden",
      name: "KundenView",
      component: KundenView
    },
    {
      path:"/kunden/:kundeId",
      name: "KundeView",
      component: KundeView
    },
    {
      path:"/drivers",
      name: "DriversView",
      component: DriversView
    },
    {
      path:"/drivers/:driverId",
      name: "DriverView",
      component: DriverView
    },
    {
      path: "/about",
      name: "AboutView",
      component: AboutView
    },
    {
      path:"/einstellung",
      name:"EinstellungView",
      component: EinstellungView
    }
    // {
    //   path: "/kunden/:kundeId",
    //   name: "KundeView",
    //   component: KundeView
    // },
    // {
    //   path: "/drivers",
    //   name: "DriversView",
    //   component: DriversView
    // },
    // {
    //   path: "/drivers/:driverId",
    //   name: "DriverView",
    //   component: DriverView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
