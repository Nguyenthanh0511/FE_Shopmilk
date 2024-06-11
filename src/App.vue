<template>
  <div>
    <MenuView></MenuView>
    <BannerView v-if="this.role == false"></BannerView>
    <router-view :baseURL="baseURL" :products="products" :categories="categories" @fetchdata="fetchdata"></router-view>
    <hr>
    <!-- <SignIn v-if = "!authorize" @login-success ="handlerToken" :baseURL="baseURL"></SignIn> -->
    <FooterBox></FooterBox>
  </div>
</template>
<script>
import axios from 'axios';
import MenuView from './components/MenuView.vue'
import FooterBox from './components/FooterBox.vue'
import BannerView from './components/BannerView.vue'
// import SignIn from './View/SignIn.vue'
export default {
  components: {
    MenuView,
    FooterBox,
    BannerView
    // SignIn
  },
  data() {
    return {
      baseURL: "https://localhost:7246/api",
      products: null,
      categories: null,
      authorize: false,
      role:false
    }
  },
  methods: {
    async fetchdata() {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      try {
        const response = await axios.get(this.baseURL + "/product/getall", {
          headers: {
            Authorization: `Bearer ${token}` // Use backticks here for proper string interpolation
          }
        });
        this.products = response.data;
        console.log("product:",this.products)
      } catch (error) {
        console.error('Error fetching products:', error);
      }

      try {
        const repon = await axios.get(this.baseURL + "/category/getall", {
          headers: {
            authorization: `Bearer ${token}`
          }
        });
        this.categories = repon.data;
      }
      catch (error) {
        console.error('Error fetching categories:', error);
      }

    },
    handlerToken() {
      // this.token = localStorage.getItem('token')
      // this.fetchdata();
      this.authorize = true;
      this.fetchdata();
    }

  },
  mounted() {
    this.fetchdata();
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.authorize = true;
      this.fetchdata();
    }
    this.role = localStorage.getItem('role')
    if(this.role == "Admin"){
      return this.role = true;
    }
  },
};
</script>
