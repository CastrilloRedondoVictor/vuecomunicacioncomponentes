<template>
    <div class="checkbox-container">
        <h1>Checkbox Suma</h1>
        <h2 class="suma">Suma Total: <span>{{ suma }}</span></h2>
        <button class="generate-button" @click="generarCajas">GENERAR CHECKBOXES</button>
        <div class="checkbox-list">
            <div class="checkbox-item" v-for="num in numeros" :key="num">
                <label>{{ num }}</label>
                <input @change="changeSuma($event, num)" type="checkbox" :value="num">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SumaCheckBox',
    data() {
        return {
            suma: 0,
            numeros: [],
        }
    },
    methods: {
        generarCajas() {
            this.numeros = [];
            for (let i = 0; i < 5; i++) {
                this.numeros.push(Math.floor(Math.random() * 10) + 1);
            }
        },
        changeSuma(event, num) {
            if (event.target.checked) {
                this.suma += num;
            } else {
                this.suma -= num;
            }
        }
    }
}
</script>

<style scoped>
.checkbox-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    max-width: 300px;
    margin: auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

h1 {
    font-size: 24px;
    color: #444;
    margin-bottom: 10px;
}

.suma {
    font-size: 18px;
    color: #333;
    font-weight: bold;
    margin: 10px 0;
}

.suma span {
    color: #007bff;
}

.generate-button {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 15px 0;
    transition: background-color 0.3s ease;
}

.generate-button:hover {
    background-color: #0056b3;
}

.checkbox-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

.checkbox-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
}

.checkbox-item:hover {
    transform: scale(1.05);
}

.checkbox-item label {
    font-size: 16px;
    color: #666;
    margin-bottom: 5px;
}

.checkbox-item input {
    transform: scale(1.3);
    cursor: pointer;
    accent-color: #007bff;
}
</style>
