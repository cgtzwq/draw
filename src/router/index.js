import Vue from 'vue'
import Router from 'vue-router'
import vCanvas from '@/components/vCanvas'
import vSign from '@/components/vSign'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Canvas',
      component: vCanvas
    },
    {
      path: '/sign',
      name: 'Sign',
      component: vSign
    }
  ]
})
