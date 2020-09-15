// 父组件
<template>
  <div class="toList">
    <input v-model="info" type="text" /> <button @click="addItem">添加</button>
    <ul>
      <TodoItem v-for="(item, index) in listData" :key="index">
        <!-- 这是个具名插槽 -->
        <template v-slot:item="itemProps"> 
        <!-- 其中itemProps的值就是子组件传递过来的对象 -->
          <span
            :style="{
              fontSize: '20px',
              color: itemProps.checked ? 'yellow' : 'blue'
            }"
            >{{ item }}</span
          >
          <p>{{itemProps}}</p>
        </template>
      </TodoItem>
    </ul>
  </div>
</template>
<script>
import TodoItem from "../components/TodoItem";
export default {
  components: {
    TodoItem
  },
  data() {
    return {
      info: "",
      listData: []
    };
  },
  methods: {
    addItem() {
      this.listData.push(this.info);
      this.info = "";
    }
  },
    watch: {
        listData(){

        }
    }
};
</script>
