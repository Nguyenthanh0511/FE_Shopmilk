<template>
  <div>
    <MenuView></MenuView>
    <router-view 
    :baseURL = "baseURL"
    :products = "products"
    :categories= "categories"
    ></router-view>
    <FooterBox></FooterBox>
  </div>
</template>

<script>
import axios from 'axios';
import MenuView from './components/MenuView.vue'
import FooterBox from './components/FooterBox.vue'
export default {
  components:{
    MenuView,
    FooterBox
  },
  data() {
    return {
      baseURL : "https://localhost:7246/api",
      products: null,
      categories: null,
    }
  },
  methods:{
    async fetchdata(){
      axios.get(this.baseURL + "/product/getall")
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
      //category
      axios.get(this.baseURL + "/category/getall")
      .then(response=>{
        this.categories = response.data;
      })
      .catch(error=>{
        console.error('Error fetch categories:',error);
      })
    }
  },
  mounted() {
    this.fetchdata();    
  },
};
</script>


