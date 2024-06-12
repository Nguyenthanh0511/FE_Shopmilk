<template>
    <div>
      <div class="row mt-5">
        
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card border-primary">
                <div class="col-12 text-center">
          <h4 class="pt-3">Create account</h4>
        </div>
          <form @submit.prevent="addUser">
            <div class="form-group">
              <label for="UId"></label>
              <input id="UId" type="text" class="form-control" v-model="UId" placeholder="Enter User ID" required>
            </div>
            <div class="form-group text-center">
              <label  for="UUserName"></label>
              <input id="UUserName" type="text" class="form-control" v-model="UUserName" placeholder="Enter Username" required>
            </div>
            <div class="form-group text-center">
              <label for="UEmail"></label>
              <input id="UEmail" type="email" class="form-control" v-model="UEmail" placeholder="Enter Email" required>
            </div>
            <div class="form-group">
              <label for="UPassword"></label>
              <input id="UPassword" type="password" class="form-control" v-model="UPassword" placeholder="Enter Password" required>
            </div>
            <div class="form-group">
              <label for="URole"></label>
              <input id="URole" type="text" class="form-control" v-model="URole" placeholder="Enter Role" required>
            </div>
            <div class="form-group text-center">
              <button type="submit" class="btn btn-primary mr-2">Submit</button>
              <router-link to="/SignIn" type="submit" class="btn btn-primary">SingIn</router-link>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
import axios from 'axios'
import swal from 'sweetalert';
export default {
    name: "AddUser",
    props: {
        categories: {
            type: Array,
            default() { }
        },
        baseURL: {
            type: String
        }
    },
    data() {
        return {
            UId: "",
            UUserName:"",
            UEmail: "",
            UPassword:"",
            URole:""
        }

    },
    methods: {
        async addUser() {
            try {

                const formData = new FormData();
                formData.append("UId", this.UId);
                formData.append("UUserName", this.UUserName);
                formData.append("UEmail", this.UEmail);
                formData.append("UPassword", this.UPassword);
                formData.append("URole",this.URole);
                await axios.post(`${this.baseURL}/login/register`, formData, {
                    headers:{
                        "Content-Type":"multipart/form-data"

                    } 
                })
                    .then(() => {
                        this.$router.push('/signin')
                    })
                   
                swal({
                    text: "AddCreate Successfully",
                    icon: "success",
                    closeOnClickOutside: false
                })
            }catch(err){
                swal("Oops!", "Failed to add product. Please try again later.", "error");
            }
}
    }
}
</script>
