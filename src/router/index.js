import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Meetups from '@/components/Meetup/Meetups.vue'
import CreateMeetup from '@/components/Meetup/CreateMeetup.vue'
import Profile from '@/components/User/Profile.vue'
import Signin from '@/components/User/Signin.vue'
import Signup from '@/components/User/Signup.vue'
import Meetup from '@/components/Meetup/Meetup.vue'
import AuthGuard from './auth-guard'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/meetups',
  name: 'meetups',
  component: Meetups
},
{
  path: '/meetups/:id',
  name: 'Meetup',
  props: true,
  component: Meetup
}, 
{
  path: '/meetup/new',
  name: 'createMeetup',
  component: CreateMeetup,
  beforeEnter: AuthGuard
}, {
  path: '/profile',
  name: 'profile',
  component: Profile,
  beforeEnter: AuthGuard
}, {
  path: '/signup',
  name: 'signup',
  component: Signup
},{
  path: '/signin',
  name: 'signin',
  component: Signin
},]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router