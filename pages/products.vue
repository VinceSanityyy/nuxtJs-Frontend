<template>
<div>
   <section class="section" >
   <p>
    Welcome to our awesome market
    Below you will find your latest products
   </p>

  </section>
    <div class="container">
        <div class="columns">
          <div class="column is-one-quarter">
           <div class="card" style="justify-content: center;">
              <header class="card-header">
                <p class="card-header-title has-text-grey">
                  Options
                </p>
              </header>
              <div class="card-content" >
                <div class="content has-text-centered" >
                  <b-field :label = "label" style="border-bottom: 1px solid grey;">
                  
                      <b-slider type="is-primary" :value="20" :max=5000 v-model.number="priceRange"></b-slider>
                  </b-field>
                  <span class="is-pulled-left">$ 0</span>
                  <span class="is-pulled-right">$ 5000</span>
                </div>
              </div>
              <footer class="card-footer">
                <div class="card-footer-item">
                  <span>
                    <slot />
                  </span>
                </div>
              </footer>
            </div>
          </div>
          <div class="column is-three-quarters">

          </div>
        </div>
    </div>
</div>
</template>

<script>
import Card from '~/components/Card'
export default {
  components: {
    Card
  },
  created(){
    this.$store.dispatch('getTodos')
  },
  data(){
    return{
      priceRange: 0,
    }
  },
  computed:{
    label(){
      return "Highest Price: $ " + this.priceRange
    }
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