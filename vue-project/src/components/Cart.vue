<template>
  <div class="container">
        <section class="py-5">
          <h2 class="h5 text-uppercase mb-4">Shopping cart</h2>
          <div class="row">
            <div class="col-lg-8 mb-4 mb-lg-0">
              <!-- CART TABLE-->
              <div class="table-responsive mb-4">
                <table class="table">
                  <thead class="bg-light">
                    <tr>
                      <th class="border-0" scope="col"> <strong class="text-small text-uppercase">Product</strong></th>
                      <th class="border-0" scope="col"> <strong class="text-small text-uppercase">Price</strong></th>
          
                     <!-- <th class="border-0" scope="col"> <strong class="text-small text-uppercase">Total</strong></th> -->
                      <th class="border-0" scope="col"> </th>
                    </tr>
                  </thead>
                  <tbody>




                    <tr v-for="(product, i) in products" v-bind:key="i">
                      <th class="pl-0 border-0" scope="row">
                        <div class="media align-items-center"><img :src="product.image" alt="..." width="70">
                          <div class="media-body ml-3"><strong class="h6">{{ product.title }}</strong></div>
                        </div>
                      </th>
                      <td class="align-middle border-0">
                        <p class="mb-0 small">${{ product.price }}</p>
                      </td>
          
                      
                      <!--<td class="align-middle border-0">
                        <p class="mb-0 small">${{ product.price * 1 }}</p>
                      </td>-->
                      <td class="align-middle border-0"><a class="reset-anchor" href="#" @click="removeFromCart(i)"><i class="fas fa-trash-alt small text-muted"></i></a></td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              <!-- CART NAV-->
              <div class="bg-light px-4 py-3">
                <div class="row align-items-center text-center">
                  <div class="col-md-6 mb-3 mb-md-0 text-md-left"><router-link class="btn btn-link p-0 text-dark btn-sm" :to="{name: 'shop'}"><i class="fas fa-long-arrow-alt-left mr-2"> </i>Continue shopping</router-link></div>
                </div>
              </div>
            </div>
            <!-- ORDER TOTAL-->
            <div class="col-lg-4">
              <div class="card border-0 rounded-0 p-lg-4 bg-light">
                <div class="card-body">
                  <h5 class="text-uppercase mb-4">Cart total</h5>
                  <ul class="list-unstyled mb-0">
                    <li class="d-flex align-items-center justify-content-between"><strong class="text-uppercase small font-weight-bold">Subtotal</strong><span class="text-muted small">${{ totalPrice }}</span></li>
                    <li class="border-bottom my-2"></li>
                    <li class="d-flex align-items-center justify-content-between mb-4"><strong class="text-uppercase small font-weight-bold">Total</strong><span>${{ totalPrice }}</span></li>
                  </ul>
                </div>
                <button class="btn btn-outline-dark btn-sm" @click="submitOrder" v-if="isLogin">Complete your order<i class="fas fa-long-arrow-alt-right ml-2"></i></button>
                <div v-else class="alert alert-danger">you should login to complete your order</div>
              </div>
              
            </div>
          </div>
        </section>
      </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            total: 0,
        }
    },
    computed: {
        products() {
            return this.$store.state.cart;
        },
        totalPrice() {
          this.total = 0
           this.products.forEach(product => {
                this.total += product.price;
            });
            return this.total;
        },
        isLogin() {
        return this.$store.state.isLogin;
      },
    },
    methods: {
        removeFromCart(index) {
            this.$store.state.cart.splice(index, 1)
        },

        submitOrder() {
          if (this.total == 0) {
            return alert('you should add product to your cart.')
          }
          axios.post('http://localhost:3000/orders/new', {
            userId: this.$store.state.user.id,
            cart: this.products,
          }).then(res => {
            if(res.data.statusCode == 201) {
              alert('your order is completed.')
            }
          }).catch(error =>{
            alert(error.response.data.message)
          })
        }
        
    }
}
</script>

<style>

</style>