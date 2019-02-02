<template>
    <div id="app"></div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

// サンプル用に非同期処理を行う関数(API呼び出しの代わり)
function getCountNum(type){
    return new Promise(resolve => {
        // 1秒後にtypeに応じたデータを返す
        setTimeout(()=>{
            let amount
            switch (type) {
                case 'one':
                    amount = 1
                    break;
                case 'two':
                    amount = 2
                    break
                case 'ten':
                    amount = 10
                    break
                default:
                    amount = 0
                    break;
            }
            resolve({ amount })
        }, 1000)
    }) 
}

// ストアの作成
const store = new Vuex.Store({
    // ステート
    state: {
        count: 10
    },

    // gettersオプションでゲッターを定義する
    getters:{
        // ステートから別の値を計算する
        squared:(state) => state.count * state.count,

        cubed: (state, getters) => state.count * getters.squared,
    },

    mutations: {
        increment(state){
            state.count = state.count + 1
        }
    },

    // actionsオプションでアクションを定義
    actions: {
        incrementAsync({commit}, payload){
            // 非同期にデータを取得する
            return getCountNum(payload.type)
            .then(data => {
                // ログ表示
                // eslint-disable-next-line 
                console.log(data)
                // レスポンスをペイロードとして渡したミューテションを実行する
                commit('increment', {
                    amount: data.amount
                })
            })
        }
    }
})
// eslint-disable-next-line 
console.log(store.state.count);
// eslint-disable-next-line 
console.log(store.state.count);
store.dispatch('incrementAsync', {type:'one'})

export default {

}
</script>

<style>

</style>

