<template>
  <div
    class="custom-input"
    :class="[
      `custom-input--${getSize}`,
      getDisabled && `custom-input--disabled`
    ]"
  >
    <input class="custom-input__input" :value="value" @input="$_handleChange" />
  </div>
</template>
<script>
/* eslint-disable vue/require-default-prop */
export default {
  props: {
    // 这里用了自定义v-model
    value: {
      type: String,
      default: ''
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  // 通过inject 将form组件注入的实例添加进来
  // 在form中，我们通过provide返回了一个对象，在input中，我们可以通过inject获取form中返回对象中的项，如上代码inject:['customForm']所示，然后就可以在组件内通过this.customForm调用form实例上面的属性与方法了
  inject: ['customForm'],
  computed: {
    // 通过计算组件获取组件的size, 如果当前组件传入，则使用当前组件的，否则是否form组件的
    getSize() {
      return this.size || this.customForm.size
    },
    // 组件是否禁用
    getDisabled() {
      const { disabled } = this
      if (disabled !== undefined) {
        return disabled
      }
      return this.customForm.disabled
    }
  },
  methods: {
    // 自定义v-model
    $_handleChange(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

