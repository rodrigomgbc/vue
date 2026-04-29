<template>
  <v-container fluid class="pa-0">

    <!-- Hero -->
    <v-sheet color="blue-darken-3" class="text-white text-center py-16 px-4">
      <h1 class="text-h3 font-weight-bold mb-4">Bienvenido a Concesionario BMW</h1>
      <p class="text-h6 mb-6">Descubre nuestra gama de vehículos de alta gama</p>
      <v-btn color="white" variant="flat" to="/catalogo">Ver catálogo</v-btn>
    </v-sheet>

    <!-- Tablero de categorías -->
    <v-container class="my-8">
      <h2 class="text-h5 font-weight-bold mb-4">Categorías</h2>
      <CategoryBoard :categorias="categorias" />
    </v-container>

    <!-- Muestra aleatoria de productos -->
    <v-container class="my-8">
      <h2 class="text-h5 font-weight-bold mb-4">Más vendidos</h2>
      <ProductList :productos="productosAleatorios" />
    </v-container>

  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { categorias } from '../data/categorias.js'
import { productosIniciales } from '../data/productos.js'
import CategoryBoard from '../components/CategoryBoard.vue'
import ProductList from '../components/ProductList.vue'

const productosAleatorios = computed(() => {
  return [...productosIniciales]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
})
</script>