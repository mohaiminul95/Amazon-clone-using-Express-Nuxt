<template>
    <main>
        <!--breadcrumb-->
        <div class="a-spacing-top-medium"></div>
        <div class="container-fluid">
            <div class="wayfinding-breadcrumbs_container">
                <ul class="a-unordered-list a-horizontal a-size-small">
                    <li>
                        <span class="a-list-item">
                            <a href="#" class="a-link-normal a-color-tertiary">{{ product.category.type }}</a>
                        </span>
                    </li>
                    <li>
                        <span class="a-list-item">></span>
                    </li>
                    <li>
                        <span class="a-list-item">
                            <a href="#" class="a-link-normal a-color-tertiary">{{ product.title }}</a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="container-fluid">
            <div class="dp-container">
                <div class="row">
                    <!-- first 3 grid product Image and Author's section-->
                    <div class="col-lg-3 col-md-3- col-sm-4">
                        <div class="leftCol">
                            <!--Image-->
                            <div class="imgBlock">
                                <div class="eBooksimg">
                                    <img :src="product.photo" class="img-fluid">
                                </div>
                            </div>

                            <!--Follow Author-->
                            <div class="author-follow">
                                <hr class="a-divider-normal">
                                <h1 class="authorFollowHeading">Follow The Author</h1>
                                <div class="a-spacing-top-small">
                                    <div class="row">
                                        <!--Author Image -->
                                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <div class="smallAuthorImageContainer">
                                                <a href="#">
                                                    <img :src="product.owner.photo" class="img-fluid">
                                                </a>
                                            </div>
                                        </div>

                                        <!--Author's Name -->
                                        <div class="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <div class="authorNameCol">
                                                <a href="#">{{ product.owner.name }}</a>
                                            </div>
                                        </div>

                                        <!--Author's Follow Button -->
                                        <div class="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-3">
                                            <div class="authorBtn mt-2">
                                                <a href="#">
                                                    <span class="btnFollow">
                                                        <span class="a-btn-inner">
                                                            <button class="a-btn-text">+ Follow</button>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Middle 6 grid Description -->
                    <div class="col-lg-6 col-md-6 col-sm-8">
                        <div class="centerCol">
                            <!-- Title Div -->
                            <div class="titleDiv">
                                <h1 class="productTitle">
                                    <span class="largeTitle">{{ product.title }}</span>
                                    <span class="smallTitle"></span>
                                </h1>
                            </div>

                            <!-- Author's Name -->
                            <div class="bylineinfo">
                                by
                                <a href="" class="authorName">{{ product.owner.name }}
                                    <i class="fas fa-chevron-down" style="font-size: 8px !important; color: #555 !important;"></i>
                                </a> (Author)
                            </div>
                            <div class="reviewGroup">
                                <no-ssr>
                                    <star-rating :rating="product.averageRating"
                                                 :show-rating="false"
                                                 :glow="1"
                                                 :rounded-corners="true"
                                                 :border-width="1"
                                                 :read-only="true"
                                                 :star-size="18"
                                                 :star-points="[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]" />
                                </no-ssr>
                            </div>
                            <hr style="margin-top: 10px;">
                            <!-- A tags dummy data-->
                            <div class="mediaMatrix">
                                <div class="formats">
                                    <a href="#" class="link-expander">
                                        <span class="tmmShowPrompt">See all 18 format's and editions</span>
                                    </a>
                                    <ul>
                                        <!--Kindle-->
                                        <li class="switchElement" style="width: 117px;">
                                            <span class="a-list-item">
                                                <span class="a-button-toggle">
                                                    <span class="a-button-inner">
                                                        <a href="#" class="a-button-text">
                                                            <span>Kindle</span>
                                                            <br>
                                                            <span class="a-color-secondary">-</span>
                                                        </a>
                                                    </span>
                                                </span>
                                                <span class="tmm-olp-links"></span>
                                                <span class="tmm-olp-links">
                                                    <a href="#" class="a-size-mini">
                                                        <span class="kcpAppBox">
                                                            <span class="a-declarative">
                                                                Read With Our
                                                                <span class="a-text-bold">Free App</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </span>
                                            </span>
                                        </li>

                                        <!--Audible-->
                                        <li class="switchElement" style="width: 117px;">
                                            <span class="a-list-item">
                                                <span class="a-button-toggle">
                                                    <span class="a-button-inner">
                                                        <a href="#" class="a-button-text">
                                                            <span><img src="/img/audibleLogo.png" class="img-fluid" style="width: 20px;">Audible</span>
                                                            <br>
                                                            <span class="a-color-secondary">-</span>
                                                        </a>
                                                    </span>
                                                </span>
                                                <span class="tmm-olp-links"></span>
                                                <span class="tmm-olp-links">
                                                    <a href="#" class="a-size-mini">
                                                        <span class="kcpAppBox">
                                                            <span class="a-declarative">
                                                                <span class="a-text-bold">Free App</span> With Our Audible Trial
                                                            </span>
                                                        </span>
                                                    </a>
                                                </span>
                                            </span>
                                        </li>

                                        <!--Paperback-->
                                        <li class="switchElement" style="width: 117px;">
                                            <span class="a-list-item">
                                                <span class="a-button-toggle">
                                                    <span class="a-button-inner">
                                                        <a href="#" class="a-button-text">
                                                            <span>PaperBack</span>
                                                            <br>
                                                            <span class="a-color-secondary">-</span>
                                                        </a>
                                                    </span>
                                                </span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Description -->
                            <div class="bookDescription">
                                <div class="bookDescriptionInner">{{ product.description }}</div>
                            </div>

                            <!-- Description -->
                            <div class="aboutEbooksFeature">
                                <hr>
                                <div class="row">
                                    <div class="col-sm-4 mb-1">
                                        <div class="a-declarative">
                                            Length: <span><a href="">386 pages <i class="a-icon a-icon-popover"></i></a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Last 3 Grid Buying section -->
                    <div class="col-lg-3 col-md-3 col-sm-6">
                        <div class="combinedBuyBox">
                            <div class="buyBox">
                                <div class="a-section">
                                    <div class="clearfix">
                                        <div class="float-left">
                                            <form>
                                                <input type="radio" id="test1" name="radio-group checked">
                                                <label for="test1">Buy Now</label>
                                            </form>
                                        </div>

                                        <!-- Product Price -->
                                        <div class="float-right">
                                            <span class="a-size-medium a-color-price offer-price a-text-normal">${{ product.price }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="a-section a-spacing-none">
                                    <div class="row">
                                        <div class="col-sm-5 col-5">
                                            <select>
                                                <option value="1">Qty: &nbsp; 1</option>
                                                <option value="2">Qty: &nbsp; 2</option>
                                                <option value="3">Qty: &nbsp; 3</option>
                                                <option value="4">Qty: &nbsp; 4</option>
                                                <option value="5">Qty: &nbsp; 5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="a-section a-spacing-small a-spacing-top-micro">
                                    <div class="row">
                                        <span class="a-color-base buyBoxShippingLabel"></span>
                                    </div>
                                </div>

                                <div class="a-section a-spacing-small">
                                    <div class="a-section a-spacing-none">
                                        <span class="a-size-medium a-color-success">In Stock</span>
                                    </div>
                                    <div class="a-section a-spacing-mini">Ships from and sold by amazon.com</div>
                                </div>

                                <div class="a-section">
                                    <div class="a-button-stack" @click="addProductToCart(product)">
                                        <span class="a-spacing-small a-button-primary a-button-icon">
                                            <span class="a-button-inner">
                                                <i class="a-icon a-icon-cart"></i>
                                                <input type="submit" name="submit.add-to-cart" class="a-button-input">
                                                <span class="a-button-text">Add To Cart</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                <div class="a-section">
                                    <div class="a-button-stack">
                                        <span class="a-spacing-small a-button-primary a-button-icon">
                                            <span class="a-button-inner">
                                                <i class="a-icon a-icon-buynow"></i>
                                                <input type="submit" name="submit.add-to-cart" class="a-button-input">
                                                <span class="a-button-text">Buy Now</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                <div class="a-row">
                                    <div class="a-spacing-top-small">
                                        <div class="a-section a-spacing-none">
                                            <div class="a-section a-spacing-none a-spacing-top-mini">
                                                This item ships to
                                                <b>California</b>
                                                <b>Get it by Monday, Sept 23 - Monday, Sept 30</b>
                                                Choose This Date as checkout
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <span class="a-declarative">
                                    <a href="#" class="a-link-normal">
                                        <div class="a-row a-spacing-mini">
                                            <i class="fal fa-map-market-alt"></i>
                                            <span class="a-size-small">Deliver to California</span>
                                        </div>
                                    </a>
                                </span>
                                <br>
                                <hr>

                                <div class="a-section">
                                    <div class="clearfix">
                                        <div class="float-left">
                                            <form>
                                                <input type="radio" id="test2" name="radio-group">
                                                <label for="test2">Buy Now</label>
                                            </form>
                                        </div>
                                        <div class="float-right">
                                            <span class="a-color-base offer-price a-text-normal">${{ product.price }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="kcpAppBaseBox text-center">
                            <img src="/img/readyondevice.png" class="img-fluid">
                        </div>
                    </div>
                </div>

                <br>
                <hr>

                <div class="books-entity-teaser">
                    <div class="bucket">
                        <h2>More about the author</h2>
                        <div class="content">
                            <div class="row">
                                <!-- Author Photo & follow button -->
                                <div class="col-md-2 col-sm-4 col-4">
                                    <div class="authorContent">
                                        <div class="authorImageSingle">
                                            <img :src="product.owner.photo" class="img-fluid">
                                        </div>
                                        <div class="authorFollow">
                                            <button class="followButton" type="button">
                                                <span class="pr-fb-icon"></span>
                                                <span class="pr-fb-text">Follow</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-10 col-sm-8 col-8 pl-0">
                                    <div class="mainContent">
                                        <h3>Biography</h3>
                                        <div id="authorBio">{{ product.owner.about }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <ReviewSection :product="product" :reviews="reviews"/> -->
            </div>
        </div>
    </main>
</template>

<script>
    // import { mapActions } from "vuex";
    // import ReviewSection from "~/components/ReviewSection";
    // import StarRating from "vue-star-rating";
    export default {
        // components: {ReviewSection, StarRating},
        async asyncData({ $axios, params }) {
            try{
                let singleProduct = $axios.$get(`products/${ params.id }`);
                // let manyReviews = $axios.$get(`reviews/${ params.id }`);
                const [productResponse, reviewResponse] = await Promise.all([singleProduct]);
                return{
                    product: productResponse.product,
                    // reviews: reviewResponse.reviews
                }
            } catch (e) {
                console.log(e)
            }
        },
        methods: {
            // ...mapActions(["addProductToCart"])
        }
    }
</script>

<style scoped>
</style>