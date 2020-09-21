<template>
  <div class="second-hand-house">
    <div class="master-bedroom">
      <!--插槽可以指定默认值，如果外部调用组件时没有修改插槽内容，则使用默认插槽-->
      <slot>
        <span>这里有一张水床，玩的够嗨</span>
        <span>还有一个衣柜，有点旧了</span>
      </slot>
    </div>
    <!--这是次卧-->
    <div class="secondary-bedroom">
      <!--次卧使用具名插槽-->
      <slot name="secondard">
        <span>这里有一张婴儿床</span>
      </slot>
    </div>
  </div>
</template>

