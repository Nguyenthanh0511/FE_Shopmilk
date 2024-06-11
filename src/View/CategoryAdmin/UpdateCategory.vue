<template>
    <div>
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Update New Category</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <form @submit.prevent="updateCategory">
                    <div class="form-group">
                        <label for="cateId"></label>
                        <input type="hidden" id="prodId" class="form-control form-control-sm"  v-model="cateId" readonly>
                        {{cateId}}
                    </div>
                    <div class="form-group">
                        <label for="productName">Category name</label>
                        <input id="productName  " type="text" class="form-control form-control-sm" v-model="cateName"
                            required>
                            {{ cateName }}
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
    name: "UpdateCategory",
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
        async updateCategory() {
            try {
                const formData = new FormData();
                formData.append("CateId", this.cateId);
                formData.append("CateName", this.cateName);
                await axios.put(`${this.baseURL}/category/update`, formData, {
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
                console.log(err)
                swal("Oops!", "Failed to add product. Please try again later.", "error");
            }
    }
    },
    mounted(){
        const id = this.$route.params.cateId;
        console.log('id :',id)
        axios.get(`${this.baseURL}/category/get/${id}`)
        .then((res)=>{
            const category = res.data;
            this.cateId = category.cateId;
            this.cateName = category.cateName
            })
    }
}
</script>
