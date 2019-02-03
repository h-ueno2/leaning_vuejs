<!-- ヘルパー関数によるアクセス -->
<template>
    <div>
        <p>{{ count }}</p>
        <button v-on:click="increment(1)">+1</button>
    </div>
</template>

<script>
//  'mapState', 'mapMutations'をインポート
import {mapState, mapMutations} from 'vuex'

export default {
    // '$store.state.count'を'this.count'に結びつける
    computed: {
        double(){
            return this.count * 2
        },
        ...mapState([
            'count'
        ]),
    },
    // '$store.commit('increment',value)を'this.uncrement(value)'で呼び出せるようにする
    muthods: mapMutations([
        'increment'
    ])
}
</script>

<style>

</style>
