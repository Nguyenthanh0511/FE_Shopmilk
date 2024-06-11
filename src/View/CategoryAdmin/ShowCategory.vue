<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Categogry</h5>
                <router-link class="btn btn-primary" to="/AdminLayout/AddCategory">Create</router-link>
                <!-- Table with stripped rows -->
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr scope="row" v-for="item in categories" :key="item.cateId">
                                
                                <td>{{item.cateId}}</td>
                                <td>{{item.cateName}}</td>
                                <td class="">
                                    <a class="btn btn-primary" @click="routerDeleteProduct(item.cateId)">Delete</a>
                                    <a class="btn btn-primary" @click="routerUpdateProduct(item.cateId)">Update</a>
                                    <!-- <router-link :to="{ name: 'DeleteProduct', params: { prodId: item.prodId }}">Delete</router-link> -->
                                </td>
                        </tr>
                    </tbody>
                </table>
                <!-- End Table with stripped rows -->
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:"ShowCategory",
    props: {
        categories:{
            type:Array, 
            required:true
        },
        baseURL:{
            type:String,
            required:true
        }
    },
    // mounted(){
    //     foreach(var item in categories){
    //         const dataCategory = this.categories
    //     }
    // }
    methods:{
        routerUpdateProduct(id){
            this.$router.push({name:"UpdateCategory",params: {cateId:id}})
        },
        routerDeleteProduct(id){
            this.$router.push({name:"DeleteCategory",params:{cateId:id}})
        }
    }
}
</script>
<style>

</style>