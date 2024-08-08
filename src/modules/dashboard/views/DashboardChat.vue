<template>
    <div class="dashboard">
        <ChatList />
        <div class="chat-section">
            <ChatWindow />
            <MessageInput />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ChatList from '../components/ChatList.vue';
import ChatWindow from '../components/ChatWindow.vue';
import MessageInput from '../components/MessageInput.vue';
import { useChatStore } from '@store/chat.js';

const chatStore = useChatStore();

onMounted(() => {
    //chatStore.fetchChats(); // Cargar chats al montar el componente
});

</script>

<style scoped>
/* Estilos para el Dashboard */
</style>