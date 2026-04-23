<template>
   <v-app-bar color="blue-darken-3" elevation="2" theme="dark">

    <!-- Icono a la izquierda que lleva al home -->
    <v-btn icon to="/" variant="text" color="white" class="ml-1">
      <v-icon icon="mdi-home" size="28" />
    </v-btn>
   

    <!-- Nombre de la tienda -->
    <v-app-bar-title>
      <router-link to="/" class="text-white text-decoration-none font-weight-bold">
        Concesionario BMW
      </router-link>
    </v-app-bar-title>

    <v-spacer />

    <!-- Enlaces de navegación -->
    <v-btn
      v-for="enlace in enlaces"
      :key="enlace.ruta"
      :to="enlace.ruta"
      variant="text"
      color="white"
      class="text-none"
      >
        {{ enlace.nombre }}
    </v-btn>
  </v-app-bar>
</template>

<script setup>
const enlaces = [
  { nombre: 'Home',    ruta: '/'          },
  { nombre: 'Catálogo',  ruta: '/catalogo'  },
  { nombre: 'Contacto',  ruta: '/contacto'  },
  { nombre: 'Favoritos', ruta: '/favoritos' },
]
</script>