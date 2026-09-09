import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import App from '../App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: './app',
      name: 'App',
      component: App
    },
    {
      path: './helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
