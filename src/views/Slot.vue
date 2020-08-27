<template>
    <div>
        <test>
            <!-- {{test}} -->
            <template v-slot:header>
                头部
            </template>
            <template v-slot:body>
            </template>
            <template v-slot="test2Props">{{test2Props.test}}</template>
            <template v-slot:bot></template>
        </test>

    </div>
</template>

<script>
import Test from '@/components/SlotTest'
export default {
    components: {
        Test
    },
    data () {
        return {
            test: 'fater'
        }
    }
}
</script>