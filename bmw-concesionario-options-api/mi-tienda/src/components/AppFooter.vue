<template>
  <v-footer color="blue-darken-3" class="text-center py-3">
    <v-col class="text-white text-caption">
      © {{ anioActual }} Concesionario BMW — Av. de la Constitución, 123, Madrid — Tel: 91 000 00 00
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',

  computed: {
    anioActual() {
      return new Date().getFullYear()
    },
  },
}
</script>
