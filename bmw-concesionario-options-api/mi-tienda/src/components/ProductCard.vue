<template>
  <v-card elevation="2" rounded="lg" height="100%">

    <v-img :src="producto.imagen" height="180" cover>
      <template #error>
        <v-sheet height="180" color="grey-lighten-3" class="d-flex align-center justify-center">
          <v-icon icon="mdi-car" size="48" color="grey" />
        </v-sheet>
      </template>
    </v-img>

    <v-card-title class="text-body-1 font-weight-bold pt-3" style="white-space: normal;">
      {{ producto.nombre }}
    </v-card-title>

    <v-card-subtitle>
      <v-chip size="small" color="blue-darken-3" class="mr-1">{{ producto.marca }}</v-chip>
      <v-chip size="small" variant="outlined">{{ producto.combustible }}</v-chip>
    </v-card-subtitle>

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
      <v-row dense class="mt-1">
        <v-col cols="12">
          <div class="text-caption text-grey">Con descuento ({{ producto.descuento }}%)</div>
          <div class="text-body-1 font-weight-medium text-green-darken-2">
            {{ formatearPrecio(precioConDescuento) }}
          </div>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-btn color="blue-darken-3" variant="tonal" size="small" prepend-icon="mdi-information-outline">
        Ver más
      </v-btn>
      <v-spacer />
      <v-btn
        :icon="esFavorito ? 'mdi-heart' : 'mdi-heart-outline'"
        :color="esFavorito ? 'red' : 'grey'"
        variant="text"
        size="small"
        @click="toggleFavorito"
      />
    </v-card-actions>

  </v-card>
</template>

<script>
import { useFavoritosStore } from '../stores/favoritos'

export default {
  name: 'ProductCard',

  props: {
    producto: {
      type: Object,
      required: true,
    },
  },

  computed: {
    precioConIVA() {
      return Math.round(this.producto.precio * 1.21)
    },

    precioConDescuento() {
      return Math.round(this.producto.precio * (1 - this.producto.descuento / 100))
    },

    esFavorito() {
      const store = useFavoritosStore()
      return store.esFavorito(this.producto.id)
    },
  },

  methods: {
    toggleFavorito() {
      const store = useFavoritosStore()
      if (store.esFavorito(this.producto.id)) {
        store.eliminarFavorito(this.producto.id)
      } else {
        store.agregarFavorito(this.producto)
      }
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