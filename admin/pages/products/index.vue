<template>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-section">
                        <div class="a-spacing-top-medium"></div>
                        <h2 style="text-align: center;">Add New Product</h2>
                        <form>
                            <!--Category dropdown-->
                            <div class="a-spacing-top-medium">
                                <label>Category</label>
                                <select class="a-select-option" v-model="categoryID">
                                    <option v-for="category in categories" :value="category._id" :key="category._id">{{ category.type }}</option>
                                </select>
                            </div>

                            <!--Owner dropdown-->
                            <div class="a-spacing-top-medium">
                                <label>Owner</label>
                                <select class="a-select-option" v-model="ownerID">
                                    <option v-for="owner in owners" :value="owner._id" :key="owner._id">{{ owner.name}}</option>
                                </select>
                            </div>

                            <!--Title-->
                            <div class="a-spacing-top-medium">
                                <label>Title</label>
                                <input type="text" class="a-input-text" style="width: 100%" v-model="title">
                            </div>

                            <!--Price-->
                            <div class="a-spacing-top-medium">
                                <label>Price</label>
                                <input type="number" class="a-input-text" style="width: 100%" v-model="price">
                            </div>

                            <!--Stock Quantity-->
                            <div class="a-spacing-top-medium">
                                <label>Stock Quantity</label>
                                <input type="number" class="a-input-text" style="width: 100%" v-model="stockQuantity">
                            </div>

                            <!--Description-->
                            <div class="a-spacing-top-medium">
                                <label>Description</label>
                                <textarea placeholder="Product dexcription" style="width: 100%" v-model="description"></textarea>
                            </div>

                            <!--Select photo-->
                            <div class="a-spacing-top-medium">
                                <label>Add Photo</label>
                                <div class="a-row a-spacing-top-medium">
                                    <label class="choosefile-button">
                                        <i class="fal fa-plus"></i>
                                        <input type="file" @change="onFileSelected">
                                        <p style="margin-top: -70px;">{{ fileName }}</p>
                                    </label>
                                </div>
                            </div>

                            <hr>
                            <!-- Button -->
                            <div class="a-spacing-top-large">
                                <span class="a-button-register">
                                    <span class="a-button-inner">
                                        <span class="a-button-text" @click="onAddProduct">Add Product</span>
                                    </span>
                                </span>
                            </div>
                        </form>
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
                let categories = await $axios.$get('categories');
                let owners = await $axios.$get('owners');
                const [catResponse, ownerResponse] = await Promise.all([categories, owners]);
                return {
                    categories: catResponse.categories,
                    owners: ownerResponse.owners
                }
            } catch (e) {
            }
        },
        data( ) {
            return {
                categoryID: null,
                ownerID: null,
                title: "",
                price: 0,
                description: "",
                stockQuantity: 1,
                selectedFile: null,
                fileName: ""
            }
        },
        methods: {
            onFileSelected(event) {
                this.selectedFile = event.target.files[0];
                this.fileName = event.target.files[0].name;
            },
            async onAddProduct() {
                let data = new FormData();
                data.append('title', this.title);
                data.append('price', this.price);
                data.append('description', this.description);
                data.append('stockQuantity', this.stockQuantity);
                data.append('categoryID', this.categoryID);
                data.append('ownerID', this.ownerID);
                data.append('photo', this.selectedFile, this.selectedFile.name);
                let result = await this.$axios.$post('products', data);
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>
</style>