import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import home from './components/home.vue';
import prices from './components/prices.vue';
import school from './components/school.vue';
import contacts from './components/contacts';
import examples from './components/examples.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: home},
  {path: '/prices', component: prices},
  {path: '/school', component: school},
  {path: '/examples', component: examples},
  {path: '/contacts', component: contacts}
]

const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
