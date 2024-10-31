<template>
    <div class="tabla-container">
        <h1>Tabla de multiplicar del {{ this.$route.params.numero }}</h1>
        <table class="tabla-multiplicar">
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(res, index) in resultados" :key="index">
                    <td>{{ numero }} &times; {{ index }}</td>
                    <td>{{ res }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TablaMultiplicar',
    data() {
        return {
            numero: null,
            resultados: []
        }
    },
    mounted(){
        if (this.$route.params.numero == ""){ 
            console.log("Sin parámetros");
        } else { 
            this.numero = parseInt(this.$route.params.numero)
            this.tablaMultiplicar();
        }
    },
    watch: { 
        '$route.params.numero' (nextVal, oldVal) {
            if(nextVal != oldVal) {
                this.numero = parseInt(this.$route.params.numero)
                this.tablaMultiplicar();
            }
        }
    },
    methods: {
        tablaMultiplicar() {
            this.resultados = []
            for(let i = 0; i <= 10; i++){
                this.resultados.push(this.numero * i)
            }
        }
    }        
}
</script>

<style scoped>
/* Contenedor principal */
.tabla-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: Arial, sans-serif;
}

/* Encabezado */
h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
}

/* Estilo de la tabla */
.tabla-multiplicar {
    width: 60%;
    border-collapse: collapse;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.tabla-multiplicar th,
.tabla-multiplicar td {
    padding: 12px 15px;
    text-align: center;
    font-size: 16px;
}

.tabla-multiplicar thead th {
    background-color: #3498db;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
}

.tabla-multiplicar tbody tr:nth-child(even) {
    background-color: #f9f9f9;
}

.tabla-multiplicar tbody tr:hover {
    background-color: #f1f1f1;
    transition: background-color 0.3s ease;
}

.tabla-multiplicar td {
    border-bottom: 1px solid #ddd;
}
</style>
