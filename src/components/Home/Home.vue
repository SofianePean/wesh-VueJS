<template>
<div class="home-container">
    <h1>Articles</h1>
    <input
    v-model="searchKey"
    type="search"
    id="search"
    placeholder="Rechercher..."
    autocomplete="off"
    />
    <span v-if="searchKey && filteredList.length >= 1">
        {{ filteredList.length }} résultat<span v-if="filteredList.length >= 2">s</span>
    </span>
    <div class="card-cart-container">
        <div class="card-container">
            <div v-for="product in filteredList" :key="product.id" class="card">
                <div class="img-container">
                    <img v-bind:src="product.img" alt="image de la montre">
                </div>
                <div class="card-text">
                    <h3>{{ product.description}}</h3>
                    <span>{{ product.price}}€</span>
                </div>

                <div class="card-icons">
                    <div class="like-container">
                        <input
                        type="checkbox"
                        name="checkbox"
                        v-bind:id="product.id"
                        :value="product.id"
                        v-model="liked"
                        v-on:input="handleItemLiked(product)"
                        
                        @click="setLikeCookie()"
                        />
                        <label v-bind:for="product.id">
                            <i class="fas fa-heart"></i>
                        </label>
                    </div>

                    <div class="add-to-cart">
                        <button v-on:click="addToCart(product)">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- SI pas de résultat -->
            <div v-if="filteredList.length == []" class="no-result">
                <h3>Désole</h3>
                <p>Aucun résultat trouvé</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import './home.css'
import Data from '../../../products.js'

export default {
    name: 'Home',
    data() {
        return {
            products: Data,
            searchKey: '',
            liked: [],
            cart: [],
        }
    },
    components: {
    },
    mounted() {
        this.getLikeCookie
    },
    computed: {
        filteredList() {
            return this.products.filter((product) => {
                return product.description.toLowerCase().includes(this.searchKey.toLowerCase())
            })
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
        itemLikedd() {
            return this.$store.state.liked
        }
    },
    methods: {
        setLikeCookie() {
            document.addEventListener('input', () => {
                setTimeout(() => {
                    console.log('COOKIES',this.itemLikedd)
                    this.$cookies.set('like', JSON.stringify(this.itemLikedd))
                }, 300)
            })
        },
        addToCart(product) {
            this.$store.commit('ADD_TO_CART', product)
        },
        handleItemLiked(product) {
            this.$store.commit('SET_LIKE_COOKIES', product)
        }
    }
}
</script>