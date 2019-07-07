<template>
  <div id="app">
    <Nav />
    <transition name="fade">
    <router-view/> 
    </transition>
    <Footer />    
  </div>
</template>

<style lang="scss">
#app {
  font-family: "proxima-nova", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.router-link-exact-active {
  color: #B7950B !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

div {
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
-moz-box-sizing: border-box;    /* Firefox, other Gecko */
box-sizing: border-box;         /* Opera/IE 8+ */
}
</style>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'wrapper',
  components: {
    Nav,
    Footer
  }
}
</script>
