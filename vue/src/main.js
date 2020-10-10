// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueThermometer from 'vuejs-thermometer'
import 'element-ui/lib/theme-chalk/index.css';
import ECharts from 'vue-echarts' // refers to components/ECharts.vue in webpack
Vue.component('v-chart', ECharts)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueThermometer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
