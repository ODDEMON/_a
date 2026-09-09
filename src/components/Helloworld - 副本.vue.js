<template>
  <div class="hello">
  <h1>welcome to {{msg}}</h1>
  </div>
</template>
<script>
export default {
        data(){
          return {
            msg: '?',
            show:true,
          }
        },
        props: {
    num: {
      type: Number,
      default: 0
    },
  },
  methods: {
    changeMsg() {if(this.num<10000){
      this.msg = 'HelloWorld';
    }else{
      this.msg = 'HellWorld';
      this.msg.fontcolor('red');
    }
  }
  },
  mounted() {
setInterval(
        this.changeMsg.bind(this), 1000);
  }
}</script>