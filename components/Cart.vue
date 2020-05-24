<template>
   <div>
      <b-dropdown position="is-bottom-left" append-to-body aria-role="menu">
         <b-tooltip slot="trigger" label="View Cart Items" position="is-bottom">
            <div style="cursor:pointer;">
               <b-icon class="cart" icon="cart" ></b-icon>
               <span id="lblCartCount" class="is-primary" >0</span>
            </div>
         </b-tooltip>
         <b-dropdown-item
            aria-role="menu-item"
            :focusable="false"
            paddingless>
               <div class="modal-card" style="width:300px;">
                  <section  class="modal-card-body" style="overflow: auto; height:150px;">
                      <div>
                          asdasd
                      </div>
                  </section>
                  <footer class="modal-card-foot">
                      <div style="card-items">
                         <h4>Total: 5000</h4>
                      </div>
                      &emsp;
                    <nuxt-link to="cart-items"> 
                        <button expanded class="button is-primary" >Proceed to Checkout</button>
                    </nuxt-link>
                  </footer>
               </div>
         </b-dropdown-item>
      </b-dropdown>
   </div>
</template>


<script>
export default {
    data(){
        return{
   
        }
    },
    computed:{
        isOpen(){
            return this.$store.isCollapse
        }
    },
  
}
</script>

<style>
#lblCartCount {
    font-size: 12px;
    background: #6342f5;
    color: #fff;
    padding: 0 5px;
    vertical-align: top;
}
.cart{
    color: #000;
}
</style>