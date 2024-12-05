import { reactive } from 'vue';

const store = reactive({
  cart: [],

  addToCart(product, quantity) {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.cart.push({ ...product, quantity });
    }
  },

  updateQuantity(productId, quantity) {
    const product = this.cart.find((item) => item.id === productId);
    if (product) {
      product.quantity = quantity;
    }
  },

  removeFromCart(productId) {
    this.cart = this.cart.filter((item) => item.id !== productId);
  },

  clearCart() {
    this.cart = [];
  },

  get totalPrice() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
});

export default store;
