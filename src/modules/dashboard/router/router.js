
export default [
    {
        path: '/dashboard',
        name: 'dashboard',
        component:() => import("@modules/dashboard/views/Dashboard.vue"),
        meta: {
          title: 'Dashboard',
          requiresAuth: true,
        }
      },
      {
        path: '/dash',
        name: 'Dashboard',
        component: () => import("@modules/dashboard/views/DashboardChat.vue"),
      },
]