//Vue, Vue Router, Vuexをインポートする
import Vue from 'vue';
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// vuex-router-sync関数をインポート
import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)
Vuex.use(Vuex)

const router = new VueRouter({
    routes: [
        // ルーティング定義
    ]
})

const store = new Vuex.Store({
    // ストア定義
})

// ルータとストアを同期する
sync(store, router)

// eslint-disable-next-line
console.log(store.state.route)
