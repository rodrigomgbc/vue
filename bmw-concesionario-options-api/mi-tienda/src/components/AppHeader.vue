<template>
   <v-app-bar colo="blue-darken-3" elevation="2" dark>

    <!-- Icono a la izquierda que lleva al home -->
    <v-btn icon to="/" variant="text" colo="white" class="ml-1">
      <v-icon icon="mdi-home" size="28" />
    </v-btn>
   </v-app-bar>

    <!-- Nombre de la tienda -->
    <v-app-bar-title>
      <router-link to="/" class="text-white text-decoration-none font-weight-bold">
        Concesionario BMW
      </router-link>
    </v-app-bar-title>

    
</template>