import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import * as firebase from 'firebase'
import store from './store'
import vuetify from './plugins/vuetify';
import AlertCmp from './components/shared/Alert.vue'
import { VCounter } from 'vuetify/lib'


Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBaMYU2z_NdwinpBZSGP_yXFQ0gv1ZWwsc",
      authDomain: "event-manager-62386.firebaseapp.com",
      databaseURL: "https://event-manager-62386.firebaseio.com",
      projectId: "event-manager-62386",
      storageBucket: "event-manager-62386.appspot.com",
      messagingSenderId: "133901632393",
      appId: "1:133901632393:web:0bbdd2862042083aba5758"
    })

    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')