import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store'
import FastClick from 'fastclick'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)
const router=new VueRouter({
	routes,
	mode:'hash',
	strict:false
})

new Vue({
	router,
	store,
}).$mount('#app')
