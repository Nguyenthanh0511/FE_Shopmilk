<template>
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <!-- You can add a heading or a logo here if needed -->
          </div>
        </div>
        <div class="row">
          <div>
            <div id="signup-div" class="flex-item border">
              <h2 class="pt-4 text-center">Đăng nhập</h2>
              <form @submit.prevent="signin" class="pt-4 pl-4 pr-4">
                <div class="form-group">
                  <label>Username</label>
                  <input v-model="username" type="text" class="form-control" required />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input v-model="password" type="password" class="form-control" required />
                </div>
                <button type="submit" class="btn btn-primary mt-3 py-0">
                  Đăng nhập
                </button>
              </form>
              <hr />
              <small class="form-text text-muted pt-2 pl-4 text-center">
                Bạn đã quên mật khẩu?
              </small>
              <p class="text-center">
                <!-- If you have a Signin route, you can uncomment this and adjust the route name accordingly -->
                <!-- <router-link class="btn btn-dark text-center mx-auto px-5 py-1 mb-2" :to="{ name: 'Signin' }">Signin Here</router-link> -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'SignIn',
    props: ["baseURL"],
    data() {
      return {
        UId: "U8",
        username: null,
        password: null,
      };
    },
    methods: {
      async signin() {
        try {
          // Create a FormData object to handle multipart/form-data
          const formData = new FormData();
          formData.append('UId', this.UId);
          formData.append('UUserName', this.username);
          formData.append('UPassword', this.password);
          
          const response = await axios.post(this.baseURL+"/Login/Login", formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          const token = response.data;
          // Store token and handle successful login
          // Fetch user details to get the role
          const userResponse = await axios.get(this.baseURL + '/Users/getall', {
          headers: {
            Authorization: `Bearer ${token}` // Use token in headers
          }
        });
        const firstUser = userResponse.data[0];
        const role = firstUser.uRole;
        // Store role in localStorage
        localStorage.setItem('role', role);
        localStorage.setItem('token', token);
        this.$emit('login-success', token);
        // Check if token and role exist, then redirect to home
        if (token && role) {
          this.$router.push('/');
        }
        } catch (error) {
          // Handle login error
          console.error('Error logging in:', error);
          alert('Login failed. Please check your credentials and try again.');
        }
      }
    }
  }
  </script>