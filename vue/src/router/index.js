import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dataSearch from '@/components/dataSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'dataSerch',
      component: dataSearch
    }
  ]
})
