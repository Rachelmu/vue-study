<template>
  <div class="custom-form-item">
    <label class="custom-form-item__label">{{ label }}</label>
    <div class="custom-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

