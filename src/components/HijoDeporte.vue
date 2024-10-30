<template>
    <div class="hijo-deporte">
      <h2>Hijo Deporte</h2>
      <p><strong>ID del deporte:</strong> {{ deporte.id }}</p> <!-- Muestra el ID que se recibió -->
      <p><strong>Nombre del deporte:</strong> {{ deporte.nombre }}</p>
      <button @click="this.$emit('seleccionarFavorito', this.deporte)">FAVORITO</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HijoDeporte',
    props: {
      deporte: {
        type: Object, // Cambia a Object para mayor claridad
        required: true // Hace que la prop sea obligatoria
      }
    }
  }
  </script>
  
  <style scoped>
  .hijo-deporte {
    padding: 20px; /* Espaciado interno */
    border: 1px solid #bdc3c7; /* Borde */
    border-radius: 10px; /* Bordes redondeados */
    margin-top: 20px; /* Margen superior */
    background-color: #f9f9f9; /* Fondo claro */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra para un efecto elevado */
    transition: transform 0.2s; /* Transición suave para hover */
  }
  
  .hijo-deporte:hover {
    transform: scale(1.02); /* Efecto de escala al pasar el mouse */
  }
  
  h2 {
    color: #2c3e50; /* Color del título */
    margin-bottom: 10px; /* Espacio debajo del título */
  }
  
  button {
    padding: 10px 15px; /* Espaciado interno del botón */
    border: none; /* Sin borde */
    border-radius: 5px; /* Bordes redondeados del botón */
    background-color: #3498db; /* Color de fondo del botón */
    color: white; /* Color del texto del botón */
    cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
    transition: background-color 0.3s; /* Transición suave para el color de fondo */
  }
  
  button:hover {
    background-color: #2980b9; /* Color más oscuro al pasar el mouse */
  }
  </style>
  