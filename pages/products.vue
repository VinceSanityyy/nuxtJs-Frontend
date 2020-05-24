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
            <div class="column is-3">
               <div class="card" style="justify-content: center;">
                  <header class="card-header">
                     <p class="card-header-title has-text-grey">
                        Options
                     </p>
                  </header>
                  <div class="card-content" >
                     <div class="content has-text-centered" >
                        <b-field :label = "label">
                           <b-slider type="is-primary" @change="togglePriceRange" :value="20" :max=5000 v-model.number="priceRange"></b-slider>
                        </b-field>
                        <span class="is-pulled-left">$ 0</span>
                        <span class="is-pulled-right">$ 5000</span>
                     </div>
                  </div>
                  <div class="card-content" >
                     <div class="content has-text-centered" >
                        <b-field label="Category">
                           <b-select expanded placeholder="Select option">
                              <option
                                 v-for="option in options"
                                 :value="option.id"
                                 :key="option.id">
                                 {{ option.category }}
                              </option>
                           </b-select>
                        </b-field>
                     </div>
                  </div>
                    <div class="card-content" >
                     <div class="content has-text-centered" >
                      <div class="field">
                          <b-switch :value="true" type="is-info">
                              Toggle Sale Items
                          </b-switch>
                      </div>
                     </div>
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
             <div class="column is-9">
           
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
      options:[
        {id: 1, category:'Shoes'}
      ]
    }
  },
  computed:{
    label(){
      return "Highest Price: $ " + this.priceRange
    }
  },
  methods:{
    togglePriceRange(){
      console.log(this.priceRange)
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