export const state = () => ({
    //    state
    cart: [],
    cartLength: 0,
    shippingPrice: 0,
    estimatedDelivery: ""
})

export const actions = {
    addProductToCart({state, commit}, product) {
        const cartProduct = state.cart.find(prod => prod._id === product.id);

        if(!cartProduct)
            commit("pushProductToCart", product);
        else
            commit("incrementProductQty", cartProduct);

        commit("incrementCartLength")
    }
}

export const mutations = {
    pushProductToCart(state, product) {
        product.quantity = 1;
        state.cart.push(product);
    },

    incrementProductQty(state, product) {
        product.quantity++;
        let indexOfProduct = state.cart.indexOf(product);
        state.cart.splice(indexOfProduct, 1, product);
    },

    incrementCartLength(state) {
        state.cartLength = 0;
        if(state.cart.length > 0) {
            state.cart.map(product => {
                state.cartLength += product.quantity
            })
        }
    },

    /* 1. find the product in the cart
       2. change the quantity of the cart
       3. Update the length of the cart
       4. replaced the old product with the updated product
   */
    changeQty(state, { product, qty }) {
        // find the product in the cart
        let cartProduct = state.cart.find(prod => prod._id === product._id);
        // change the quantity of the cart
        cartProduct.quantity = qty;

        // Update the length of the cart
        state.cartLength = 0;
        if(state.cart.length > 0) {
            state.cart.map(product => {
                state.cartLength += product.quantity
            })
        }

        // replaced the old product with the updated product
        let indexOfProduct = state.cart.indexOf(cartProduct);
        state.cart.splice(indexOfProduct, 1, cartProduct);
    },

    /* 1. remove the product quantity from the cart length
       2. get the index of the product that we want to delete
       3. remove the product
   */
    removeProduct(state, product) {
        state.cartLength -= product.quantity;
        let indexOfProduct = state.cart.indexOf(product);
        state.cart.splice(indexOfProduct, 1);
    },

    setShipping(state, { price, estimatedDelivery }) {
        state.shippingPrice = price;
        state.estimatedDelivery = estimatedDelivery;
    },

    clearCart(state) {
        state.cart = [];
        state.cartLength = 0;
        state.shippingPrice = 0;
        state.estimatedDelivery = "";
    }
}

export const getters = {
    getCartLength(state) {
        return state.cartLength;
    },

    getCart(state) {
        return state.cart;
    },

    getCartTotalPrice(state) {
        let total = 0;
        state.cart.map(product => {
            total += product.price * product.quantity
        })
        return total;
    },

    getCartTotalPriceWithShipping(state) {
        let total = 0;
        state.cart.map(product => {
            total += product.price * product.quantity
        })
        return total + state.shippingPrice;
    },

    getEstimatedDelivery(state) {
        return state.estimatedDelivery;
    }
}