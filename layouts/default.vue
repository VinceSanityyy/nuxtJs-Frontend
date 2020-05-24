<template>
  <div>
    <Navbar>
    </Navbar>
    <nuxt/>
    <Login/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Login from '~/components/Login'
import Cart from '~/components/Cart'
export default {
  components:{
    Navbar,
    Login,
    Cart
  },
  data () {
    return {
     
    }
  }
}
</script>
