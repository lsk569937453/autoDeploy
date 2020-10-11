import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dataSearch from '@/components/dataSearch'
import firstPage from '@/components/firstPage'
import projectMain from '@/components/projectMain'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/b',
      name: 'dataSerch',
      component: dataSearch
    },
    // {
    //   path: '/',
    //   name: 'firstPage',
    //   component: firstPage
    // },
    {
      path: "/",
      redirect: "/firstPage",
    },

    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/firstPage',
          name: 'firstPage',
          component: firstPage
        },

        {
          path: '/projectMain',
          name: 'projectMain',
          component: projectMain
        },
      ],
    }
  ]
})
