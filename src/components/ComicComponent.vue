<template>
    <div class="comicDiv" :class="{ fav: isFavorite, nofav: !isFavorite }">
        <img :src="comic.imagen" alt="Imagen del Comic" />
        <h1>{{ comic.titulo }}</h1>
        <p>{{ comic.descripcion }}</p>
        <span class="year">{{ comic.year }}</span>
        <form v-on:submit.prevent="toggleFavorite">
            <button type="submit">{{ isFavorite ? 'Quitar de Favoritos' : 'FAVORITO' }}</button>
        </form>
        <form v-on:submit.prevent="deleteComic">
            <button type="submit">ELIMINAR</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ComicComponent',
    props: {
        comic: {
            type: Object,
            required: true
        },
        isFavorite: {
            type: Boolean,
            default: false
        },
        index: {
            type: Number,
        }
    },
    methods: {
        toggleFavorite() {
            this.$emit('setFavorito', this.comic);
        },
        deleteComic() {
            this.$emit('deleteComic', this.index);
        }
    }
}
</script>

<style scoped>
</style>
