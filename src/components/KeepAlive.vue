<template>
    
</template>
<script>
export default {
    name: 'keep-alive',
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    created() {
        this.cache = Object.create(null)    // [key:组件]
        this.keys = []                      // 只保存所有需要缓存组建key的数组
    },
    mounted() {
        this.$watch('include', val => {
            pruneCache(this, name => matches(val, name))
        })
        this.$watch('exclude', val => {
            pruneCache(this, name => !matches(val, name))
        })
    },
    destroyed() {},
    render() {}
}
</script>