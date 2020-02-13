require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.component('nav-menu', require('./components/navMenu.vue').default);
Vue.use(VueRouter);

var fontsize = 16;
var headerFontsize = 20;

const app = new Vue({
    el: '#app',

    router: new VueRouter(routes),

    data: {
        menu: false,
    },

    mounted: function(){
        this.randomColors();
    },

    methods: {
        randomColors: function(){
            var arrayOfColor = ["#1864de", "#c712db", "#db095d", "#15bce6", "#14d914", "#f2ef1b", "#e39714","#ff00a6","#00f000","#00b4f0", "#a88548", "#ffc766"];
            var projects = document.querySelectorAll(".aProject");

            for(var x = 0;x < projects.length;x++){
                var randomColor = arrayOfColor[Math.floor(Math.random()*arrayOfColor.length)];
                projects[x].style.borderColor = randomColor;
            }

        },
        fontIncrement: function () {

            let paragrafs = document.querySelectorAll('p');
            let headers = document.querySelectorAll('h2');

            if(fontsize <= 19){
                fontsize += 1;
            }

            if(headerFontsize <= 23){
                headerFontsize += 1;
            }

            for (var x = 0;x < paragrafs.length;x++){
                paragrafs[x].style.fontSize = fontsize + "px";
            }

            for (var x = 0;x < headers.length;x++){
                headers[x].style.fontSize = headerFontsize + "px";
            }
        },

        fontDecrement: function () {
            let headers = document.querySelectorAll('h2');

            let paragrafs = document.querySelectorAll('p');
            if(fontsize > 13){
                fontsize -= 1;
            }
            if(headerFontsize <= 17){
                headerFontsize -= 1;
            }

            for (var x = 0;x < paragrafs.length;x++){
                paragrafs[x].style.fontSize = fontsize + "px";
            }
            for (var x = 0;x < headers.length;x++){
                headers[x].style.fontSize = headerFontsize + "px";
            }
        }
    }
});
