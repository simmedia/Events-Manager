import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import * as firebase from 'firebase'
import store from './store'
import vuetify from './plugins/vuetify';
import AlertCmp from './components/shared/Alert.vue'
import { VCounter } from 'vuetify/lib'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'


Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)

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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')