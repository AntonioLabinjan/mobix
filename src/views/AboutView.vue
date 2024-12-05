<template>
  <div class="about">
    <h5>Podrška i korisnički podaci</h5>

    <!-- Kontakt informacije -->
    <div class="contact-info">
      <h6>Kontaktirajte nas</h6>
      <p>Za pomoć pri kupnji, slobodno nas kontaktirajte na broj: <strong>+385 123 456 789</strong></p>
    </div>

    <!-- Newsletter prijava -->
    <div class="newsletter-signup">
      <h6>Prijavite se na naš Newsletter</h6>
      <p>Pratite naše akcije i novosti putem emaila.</p>
      <form @submit.prevent="subscribeNewsletter">
        <input 
          type="email" 
          v-model="email" 
          placeholder="Unesite svoj email" 
          required 
        />
        <button type="submit">Prijavi se</button>
      </form>
    </div>

    <!-- Jamstvo i rate -->
    <div class="warranty-installments">
      <h6>Jamstvo i Rate</h6>
      <p>Naši proizvodi dolaze s <strong>24-mjesečnim jamstvom</strong>. Također, nudimo opciju plačanja na rate.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    subscribeNewsletter() {
      if (this.email) {
        // Ovdje možeš dodati logiku za pohranu emaila ili slanje na server kad budeš implementirao backend
        alert('Prijava uspješna! Hvala na pretplati.');
        this.email = ''; // Resetiraj polje za email
      } else {
        alert('Molimo unesite validan email.');
      }
    },
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
  }

  .contact-info, .newsletter-signup, .warranty-installments {
    margin: 20px 0;
    text-align: center;
  }

  form {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }

  input[type="email"] {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 250px;
  }

  button {
    background-color: #00796b;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #004d40;
  }
}
</style>
