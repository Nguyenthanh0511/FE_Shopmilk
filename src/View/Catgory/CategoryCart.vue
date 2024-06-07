<template>
    <div class="container">
        <div class="row">
            <div class="text-center">
                <h4>Category Ours</h4>
            </div>
        </div>
        <div v-if="categories && categories.length > 0 ">
            <div v-for="category in categories" 
                    :key="category.cateId">
                <CategoryBox :category = "category">

                </CategoryBox>
            </div>
        </div>
        <div v-else>
            <h5 class="text-center">Loadding...</h5>

        </div>
    </div>
</template>

<script>
import CategoryBox from '../../components/Category/CategoryBox.vue'
export default {
    components:{CategoryBox},
    props:["categories"]
}
</script>