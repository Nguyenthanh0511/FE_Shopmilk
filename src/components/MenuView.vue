<template>
  <div class="main">
    <!-- First Navbar -->
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="col-xl-2 col-2 col-md-3">
          <router-link class="navbar-brand" to="/">
            <img src="../assets/Img/logo.png" alt="Logo">
          </router-link>
        </div>
        <div class="col-xl-10 collapse navbar-collapse" id="navbar1">
          <div class="col-xl-8 col-lg-9 col-8 col-md-9">
            <form class="form-inline flex justify-content-center">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
          <div class="col-xl-4 col-2 col-lg-3 ml-3">
            <ul class="navbar-nav no-bullet">
              <li class="nav-item dropdown">
                <router-link class="nav-link fas fa-user text-black dropdown-toggle" to="/adminLayout" role="button"
                  aria-haspopup="true" aria-expanded="false">
                  Login
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <!-- Second Navbar -->
    <div class="container p-2">
      <div class="row">
        <div class="col-lg-2">

        </div>
        <div class="col-lg-10">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container ">
              <!-- Logo or Home Link -->
              <!-- Collapsible Navbar Content -->
              <div class="collapse navbar-collapse" id="navbar2">
                <!-- Navbar Items -->
                <ul class="navbar-nav mr-auto list-group">
                  <li class="list-group-item ">
                    <router-link class="nav-link" to="/">Home</router-link>
                  </li>
                  <li class="list-group-item  ">
                    <router-link to="ProductCart" class="nav-link btn" id="navDropDanhMuc"
                      role="">Product</router-link>
                  </li>
                  <li class="list-group-item">
                    <a class="nav-link" href="#">Shopping</a>
                  </li>
                  <li class="list-group-item">
                    <a class="nav-link" href="#">Giới thiệu</a>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MenuView',
  mounted() {
    // document.getElementById('navDropDanhMuc').addEventListener('click', (event) => {
    //   event.target.parentNode.querySelector('.dropdown-menu').style.display = "block"
    // }),
    // document.getElementById('navbarDropdownAccounts').addEventListener('click',(event)=>{
    //   event.target.parentNode.querySelector('dropdown-menu').style.display = "block"
    // })
    // const navDropDanhMuc = document.getElementById('navDropDanhMuc')
    // // const navbarDropdownAccounts = document.getElementById('navbarDropdownAccounts')
    // if (navDropDanhMuc) {
    //   navDropDanhMuc.addEventListener('click', (event) => {
    //     const dropdownMenu = event.target.parentNode.querySelector('.dropdown-menu')
    //     if (navDropDanhMuc) {

    //       dropdownMenu.style.display = "block"
    //       document.addEventListener('click', this.handleOutsideClick);
    //     }
    //   })
    // }
  },
};
</script>

<style>
/* Add your custom styles here */
.no-bullet {
  list-style-type: none;
}
</style>