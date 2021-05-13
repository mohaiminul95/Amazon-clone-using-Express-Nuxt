<template>
    <main>
        <div class="container-fluid c-section">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-spacing-top-medium"></div>
                    <h2 style="text-align: center;">Add New Category</h2>
                    <form>
                        <!-- Type -->
                        <div class="a-spacing-top-medium">
                            <label>Type</label>
                            <input type="text" class="a-input-text" style="width: 100%;" v-model="type">
                        </div>

                        <hr>
                        <!-- Button -->
                        <div class="a-spacing-top-large">
                            <span class="a-button-register">
                                <span class="a-button-inner">
                                    <span class="a-button-text" @click="onAddCategory">Add Category</span>
                                </span>
                            </span>
                        </div>
                    </form>

                    <div class="a-spacing-top-medium">
                        <ul class="list-group-item">
                            <li v-for="category in categories" :key="category._id">{{ category.type }}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        async asyncData({ $axios }) {
            try{
                let response = await $axios.$get('categories');
                return {
                    categories: response.categories
                }
            } catch (e) {
            }
        },
        data() {
            return {
                type: ""
            }
        },
        methods: {
            async onAddCategory() {
                try{
                    let data = { type: this.type };
                    await this.$axios.$post('categories', data);
                    this.categories.push(data);
                } catch (e) {
                }
            }
        }
    }
</script>

<style scoped>
</style>