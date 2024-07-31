import { createRouter, createWebHistory } from 'vue-router';
import { useMainStore }  from "@/store/store.js";
import Login from '@login/views/Login.vue';
import About from '@login/views/About.vue';
import isAlive from '@network/isAlive.js';


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
router.afterEach((to, from, next) => {
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
    if (!token) {
      next({ name: "login" });
      return;
    }else{
      //hacer la prueba de si el token es valido
      let isAlive = isAlive();
      if(isAlive.status !== 200){
        next({ name: "login" });
      }else{
        next();
      }
    }
  };
});

export default router;
