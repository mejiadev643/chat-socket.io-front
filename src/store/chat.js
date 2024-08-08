import { defineStore } from 'pinia';
import network from '@network/network.js';
import gravatar from '../services/gravatar.service';
import gravatarService from '../services/gravatar.service';

export const useChatStore = defineStore('chat', {
    state: () => ({
        chats: null,
        selectedChat: null,
        currentUser: {
            id: 1, // Supongamos que el ID del usuario actual es 1
            name: 'Usuario Actual'
        }
    }),
    actions: {
        async fetchChats() {
            const response = await network.get('chats');
            const chatsWithAvatars = await Promise.all(response.data.map(async chat => {
                //console.log(chat.user.email);
            const avatar = await gravatarService.getGravatarUrl(chat.user.email);
                if (avatar?.status === 200) {
                    chat.user.avatar_url = response.data.avatar_url;
                } else if(avatar?.status === 404) {
                    chat.user.avatar_url = '../public/img/default.jpg';
                }else{
                    chat.user.avatar_url = '../public/img/default.jpg';
                }
                return chat;
            }));
            //console.log(chatsWithAvatars);
        
            this.chats = chatsWithAvatars;
        },
        selectChat(chat) {
            console.log(chat);
            this.selectedChat = chat.messages;
            //this.fetchMessages(chat.user.id);
        },
        async fetchMessages(chatId) {
            const response = await network.get(`chats/${chatId}/messages`);
            this.selectedChat.messages = response.data;
        },
        async sendMessage(content) {
            if (!this.selectedChat) return;
            const response = await network.post('/api/messages', {
                chatId: this.selectedChat.id,
                senderId: this.currentUser.id,
                content
            });
            this.selectedChat.messages.push(response.data);
        },
        getChats() {
            return this.chats;
        },
    }
});
