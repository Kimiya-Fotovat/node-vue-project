<template>
  <div class="shop-continer">

      <div class="row">

            <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(product, index) in products" v-bind:key="index">
              <div class="product text-center">
                <div class="position-relative mb-3">
                  <div class="badge text-white badge-"></div><router-link class="d-block" :to="{name: 'product', params: {id: product._id}}"><img class="img-fluid w-100" :src="product.image" alt="..."></router-link>
                  <div class="product-overlay">
                    <ul class="mb-0 list-inline">
                      <li class="list-inline-item m-0 p-0"><router-link class="btn btn-sm btn-dark" :to="{name: 'product', params: {id: product._id}}">Show Product</router-link></li>
                    </ul>
                  </div>
                </div>
                <h6> <a class="reset-anchor" href="detail.html">{{ product.name }}</a></h6>
                <p class="small text-muted">${{ product.price }}</p>
              </div>
            </div>

      </div>
      
  </div>
</template>

<script>
import axios from 'axios'
export default {
    
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    created() {
      axios.get('http://localhost:3000/products')
        .then(res => this.$store.state.products = res.data )
        .catch(error => console.log(error))
    }
}
</script>

<style>

</style>