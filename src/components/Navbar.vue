<template>
    <nav class="navbar">
      <div class="dropdown">
        <button class="dropdown-btn">Izbornik</button>
        <div class="dropdown-content">
          <router-link to="/">Početna</router-link>
          <router-link to="/products">Proizvodi</router-link>
          <router-link to="/checkout">Plaćanje</router-link>
          <router-link to="/support">Podrška</router-link>
          <router-link to="/cart">Košarica ({{ cartItemCount }})</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import store from "../stores/store";
  export default {
    name: "Navbar",
    computed: {
    cartItemCount() {
      return store.cart.reduce((total, item) => total + item.quantity, 0);
    },
  },
  };
  </script>
  
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    right: 0;
    background-color: #333;
    padding: 10px;
    z-index: 1000;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-btn {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .dropdown-btn:hover {
    background-color: #555;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  </style>
  