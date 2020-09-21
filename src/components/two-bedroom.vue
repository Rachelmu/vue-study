<template>
  <div class="two-bedroom">
    <!--这是主卧-->
    <div class="master-bedroom">
      <!---主卧使用默认插槽-->
      <slot></slot>
    </div>
    <!--这是次卧-->
    <div class="secondary-bedroom">
      <!--次卧使用具名插槽-->
      <slot name="secondard"></slot>
    </div>
    <div class="toilet">
      <!--通过v-bind 可以向外传递参数, 告诉外面卫生间可以放洗衣机-->
      <slot name="toilet" v-bind="{ washer: true }"></slot>
    </div>
  </div>
</template>
