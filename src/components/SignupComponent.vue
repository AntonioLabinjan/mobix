<template>
    <div>
      <h2>Sign Up</h2>
      <form @submit.prevent="signUp">
        <input v-model="email" type="email" placeholder="Enter email" required />
        <input v-model="password" type="password" placeholder="Enter password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { auth } from "../firebase/index";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  
  export default {
    name: "SignupComponent",
    setup() {
      const email = ref("");
      const password = ref("");
  
      const signUp = async () => {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value
          );
          console.log("Signed up:", userCredential.user);
          this.$router.push('/');
        } catch (error) {
          console.error("Sign-up error:", error.message);
        }
      };
  
      return { email, password, signUp };
    },
  };
  </script>
  