<template>
    <div>
        <span>用户名：</span>
        <span>
            <input type="text" v-model="uname">
        </span>
        <span>{{tip}}</span>
    </div>
</template>
<script>
/*
    侦听器
    1、采用侦听器监听用户名怼变化
    2、调用后台接口进行验证
    3、根据验证的结果调整提示信息
*/
export default {
    data () {
        return {
            uname: '',
            tip: ''
        }
    },
    methods: {
        checkName: fucntion(uname){
            // 调用接口，但是可以使用定时任务的方式模拟接口调用
        }
    }
    watch:{
        uname: function(){
            // 调用后台接口验证用户名的合法性
        }
    }
}
</script>
<style lang="less" scoped>

</style>