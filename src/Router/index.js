import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../View/HomeView.vue';
import ProductCart from '../View/Product/ProductCard.vue';
import CategoryCart from '../View/Catgory/CategoryCart.vue';
import AddProduct from '../View/Product/AddProduct.vue';
const routes = [
//   {
//     path: '/home',
//     name: 'Home',
//     component: HomeView
//   },

//Product
  {
    path: '/product',
    name: 'ProductCart',
    component: ProductCart
  },
  {
    path:'/AddProduct',
    name:'ProductCart',
    component:AddProduct
  },
  //Category
  {
    path:'/category',
    name:'CategoryCart',
    component: CategoryCart
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
