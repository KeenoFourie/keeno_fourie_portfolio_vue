<template>
  <NavBar/>
  <Logo/>
  <router-view/>
  <Footer/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Logo from '@/components/LogoComp.vue'
import Footer from '@/components/FooterComp.vue'
    export default {
        components: {
          NavBar,
          Logo,
          Footer
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
