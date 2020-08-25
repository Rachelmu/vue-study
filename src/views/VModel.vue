<template>
  <div>
    {{value}}
     <my-input :value='value' @input="value=$event"></my-input>
  </div>
 
</template>


<script>
import myInput from '@/components/myInput'
export default {
  data() {
    return {
      value:'gxb'
    }
  },
  components: {
   myInput
  }
}
</script>
