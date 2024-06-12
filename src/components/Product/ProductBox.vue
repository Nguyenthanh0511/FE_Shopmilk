<template>
  <div>
    <div class="embed-responsive embed-responsive-16by9">
      <h5></h5>
      <img class="card-img-top embed-responsive-item img-item" :src="product.prodImageUrl" alt="Card image cap" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ product.prodTitle }}</h5>
      <p class="card-text">{{ product.prodDescription ? product.prodDescription.slice(0, 255) : ''}}</p>
      <p class="font-weight-bold">$<i>{{ product.prodPrice }}</i></p>
      <button @click="buyProduct">Buy</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert'
export default {
  name: "ProductBox",
  props: {
    product: {
      type: Array,
      required: true
    },
    baseURL: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      UId: "",
      productid:this.product.prodId
      
    }
  },
  methods: {

    buyProduct() {
      try {
        // Create FormData
        const formData = new FormData();
        this.UId = localStorage.getItem('userId')
        formData.append('UserId', this.UId);
        formData.append('Productid', this.product.prodId);
        formData.append('quantity', 1);
        console.log("FormData entries:");
        for (const entry of formData.entries()) {
            console.log(entry[0], entry[1]);
        }
        // Make POST request
        axios.post(`${this.baseURL}/Shopcart/AddCart`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        swal({
          text: "Product Added Successfully!",
          icon: "success",
          closeOnClickOutside: false,
        })
          .then((res) => {
            console.log('add cart :', res.data, )
            this.$router.push({ name: 'ShowCart' }) // Encounter issue of router
          })
      } catch (err) {
        console.log('err:', err.log)
        
      }
    }
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}

.card-img-top {
  object-fit: cover;
  height: 200px;
}

.card-body {
  padding: 15px;
}

.btn {
  margin-top: 10px;
}
.img-item{
  width:300px;
  height:200px;
}
</style>