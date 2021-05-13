<template>
    <main>
        <!--  Line break -->
        <div class="a-spacing-large"></div>

        <div class="container-fluid browsing-history">
            <div class="row">
                <div class="col-sm-8 col-8">
                    <h1 class="a-size-large a-spacing-none a-text-normal">All Products</h1>
                    <div class="a-spacing-large"></div>

                    <!-- Buttons -->
                    <nuxt-link to="/products/create" class="a-button-buy-again">Add a new product</nuxt-link>
                    <nuxt-link to="/category" class="a-button-history margin-right-10">Add a new category</nuxt-link>
                    <nuxt-link to="/owner" class="a-button-history margin-right-10">Add a new owner</nuxt-link>
                    <!--Listing Page-->
                </div>
            </div>
        </div>
        <div class="a-spacing-large"></div>

        <div class="container-fluid browsing-history">
            <div class="row">
                <div v-for="(product, index) in products" :key="product._id" class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb">
                    <div class="history-box">
                        <div class="text-center">
                            <!--Product Image-->
                            <a href="#" class="a-link-normal">
                                <img :src="product.photo" class="img-fluid">
                            </a>

                            <!--Product Title-->
                            <div class="a-spacing-top-base asin-title">
                                <span class="a-text-normal">
                                    <span class="p13n-sc-truncated">{{ product.title }}</span>
                                </span>
                            </div>

                            <!--Product Rating-->
                            <div class="a-row">
                                <a href="#">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </a>
                                <span class="a-letter-space"></span>
                                <span class="a-color-tertiary a-size-small asin-review">(1732)</span>
                            </div>

                            <!--Product {Price}-->
                            <div class="a-row">
                                <span class="a-size-base a-color-price">
                                    <span class="p13n-sc-price">${{ product.price }}</span>
                                </span>
                            </div>

                            <!--Product Buttons-->
                            <div class="a-row">
                                <nuxt-link :to="`/products/${product._id}`" class="a-button-history margin-right-10">Edit</nuxt-link>
                                <a @click="onDeleteProduct(product._id, index)" class="a-button-history margin-right-10">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
  // asyncData fetching data before nuxt page finished loading on the browser
  // it is good for seo because the data will be loaded first
  async asyncData({ $axios }) {
      try{
          let response = await $axios.$get("products");
          return {
              products: response.products
          }
      } catch (e) {
          console.log(e);
      }
  },
  methods: {
        async onDeleteProduct(id, index) {
            try{
                let response = await this.$axios.$delete(`products/${id}`);
                if(response.status)
                {
                    this.products.splice(index, 1);
                }
            } catch (e) {
                console.log(e);
            }
        }
    }
}
</script>

<style>

</style>
