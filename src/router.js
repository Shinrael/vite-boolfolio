import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import About from './pages/About.vue'
import Error404 from './pages/Error404.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: Error404
    },
  ]
})

export {router}
