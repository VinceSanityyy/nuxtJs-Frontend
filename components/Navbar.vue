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
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a @click="signinModal" class="button is-light">
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
            isCardModalActive: false
        }
    },
    methods:{
        signinModal(){
            console.log('modal')
            this.isCardModalActive = true
        }
    }
}
</script>