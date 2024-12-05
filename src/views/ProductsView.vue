<template>
    <div class="products-view">
      <!-- Carousel za najnovije proizvode -->
      <div class="carousel">
        <h5>Najnoviji proizvodi</h5>
        <div class="carousel-container">
          <div
            v-for="product in latestProducts"
            :key="product.id"
            class="carousel-item"
          >
            <img :src="product.image" :alt="product.name">
            <h4>{{ product.name }}</h4>
            <p>{{ product.price }} kn</p>
          </div>
        </div>
      </div>
  
      <!-- Filteri -->
      <div class="filters">
        <h5>Filtriraj proizvode</h5>
        <div class="filter-category">
          <label>Kategorije:</label>
          <select v-model="selectedCategory">
            <option value="">Sve</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        <div class="filter-price">
          <label>Cijena:</label>
          <input type="number" v-model="minPrice" placeholder="Min">
          <input type="number" v-model="maxPrice" placeholder="Max">
        </div>
        <div class="filter-condition">
          <label>Stanje:</label>
          <select v-model="selectedCondition">
            <option value="">Sva stanja</option>
            <option value="novi">Novi</option>
            <option value="izložbeni">Izložbeni</option>
            <option value="rabljeni">Rabljeni</option>
          </select>
        </div>
      </div>
  
      <!-- Prikaz proizvoda -->
      <div class="products-grid">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="product-card"
          @click="selectProduct(product)"
        >
          <img :src="product.image" :alt="product.name">
          <h4>{{ product.name }}</h4>
          <p>{{ product.price }} kn</p>
        </div>
      </div>
  
      <!-- Detalji proizvoda -->
      <ProductDetails
        v-if="selectedProduct"
        :product="selectedProduct"
        @close="selectedProduct = null"
      />
    </div>
  </template>
  
  <script>
  import ProductDetails from "../components/ProductDetails.vue";
  
  export default {
    name: "ProductsView",
    components: { ProductDetails },
    data() {
      return {
        products: [
          { id: 1, name: "iPhone 13", category: "Mobiteli", price: 7500, condition: "novi", image: "iphone13.jpg" },
          { id: 2, name: "Samsung Galaxy S22", category: "Mobiteli", price: 6500, condition: "izložbeni", image: "s22.jpg" },
          { id: 3, name: "Huawei MatePad", category: "Tableti", price: 3000, condition: "novi", image: "matepad.jpg" },
          { id: 4, name: "Xiaomi Redmi Note", category: "Mobiteli", price: 2000, condition: "rabljeni", image: "redminote.jpg" },
          // Dodaj više proizvoda
        ],
        categories: ["Mobiteli", "Tableti", "Maskice", "Stakla"],
        selectedCategory: "",
        minPrice: null,
        maxPrice: null,
        selectedCondition: "",
        selectedProduct: null,
      };
    },
    computed: {
      latestProducts() {
        // Dohvaća najnovije proizvode (po trenutnim podacima iz proizvoda, ovdje jednostavno zadnje dodane)
        return this.products.slice(-3);
      },
      filteredProducts() {
        return this.products.filter((product) => {
          const matchesCategory =
            !this.selectedCategory || product.category === this.selectedCategory;
          const matchesPrice =
            (!this.minPrice || product.price >= this.minPrice) &&
            (!this.maxPrice || product.price <= this.maxPrice);
          const matchesCondition =
            !this.selectedCondition || product.condition === this.selectedCondition;
          return matchesCategory && matchesPrice && matchesCondition;
        });
      },
    },
    methods: {
      selectProduct(product) {
        this.selectedProduct = product;
      },
    },
  };
  </script>
  
  <style scoped>
  .products-view {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  
  /* Carousel */
  .carousel {
    margin-bottom: 20px;
  }
  .carousel-container {
    display: flex;
    overflow-x: auto;
    gap: 15px;
  }
  .carousel-item {
    text-align: center;
    flex: 0 0 auto;
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
  }
  .carousel-item img {
    max-width: 100%;
    border-radius: 5px;
  }
  
  /* Filteri */
  .filters {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  /* Grid proizvoda */
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  .product-card {
    cursor: pointer;
    text-align: center;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    transition: transform 0.2s ease-in-out;
  }
  .product-card:hover {
    transform: scale(1.05);
  }
  .product-card img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
  </style>
  