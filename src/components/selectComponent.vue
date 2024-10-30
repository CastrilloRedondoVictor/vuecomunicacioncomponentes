<template>
    <div class="container">
        <h1>Seleccionar Nombres</h1>
        <form class="form" v-on:submit.prevent="submitForm">
            <select class="select-input" v-model="valores" multiple>
                <option v-for="nombre in nombres" :key="nombre" :value="nombre">{{ nombre }}</option>
            </select>
            <button class="submit-button" type="submit">ENVIAR</button>
        </form>
        <div class="results">
            <h3 v-for="i in mostrar" :key="i" class="result-item">{{ i }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SelectComponent',
    data(){
        return {
            nombres: ['Víctor', 'Jimena', 'Nacho', 'Adrián', 'Jaime'],
            valores: [],
            mostrar: []
        }
    },
    methods: {
        submitForm() {
            this.mostrar = [...this.valores];
        }
    }
}
</script>

<style scoped>
/* General container styling */
.container {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: Arial, sans-serif;
}

/* Form styling */
.form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

/* Select styling */
.select-input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    background-color: #fff;
    transition: border-color 0.3s;
}
.select-input:focus {
    border-color: #4CAF50;
}

/* Submit button styling */
.submit-button {
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}
.submit-button:hover {
    background-color: #45a049;
}

/* Results styling */
.results {
    margin-top: 20px;
    text-align: left;
}
.result-item {
    padding: 8px;
    background-color: #e3f7e0;
    border-left: 4px solid #4CAF50;
    border-radius: 3px;
    margin-bottom: 10px;
    font-size: 16px;
}
</style>
