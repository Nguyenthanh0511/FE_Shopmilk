import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import ProductCart from '../View/Product/ProductCard.vue'
const routes = [
    // {

    //     path: '/Home',
    //     name: 'Home',
    //     component: HomeView
    // },
    {
        path: '/ProductCart',
        name:'ProductCart',
        component:ProductCart
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  export default router