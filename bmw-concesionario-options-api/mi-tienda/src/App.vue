<template>
  <v-app>

    <!-- Cabecera con las categorías -->
    <AppHeader
      :categorias="categorias"
      @seleccionar-categoria="filtrarPorCategoria"
    />

    <!-- Menú lateral con filtros -->
    <SidebarMenu
      :categorias="categorias"
      @filtrar="aplicarFiltros"
    />

    <!-- Cuerpo principal -->
    <v-main>
      <v-container fluid class="pa-6">
        <ProductList
          :productos="productosFiltrados"
          @eliminar-producto="eliminarProducto"
        />
      </v-container>
    </v-main>

    <!-- Pie de página -->
    <AppFooter />

  </v-app>
</template>

<script>
import { categorias }          from './data/categorias.js'
import { productosIniciales }  from './data/productos.js'
import AppHeader   from './components/AppHeader.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import ProductList from './components/ProductList.vue'
import AppFooter   from './components/AppFooter.vue'

export default {
  name: 'App',

  components: {
    AppHeader,
    SidebarMenu,
    ProductList,
    AppFooter,
  },

  data() {
    return {
      categorias:  categorias,
      productos:   [...productosIniciales],

      // Filtros activos en cada momento
      filtros: {
        categoriaId:  null,
        precioMax:    180000,
        combustible:  null,
      },
    }
  },

  computed: {
    // Lista filtrada que se pasa a ProductList
    productosFiltrados() {
      return this.productos.filter((p) => {
        const porCategoria   = !this.filtros.categoriaId  || p.categoriaId === this.filtros.categoriaId
        const porPrecio      = p.precio <= this.filtros.precioMax
        const porCombustible = !this.filtros.combustible  || p.combustible === this.filtros.combustible
        return porCategoria && porPrecio && porCombustible
      })
    },
  },

  methods: {
    // Recibe los filtros del SidebarMenu y los guarda
    aplicarFiltros(nuevosFiltros) {
      this.filtros = nuevosFiltros
    },

    // Filtra por categoría al pulsar en la cabecera
    filtrarPorCategoria(categoriaId) {
      this.filtros.categoriaId = categoriaId
    },

    // Elimina un producto por su id
    eliminarProducto(id) {
      this.productos = this.productos.filter((p) => p.id !== id)
    },
  },
}
</script>
