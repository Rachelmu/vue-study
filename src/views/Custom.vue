<template>
  <custom-form size="small">
    <custom-form-item label="姓名">
      <custom-input v-model="formData.name" />
    </custom-form-item>
  </custom-form>
</template>
<script>
import CustomForm from './custom/custom-form'
import CustomFormItem from './custom/custom-form-item'
import CustomInput from './custom/custom-input'
export default {
  components: {
    CustomForm,
    CustomFormItem,
    CustomInput
  },
  data() {
    return {
      formData: {
        name: '',
        age: 0
      }
    }
  }
}
</script>

