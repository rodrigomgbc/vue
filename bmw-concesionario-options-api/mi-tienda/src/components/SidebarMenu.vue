<template>
  <v-navigation-drawer permanent width="250">

    <v-list-item
      title="Filtros"
      prepend-icon="mdi-filter"
      class="py-4 bg-blue-darken-3 text-white"
    />

    <div class="pa-4">

      <!-- Filtro por categoría -->
      <p class="text-subtitle-2 font-weight-bold mb-2">Serie</p>
      <v-select
        v-model="categoriaSeleccionada"
        :items="opcionesCategorias"
        item-title="nombre"
        item-value="id"
        label="Todas las series"
        clearable
        variant="outlined"
        density="compact"
        class="mb-4"
      />

      <!-- Filtro por precio -->
      <p class="text-subtitle-2 font-weight-bold mb-1">Precio máximo</p>
      <p class="text-caption text-grey mb-2">{{ formatearPrecio(precioMax) }}</p>
      <v-slider
        v-model="precioMax"
        min="30000"
        max="180000"
        step="5000"
        color="blue-darken-3"
        class="mb-4"
      />

      <!-- Filtro por combustible -->
      <p class="text-subtitle-2 font-weight-bold mb-2">Combustible</p>
      <v-select
        v-model="combustibleSeleccionado"
        :items="['Gasolina', 'Diésel', 'Eléctrico', 'Híbrido']"
        label="Todos"
        clearable
        variant="outlined"
        density="compact"
        class="mb-4"
      />

      <!-- Botón limpiar filtros -->
      <v-btn
        block
        variant="tonal"
        color="blue-darken-3"
        prepend-icon="mdi-refresh"
        @click="limpiarFiltros"
      >
        Limpiar filtros
      </v-btn>

    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SidebarMenu',

  props: {
    categorias: {
      type: Array,
      required: true,
    },
  },

  emits: ['filtrar'],

  data() {
    return {
      categoriaSeleccionada: null,
      precioMax: 180000,
      combustibleSeleccionado: null,
    }
  },

  computed: {
    // Añadimos las categorías tal cual al select
    opcionesCategorias() {
      return this.categorias
    },
  },

  watch: {
    // Cada vez que cambia cualquier filtro, emitimos el evento hacia App.vue
    categoriaSeleccionada() { this.emitirFiltros() },
    precioMax()             { this.emitirFiltros() },
    combustibleSeleccionado() { this.emitirFiltros() },
  },

  methods: {
    emitirFiltros() {
      this.$emit('filtrar', {
        categoriaId:  this.categoriaSeleccionada,
        precioMax:    this.precioMax,
        combustible:  this.combustibleSeleccionado,
      })
    },

    limpiarFiltros() {
      this.categoriaSeleccionada    = null
      this.precioMax                = 180000
      this.combustibleSeleccionado  = null
    },

    formatearPrecio(valor) {
      return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
      }).format(valor)
    },
  },
}
</script>
