<template>
    <div>
        <h1>Delete Product</h1>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Are you sure you want to delete this product?</h5>
                <form @submit.prevent="deleteProduct" method="post">
                    <div class="row mb-3">
                        <label asp-for="Id" class="col-sm-2 col-form-label">Id</label>
                        <div class="col-sm-10">
                            <input :v-model="prodId" type="text" class="form-control" id="inputId" readonly />
                            {{ prodId }}
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label :v-model="prodTitle" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input :v-model="prodTitle" type="text" class="form-control" id="inputName" readonly />
                            {{ prodTitile }}
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label :v-model="prodTitle" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                            <input :v-model="prodTitle" type="text" class="form-control" id="inputName" readonly />
                            {{ prodDescription }}
                        </div>
                    </div>
                    <div class="text-center">
                        <input type="hidden" />
                        <input type="submit" :v-model="prodId" class="btn btn-danger" />
                        <a asp-area="Administrator" asp-controller="Product" asp-action="Index"
                            class="btn btn-secondary">Cancel
                            <router-link 
                                to = "/AdminLayout"
                            ></router-link>
                            </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
    name: "DeleteProduct",
    props: {
        products: {
            type: Array,
            default: () => []
        },
        baseURL: {
            type: String,
        }
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
        }
    },
    methods: {
        async deleteProduct() {
            try {
                const formData = new FormData();
                formData.append('prodIdFormat', this.prodId); // Append prodId to FormData
                await axios.post(`${this.baseURL}/product/delete`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data' // Use multipart/form-data
                    }
                });
                swal({
                    text: "Product Added Successfully!",
                    icon: "success",
                    closeOnClickOutside: false,
                })
                .then(()=>{
                    this.$router.push({name:'AdminLayout'}) // Encounter issue of router
                })
                //delete
                // axios.post(`${this.baseURL}/product/delete`,{
                //     prodId:this.prodId
                // },{
                //     headers:{
                //         'Content-Type': 'multipart/form-data'
                //     }
                // })  ;              
            } catch (err) {
                console.error('Error adding product:', err);
                swal("Oops!", "Failed to add product. Please try again later.", "error");
            }
        }
    },
    mounted() {
        const prodId = this.$route.params.prodId;
        console.log('prod id:',prodId)
        axios.get(`${this.baseURL}/product/Get/${prodId}`)
            .then(res => {
                const product = res.data;
                console.log('recieved data:',product)
                this.prodId = product.prodId;
                this.prodTitile = product.prodTitle;
                this.productDescription = product.productDescription
            })
            .catch((err) => {
                console.log('false :', err)
            })
    },
}
</script>