<template>
    <div class="center bg-slate-400">
        <div style="animation: slideInFromLeft 1s ease-out;"
            class="w-full max-w-md p-8 space-y-8 overflow-hidden shadow-2xl bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl">
            <h2 style="animation: appear 2s ease-out;" class="text-4xl font-extrabold text-center text-white">
                Welcome
            </h2>
            <p style="animation: appear 3s ease-out;" class="text-center text-gray-200">
                Sign in to your account
            </p>
            <form class="space-y-6">
                <div class="relative">
                    <input placeholder="john@example.com"
                        class="w-full h-10 text-white placeholder-transparent bg-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-purple-500"
                        required id="email" name="email" type="email" v-model="email" />
                    <label
                        class="absolute left-0 text-sm text-gray-500 transition-all -top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-purple-500 peer-focus:text-sm"
                        for="email">Email address</label>
                </div>
                <div class="relative">
                    <input placeholder="Password"
                        class="w-full h-10 text-white placeholder-transparent bg-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-purple-500"
                        required id="password" name="password" type="password" v-model="password" />
                    <label
                        class="absolute left-0 text-sm text-gray-500 transition-all -top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-purple-500 peer-focus:text-sm"
                        for="password">Password</label>
                </div>
                <div class="flex items-center justify-between">
                    <!-- <label class="flex items-center text-sm text-gray-200">
                        <input class="w-4 h-4 text-purple-600 bg-gray-800 border-gray-300 rounded form-checkbox"
                            type="checkbox" />
                        <span class="ml-2">Remember me</span>
                    </label> -->
                    <a class="text-sm text-purple-200 hover:underline" href="#">Forgot your password?</a>
                </div>
                <button
                    class="w-full px-4 py-2 font-semibold text-white transition duration-200 bg-purple-500 rounded-md shadow-lg hover:bg-purple-700"
                    type="button" @click="Login">
                    Sign In
                </button>
            </form>
            <div class="text-center text-gray-300">
                Don't have an account?
                <a class="text-purple-300 hover:underline" href="#">Sign up</a>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMainStore } from "@/store/store.js";
import { useUserStore } from "@store/user.js";
import loginService from "@modules/login/services/login.service";
const authStore = useMainStore();
const router = useRouter();
const userStore = useUserStore();
const nombre = ref('');
const email = ref('');
const password = ref('');
const password_confirmation = ref('');

async function Login() {
    try {
        const response = await loginService.login(email.value, password.value);

        if (response?.status === 200) {
            if (response?.data?.token) {
                authStore.setToken(response?.data?.token);
                const user = await loginService.getUserInfo();
                userStore.setUser(user?.data?.user);
                router.push({ name: 'dashboard' });
            }
            return response.data;
        }
    } catch (error) {
        //console.log('error', error);
    }
}

</script>

<style scoped>
.center {
    margin: 0;
    display: flex;
    place-items: center;
    place-content: center;
    min-width: 320px;
    min-height: 100vh;
}
</style>
