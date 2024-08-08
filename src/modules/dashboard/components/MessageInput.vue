<template>
    <div class="message-input">
        <input v-model="message" @keyup.enter="sendMessage" placeholder="Escribe un mensaje..." />
        <button @click="sendMessage">Enviar</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useChatStore } from '@store/chat';

const chatStore = useChatStore();
const message = ref('');

const sendMessage = () => {
    if (message.value.trim() !== '') {
        chatStore.sendMessage(message.value);
        message.value = ''; // Limpiar el input después de enviar
    }
};

</script>

<style scoped>
/* Estilos para el MessageInput */
</style>