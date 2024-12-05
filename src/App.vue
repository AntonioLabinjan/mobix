<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Navbar, Footer },
};
</script>

<style>
/* Dodaj stilove za osnovni layout */
main {
  padding: 20px;
  min-height: calc(100vh - 120px); /* Osigurava prostor između Navbar i Footer */
}
</style>
