<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><img src="../assets/Img/logo.png"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Phần search -->
      <div class="col-md-6">
        <form class="form-inline flex justify-content-center">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div> <!-- 6 -->
      <!-- Đăng nhập -->
      <div class="col-4"></div>
      <div class="col-1">
        <router-link>
          <i class="fas fa-user"></i> Login
        </router-link>
      </div> <!-- 2 -->
      <!-- Giỏ hàng -->
      <div class="col-1 ml-auto">
        <router-link to="/cart" class="nav-link">
          <i class="fas fa-shopping-cart"></i> Cart
        </router-link>
      </div> <!-- 2 -->
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavBar',
  mounted() {
    document.getElementById("navbarDropdown").addEventListener('click', (event) => {
      event.target.parentNode.querySelector('.dropdown-menu').style.display = "block"
    })
  }
};
</script>

<style>
/* Add your custom styles here */
</style>