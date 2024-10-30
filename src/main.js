import { createApp } from 'vue'
import App from './App.vue'
import router from './components/Router';

// Crear la aplicación
const app = createApp(App);

// Definir métodos globales
app.config.globalProperties.$filters = {
    getDeportes() {
        return [
            {
                id: 0,
                nombre: 'Fútbol'
            },
            {
                id: 1,
                nombre: 'Baloncesto'
            },
            {
                id: 2,
                nombre: 'Volley'
            },
            {
                id: 3,
                nombre: 'Hockey'
            },
            {
                id: 4,
                nombre: 'Boxeo'
            },
        ]
    }
};

// Usar el router
app.use(router);

// Montar la aplicación
app.mount('#app');