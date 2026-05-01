<template>
  <v-container class="my-6">

    <h1 class="text-h4 font-weight-bold mb-2">Mis Favoritos</h1>

    <!-- Enlace al catálogo -->
    <v-btn
      variant="tonal"
      color="blue-darken-3"
      prepend-icon="mdi-arrow-left"
      to="/catalogo"
      class="mb-6"
    >
      Volver al catálogo
    </v-btn>

    <!-- Sin favoritos -->
    <v-sheet v-if="favoritos.length === 0" rounded="lg" color="grey-lighten-4" class="pa-12 text-center">
      <v-icon icon="mdi-heart-off" size="64" color="grey" />
      <p class="text-h6 text-grey mt-3">No tienes vehículos favoritos</p>
      <v-btn variant="tonal" color="blue-darken-3" to="/catalogo" class="mt-4">
        Ver catálogo
      </v-btn>
    </v-sheet>

    <template v-else>

      <!-- Ordenación por nivel -->
      <v-row class="mb-4" align="center">
        <v-col cols="auto">
          <span class="text-body-2 text-grey">Ordenar por nivel:</span>
        </v-col>
        <v-col cols="auto">
          <v-btn-toggle v-model="orden" mandatory color="blue-darken-3" variant="outlined" density="compact">
            <v-btn value="asc" size="small">Ascendente</v-btn>
            <v-btn value="desc" size="small">Descendente</v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>

      <!-- Tablero de favoritos -->
      <v-row>
        <v-col
          v-for="producto in favoritosOrdenados"
          :key="producto.id"
          cols="12" sm="6" md="4" lg="3"
        >
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
              <div class="text-caption text-grey">Sin IVA</div>
              <div class="text-h6 font-weight-bold text-blue-darken-3">
                {{ formatearPrecio(producto.precio) }}
              </div>

              <!-- Selector de nivel -->
              <div class="mt-3">
                <div class="text-caption text-grey mb-1">Nivel de interés</div>
                <v-rating
                  v-model="producto.nivel"
                  color="amber"
                  active-color="amber"
                  density="compact"
                  size="small"
                  :length="5"
                  @update:modelValue="(val) => store.cambiarNivel(producto.id, val)"
                />
              </div>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn
                icon="mdi-heart"
                color="red"
                variant="text"
                size="small"
                @click="store.eliminarFavorito(producto.id)"
              />
            </v-card-actions>

          </v-card>
        </v-col>
      </v-row>

    </template>

  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFavoritosStore } from '../stores/favoritos'

const store = useFavoritosStore()
const orden = ref('desc')

const favoritos = computed(() => store.favoritos)

const favoritosOrdenados = computed(() => {
  return [...favoritos.value].sort((a, b) => {
    return orden.value === 'desc' ? b.nivel - a.nivel : a.nivel - b.nivel
  })
})

const formatearPrecio = (valor) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(valor)
}
</script>