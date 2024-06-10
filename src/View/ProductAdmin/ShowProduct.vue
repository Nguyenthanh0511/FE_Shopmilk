<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Category</h5>
                <a class="btn btn-danger"><router-link to="/AdminLayout/AddProduct"></router-link>Add new</a>
                <!-- Table with stripped rows -->
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">ImageUrl</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr scope="row" v-for="item in products" :key="item.Prodid">
                                
                                <td>{{item.prodId}}</td>
                                <td>{{item.prodTitle}}</td>
                                <td><img :src="item.prodImageUrl" alt="" style="width: 100px; height: auto;" />
                                </td>
                                <td>
                                    <a class="link-primary" @click="routerDeleteProduct(item.prodId)">Delete</a>
                                    <a class="link-primary" @click="routerUpdateProduct(item.prodId)">Update</a>
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
export default {
    name: "ShowProduct",
    props: {
        categories: {
            type: Array,
            default: () => []
        },
        products: {
            type: Array,
            default: () => []
        },
        baseURL:{
          type:String,
        }
    },
    methods:{
        routerDeleteProduct(prodId){
            this.$router.push({ name: 'DeleteProduct', params: { prodId: prodId } });
            // this.$router.push({name:'DeleteProduct',params:{prodId:prodId}})
        },
        routerUpdateProduct(prodId){
            this.$router.push({name:"UpdateProduct",params:{prodId:prodId}});
        }
    }
}
</script>