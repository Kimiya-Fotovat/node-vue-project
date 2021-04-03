<template>
    <div>
        <section class="hero pb-3 bg-cover bg-center d-flex align-items-center mb-1" style="background: url(./public/img/hero-banner-alt.jpg)">
          <div class="container py-5">
            <div class="row px-4 px-lg-5">
              <div class="pp col-lg-6">
                <p class="text-muted small text-uppercase mb-2">New Inspiration 2020</p>
                <h1 class="h2 text-uppercase mb-3">20% off on new season</h1>
                <!-- Link --> <router-link class="btn btn-dark" href="shop.html" :to="{name: 'shop'}">Browse collections</router-link>  
              </div>
            </div>
          </div>
        </section>
        
        <section class=" my row">
          <div class="box1 col-lg-7  mt-0">
            <img class="" src="public/img/1.png" alt="">
          </div>
          <div class="box2 col-lg-5  mt-1">
            <img class="mb-1" src="public/img/2.png" alt="">
            <img src="public/img/3.png" alt="">
          </div>
          <div class="box3 col-lg-12 mt-1 mb-2">
            <img src="public/img/4.png" alt="">
          </div>
        </section>
    </div>
</template>