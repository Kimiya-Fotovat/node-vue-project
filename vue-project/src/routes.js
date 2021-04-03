import Home from './components/Home'
import Shop from './components/Shop'
import Product from './components/Product'
import Cart from './components/Cart'
import Login from './components/Login'
import Register from './components/Register'


export const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/shop', component: Shop, name: 'shop'},
    {path: '/shop/product/:id', component: Product, name: 'product'},
    {path: '/cart', component: Cart, name: 'cart'},
    {path: '/login', component: Login, name: 'login'},
    {path: '/register', component: Register, name: 'register'},
    
]