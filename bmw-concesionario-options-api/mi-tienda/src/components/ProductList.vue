<template>
  <div>

    <!-- Contador de productos mostrados -->
    <p class="text-body-2 text-grey mb-4">
      <v-icon icon="mdi-car" size="16" class="mr-1" />
      Mostrando <strong>{{ productos.length }}</strong>
      {{ productos.length === 1 ? 'vehículo' : 'vehículos' }}
    </p>

    <!-- Rejilla de tarjetas -->
    <v-row v-if="productos.length > 0">
      <v-col
        v-for="producto in productos"
        :key="producto.id"
        cols="12" sm="6" md="4" lg="3"
      >
        <ProductCard
          :producto="producto"
          @eliminar="handleEliminar"
        />
      </v-col>
    </v-row>

    <!-- Mensaje cuando no hay resultados -->
    <v-sheet v-else rounded="lg" color="grey-lighten-4" class="pa-12 text-center">
      <v-icon icon="mdi-car-off" size="64" color="grey" />
      <p class="text-h6 text-grey mt-3">No hay vehículos con esos filtros</p>
    </v-sheet>

  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',

  components: {
    ProductCard,
  },

  props: {
    productos: {
      type: Array,
      required: true,
    },
  },

  emits: ['eliminar-producto'],

  methods: {
    handleEliminar(id) {
      this.$emit('eliminar-producto', id)
    },
  },
}
</script>
