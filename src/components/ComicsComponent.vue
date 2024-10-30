<template>
    <form class="form" v-on:submit.prevent="submitForm">
        <h3>AÑADIR CÓMIC</h3>
        <input type="text" v-model="nuevo.titulo" placeholder="Escribe el título">
        <input type="text" v-model="nuevo.imagen" placeholder="Escribe el link de la imagen">
        <input type="text" v-model="nuevo.descripcion" placeholder="Escribe la descripción">
        <input type="number" v-model="nuevo.year" placeholder="Escribe el año">
        <button type="submit">AÑADIR</button>
    </form>
    <div class="comicsContainer">
        <div v-for="(c, index) in comics" :key="c.titulo">
            <ComicComponent 
                :comic="c" 
                :isFavorite="c === favorito" 
                :index="index"
                v-on:setFavorito="setFavorito"
                v-on:deleteComic="deleteComic"
            />
        </div>
    </div>
</template>

<script>
import ComicComponent from './ComicComponent.vue';

export default {
    name: 'ComicsComponent',
    components: {
        ComicComponent
    },
    data() {
        return {
            nuevo: {
                titulo: "",
                imagen: "",
                descripcion: "",
                year: null
            },
            favorito: null,
            comics: [
                {
                    titulo: "Spiderman",
                    imagen: "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                    descripcion: "Hombre araña",
                    year: 1997
                },
                {
                    titulo: "Wolverine",
                    imagen: "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                    descripcion: "Lobezno",
                    year: 2003
                },
                {
                    titulo: "Guardianes de la Galaxia",
                    imagen: "https://tajmahalcomics.com/wp-content/uploads/2023/04/sclmh214_0.webp",
                    descripcion: "Yo soy Groot",
                    year: 2006
                },
                {
                    titulo: "Avengers",
                    imagen: "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                    descripcion: "Los Vengadores",
                    year: 1993
                },
                {
                    titulo: "Spawn",
                    imagen: "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                    descripcion: "Al Simmons",
                    year: 2000
                },
                {
                    titulo: "Batman",
                    imagen: "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                    descripcion: "Murcielago",
                    year: 2001
                }
            ]
        }
    },
    methods: {
        setFavorito(comic) {
            if(this.favorito == comic){
                this.favorito = null
            } else{
                this.favorito = comic
            }
        },
        deleteComic(index) {
            if(this.favorito == this.comics[index]){
                this.favorito = null
            }

            this.comics.splice(index, 1)
        },
        submitForm() {
            if(this.nuevo.titulo != '' && this.nuevo.imagen != '' && this.nuevo.descripcion != '' && this.nuevo.year != null){
                let insertado = {
                    titulo: this.nuevo.titulo,
                    imagen: this.nuevo.imagen,
                    descripcion: this.nuevo.descripcion,
                    year: this.nuevo.year,
                }
                this.comics.push(insertado)
            } else{
                alert('Completa los datos')
            }
        }
    }
}
</script>

<style>
    @import url(../assets/css/estilocomis.css);
</style>
