<template>
    <div>
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Add New Category</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <form @submit.prevent="addCategory">
                    <div class="form-group">
                        <label for="cateId">Category id</label>
                        <input id="prodId" type="text" class="form-control form-control-sm" v-model="cateId" required>
                    </div>
                    <div class="form-group">
                        <label for="productName">Category name</label>
                        <input id="productName" type="text" class="form-control form-control-sm" v-model="cateName"
                            required>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert';
export default {
    name: "AddCategory",
    props: {
        categories: {
            type: Array,
            default() { }
        },
        baseURL: {
            type: String
        }
    },
    data() {
        return {
            cateId: "",
            cateName: "",
        }

    },
    methods: {
        async addCategory() {
            try {

                const formData = new FormData();
                formData.append("cateId", this.cateId);
                formData.append("cateName", this.cateName);
                await axios.post(`${this.baseURL}/category/create`, formData, {
                    headers:{
                        "Content-Type":"multipart/form-data"

                    } 
                })
                    .then(() => {
                        this.$router.push({ name: "ShowCategory" })
                    })
                   
                swal({
                    text: "AddCreate Successfully",
                    icon: "success",
                    closeOnClickOutside: false
                })
            }catch(err){
                swal("Oops!", "Failed to add product. Please try again later.", "error");
            }
}
    }
}
</script>
