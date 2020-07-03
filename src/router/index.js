import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Rocket from '../views/Rocket.vue';
import Team from '../views/Team.vue';
import Weather from '../views/Weather.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {},
  },
  {
    path: '/rocket',
    name: 'rocket',
    component: Rocket,
    meta: {},
  },
  {
    path: '/team',
    name: 'team',
    component: Team,
    meta: {},
  },
  {
    path: '/weather',
    name: 'weather',
    component: Weather,
    meta: {},
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
    ? `${to.meta.title} | SpaceGo`
    : 'SpaceGo';

  window.scrollTo(0, 0)

  next();
});

export default router
