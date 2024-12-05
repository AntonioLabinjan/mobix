<template>
    <h5>Proizvod</h5>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>Cijena: {{ product.price }} kn</p>
  
      <div>
        <label for="quantity">Količina:</label>
        <input id="quantity" type="number" v-model="quantity" min="1" />
      </div>
  
      <button @click="addToCart">Dodaj u košaricu</button>
    </div>
  </template>
  
  <script>
  import store from "../stores/store";
  
  export default {
    props: {
      product: Object,
    },
    data() {
      return {
        quantity: 1,
      };
    },
    methods: {
      addToCart() {
        store.addToCart(this.product, this.quantity);
        alert(`${this.product.name} je dodan u košaricu!`);
      },
    },
  };
  </script>
  
  
  <style scoped>
  .product-details {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    position: relative;
    z-index: 1001;
    width: 400px;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  </style>
  