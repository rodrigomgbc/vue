<template>
  <v-app-bar color="blue-darken-3" elevation="2">
    <v-app-bar-title>
      <v-icon icon="mdi-car" class="mr-2" />
      Concesionario BMW
    </v-app-bar-title>

    <v-spacer />

    <!-- Una pestaña por cada categoría -->
    <v-btn
      v-for="cat in categorias"
      :key="cat.id"
      variant="text"
      color="white"
      @click="$emit('seleccionar-categoria', cat.id)"
    >
      {{ cat.nombre }}
    </v-btn>

    <!-- Botón para ver todos -->
    <v-btn variant="text" color="white" @click="$emit('seleccionar-categoria', null)">
      Todos
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',

  props: {
    categorias: {
      type: Array,
      required: true,
    },
  },

  emits: ['seleccionar-categoria'],
}
</script>
