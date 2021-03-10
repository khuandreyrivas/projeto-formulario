import { createApp } from 'vue';
import App from './App.vue';
import Lista from './components/Lista.vue';
import Formulario from './components/Formulario.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Lista,
    },
    {
        path: '/novo-contato',
        component: Formulario,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');


