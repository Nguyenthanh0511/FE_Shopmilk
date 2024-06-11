<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Add New Product</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <form @submit.prevent="addProduct">
        <div class="form-group">
          <label for="category">Category</label>
          <select id="category" class="form-control" v-model="cateId" required>
            <option v-for="category in categories" :key="category.cateId" :value="category.cateId">{{ category.cateName
              }}: {{ category.cateId }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="prodId">Prodid</label>
          <input id="prodId" type="text" class="form-control form-control-sm" v-model="prodId" required>
        </div>
        <div class="form-group">
          <label for="productName">Name</label>
          <input id="productName" type="text" class="form-control form-control-sm" v-model="productName" required>
        </div>
        <div class="form-group">
          <label for="productDescription">Description</label>
          <input id="productDescription" type="text" class="form-control" v-model="productDescription" required>
        </div>
        <div class="form-group">
          <label for="productImageUrl">Image URL</label>
          <input id="productImageUrl" type="url" class="form-control" v-model="productImageUrl" required>
        </div>
        <div class="form-group">
          <label for="productPrice">Price</label>
          <input id="productPrice" type="number" class="form-control" v-model="productPrice" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  </div>
  <!-- <div class="text-center mt-3" v-if="!hasPermission">
    <h4>You do not have permission to create a new product.</h4>
  </div> -->
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
  name: "AddProduct",
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    products: {
      type: Array,
      default: () => []
    },
    baseURL: {
      type: String,
      required: true
    },
    // You may not need to pass products as a prop for adding new products
  },
  data() {
    return {
      prodId: "", // Consider removing hardcoded values
      cateId: "", // Initialize to an empty string
      productName: "",
      productDescription: "",
      productPrice: null, // Consider initializing to a default value
      productImageUrl: "",
      hasPermission: true // Determine the user's permission status dynamically
    };
  },
  methods: {
    async addProduct() {
      try {
        const formData = new FormData();
        formData.append('prodId', this.prodId);
        formData.append('cateId', this.cateId);
        formData.append('prodName', this.productName);
        formData.append('prodDescription', this.productDescription);
        formData.append('prodPrice', this.productPrice);
        formData.append('prodImageUrl', this.productImageUrl);
        await axios.post(`${this.baseURL}/product/create`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        this.$router.push({ name: 'ShowProduct' });
        swal({
          text: "Product Added Successfully!",
          icon: "success",
          closeOnClickOutside: false,
        });
      } catch (err) {
        console.error('Error adding product:', err);
        swal("Oops!", "Failed to add product. Please try again later.", "error");
      }
    }
  },
  mounted() {
    console.log('Received categories:', this.categories);
  }
}
</script>

<style>
/* Add your custom styles here */
    /* Add your custom styles here */
    .form-group input[type="text"],
    .form-group input[type="url"],
    .form-group input[type="number"],
    .form-group select {
        font-weight: 300; /* Adjust the font weight as needed */
    }
</style>