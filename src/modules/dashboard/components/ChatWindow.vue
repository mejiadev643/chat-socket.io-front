<template>
    <div class="chat-window">
        <div v-if="selectedChat">
            <div v-for="message in selectedChat.messages" :key="message.id" class="message">
                <div
                    :class="{ 'sent': message.sender_id === currentUser.id, 'received': message.sender_id !== currentUser.id }">
                    <p>{{ message.content }}</p>
                    <small>{{ new Date(message.created_at).toLocaleString() }}</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useChatStore } from '@store/chat';


const chatStore = useChatStore();

const selectedChat = chatStore.selectedChat;
const currentUser = chatStore.currentUser

</script>

<style scoped>
/* Estilos para el ChatWindow */
</style>