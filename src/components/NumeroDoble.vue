<template>
    <div>
        <h1>Número Doble</h1>
    </div>
</template>

<script>
    export default {
        name: 'NumeroDoble',
        mounted() {
            let paramNumero = this.$route.params.numero; 
            if (paramNumero == ""){ 
                console.log("Sin parámetros"); 
                this.mensaje = "Sin parámetros en Routing"; 
            }else { 
                this.mensaje = "Parámetro recibido: " + paramNumero; 
            }
        }
    }
</script>