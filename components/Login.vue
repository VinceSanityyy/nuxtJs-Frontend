<template>
        <b-modal :active.sync="isCardModalActive" :width="500">
            <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                v-model="email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                password-reveal
                                v-model="password"
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>
                        <b-checkbox>Remember me</b-checkbox>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="closeModal">Close</button>
                        <button @click="login" class="button is-primary">Login</button>
                    </footer>
                </div>
        </b-modal>
</template>

<script>
import Vue from 'vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading);

    export default {
        data() {
            return {
                email:'',
                password:''
            }
        },
        computed: {
            isCardModalActive() {
                return this.$store.state.loginModalShow;
            },
        },
        methods:{
            closeModal(){
                this.$store.commit("showModal", false);
            },
            login(){
                this.$store.dispatch('login',{
                    email: this.email,
                    password: this.password
                }).then((response)=>{
                    return response
                }).catch((err)=>{
                    console.log(err)
                }).finally(()=>{
                    // loader.hide()
                })
                this.$store.commit("showModal", false);
                this.$store.commit('ifAuth',true);
            }
        }

    }
</script>