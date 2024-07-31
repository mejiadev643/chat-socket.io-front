<template>
    <div>
      <h1>Home Page</h1>
      <p>{{ message }}</p>
      <button @click="changeMessage">Change Message</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const message = ref('Hello, Vue 3!');
  function changeMessage() {
    message.value = 'Hello, Vue 3 Composition API!';
  }


  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  