<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4>Our Products</h4>
      </div>
    </div>
    <!-- Check if products data is available -->
    <div v-if="products && products.length > 0" class="row">
      <!-- Display all the products in productbox component -->
      <div v-for="product in products" :key="product.prodId" class="col-md-6 col-xl-4 col-12 d-flex">
        <div>
          <ProductBox :product="product"></ProductBox>
        </div>
      </div>
    </div>
    <!-- If products data is not available, display a loading message or indicator -->
    <div v-else class="row">
      <div class="col-12 text-center">
        <p>Loading products...</p>
        <!-- You can add a spinner or other loading indicator here if you prefer -->
      </div>
    </div>
  </div>
</template>
  <script>
  import ProductBox from '../../components/Product/ProductBox.vue'
  export default {
    name:"ProductCart",
    components: {ProductBox},
    props: ["products"],
      // Other methods
  }
  </script>
  
  <style>
  /* h4 {
    font-family: 'Roboto', sans-serif;
    color: #484848;
    font-weight: 700;
  }
  
  #add-category {
    float: right;
    font-weight: 500;
  } */
  </style>