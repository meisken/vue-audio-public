import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import './components/firebase/firebaseinit'
Vue.config.productionTip = false
/*
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
*/
export const bus = new Vue();



let app;
firebase.auth().onAuthStateChanged(() => {

  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
})