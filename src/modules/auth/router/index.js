
export default {

    name: 'auth',
    component: () => import(/* webpackChunkName: "Auth Layout" */ 'src/modules/auth/layouts/AuthLayout.vue'),
    children: [
       {
           path: '',
           name: 'login',
           component: () => import(/* webpackChunkName: "Login" */ 'src/modules/auth/views/Login.vue'),
       },
       {
           path: '/register',
           name: 'register',
           component: () => import(/* webpackChunkName: "Register" */ 'src/modules/auth/views/Register.vue'),
       },
    ]

}