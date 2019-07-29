import Vue from 'vue';
import App from './App.vue';
import Home from "./components/Home";
import VueRouter from "vue-router";
import BootstrapVue from 'bootstrap-vue';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {path:"/", component:Home, meta:{title:"Github Kullanıcı Bulma"}}
  ],
  mode:"history"
});


router.afterEach((to, from) => {
  document.title = to.meta.title;
});


new Vue({
  el: '#app',
  render: h => h(App),
  router:router
});
