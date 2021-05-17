<template>
    <main>
        <div class="container-fluid c-section">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-spacing-top-medium"></div>
                    <h2 style="text-align: center;">Profile Page</h2>
                    <form>
                        <!--name-->
                        <div class="a-row a-spacing-base">
                            <label for="ap_customer_name" class="a-form-label">Name</label>
                            <input type="text" id="ap_customer_name" v-model="name" :placeholder="$auth.$state.user.name" class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info">
                        </div>

                        <!--Email-->
                        <div class="a-row a-spacing-base">
                            <label for="ap_customer_email" class="a-form-label">Email</label>
                            <input type="email" id="ap_customer_email" v-model="email" :placeholder="$auth.$state.user.email" class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info">
                        </div>

                        <!--Password-->
                        <div class="a-row a-spacing-base">
                            <label for="ap_customer_password" class="a-form-label">Password</label>
                            <input type="password" id="ap_customer_password" v-model="password" class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info">
                        </div>

                        <!-- Button -->
                        <div class="a-spacing-top-large">
                            <span class="a-button-register">
                                <span class="a-button-inner">
                                    <span class="a-button-text" @click="onUpdateProfile">Update Profile</span>
                                </span>
                            </span>
                        </div>
                    </form>
                </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                name: "",
                email: "",
                password: ""
            }
        },
        methods: {
            async onUpdateProfile() {
                let data = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                };
                try {
                    let response = await this.$axios.$put("auth/user", data);
                    if(response.success)
                    {
                        this.name = "";
                        this.email = "";
                        this.password = "";
                        await this.$auth.fetchUser();
                    }
                } catch (e) {
                }
            }
        }
    }
</script>

<style scoped>
</style>