<template>
    <div class="hijo-numeros">
        <h2>Hijo Números: {{ num }}</h2>
        <button @click="emitirSuma" class="suma-button">Sumar {{ num }}</button>
    </div>
</template>

<script>
export default {
    name: 'HijoNumeros',
    props: {
        num: {
            type: Number,
            required: true
        }
    },
    methods: {
        emitirSuma() {
            this.$emit('sumarNumero', this.num);
        }
    }
}
</script>

<style scoped>
.hijo-numeros {
    display: flex; /* Usar flexbox para alinear los elementos */
    flex-direction: column; /* Alinear en columna */
    align-items: center; /* Centrar horizontalmente */
    justify-content: center; /* Centrar verticalmente */
    padding: 20px; /* Espacio interno */
    border: 1px solid #bdc3c7; /* Borde */
    border-radius: 10px; /* Bordes redondeados */
    background-color: #fff; /* Fondo blanco */
    margin: 10px; /* Margen para separación */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra */
}

h2 {
    color: #34495e; /* Color del texto */
    margin-bottom: 10px; /* Espacio debajo del título */
}

.suma-button {
    padding: 10px 20px; /* Espaciado interno del botón */
    font-size: 1em; /* Tamaño de la fuente */
    color: white; /* Color del texto */
    background-color: #2980b9; /* Color de fondo del botón */
    border: none; /* Sin borde */
    border-radius: 5px; /* Bordes redondeados */
    cursor: pointer; /* Cambiar cursor al pasar el ratón */
    transition: background-color 0.3s; /* Transición suave para el color de fondo */
}

.suma-button:hover {
    background-color: #3498db; /* Color al pasar el ratón */
}
</style>
