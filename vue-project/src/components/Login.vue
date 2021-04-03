<template>
  <div>
      <div class="row align-items-center justify-content-center py-5">
          <div class="col-md-5">
              <form class="border p-5" v-if="!isLogin">
              <fieldset>
                <legend>Login</legend>
                <div class="form-group">
                  <label for="exampleInputEmail">Email address</label>
                  <input class="form-control" v-model="email" type="text" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword">Password</label>
                  <input class="form-control" v-model="password" type="password" placeholder="Password">
                </div>
               
                <button class="btn btn-primary" type="button" @click="login">Submit</button>
              </fieldset>
        </form>
        <div v-else class="alert alert-success">
            you are logged in successfully.
        </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        isLogin() {
        return this.$store.state.isLogin;
      },
    },
    methods: {
        login() {
            axios.post('http://localhost:3000/users/login', {
                email: this.email,
                password: this.password
            }).then(res => {
                if(res.data.statusCode == 200) {
                    this.$store.state.isLogin = true,
                    this.$store.state.user = {
                        firstName: res.data.firstName,
                        id: res.data.userId,
                    }
                }else {
                    alert('something went wrong.')
                }
            })
            .catch(error => {
                alert(error.response.data.message)
            })
        }
    }
}
</script>

<style>

</style>