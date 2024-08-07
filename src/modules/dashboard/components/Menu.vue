<template>
    <div class="flex justify-center ">
        <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="options" />
        <Menu ref="menu" id="options" :model="items" :popup="true">
            <template #item="{ item, props }">
                <div class="bg-slate-500">
                    <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                        <span :class="item.icon" />
                        <span class="ml-4">{{ item.label }}</span>
                    </RouterLink>
                    <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </div>
            </template>
        </Menu>
    </div>
    <!-- <Headless/> -->
</template>

<script setup>
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import { RouterLink } from 'vue-router';
import { ref } from "vue";
import { useRouter } from 'vue-router';
import Headless from './Headless.vue';

// import Headless from './Headless.vue';

const router = useRouter();

const menu = ref();
const items = ref([
    {
        //label: 'Options',
        items: [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh',
                command: () => {
                    console.log('refresh');
                    router.push('/dashboard');
                }
            },
            {
                label: 'logout',
                icon: 'pi pi-upload',
                command: () => {
                    console.log('logout');
                    router.push('/');

                },
                route: '/'
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

</script>
