<template>
        <div class="wishList-container">
            <div v-for="product in itemLiked" :key="product.id" class="card wishlist-card">
                <div>
                    <img v-bind:src="product.img" alt="image de la montre">
                </div>
                <div class="description">
                    <h3>{{ product.description}}</h3>
                    <span>{{ product.price}}€</span>
                </div>
            </div>
            <!-- SI pas de résultat -->
            <div v-if="itemLiked.length == []" class="no-result">
                <h3>Désole</h3>
                <p>Aucun résultat trouvé</p>
            </div>
        </div>
</template>

<script>
import './wishList.css'

export default {
    name: 'WishList',
    computed: {
        itemLiked() {
            return this.$store.state.liked
        },
        getLikeCookie() {
            let cookiesValue = JSON.parse(this.$cookies.get('like'))
            console.log('cookies value', cookiesValue)
            this.$store.commit('SAVE_ITEM', cookiesValue)
            let tab = []
            for (let i =0; i < cookiesValue.length;  i++) {
                // console.log(cookiesValue[i].id)
                tab.push(cookiesValue[i].id) 
            }
            console.log(tab)
            return [...this.liked] = tab
        },
    }
}
</script>