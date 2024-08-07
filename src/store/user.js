import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        userName: null,
        email: null,
        userId: null,
    }),
    actions: {
        setUser(user) {
        this.userName = user.username;
        this.email = user.email;
        this.userId = user.id;
        },
        getUser() {
        return this.userName;
        },
        getEmail() {
            return this.email;
        },
        getUserId() {
            return this.userId;
        },
    },
    persist: true,
    });