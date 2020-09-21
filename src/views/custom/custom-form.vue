<template>
  <form class="custom-form">
    <slot></slot>
  </form>
</template>
<script>
export default {
  props: {
    // 控制表单元素的大小
    size: {
      type: String,
      default: 'default',
      // size 只能是下面的四个值
      validator(value) {
        return ['default', 'large', 'small', 'mini'].includes(value)
      }
    },
    // 控制表单元素的禁用状态
    disabled: {
      type: Boolean,
      default: false
    }
  },
  // 通过provide将当前表单实例传递到所有后代组件中
  provide() {
    return {
      customForm: this
    }
  }
}
</script>

