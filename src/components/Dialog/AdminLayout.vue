<template>
  <div class="admin-layout">

    <div class="Admin-body">
      <div class="row">
        <nav class="admin-sidebar col-3">
          <ul class="list-group bg">
            <router-link class="text-dark" to="/AdminLayout">
              <li class="list-group-item">
              Dashboard
              </li>
            </router-link>
            <router-link class="text-dark" to="/AdminLayout/ShowProduct">
              <li class="list-group-item">
                Product
              </li>
            </router-link>
            <router-link class="text-dark" to="/AdminLayout/ShowCategory">
              <li class="list-group-item">
                CATEGORY
              </li>
            </router-link>
           
          </ul>
        </nav>
        <main class="admin-content col-9">
          <router-view 
          :categories="categories" 
          :products="products" 
          :baseURL="baseURL">
          </router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminLayout",
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    products: {
      type: Array,
      default: () => []
    },
    baseURL: {
      type: String,
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token'); // You should use removeItem instead of getItem here
      this.$router.push('/');
    }
  },
  mounted() {
    console.log('recieved categories:', this.categories)
  }
}
</script>
<style scoped>
.admin-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #343a40;
  color: #fff;
}

.admin-body {
  display: flex;
  flex: 1;
}

.admin-sidebar {
  width: 200px;
  background-color: #f8f9fa;
  padding: 10px;
}

.admin-sidebar ul {
  list-style: none;
  padding: 0;
}

.admin-sidebar li {
  margin: 10px 0;
}

.admin-sidebar a {
  text-decoration: none;
  color: #007bff;
}

.admin-content {
  flex: 1;
  padding: 20px;
}

.admin-sidebar .list-group-item:hover {
  background-color: #007bff;
  color: #fff;
}
</style>
