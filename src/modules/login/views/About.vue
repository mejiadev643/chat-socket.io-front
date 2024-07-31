
<template>
    <div>
      <h1 class="text-6xl">About Page</h1>
      <p class="bg-blue-500">This is the about page.</p>
      <p>{{ token }}</p>
    </div>
    <div>
      <form>
        <input type="text" v-model="texto">
        <button type="button" @click="probarvida">touch</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useMainStore }  from "@/store/store.js";
  const authStore = useMainStore();
  const token = ref('');
  token.value = authStore.getToken();
  const texto= ref('');
function probarvida(){
    console.log('probarvida', texto.value);

}
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  