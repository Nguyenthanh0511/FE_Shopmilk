<template>
  <div class="cart-container">
    <h2 class="cart-heading">Your Shopping Cart</h2>

    <div class="cart-items">
      <div v-for="item in shopCarts" :key="item.prodId" class="cart-item">
        <div class="item-info">
        <div class="item-image">
          <img :src="item.product.prodImageUrl" alt="Product Image">
        </div>
          <div class="item-title">{{ item.product.prodTitle }}</div>
          <div class="item-quantity">Quantity: {{ item.quantity }}</div>
          <div class="item-price">Price: ${{ item.product.prodPrice }}</div>
        </div>
        <div class="item-action">
          <button class="remove-btn" @click="removeFromCart(index)">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShowCart',
  props: {
    shopCarts: {
      type: Array,
      default: () => []
    },
    baseURL: {
      type: String
    }
  },
  methods: {
    removeFromCart(index) {
      // Emit an event to notify the parent component to remove the item from the cart
      this.$emit('removeFromCart', index);
    }
  },
  mounted() {
    console.log('base url :', this.baseURL)
    console.log('cart ', this.shopCarts)
  }
}
</script>
<style scoped>
.cart-container {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.cart-heading {
  font-size: 24px;
  margin-bottom: 15px;
}

.cart-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.cart-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
}

.item-info {
  margin-bottom: 10px;
}

.item-title {
  font-size: 18px;
  font-weight: bold;
}

.item-image img {
  width: 100%; /* Ensure the image fills the container */
  height:200px;
  object-fit: cover; /* Maintain aspect ratio and crop as needed */
  border-radius: 5px;
}

.remove-btn {
  background-color: #ff6347;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-btn:hover {
  background-color: #d33;
}
</style>