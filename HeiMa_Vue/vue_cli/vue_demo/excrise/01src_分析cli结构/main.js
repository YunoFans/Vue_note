
import Vue from 'vue/dist/vue'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
    el:'#app',
    // render:h=>h(App)
    components:{
        App,
    },
    template:`
        <App></App>
    `
})