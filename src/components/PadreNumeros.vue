<template>
    <div class="padre-numeros">
        <h1>Padre Números</h1>
        <button class="button" @click="nuevoNum">NUEVO NÚMERO</button>
        <h2 class="suma">{{ suma }}</h2>
        <div class="numeros-container">
            <HijoNumeros 
                v-for="(num, index) in numeros" 
                :key="index" 
                :num="num" 
                v-on:sumarNumero="sumarNumero" 
                class="hijo-numero" 
            />
        </div>
    </div>
</template>

<script>
import HijoNumeros from './HijoNumeros.vue';

export default {
    name: 'PadreNumeros',
    components: {
        HijoNumeros
    },
    data() {
        return {
            suma: 0,
            numeros: []
        }
    },
    mounted() {
        // Generar 5 números aleatorios entre 1 y 10
        for (let i = 0; i < 5; i++) {
            this.nuevoNum();
        }
    },
    methods: {
        sumarNumero(num) {
            this.suma += num;
        },
        nuevoNum() {
            this.numeros.push(Math.floor(Math.random() * 10) + 1);
        }
    }
}
</script>

<style scoped>
.padre-numeros {
    text-align: center; /* Centrar texto */
    padding: 20px; /* Espaciado */
    background-color: #f9f9f9; /* Color de fondo */
    border-radius: 10px; /* Bordes redondeados */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra */
}

h1 {
    font-size: 2.5em; /* Tamaño del título */
    color: #2c3e50; /* Color del texto */
    margin-bottom: 20px; /* Espacio debajo del título */
}

h2.suma {
    font-size: 2em; /* Tamaño del texto para la suma */
    color: #2980b9; /* Color para el resultado */
    margin: 20px 0; /* Espacio vertical */
}

.numeros-container {
    display: flex; /* Usar flexbox */
    justify-content: center; /* Centrar elementos */
    flex-wrap: wrap; /* Permitir envoltura de elementos */
    gap: 10px; /* Espaciado entre elementos */
}

.hijo-numero {
    display: inline-block; /* Asegurar que se comporte como un bloque en línea */
    margin: 10px; /* Margen para separación */
}
.button {
    padding: 10px 20px; /* Espaciado interno del botón */
    font-size: 1em; /* Tamaño de la fuente */
    color: white; /* Color del texto */
    background-color: #2980b9; /* Color de fondo del botón */
    border: none; /* Sin borde */
    border-radius: 5px; /* Bordes redondeados */
    cursor: pointer; /* Cambiar cursor al pasar el ratón */
    transition: background-color 0.3s; /* Transición suave para el color de fondo */
}

.button:hover {
    background-color: #3498db; /* Color al pasar el ratón */
}
</style>
