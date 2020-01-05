require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.component('nav-menu', require('./components/navMenu.vue').default);
Vue.use(VueRouter);

const app = new Vue({
    el: '#app',

    router: new VueRouter(routes),

    data: {
        menu: false,
    }
});
