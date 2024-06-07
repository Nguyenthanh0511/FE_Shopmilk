<template>
  <div class="container">
    <div class="row">
        <div class="col-12 text-center">
          <h4 class="pt-3">Add new Product</h4>
        </div>
      </div>
    <div class="row">
        <div>
            <div class="col-3"></div>
            <form>
            <div class="form-group">
              <label>Category</label>
              <select class="form-control" v-model="categoryId" required>
                <option v-for="category of categories" :key="category.id" :value="category.id">{{category.categoryName}}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control" v-model="name" required>
            </div>
            <div class="form-group">
              <label>Description</label>
              <input type="text" class="form-control" v-model="description" required>
            </div>
            <div class="form-group">
              <label>ImageURL</label>
              <input type="url" class="form-control" v-model="imageURL" required>
            </div>
            <div class="form-group">
              <label>Price</label>
              <input type="number" class="form-control" v-model="price" required>
            </div>
            <button type="button" class="btn btn-primary" @click="addProduct">Submit</button>
          </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"AddProduct",
    props:["baseURL","categories","products"],
    // data(){
    //     return{
    //         prodid:null,
    //         cateid:null,
    //         prodname:null,
    //         proddescription:null,
    //         prodprice:null,
    //         prodimageurl:null
    //     },
        
}
</script>

<style>

</style>