<template>
    <div class="registerPage">
        <div class="container">
            <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <div class="text-center">
                        <nuxt-link to="/"><img src="/img/logo-black.png"></nuxt-link>
                    </div>

                    <form class="mt-4">
                        <div class="a-box a-spacing-extra-large">
                            <div class="a-box-inner">
                                <h1 class="a-spacing-small">Create Account</h1>
                                <!--name-->
                                <div class="a-row a-spacing-base">
                                    <label for="ap_customer_name" class="a-form-label">Name</label>
                                    <input type="text" id="ap_customer_name" v-model="name" class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info">
                                </div>

                                <!--Email-->
                                <div class="a-row a-spacing-base">
                                    <label for="ap_customer_email" class="a-form-label">Email</label>
                                    <input type="email" id="ap_customer_email" v-model="email" class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info">
                                </div>

                                <!--Password-->
                                <div class="a-row a-spacing-base">
                                    <label for="ap_customer_password" class="a-form-label">Password</label>
                                    <input type="password" id="ap_customer_password" v-model="password" class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info">
                                    <div class="a-alert-container">
                                        <div class="a-alert-content">
                                            Password must be atleast 6 characters.
                                        </div>
                                    </div>
                                </div>

                                <!-- Button -->
                                <div class="a-row a-spacing-extra-large mb-4">
                                    <span class="a-button-primary">
                                        <span class="a-button-inner">
                                            <span class="a-button-text" @click="onSignup">Create Your Amazon Account</span>
                                        </span>
                                    </span>
                                    <div class="a-row a-spacing-top-medium a-size-small">
                                        <b>
                                            By creating an account, you agree to amazon's
                                            <a href="#">Condistion's of use</a> and
                                            <a href="#">Privacy notice</a>
                                        </b>
                                    </div>
                                </div>
                                <hr>
                                <div class="a-row">
                                    <b>
                                        Already have an account?
                                        <nuxt-link to="/login" class="a-link-emphasis">Sign In</nuxt-link>
                                    </b>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // middleware: "auth",
        // auth: "guest",
        layout: "none",
        data() {
            return {
                name: "",
                email: "",
                password: ""
            }
        },
        methods: {
            async onSignup() {
                try {
                    let data = {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    }
                    let response = await this.$axios.$post("auth/signup", data);
                    if(response.success)
                    {
                        this.$auth.loginWith("local", {
                            data: {
                                email: this.email,
                                password: this.password
                            }
                        });
                        this.$router.push("/")
                    }
                } catch (e) {
                }
            }
        }
    }
</script>

<style scoped>
</style>