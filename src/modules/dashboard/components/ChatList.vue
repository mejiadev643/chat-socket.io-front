<template>
    <div class="chat-list">
        <!-- <ul>
            <li v-for="chat in chats" :key="chat.id" @click="selectChat(chat)">
                <div class="chat-item">
                    <p>{{ chat.name }}</p>
                    <span class="last-message">{{ chat.lastMessage }}</span>
                </div>
            </li>
        </ul> -->
        <div v-for="chat in chats" :key="chat.user.id" class="flex items-center px-3 cursor-pointer bg-grey-light"
        @click="selectMessages(chat)">
            <div>
                <img class="w-12 h-12 rounded-full"
                    :src="chat.user.avatar_url"  />
            </div>
            <div class="flex-1 py-4 ml-4 border-b border-grey-lighter">
                <div class="flex justify-between items-bottom">
                    <p class="text-grey-darkest">
                        {{ chat.user.name }}
                    </p>
                    <p class="text-xs text-grey-darkest">
                        12:45 pm
                    </p>
                </div>
                <p class="mt-1 text-sm text-grey-dark">
                    {{ chat.messages[0].content }}
                </p>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useChatStore } from '@store/chat';
import { onMounted, ref , computed} from 'vue';
import gravatarService from '../../../services/gravatar.service';
const defaultAvatar = '@img/default.jpg';
async function gravatar(email) {
    console.log(email);
    const response = await gravatarService.getGravatarUrl(email);

    if (response?.status === 200) {
        return response.data.avatar_url;
    } else {
        return '@img/default.jpg';
    }
};

const chatStore = useChatStore();

const chats = computed(() => chatStore.chats);
const selectChat = computed(() => chatStore.selectChat) ;

async function selectMessages(chat) {
    chatStore.selectChat(chat);
}

onMounted(() => {
    chatStore.fetchChats();
});

</script>

<style scoped>
/* Estilos para el ChatList */
</style>