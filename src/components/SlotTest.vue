<template>
    <div>
        <slot :test="test">插槽默认内容</slot>
        <header>
            <slot name="header">test-header</slot>
        </header>
        <main>
            <!-- <slot name="body">test-body</slot> -->
            body
        </main>
        <bot>bot</bot>
        <!-- <div>{{test}}</div> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            test: 'son'
        }
    }
}
</script>