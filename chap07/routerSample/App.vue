<template>
    <div></div>
</template>

<script>
// 商品のリストをステートとして保存するモジュール
export default {
    state: {
        // 商品リスト
        products: [
            { id: 1, name: 'Apple' },
            { id: 2, name: 'Orange' },
            { id: 3, name: 'Banana' }
        ]
    },
    getters: {
        // getterの第３引数にはルートのステートが渡される
        currentProduct (state, getters, rootState) {
            // ルーティングのデータから商品のIDを取得する
            const productId = Number(rootState.route.params.id)

            // 商品IDにマッチするものを返す
            return state.products.find(product => {
                return product.id === productId
            })
        }
    }
}   
</script>

<style>

</style>
