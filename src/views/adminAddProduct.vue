<template>
  <div class="admin-add-product">
    <h2>Dodaj Novi Proizvod</h2>
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label for="name">Naziv proizvoda</label>
        <input type="text" id="name" v-model="product.name" required />
      </div>
      <div class="form-group">
        <label for="price">Cijena (HRK)</label>
        <input type="number" id="price" v-model="product.price" required />
      </div>
      <div class="form-group">
        <label for="category">Kategorija</label>
        <input type="text" id="category" v-model="product.category" required />
      </div>
      <div class="form-group">
        <label for="brand">Brend</label>
        <input type="text" id="brand" v-model="product.brand" required />
      </div>
      <div class="form-group">
        <label for="condition">Stanje</label>
        <select id="condition" v-model="product.condition" required>
          <option value="novi">Novi</option>
          <option value="rabljen">Rabljeni</option>
        </select>
      </div>
      <div class="form-group">
        <label for="imageURL">URL slike</label>
        <input type="url" id="imageURL" v-model="product.imageURL" />
      </div>
      <div class="form-group">
        <label for="stock">Na skladištu</label>
        <input type="number" id="stock" v-model="product.stock" required />
      </div>
      <button type="submit">Dodaj Proizvod</button>
    </form>
    <p v-if="message" class="success-message">{{ message }}</p>
  </div>
</template>

<script>
import { db } from "../firebase"; // Putanja do firebase.js
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      product: {
        name: "",
        price: null,
        category: "",
        brand: "",
        condition: "novi",
        imageURL: "",
        stock: null,
      },
      message: null,
    };
  },
  methods: {
    async addProduct() {
      const db = getFirestore();
      try {
        await addDoc(collection(db, "products"), this.product);
        this.message = "Proizvod uspješno dodan!";
        this.resetForm();
      } catch (error) {
        console.error("Greška pri dodavanju proizvoda: ", error);
        this.message = "Došlo je do pogreške pri dodavanju proizvoda.";
      }
    },
    resetForm() {
      this.product = {
        name: "",
        price: null,
        category: "",
        brand: "",
        condition: "novi",
        imageURL: "" || "no_image",
        stock: null,
      };
    },
  },
};
</script>

<style scoped>
.admin-add-product {
  max-width: 500px;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 1em;
}
label {
  display: block;
  margin-bottom: 0.5em;
}
input,
select {
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
}
button {
  padding: 0.5em 1em;
  font-size: 1em;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.success-message {
  color: green;
  margin-top: 1em;
}
</style>
