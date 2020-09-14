// 子组件
<template>
  <div>
    <li class="item">
      <input v-model="checked" type="checkbox" />
      <slot name="item" :checked="checked"></slot> // 将checked的值传递给父组件
    </li>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false
    };
  }
};
</script>
