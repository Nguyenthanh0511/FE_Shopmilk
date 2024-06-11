<template>
    <div>
        <h1>Delete Category</h1>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Are you sure you want to delete this product?</h5>
                
                <form @submit.prevent="deleteCategory" method="post">
                    <div class="row mb-3">
                        <label asp-for="Id" class="col-sm-2 col-form-label">Id</label>
                        <div class="col-sm-10">
                            <input :v-model="cateId" type="text" class="form-control" id="inputId" readonly />
                            {{ cateId }}
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label :v-model="cateName" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input :v-model="cateName" type="text" class="form-control" id="inputName" readonly />
                            {{ cateName }}
                        </div>
                    </div>
                    <div>
                        <input type="submit" :v-model="cateId" class="btn btn-danger" />
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
    name: "DeleteCategory",
    props: {
        categories: {
            type: Array,
            default: () => []
        },
        baseURL: {
            type: String,
        }
    },
    data() {
        return {
            cateId: "", // Initialize to an empty string
            cateName: "",
            // hasPermission: true // Determine the user's permission status dynamically
        }
    },
    methods: {
        async deleteCategory() {
            try {
                const formData = new FormData();
                formData.append('id', this.cateId); // Append prodId to FormData
                console.log("formdata:",formData)
                await axios.post(`${this.baseURL}/Category/Delete`, formData, {
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
                    this.$router.push({name:'ShowCategory'}) // Encounter issue of router
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
                console.error('Error :', err);
                swal("Oops!", "Failed to add product. Please try again later.", "error");
            }
        }
    },
    mounted() {
        const Id = this.$route.params.cateId;
        console.log('cate id:',Id)
        axios.get(`${this.baseURL}/category/Get/${Id}`)
            .then((res) => {
               const category = res.data;
               console.log('cate:',category);
               this.cateId = category.cateId
               this.cateName = category.cateName
            })
            .catch((err) => {
                console.log('false :', err)
            })
    },
}
</script>