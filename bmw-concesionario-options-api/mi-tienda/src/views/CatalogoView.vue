<template>
  <v-container fluid class="pa-0">

    <div class="d-flex">

      <!-- Barra lateral para filtrar -->
      <div style="width: 250px; flex-shrink: 0;">
        <SidebarMenu
          :categorias="categorias"
          @filtrar="aplicarFiltros"
        />
      </div>

      <!-- Columna derecha -->
      <div class="flex-grow-1 pa-6">

        <!-- Tablero de categorias -->
        <h2 class="text-h5 font-weight-bold mb-4">Categorías</h2>
        <v-btn variant="tonal" color="blue-darken-3" class="mb-4" @click="$router.push('/catalogo')">
          Todos
        </v-btn>
        <CategoryBoard :categorias="categorias" />

        <v-divider class="my-6" />

        <!-- Tablero de productos -->
        <ProductList :productos="productosFiltrados" />

      </div>

    </div>

  </v-container>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CategoryBoard from '../components/CategoryBoard.vue'
import SidebarMenu from '../components/SidebarMenu.vue'
import ProductList from '../components/ProductList.vue'

const route = useRoute()

const categorias = ref([])
const productos = ref([])

onMounted(async () => {
  const resCat = await fetch('/data/categorias.json')
  categorias.value = await resCat.json()

  const resProd = await fetch('/data/productos.json')
  productos.value = await resProd.json()
})

const filtros = ref({
  categoriaId: null,
  precioMax: 180000,
  combustible: null,
  ordenPrecio: 'asc'
})

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
  return productos.value
    .filter((p) => {
      const porCategoria = !filtros.value.categoriaId || p.categoriaId === filtros.value.categoriaId
      const porPrecio = p.precio <= filtros.value.precioMax
      const porCombustible = !filtros.value.combustible || p.combustible === filtros.value.combustible
      return porCategoria && porPrecio && porCombustible
    })
    .sort((a, b) => {
      return filtros.value.ordenPrecio === 'asc' ? a.precio - b.precio : b.precio - a.precio
    })
})

</script>