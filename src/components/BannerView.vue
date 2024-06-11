<template>
     <div class="banner-container">
     <div class="banner-content">
         <img src="../assets/Img/Banner_TH-MILK-Canh-dong-huong-duong.jpg" alt="Banner Image" class="banner-image">
         <div class="banner-text">
         </div>
     </div>
 </div>
</template>
<script>
    export default {
        name:"BannerView"
    }
</script>

<style>
.banner-container {
  position: relative;
  width: 100%;
  /* height: 300px; Adjust height as needed */
  /* overflow: hidden; */
}

.banner-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover; /* Ensure the image covers the entire container */
}

.banner-text {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff; /* Text color */
}

.banner-text h1 {
  font-size: 32px; /* Adjust font size as needed */
}</style>