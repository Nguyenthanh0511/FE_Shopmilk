<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Product</h5>
                <!-- Table with stripped rows -->
                <form @submit.prevent="updateProduct">
                    <div class="form-group">
                        <label>Category</label>
                        <select class="form-control" v-model="cateId" required>
                            <option v-for="category in categories" :key="category.cateId" :value="category.cateId">{{
                                category.cateName
                                }}: {{ category.cateId }}</option>
                        </select>
                        {{ cateId }}
                    </div>
                    <div class="form-group">
                        <label>Prodid</label>
                        <input type="text" class="form-control" v-model="prodId" readonly>
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="prodTitle" required>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" class="form-control" v-model="productDescription" required>
                    </div>
                    <div class="form-group">
                        <label>Image URL</label>
                        <input type="url" class="form-control" v-model="productImageUrl" required>
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" class="form-control" v-model="productPrice" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert';
export default {
    name: 'UpdateProduct',
    props: {
        categories: {
            type: Array,
            default: () => { }
        }
        , baseURL: {
            type: Array,
            default: () => { }
        }
    },
    data() {
        return {
            prodId: "", // Consider removing hardcoded values
            cateId: "", // Initialize to an empty string
            prodTitle: "",
            productDescription: "",
            productPrice: null, // Consider initializing to a default value
            productImageUrl: "",
            hasPermission: true // Determine the user's permission status dynamically
        };
    },
    methods: {
        async updateProduct() {
            try {
                const formData = new FormData();
                formData.append("prodId", this.prodId);
                formData.append("cateId", this.cateId);
                formData.append("prodTitle", this.prodTitle);
                formData.append("prodPrice", this.productPrice);
                formData.append("prodImageUrl", this.productImageUrl);
                formData.append("ProdDescription",this.productDescription)
                axios.put(`${this.baseURL}/product/update`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                
                swal({
                    text: "Product Added Successfully!",
                    icon: "success",
                    closeOnClickOutside: false,
                })
                .then(()=>{
                    this.$router.push({name:'AdminLayout'})
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    mounted() {
        const ID = this.$route.params.prodId;
        axios.get(`${this.baseURL}/product/get/${ID}`)
            .then(res => {
                console.log("res :", res);
                const product = res.data;
                this.prodId = product.prodId;
                this.prodTitle = product.prodTitle;
                this.productImageUrl = product.prodImageUrl;
                this.productPrice = product.prodPrice;
                this.cateId = product.cateId
                this.productDescription = product.prodDescription
            })
            .catch(err => {
                console.log("err :", err);
            })
    }
}
</script>