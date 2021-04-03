<template>
    <div>
      <header class="header bg-white">
        <div class="container px-0 px-lg-3">
          <nav class="navbar navbar-expand-lg navbar-light py-3 px-lg-0"><router-link class="navbar-brand" :to="{name: 'home'}"><span class="font-weight-bold text-uppercase text-dark">Boutique</span></router-link>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <!-- Link--><router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
                </li>
                <li class="nav-item">
                  <!-- Link--><router-link class="nav-link" :to="{name: 'shop'}">Shop</router-link>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto">               
                <li class="nav-item"><router-link class="nav-link" :to="{name: 'cart'}"> <i class="fas fa-dolly-flatbed mr-1 text-gray"></i>Cart<small class="text-gray">({{ cartItems }})</small></router-link></li>
                <template v-if="!isLogin">
                  <li class="nav-item"><router-link class="nav-link" :to="{name: 'login'}"> <i class="fas fa-user-alt mr-1 text-gray"></i>Login</router-link></li>
                  <li class="nav-item"><router-link class="nav-link" :to="{name: 'register'}"> <i class="fas fa-user-plus mr-1 text-gray"></i>Register</router-link></li>
                </template>
                <li v-else class="nav-item"> <a href="#" @click="logout" class="nav-link"><i class="fas fa-user-alt mr-1 text-gray"></i>Hi, {{ username }}/LogOut</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
</template>

<script>

  export default {
    computed: {
      cartItems() {
        return this.$store.state.cart.length;
      },
      isLogin() {
        return this.$store.state.isLogin;
      },
      username() {
        return this.$store.state.user.firstName;
      }
    },
    methods: {
      logout() {
        this.$store.state.isLogin = false;
        this.$store.state.user = [];
      }
    }
  }

</script>


<style scoped>
  .router-link-exact-active {
    color: #dcb14a !important;
  }
</style>