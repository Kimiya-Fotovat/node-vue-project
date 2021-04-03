<template>
  <div>

    <app-header></app-header>

    <div class="container">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
    </div>

    <app-footer></app-footer>

    
  </div>
</template>

<script>
 import Header from './components/Header'
 import Footer from './components/Footer'
  export default {

    components: {
      appHeader: Header,
      appFooter: Footer,
    }
  }

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
