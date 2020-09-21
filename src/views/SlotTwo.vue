<template>
  <two-bedroom>
    <!--主卧使用默认插槽-->
    <div>
      <span>放一个大床，要结婚了，嘿嘿嘿</span>
      <span>放一个衣柜，老婆的衣服太多了</span>
      <span>算了，还是放一个电脑桌吧，还要写bug</span>
    </div>
    <!--次卧，通过v-slot:secondard 可以指定使用哪一个具名插槽， v-slot:secondard 也可以简写为 #secondard-->
    <template v-slot:secondard>
      <div>
        <span>父母要住，放一个硬一点的床，软床对腰不好</span>
        <span>放一个衣柜</span>
      </div>
    </template>
    <!--卫生间插槽，通过v-slot="scope"可以获取组件内部通过v-bind传的值-->
    <template v-slot:toilet="scope">
      <!--判断是否可以放洗衣机-->
      <span v-if="scope.washer">这里放洗衣机</span>
    </template>
  </two-bedroom>
</template>
<script>
import TwoBedroom from '../components/two-bedroom'
export default {
  components: {
    TwoBedroom
  }
}
</script>

