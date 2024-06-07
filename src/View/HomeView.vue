<template>
  <div>
    <div class="container py-2">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Products2222</h2>
        </div>
      </div>
      <!-- display products -->
      <div class="row">
        <div v-for="index in index" :key="index" class="col-md-6 col-xl-4 col-12 pt-4 justify-content-around d-flex">
          <ProductBox :product="products[index - 1]"></ProductBox>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>
<script>
import ProductCart from '../View/Product/ProductCard.vue';
import CategoryCart from '../View/Catgory/CategoryCart.vue'
export default {
  name: 'HomeView',
  components: ProductCart, CategoryCart,
  props: {
    products: {
      type: Array,
      required: true
    },
    prodId: {
      type: String,
      required: true
    }
  },
  // computed:{
  //     parsedProdId(){
  //         return this.prodId.split(',').map(Number);
  //     }
  // }
}

</script>