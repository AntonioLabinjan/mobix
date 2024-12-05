<template>
    <div class="cart">
      <h5>Košarica</h5>
      <div v-if="store.cart.length === 0">
        <p>Košarica je prazna.</p>
      </div>
      <div v-else>
        <table>
          <thead>
            <tr>
              <th>Proizvod</th>
              <th>Cijena</th>
              <th>Količina</th>
              <th>Ukupno</th>
              <th>Akcije</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in store.cart" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.price }} kn</td>
              <td>
                <input
                  type="number"
                  v-model.number="item.quantity"
                  @change="updateQuantity(item.id, item.quantity)"
                  min="1"
                />
              </td>
              <td>{{ item.price * item.quantity }} kn</td>
              <td>
                <button @click="removeFromCart(item.id)">Ukloni</button>
              </td>
            </tr>
          </tbody>
        </table>
        <p>Ukupna cijena: {{ store.totalPrice }} kn</p>
  
        <!-- Forma za email -->
        <form @submit.prevent="sendOrder">
          <label for="email">Unesite svoj email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Vaš email"
            required
          />
          <button type="submit" class="send-order-btn">Pošalji narudžbu</button>
        </form>
  
        <!-- Popup za besplatnu dostavu -->
        <div v-if="freeShipping" class="free-shipping-popup">
          Čestitamo! Imate pravo na **besplatnu dostavu**.
        </div>
        <router-link to="/checkout" class="checkout-link">Nastavi na naručivanje</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import store from "../stores/store";
  import axios from "axios";
  
  import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      email: "", // User's email
    };
  },
  computed: {
    store() {
      return store;
    },
    freeShipping() {
      return store.totalPrice >= 750; // Free shipping check
    },
  },
  methods: {
    updateQuantity(productId, quantity) {
      store.updateQuantity(productId, quantity);
    },
    removeFromCart(productId) {
      store.removeFromCart(productId);
    },
    async sendOrder() {
      if (this.email) {
        const orderDetails = store.cart.map(
          (item) => `${item.quantity} x ${item.name} (${item.price} kn)`
        );
        
        const emailBody = `
          Hvala na narudžbi! Ovo su detalji vaše košarice:
          ${orderDetails.join("\n")}
          Ukupna cijena: ${store.totalPrice} kn
        `;

        try {
          const response = await emailjs.send(
            'service_muhicvw', // Replace with your EmailJS service ID
            'template_ynske3b', // Replace with your EmailJS template ID
            {
              to_email: this.email,
              message: emailBody,
            },
            'iROnXVh_Ts-IC1GIG'
            //'QQX3X4y_tEprXSjpvE6cT' // Replace with your EmailJS user ID
          );
          alert('Email uspješno poslan!');
          this.email = ""; // Reset email field
        } catch (error) {
          console.error('Greška pri slanju emaila:', error);
          alert('Došlo je do greške pri slanju emaila.');
        }
      }
    },
  },
};

  </script>
  
  <style scoped>
  /* Stil za formu */
  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  input[type="email"] {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
  }
  
  .send-order-btn {
    background-color: #00796b;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .send-order-btn:hover {
    background-color: #004d40;
  }
  </style>
  