<template>
    <div class="padre-deportes">
      <h1>Padre Deportes</h1>
      <div class="hijo-deporte-fav" v-if="favorito">
        <h3>Favorito Seleccionado</h3>
        <p><strong>ID del deporte:</strong> {{ favorito.id }}</p>
        <p><strong>Nombre del deporte:</strong> {{ favorito.nombre }}</p>
      </div>
      <div class="container">
        <div v-for="deporte in deportes" :key="deporte.id">
          <HijoDeporte :deporte="deporte" v-on:seleccionarFavorito="seleccionarFavorito" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HijoDeporte from './HijoDeporte.vue'
  
  export default {
    name: 'PadreDeportes',
    components: {
      HijoDeporte
    },
    data() {
      return {
        deportes: this.$filters.getDeportes(),
        favorito: null
      }
    },
    methods: {
      seleccionarFavorito(deporte) {
        this.favorito = deporte
      }
    }
  }
  </script>
  
  <style scoped>
  .padre-deportes {
    text-align: center; /* Centra el texto */
    margin: 20px; /* Espacio alrededor del componente */
    font-family: 'Arial', sans-serif; /* Cambiar fuente */
  }
  
  h1 {
    font-size: 2.5em; /* Tamaño del título */
    color: #2c3e50; /* Color del texto */
    margin-bottom: 20px; /* Espacio debajo del título */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Sombra del texto */
  }
  
  .hijo-deporte-fav {
    padding: 20px; /* Espaciado interno */
    border: 1px solid #2980b9; /* Borde */
    border-radius: 8px; /* Bordes redondeados */
    margin-top: 20px; /* Margen superior */
    background-color: #3498db6e; /* Fondo suave */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra para un efecto elevado */
    transition: transform 0.3s; /* Transición para efecto de hover */
  }
  
  .hijo-deporte-fav:hover {
    transform: scale(1.01); /* Efecto de hover */
  }
  
  .container {
    display: flex; /* Habilita el uso de flexbox */
    flex-wrap: wrap; /* Permite que los elementos se envuelvan */
    justify-content: center; /* Centra el contenido en horizontal */
    align-items: flex-start; /* Alinea el contenido en la parte superior */
    padding: 20px; /* Espacio interno del contenedor */
  }
  
  .container > div {
    margin: 10px; /* Espacio entre los elementos */
  }
  </style>
  