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
const counter = {
    // ステート
    state: {
        count: 10
    },

    // gettersオプションでゲッターを定義する
    getters:{
        // ステートから別の値を計算する
        squared:(state) => state.count * state.count,
    },

    mutations: {
        increment(state, amount){
            state.count += amount
        }
    },

    // actionsオプションでアクションを定義
    actions: {
        incrementAsync({commit}, payload){
            // 非同期にデータを取得する
            return getCountNum(payload.type)
            .then(data => {
                commit('increment', {
                    amount: data.amount
                })
            })
        }
    },
    // モジュールは入れ子でも定義が可能
    modules: {
        childModules:{

        }
    }
}

const store = new Vuex.Store({
    modules:{
        counter
    }
})

export default {

}

// ステートはモジュール名の下に登録される
// eslint-disable-next-line
console.log(store.state.counter.count)

// getter, mutation, actionは
// モジュールを使用しないときと同様に登録される
// eslint-disable-next-line
console.log(store.getters.squared)
store.commit('increment', 5)
store.dispatch('incrementAsync', {type:'one'})

</script>

<style>

</style>

