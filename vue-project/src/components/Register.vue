<template>
  <div>
      <div class="row align-items-center justify-content-center py-5">
          <div class="col-md-5">
              <form class="border p-5">
              <fieldset>
                <legend>Login</legend>
                <div class="form-group">
                  <label for="exampleInputEmail">First Name</label>
                  <input class="form-control" v-model="firstName" type="text" placeholder="Enter First Name" required>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail">Last Name</label>
                  <input class="form-control" v-model="lastName" type="text" placeholder="Enter First Name" required>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail">Email address</label>
                  <input class="form-control" v-model="email" type="email" placeholder="Enter email" required>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword">Password</label>
                  <input class="form-control" v-model="password" type="password" placeholder="Password" required>
                </div>
               
                <button class="btn btn-primary" type="button" @click="register">Register</button>
              </fieldset>
        </form>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            axios.post('http://localhost:3000/users/register', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
            }).then(res => {
                if (res.data.statusCode == 201) {
                    alert ('You are registered successfully')
                }
            })
                .catch(error => {
                    console.log(error.response);
                    alert(error.response.data.message)
                })
        }
    }
}
</script>

<style>

</style>