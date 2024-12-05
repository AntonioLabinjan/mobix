<template>
  <div>
    <h2>Log In</h2>
    <form @submit.prevent="signIn">
      <input v-model="email" type="email" placeholder="Enter email" required />
      <input v-model="password" type="password" placeholder="Enter password" required />
      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth } from "../firebase/index";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginComponent",
  setup() {
    const email = ref("");
    const password = ref("");

    const signIn = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
        console.log("Signed in:", userCredential.user);
        this.$router.push('/');
      } catch (error) {
        console.error("Sign-in error:", error.message);
      }
    };

    return { email, password, signIn };
  },
};
</script>
