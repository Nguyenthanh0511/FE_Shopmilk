<template>
  <div>
<!-- Don't fix issue of the menu -->
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><img src="../assets/Img/logo.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul>
        </ul>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Phần search -->
          <div class="col-md-6">
            <form class="form-inline flex justify-content-center">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Searchhhh</button>
            </form>
          </div> <!-- 6 -->
          <!-- Đăng nhập -->
        </div>
        <div class="col ml-5">
            <ul>
              <li class="nav-item dropdown">
                <a class="nav-link fas fa-user text-black dropdown-toggle" href="#" id="navbarDropdownAccounts" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Accounts
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownAccounts">
                  <a class="dropdown-item" >
                    <router-link to="/adminLayout"></router-link>Admin
                    </a>
                  <a class="dropdown-item show" >Login</a>
                </div>
              </li>
            </ul>
          </div>
      </nav>
    </div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">Sữa Tươi</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active dropdown">
                <a class="nav-link dropdown-toggle" id="navDropDanhMuc" role="button" href="#">Danh mục <span
                    class="sr-only"></span></a>
                <div class="dropdown-menu" aria-labelledby="navDropDanhMuc">
                  <a class="dropdown-item" href="#">Admin</a>
                  <a class="dropdown-item show" data-href="/login">Login</a>
                  <a class="dropdown-item show" data-href="/wishlist">Wish list</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sản phẩm ưa thích</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sản phẩm khuyến mãi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Giới thiệu</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
    const navDropDanhMuc = document.getElementById('navDropDanhMuc')
    // const navbarDropdownAccounts = document.getElementById('navbarDropdownAccounts')
    if(navDropDanhMuc){
      navDropDanhMuc.addEventListener('click',(event)=>{
        const dropdownMenu = event.target.parentNode.querySelector('.dropdown-menu')
        if(navDropDanhMuc){

          dropdownMenu.style.display = "block"
          document.addEventListener('click', this.handleOutsideClick);
          }
      })
    }
  },
  methods:{
    handleOutsidClick(eventlist){
      const dropdownmenu = document.querySelector('.dropdown-menu');
      dropdownmenu.foreach((menu)=>{
        if(!menu.contains(eventlist.target) && !menu.previousElementSibling.contains(event.target))
          menu.style.display = "none"
      });
      document.removeEventListener('click', this.handleOutsideClick);
    }
  }
};
</script>

<style>
/* Add your custom styles here */
</style>