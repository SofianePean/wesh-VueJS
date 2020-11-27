<template>
<div class="home-container">
<div class="card-cart-container">
    <div v-if="cartItems.length > 0" class="shopping-cart" id="shopping-cart">
        <h2>Panier</h2>
        <div class="item-group">
            <div v-for="(product, id) in cartItems" :key="id" class="item">
                <div class="img-container">
                    <img :src="product.img" alt="montre">
                </div>
                <div class="item-description">
                    <h4>{{ product.description }}</h4>
                    <p>{{ product.price }}€</p>
                </div>
                <div class="item-quantity">
                    <h6>quantité : {{ product.quantity }}</h6>
                

                    <div class="cart-icons">
                        <button @click="cartPlusOne(product)">
                            <i class="fa fa-plus"></i>
                        </button>
                        <button @click="cartLessOne(product, id)">
                            <i class="fa fa-minus"></i>
                        </button>
                        <button @click="$delete(cartItems, id)">
                            <i class="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import '../Home/home.css'

export default {
    name: 'ShoppingCart',
    data() {
        return {

        }
    },
    methods: {
        cartPlusOne(product) {
        // this.$store.commit('QUANTITY_PLUS_ONE', product)
            product.quantity = product.quantity + 1;
        },
        cartLessOne(product, id) {
            for (let i =0; i < this.cartItems.length; i++) {
                if (this.cartItems[i].id === product.id) {
                    if (product.quantity > 1) {
                        return this.cartItems[i].quantity--
                    } else if (product.quantity === 1) {
                        this.$delete(this.cartItems, id)
                }
                }
            }
},
    },
    computed: {
        cartItems() {
            return this.$store.state.cart
        },
    },
}
</script>