import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../View/HomeView.vue';
import ProductCart from '../View/Product/ProductCard.vue';
import CategoryCart from '../View/Catgory/CategoryCart.vue';
import AddProduct from '../View/ProductAdmin/AddProduct.vue';
import SignIn from '../View/SignIn.vue';
import AdminLayout from '../components/Dialog/AdminLayout.vue'
import ShowProduct from '../View/ProductAdmin/ShowProduct.vue';
import DeleteProduct from'../View/ProductAdmin/DeleteProduct.vue';

const routes = [
//   {
//     path: '/home',
//     name: 'Home',
//     component: HomeView
//   },
  {
    path:'/AdminLayout',
    name:'AdminLayout',
    component:AdminLayout,
    children:[
      {
      path:'addProduct',
      name:'AddProduct',
      component:AddProduct
      },
      {
        path:'ShowProduct',
        name:'ShowProduct',
        component:ShowProduct
      },
      {
        path:'DeleteProduct',
        name:'DeleteProduct',
        component:DeleteProduct
      }

    ]
  },
  {
    path:'/Sign',
    name:'SignIn',
    component:SignIn
  },
  
  //Product
  {
    path: '/product',
    name: 'ProductCart',
    component: ProductCart
  },
  // {
  //   path:'/AddProduct',
  //   name:'AddProduct',
  //   component:AddProduct
  // },
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
  // Add navigation guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  if (to.path.startsWith('/AdminLayout') && !token && !role) {
    next('/sign');
  } else {
    next();
  }
});


export default router;
