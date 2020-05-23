<template>
    <b-navbar type="is-light">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                 <nuxt-link to="/products">Products</nuxt-link>
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a v-show="isAuthenticated == false" class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a v-if="isAuthenticated == true" @click="logOut" class="button is-primary">
                        Log out
                    </a>
                    <a v-else @click="signinModal" class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    
   
</template>

<script>

export default {
    data(){
        return{
            isCardModalActive: false,
        }
    },
    computed:{
        isAuthenticated(){
            return this.$store.state.authenticated;
        }
    },
    methods:{
        signinModal(){
            
            this.$store.commit("showModal", true);
        },
        logOut(){
                this.$buefy.dialog.confirm({
                message: 'Are you sure you want to log out?',
                onConfirm: () => [
                    this.$store.commit('ifAuth',false),
                    this.$buefy.toast.open('Log out successfully'),
                    this.$router.push('/')
                    ]
            })
            
        },
      
        
    },
    created(){
        
    }
}
</script>