import { defineStore } from 'pinia';

export const useMainStore = defineStore('auth', {
  state: () => ({
    token: null,
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },
    getToken() {
      return this.token;
    }
  },
  persist: true,
});
