<template>
  <div class="hell">
  <h1>欢迎来到{{msg}}</h1>
  <h1 id="num" @click="clickHandler()">点击我{{n.toString().padEnd(3, '_')}}次</h1>
      <!-- 1. 环形容器 -->
    <div class="circle-container">
      <!-- 2. 遍历 n1 到 n8，动态绑定样式 -->
      <div 
        v-for="i in 8" 
        :key="i" 
        class="circle-item"
        :style="getCircleStyle(i - 1, 8)">
        {{ $data['n' + i] }}
      </div>
    </div>
<ul>
  <li v-for="(item,index) in test" :key="Math.random()">{{item}}</li>
</ul>
  <button @click="show = !show">change</button>
<h1 v-if="show">Hello v-if.</h1>
  <h1 v-else>6666666666</h1>
  <h1 v-show="show">Hello v-show.</h1>
  </div>
</template>
<script>
export default {
        data(){
          return {
            msg: 'MyComponent',
            n:1,           
            n1:0,
            n2:0,
            n3:0,
            n4:0,
            n5:0,
            n6:0,
            n7:0,
            n8:0,
            n9:0,
            test:['-','--','---','----','-----','------','-------','--------','---------'],
            show:true,
          }
        },
mounted() {
    // 3. 优化：将定时器赋值给变量，方便在组件销毁时清除，防止内存泄漏
    this.timer = setInterval(() => {
      this.asyncAdd();
    }, 1000);
  },
  // 4. 新增：生命周期钩子，组件销毁时清除定时器
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
     getCircleStyle(index, total) {
      // 计算每个元素的角度 (360 / 总数)
      const angle = 270 + (360 / total) * index;
      // 假设圆环半径为 120px
      const radius = 120; 
      return {
        transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
      };
    },
    clickHandler() {
      this.n += 1;
    },
    // 5. 核心修改：将原来的 add() 替换为异步逐个增加的 asyncAdd()
    async asyncAdd() {
      // 异步增加 n1
      await this.delayedAdd(1);
      // 循环异步增加 n2 到 n9
      for (let i = 2; i <= 9; i++) {
        await this.delayedAdd(i);
      }
      // 全部完成后触发事件
      this.$emit('reveal', this.n9);
    },

    // 6. 封装单个变量的异步增加逻辑
    delayedAdd(index) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (index === 1) {
            this.n1 += 1;
          } else {
            // 动态获取前一个变量进行累加，例如 this['n2'] += this['n1']
            this['n' + index] += this['n' + (index - 1)];
          }
          resolve();
        }, 125); // 125ms 模拟异步耗时
      });
    }
  }
};
</script>

<style scoped>
.circle-container {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 50px auto; /* 居中显示 */
}

.circle-item {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  margin: -20px 0 0 -20px; /* 让元素的中心点对齐圆心 */
  border-radius: 50%; /* 变成正圆形 */
  color: #1100ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>