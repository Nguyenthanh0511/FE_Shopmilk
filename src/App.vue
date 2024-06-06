<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.prodId">{{ product.prodTitle }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios.get('https://localhost:7246/api2/Product/GetAll')
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  },
};
</script>


