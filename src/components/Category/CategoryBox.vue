<template>
  <div>
    <div class="embed-responsive embed-responsive-16by9">
       <h5>{{category.cateId}}</h5>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ category.cateName }}</h5>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        category: {
            Type: Object,
            require:true
        }
    }
}
</script>

<style>

</style>template