<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>O nama</h3>
          <p>Placeholder info o webshopu. Ovdje možeš dodati opis kasnije.</p>
        </div>
        <div class="footer-section">
          <h3>Kontakt</h3>
          <ul>
            <li>Email: info@webshop.com</li>
            <li>Telefon: +385 99 123 4567</li>
            <li>Adresa: Ulica Primjera 1, 10000 Zagreb</li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Prati nas</h3>
          <ul class="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Webshop. Sva prava pridržana.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #000;
    color: #fff;
    padding: 20px;
    text-align: center;
    width: 100%;
    margin: 0; /* Osiguraj da footer nema margine */
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 10px;
    max-width: 1200px; /* Ograničava širinu sadržaja unutar footera */
    margin-left: auto;
    margin-right: auto;
  }
  
  .footer-section {
    flex: 1 1 200px;
    margin: 10px;
  }
  
  .footer-section h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
   }

.footer-section li {
  margin: 5px 0;
}

.footer-section a {
  color: #fff;
  text-decoration: none;
}

.footer-section a:hover {
  text-decoration: underline;
}

.footer-bottom {
  font-size: 0.9em;
  border-top: 1px solid #555;
  padding-top: 10px;
  width: 100%; /* Osigurava da se proteže cijelom širinom */
  box-sizing: border-box; /* Uključuje padding u ukupnu širinu */
}
</style>
  