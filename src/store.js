import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: [],
        liked: [],
    },
    mutations: {
        ADD_TO_CART(state, product) {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id === product.id) {
                    return state.cart[i].quantity++
                }
            }
            state.cart.push({
                id: product.id,
                img: product.img,
                description: product.description,
                price: product.price,
                quantity: 1
            })
        },
        QUANTITY_PLUS_ONE(state, product) {
            product.quantity = product.quantity + 1;
        },
        SET_LIKE_COOKIES(state, product) {
            let find = false
            for (let i = 1; i < state.liked.length; i++) {
                console.log(state.liked[i].id)
                if (state.liked[i].id === product.id) {
                    console.log('JAI')
                    find = true
                    state.liked.splice(state.liked.indexOf(product + 1), 1)
                }
            }
            if (!find) {
                state.liked.push(product)
            }
            
        },
        SAVE_ITEM(state, items) {
            if (items.length !== 1 && items.length !== null) {
                state.liked = items
            }
        }
    },
    actions: {

    }
})