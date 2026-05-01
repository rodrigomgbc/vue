<template>
<v-card width="250" rounded="0" elevation="1" style="position: sticky; top: 0; height: 100vh; overflow-y: auto;">
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

      <!-- Ordenación por precio -->
      <p class="text-subtitle-2 font-weight-bold mb-2">Ordenar por precio</p>
      <v-btn-toggle
        v-model="ordenPrecio"
        mandatory
        color="blue-darken-3"
        variant="outlined"
        density="compact"
        class="mb-4"
        style="width: 100%"
      >
      <v-btn value="asc" size="small" style="width: 50%">↑ Menor</v-btn>
      <v-btn value="desc" size="small" style="width: 50%">↓ Mayor</v-btn>
      </v-btn-toggle>

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
  </v-card>
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
      ordenPrecio: 'asc',
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
    ordenPrecio()           { this.emitirFiltros() },
  },

  methods: {
    emitirFiltros() {
      this.$emit('filtrar', {
        categoriaId:  this.categoriaSeleccionada,
        precioMax:    this.precioMax,
        combustible:  this.combustibleSeleccionado,
        ordenPrecio:  this.ordenPrecio,
      })
    },

    limpiarFiltros() {
      this.categoriaSeleccionada    = null
      this.precioMax                = 180000
      this.combustibleSeleccionado  = null
      this.ordenPrecio              = 'asc'
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
