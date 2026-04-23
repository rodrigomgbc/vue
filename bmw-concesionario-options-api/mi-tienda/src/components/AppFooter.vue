<template>
  <v-footer color="blue-darken-3" class="text-center py-3">
    <v-col class="text-white">

      <!-- Nombre de la tienda-->
      <div class="mb-2 font-weight-bold">Concesionario BMW</div>

      <!-- Apartado de enlaces -->
      <div class="mb-2">
        <a href="#" class="text-white text-caption mx-3">Terminos y condiciones</a>
        <a href="#" class="text-white text-caption mx-3">Únete a nuestro equipo</a>
        <router-link to="/contacto" class="text-white text-caption mx-3">Contacto</router-link>
      </div>

      <div class="text-caption">
        © {{ anioActual }} Concesionario BMW
      </div>

    </v-col>
  </v-footer>
</template>

<script setup>
  const anioActual = new Date().getFullYear()
</script>