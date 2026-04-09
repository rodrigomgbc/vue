<template>
  <v-card elevation="2" rounded="lg" height="100%">

    <!-- Imagen del coche -->
    <v-img :src="producto.imagen" height="180" cover>
      <template #error>
        <v-sheet height="180" color="grey-lighten-3" class="d-flex align-center justify-center">
          <v-icon icon="mdi-car" size="48" color="grey" />
        </v-sheet>
      </template>
    </v-img>

    <!-- Nombre -->
    <v-card-title class="text-body-1 font-weight-bold pt-3" style="white-space: normal;">
      {{ producto.nombre }}
    </v-card-title>

    <!-- Chips de marca y combustible -->
    <v-card-subtitle>
      <v-chip size="small" color="blue-darken-3" class="mr-1">{{ producto.marca }}</v-chip>
      <v-chip size="small" variant="outlined">{{ producto.combustible }}</v-chip>
    </v-card-subtitle>

    <!-- Precios -->
    <v-card-text>
      <v-row dense class="mt-1">
        <v-col cols="6">
          <div class="text-caption text-grey">Sin IVA</div>
          <div class="text-h6 font-weight-bold text-blue-darken-3">
            {{ formatearPrecio(producto.precio) }}
          </div>
        </v-col>
        <v-col cols="6" class="text-right">
          <div class="text-caption text-grey">Con IVA (21%)</div>
          <div class="text-body-1 font-weight-medium">
            {{ formatearPrecio(precioConIVA) }}
          </div>
        </v-col>
      </v-row>
    </v-card-text>

    <!-- Botones -->
    <v-card-actions>
      <v-btn color="blue-darken-3" variant="tonal" size="small" prepend-icon="mdi-information-outline">
        Ver más
      </v-btn>
      <v-spacer />
      <v-btn
        icon="mdi-delete"
        color="red"
        variant="text"
        size="small"
        @click="emitirEliminar"
      />
    </v-card-actions>

  </v-card>
</template>

<script>
export default {
  name: 'ProductCard',

  props: {
    producto: {
      type: Object,
      required: true,
    },
  },

  emits: ['eliminar'],

  computed: {
    // Dato calculado: precio con IVA del 21%
    precioConIVA() {
      return Math.round(this.producto.precio * 1.21)
    },
  },

  methods: {
    emitirEliminar() {
      this.$emit('eliminar', this.producto.id)
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
