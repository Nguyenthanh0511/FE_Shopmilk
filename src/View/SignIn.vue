<template>
  <div class="container">
    <div class="row mt-5">
        
      </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card border-primary">
          <div class="card-header bg-primary text-white text-center">
            <h2>Login</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="signin">
              <div class="form-group">
                <label for="username">Username</label>
                <input v-model="username" type="text" class="form-control" id="username" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" required>
              </div>
              <button type="submit" class="btn btn-primary btn-block mt-3">Login</button>
            </form>
            <hr>
            <p class="text-center mb-0">
              <small class="text-muted">Forgot your password?</small>
            </p>
          </div>
        </div>
        <div class="text-center mt-3">
          <router-link class="btn btn-dark" :to="{ name: 'Register' }">Create an Account</router-link>
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
        UId: "",
        username: null,
        password: null,
      };
    },
    methods: {
      async signin() {
        try {
          // Create a FormData object to handle multipart/form-data
          const formData = new FormData();
          formData.append('UUserName', this.username);
          formData.append('UPassword', this.password);
          this.UId = axios.get(`${this.baseURL}/Users/retrunFllowId/${this.username}`)
          formData.append('UId', this.UId);
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
        const userid = firstUser.uId;
        // Store role in localStorage
        localStorage.setItem('role', role);
        localStorage.setItem('token', token);
        localStorage.setItem('userId',userid)
        this.$emit('login-success', token);
        // Check if token and role exist, then redirect to home
        if (token && role) {
          this.$router.push('/');
        }
        else{
          console.log('token, role, userid, which are another null');
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