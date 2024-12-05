<template>
    <div>
        
<h1>Auth-mounted</h1>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { auth } from "../firebase/index";
  import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
  

  export default {
    setup() {
      const email = ref("");
      const password = ref("");
      const isLogin = ref(true);
  
      const handleAuth = async () => {
        try {
          if (isLogin.value) {
            await signInWithEmailAndPassword(auth, email.value, password.value);
            alert("Logged in successfully!");
          } else {
            await createUserWithEmailAndPassword(auth, email.value, password.value);
            alert("Signed up successfully!");
          }
        } catch (error) {
          alert(error.message);
        }
      };
  
      const toggleMode = () => {
        isLogin.value = !isLogin.value;
      };
  
      return { email, password, isLogin, handleAuth, toggleMode };
    },
  };
  </script>
  