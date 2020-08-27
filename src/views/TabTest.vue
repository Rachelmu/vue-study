<template>
    <div>
        <ul @click="change">
            <!-- <li>test01</li>
            <li>test02</li>
            <li>test03</li> -->
            <li tag="test01">我是测试01</li>
            <li tag="test02">我是测试02</li>
            <li tag="test03">我是测试03</li>
        </ul>

        <div class="zhan"></div>
        <keep-alive>
        <component :is="componentId"></component>
        </keep-alive>
    </div>
</template>
<script>
import Test01 from '../components/TabTest01'
import Test02 from '../components/TabTest02'
// import Test03 from '../components/TabTest03'
// 异步组件
import { defineAsyncComponent } from 'vue'
export default {
    data () {
        return {
            componentId: 'Test01'
        }
    },
    components: {
        // Test01:()=>import('../components/TabTest01.vue'),//返回的是promise
        Test01,
        Test02,
        // Test03,
        // Test02:()=>import('../components/TabTest02.vue'),    // vue2.0
        // Test03:()=>import('../components/TabTest03.vue'),
        Test03: defineAsyncComponent(() => import('../components/TabTest03.vue'))   // vue3.0
    },
    methods: {
        change(e) {
            // this.componentId = e.target.innerText;
            // 优化
            this.componentId = e.target.getAttribute('tag')
        }
    }
}
</script>
<style lang="css">
.zhan {
  height: 50px;
}
ul{
  margin: 0;
  padding: 0;
}
li {
  float: left;
  margin-left: 5ox;
  width: 50px;
  list-style: none;
}
</style>