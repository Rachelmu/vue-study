<template>
    <div class="toList">
        <input type="text" v-model="info" />
        <button @click="addItem">添加</button>
        <ul>
            <TodoTtem v-if="(item, index) in listData" :key="index">
              <template v-slot:item="itemProps"> // 这是个具名插槽
                // 其中itemProps的值就是子组件传递过来的对象
                <span
                    :style="{
                    fontSize: '20px',
                    color: itemProps.checked ? 'yellow' : 'blue'
                    }"
                    >{{ item }}</span
                >
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
  }
};
</script>
<style lang="less" scoped>

</style>