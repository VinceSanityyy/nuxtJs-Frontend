<template>
 <section class="section" >
   
    <div class="container" style="display:inline-block;">
       <div class="columns is-mobile" >
      <card
        title="Free"
        icon="github-circle"
      >
        Open source on <a href="https://github.com/buefy/buefy">
          GitHub
        </a>
      </card>

      <card
        title="Responsive"
        icon="cellphone-link"
      >
        <b class="has-text-grey">
          Every
        </b> component is responsive
      </card>

      <card
        title="Modern"
        icon="alert-decagram"
      >
        Built with <a href="https://vuejs.org/">
          Vue.js
        </a> and <a href="http://bulma.io/">
          Bulma
        </a>
      </card>

      <card
        title="Lightweight"
        icon="arrange-bring-to-front"
      >
        No other internal dependency
      </card>
    </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
export default {
  components: {
    Card
  },
  created(){
    this.$store.dispatch('getTodos')
  }
}
</script>

<style>
.section{
  justify-items: center;
  justify-content: center;
  display: flex;
}

</style>