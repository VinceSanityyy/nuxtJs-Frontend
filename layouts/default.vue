<template>
  <div>
    <Navbar></Navbar>
    <nuxt/>
    <Login/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Login from '~/components/Login'
export default {
  components:{
    Navbar,
    Login
  },
  data () {
    return {
     
    }
  }
}
</script>
