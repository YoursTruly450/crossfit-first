import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(`@/views/MainView.vue`),
  },
  {
    path: '/master',
    name: 'master',
    component: () => import(`@/views/AdminView.vue`),
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: '/crossfit-first',
  base: process.env.BASE_URL,
  routes,
});

export default router
