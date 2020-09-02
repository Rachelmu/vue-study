<template>
    <div>Mixin</div>
</template>
<script>
const mixin = {
    data(){
        return{
            foo: 'foo',
            name: 'mm'
        }
    },
    methods:{
        bar(){
            console.log('mixins bar')
        }
    }
}
export default {
    mixins: [mixin],
    data(){
        return{
            foo: 'foo组件'
        }
    },
    created(){
        console.log(this.$data)
        console.log(this.foo)
        this.bar()
    },
    methods: {
        bar(){
            console.log('bar')
        }
    }
}
</script>