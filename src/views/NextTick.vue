<template>
  <div class="nextTick">
    <ul ref="ul">
      <li v-for="(item, index) in arr" :key="index">{{item}}</li>
    </ul>
    <button @click="add">add</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4],
    };
  },
  methods: {
    add() {
        // this.arr.push(Math.random());
        // this.arr.push(Math.random());
        // this.arr.push(Math.random());
        // console.log(this.arr);
        // console.log(this.$refs.ul.childNodes.length);
        // this.$nextTick(() => {
        //     console.log(this.$refs.ul.childNodes.length);
        // })
        
        // // 将处理函数放进微任务队列
        // new Promise(resole => {
        //     resole();
        // }).then(() => {
        //     console.log(this.$refs.ul.childNodes.length)
        // })

        // // 将处理函数放进宏任务队列
        // setTimeout(() => {
        //     console.log(this.$refs.ul.childNodes.length)
        // },0)

        // 故这块还有一个重点，就是这个处理函数派发问题。因为微任务的优先级比较高容易出问题，故下面就单举一个使用微任务派发失败的栗子
        this.arr.push(Math.random());
        this.arr.push(Math.random());

        setTimeout(() => {
            this.arr.push(Math.random());
        }, 0);
        new Promise((resole) => {
            resole();
        }).then(() => {
            console.log(this.$refs.ul.childNodes.length);
        });
        this.arr.push(Math.random());
    },
  },
};
</script>
