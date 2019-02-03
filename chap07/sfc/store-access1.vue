<template>
    <div>
        <p>{{count}}</p>
        <button v-on:click="increment(1)">+1</button>
    </div>
</template>

<script>
export default {
    computed: {
        count(){
            return this.$store.state.count
        }
    },
    methods:{
        increment(value){
            this.$store.commit('increment', value)
        }
    }
}
</script>

<style>

</style>
