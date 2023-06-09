import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PwdForm from '../views/PwdForm.vue'
import NavBar from '../components/NavBar.vue'
import DashBoard from '../views/DashBoard.vue'
/* import LoGin from '../views/LoGin.vue' */
import PwdList from '../views/PwdList.vue'

Vue.use(VueRouter)

const routes = [

/*   {
    path: '/',
    name: 'LoGin',
    component: LoGin
  }, */

   
  {
    path: '/PwdList',
    name: 'PwdList',
    component: PwdList
  },
  
  
  {
    path: '/DashBoard',
    name: 'DashBoard',
    component: DashBoard
  },
  
  {
    path: '/PwdForm',
    name: 'PwdForm',
    component: PwdForm
  },

  
  {
    path: '/',
    name: 'NavBar',
    component: NavBar
  },


  {
    path: '/home',
    name: 'home',
    component: HomeView
  },



  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
