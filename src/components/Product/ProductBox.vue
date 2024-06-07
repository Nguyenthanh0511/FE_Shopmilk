<template>
    <div>
      <div class="embed-responsive embed-responsive-16by9">
        <img class="card-img-top embed-responsive-item" :src="product.prodImageUrl" alt="Card image cap" />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ product.prodTitle }}</h5>
        <p class="card-text">{{ product.prodDescription }}</p>
        <p class="font-weight-bold">$<i>{{ product.prodPrice }}</i></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductBox",
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  