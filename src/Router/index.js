import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../View/HomeView.vue';
import ProductCart from '../View/Product/ProductCard.vue';
import CategoryCart from '../View/Catgory/CategoryCart.vue';
import AddProduct from '../View/ProductAdmin/AddProduct.vue';
import SignIn from '../View/SignIn.vue';
import AdminLayout from '../components/Dialog/AdminLayout.vue'
import ShowProduct from '../View/ProductAdmin/ShowProduct.vue';
import DeleteProduct from'../View/ProductAdmin/DeleteProduct.vue';
import UpdateProduct from '../View/ProductAdmin/UpdateProduct.vue';
import ShowCategory from '../View/CategoryAdmin/ShowCategory.vue';
import AddCategory from '../View/CategoryAdmin/AddCategory.vue';
import UpdateCategory from '../View/CategoryAdmin/UpdateCategory.vue'
import DeleteCategory from '../View/CategoryAdmin/DeleteCategory.vue'
import Register from '../View/Register.vue'
import ShowCart from '../View/ShopCart/ShowCart.vue'
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
      path:'AddProduct',
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
      },
      {
        path:'UpdateProduct',
        name:'UpdateProduct',
        component:UpdateProduct
      },
      {
        path:'ShowCategory',
        name:'ShowCategory',
        component:ShowCategory
      },
      {
        path:'AddCategory',
        name:'AddCategory',
        component:AddCategory
      },
      {
        path:'UpdateCategory',
        name:'UpdateCategory',
        component:UpdateCategory
      },
      {
        path:'DeleteCategory',
        name:'DeleteCategory',
        component:DeleteCategory
      },
    ]
  },
  {
    path:'/SignIn',
    name:'SignIn',
    component:SignIn
  },
  {
    path:'/Register',
    name:'Register',
    component:Register
  },
  //Product
  {
    path: '/ProductCart',
    name: 'ProductCart',
    component: ProductCart
  },

  //Category
  {
    path:'/category',
    name:'CategoryCart',
    component: CategoryCart
  }
  ,{
    path:'/ShowCart',
    name:'ShowCart',
    component:ShowCart
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
  // Add navigation guard
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token');
//   const role = localStorage.getItem('role');
//   if (to.path.startsWith('/AdminLayout') && (token==null || role==null)) {
//     next('/SignIn');
//   } else {
//     next();
//   }
// });


export default router;
