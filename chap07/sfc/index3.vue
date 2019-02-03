<template>
    <div id="app"></div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    // グローバルな名前空間にstate, getter, mutationを定義
    state:{
        count:1
    },
    getters:{
        // state.countを2倍したものを返す
        double: state => state.count + state.count
    },
    mutations:{
        update(state, payload){
            state.count = payload
        }
    },
    
    modules:{
        // 名前空間が区切られたexampleモジュールを定義
        example:{
            namespaced:true,
            state:{
                value: 'Example',
            },
            getters:{
                upper: state => {
                    return state.value.toUpperCase()
                },
                triple: (state, getters, rootState, rootGetters) => {
                    return rootState.count + rootGetters.double
                }
            },
            mutations: {
                update(state){
                    state.value = 'Updated'
                },
                
            },
            actions: {
                update(ctx){
                    ctx.commit('update')
                },
                // rootState.countを5倍にする
                multiplyByFive(ctx){
                    
                    // グローバルなdoubleゲッターとexampleモジュールのtripleゲッターを利用
                    const payload = ctx.rootGetters.double + ctx.getters.triple

                    // グローバル名前空間のupdateを呼び出したいので、
                    // root: trueオプションを付与
                    ctx.commit('update', payload, {root:true})
                }
            }
        }
    }
})

// eslint-disable-next-line
console.log(store.state.count)
store.dispatch('example/multiplyByFive')
// eslint-disable-next-line
console.log(store.state.count)


export default {

}
</script>

<style>

</style>

