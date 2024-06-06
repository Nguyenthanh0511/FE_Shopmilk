<template>
    <div>
        <div class="embed-responsive embed-responsive-16by9">
            <img class="card-img-top embed-responsive-item" :src="product.ProdImageUrl" alt="Card image cap" />
        </div>
        <div class="card-body">
            <router-link :to="{ name: 'Showdetails', params: { id: product.prodId } }">
                <h5 class="card-title">{{ product.prodTitle }}</h5>
            </router-link>
            <p class="card-text">
                {{ product.prodDescription }}
            </p>
            <p class="font-weight-bold">$<i>{{ product.prodPrice }}</i></p>
            <!-- <router-link :to="{ name: 'EditProduct', params: { id: product.prodId } }" v-show="$route.name == 'AdminProduct'">
                <button class="btn btn-primary">Edit</button>
            </router-link> -->
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
</template>
<script>
export default {
    name: "ProductBox",
    prods: ["product"],
}
</script>