<template>
  <v-container fluid class="pa-0">

    <!-- Tablero de categorias -->
    <v-container class="6">
      <h2 class="text-h5 font-weight-bold mb-4">Categorías</h2>
      <v-btn
        variant="tonal"
        color="blue-darken-3"
        class="mb-4"
        @click="$router.push('/catalogo')"
      >
        Todos
      </v-btn>
      <CategoryBoard :categorias="categorias" />
    </v-container>

    
      <v-row align="stretch">

        <!-- Barra lateral para filtrar -->
        <v-col cols="12" md="3" class="pa-0">
          <SidebarMenu
            :categorias="categorias"
            @filtrar="aplicarFiltros"
          />
        </v-col>

        <!-- Tablero de productos -->
        <v-col cols="12" class="pa-6">
          <ProductList :productos="productosFiltrados" />
        </v-col>

      </v-row>
    

  </v-container>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { categorias } from '../data/categorias.js';
import { productosIniciales } from '../data/productos.js';
import CategoryBoard from '../components/CategoryBoard.vue';
import SidebarMenu from '../components/SidebarMenu.vue';
import ProductList from '../components/ProductList.vue';

const route = useRoute();

const filtros = ref({
  categoriaId: null,
  precioMax: 180000,
  combustible: null
})

// Cuando llega un query param de categoria (desde home o categoryBoard), lo aplicamos
watch(
  () => route.query.categoriaId,
  (nuevoId) => {
    filtros.value.categoriaId = nuevoId ? Number(nuevoId) : null
  }, 
  { immediate: true }
)

const aplicarFiltros = (nuevosFiltros) => {
  filtros.value = nuevosFiltros
}

const productosFiltrados = computed(() => {
  return productosIniciales.filter((p) => {
    const porCategoria = !filtros.value.categoriaId || p.categoriaId === filtros.value.categoriaId
    const porPrecio = p.precio <= filtros.value.precioMax
    const porCombustible = !filtros.value.combustible || p.combustible === filtros.value.combustible
    return porCategoria && porPrecio && porCombustible
  })
})

</script>