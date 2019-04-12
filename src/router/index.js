import Vue from 'vue'
import Router from 'vue-router'
import store from './Store' // your vuex store 



const ifAuthenticatedLogin = (to, from, next) => {
  console.log(store.getters.isAuthenticated());
  if (store.getters.isAuthenticated()) {
    next("/pco/dashboard")
    return
  }

  next()
}

const ifAuthenticated = (to, from, next) => {
  console.log(store.getters.isAuthenticated());
  if (store.getters.isAuthenticated()) {
    next()
    return
  }

  next("/login")
}

// Containers
const Default = () => import('@/containers/Default')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Forms = () => import('@/views/base/Forms')
const Planejamento = () => import('@/views/pco/Planejamento')
const CadastroPlanejamento = () => import('@/views/pco/CadastroPlanejamento')

const Login = () => import('@/views/pages/Login')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [

    {
      path: '/',
      redirect: '/login',
      name: 'Login',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login,
          beforeEnter: ifAuthenticatedLogin
        }
      ]
    },
    
    {
      path: '/pco',
      redirect: '/dashboard',
      name: 'PCO',
      component: Default,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          beforeEnter: ifAuthenticated
        },
        {
          path: 'planejamento',
          name: 'Planejamento',
          component: Planejamento,
          beforeEnter: ifAuthenticated
        },

        {
          path: 'cadastroplanejamento',
          name: 'CadastroPlanejamento',
          component: CadastroPlanejamento,
          beforeEnter: ifAuthenticated
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        }
      ]
    }
    
  ]
})
