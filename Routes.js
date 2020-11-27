import Home from './src/components/Home/Home'
import UserSettings from './src/components/UserSettings/UserSettings.vue'
import ShoppingCart from './src/components/ShoppingCart/ShoppingCart.vue'
import WishList from './src/components/WishList/WishList'

export default [
    {path: '/', name: 'Home', component: Home},
    {path: '/user-settings', name: 'UserSettings', component: UserSettings},
    {path: '/shopping-cart', name: 'ShoppingCart', component: ShoppingCart},
    {path: '/wish-list', name: 'WishList', component: WishList},
]