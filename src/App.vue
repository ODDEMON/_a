<template>
  <div id="app">
    <img src="./assets/logo.png">
    <MyComponent @reveal="n = $event" :name="n"/>
    <HelloWorld :num="n"/>
    <button @click="show = !show">reveal</button>
    <h1 v-show="show" id="rrr">{{n}}</h1>
    <router-view/>
  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
data() { 
    return {
      n:0,
      show:false,
    }
  },
  components: { MyComponent, HelloWorld },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#rrr {
  color: red;
  font-size: 50px;
}
</style>
