<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Sữa Tươi</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" role="button" href="#" id="navDropDanhMuc">Danh mục <span class="sr-only"></span></a>
              <div class="dropdown-menu" aria-labelledby="navDropDanhMuc">
                <router-link class="dropdown-item" to="/admin">Admin</router-link>
                <router-link class="dropdown-item" to="/login">Login</router-link>
                <router-link class="dropdown-item" to="/wishlist">Wish list</router-link>
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/favorite-products">Sản phẩm ưa thích</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/discounted-products">Sản phẩm khuyến mãi</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">Giới thiệu</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarBottom'
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  