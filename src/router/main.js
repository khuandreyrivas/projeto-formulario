import { createApp } from 'vue';
import app from './App.vue';
import Registros from './components/Registros.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/registros',
    component: Registros,
}]

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(app)
app.use(router);
app.mount('#app');

createApp(app).mount('#app')


