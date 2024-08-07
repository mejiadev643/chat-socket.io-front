import { createRouter, createWebHistory } from 'vue-router';
import { useMainStore } from "@/store/store.js";
import Login from '@login/views/Login.vue';
import About from '@login/views/About.vue';
import isAliveService from '@network/isAlive.js'; // Renombrar la importación para evitar conflictos
import dashboardroutes from '@modules/dashboard/router/router.js';

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login',
      requiresAuth: false,
    }
  },
  ...dashboardroutes,
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About',
      requiresAuth: true,
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  // Utiliza `to.meta.title` si está definido, de lo contrario, usa un título por defecto.
  document.title = to.meta.title || 'Default title';
  
  // #region  verifiación de rutas, si no existe la ruta, redirige a la página de error
  const routesList = router.getRoutes();
  const routeExists = routesList.find((route) => route.name === to.name);
  if (!routeExists) {
    next({ name: "login" });
    return;
  }

  if (to.meta.requiresAuth === true) {
    const store = useMainStore();
    const token = store.getToken();
    if (!routeExists) {
      next({ name: "login" });
      return;
    }

    if (!token) {
      next({ name: "login" });
      return;
    } else {
        try {
          // Hacer la prueba de si el token es válido
          const response = await isAliveService.isAlive();
          if (response.status !== 200) {
            next({ name: "login" });
          } else {
            next();
          }
        } catch (error) {
          // Manejar el error en la llamada al backend
          next({ name: "login" });
        }
    }
  } else {
    next();
  }
});

export default router;