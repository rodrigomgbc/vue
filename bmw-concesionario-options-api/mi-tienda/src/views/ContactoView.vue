<template>
  <v-container class="my-6">

    <h1 class="text-h4 font-weight-bold mb-6">Información del Comercio</h1>

    <v-row align="stretch">

      <!-- Datos de contacto -->
      <v-col cols="12" md="6" class="d-flex flex-column">
        <v-card elevation="2" rounded="lg" class="pa-4 flex-grow-1">
          <v-list-item
            prepend-icon="mdi-map-marker"
            title="Dirección"
            subtitle="Calle Gran Vía, 42, 28013 Madrid"
            class="py-4"
          />
          <v-divider />
          <v-list-item
            prepend-icon="mdi-phone"
            title="Teléfono"
            subtitle="+34 912 345 678"
            class="py-4"
          />
          <v-divider />
          <v-list-item
            prepend-icon="mdi-email"
            title="Email"
            subtitle="contacto@concesionariobmw.es"
            class="py-4"
          />
          <v-divider />
          <v-list-item
            prepend-icon="mdi-clock"
            title="Horario"
            subtitle="Lunes a Viernes: 9:00 - 20:00 | Sábados: 10:00 - 14:00"
            class="py-4"
          />
          <v-divider />
          <v-list-item
            prepend-icon="mdi-car"
            title="Servicio técnico"
            subtitle="Lunes a Viernes: 8:00 - 18:00"
            class="py-4"
          />
          <v-divider />
          <v-list-item
            prepend-icon="mdi-web"
            title="Web"
            subtitle="www.concesionariobmw.es"
            class="py-4"
          />
          <v-divider />
          <v-list-item
            prepend-icon="mdi-whatsapp"
            title="WhatsApp"
            subtitle="+34 612 345 678"
            class="py-4"
          />
        </v-card>
      </v-col>

      <!-- Sobre nosotros + Síguenos -->
      <v-col cols="12" md="6" class="d-flex flex-column">
        <v-card elevation="2" rounded="lg" class="pa-6 mb-4 flex-grow-1">
          <h2 class="text-h6 font-weight-bold mb-3">Sobre nosotros</h2>
          <p class="text-body-2 text-grey-darken-1 mb-3">
            Concesionario BMW Madrid es tu punto de referencia para la compra y venta de vehículos BMW en la Comunidad de Madrid. Con más de 20 años de experiencia, ofrecemos una amplia gama de modelos nuevos y de ocasión, así como un servicio técnico oficial.
          </p>
          <p class="text-body-2 text-grey-darken-1 mb-3">
            Nuestro equipo de profesionales está formado por expertos certificados por BMW que te asesorarán en todo momento para que encuentres el vehículo que mejor se adapta a tus necesidades y presupuesto.
          </p>
          <p class="text-body-2 text-grey-darken-1">
            Además de la venta de vehículos, disponemos de taller oficial, servicio de financiación, seguros y recambios originales BMW.
          </p>
        </v-card>

        <v-card elevation="2" rounded="lg" class="pa-6 flex-grow-1">
          <h2 class="text-h6 font-weight-bold mb-3">Síguenos</h2>
          <p class="text-body-2 text-grey-darken-1 mb-4">
            Mantente al día de nuestras últimas novedades, ofertas exclusivas y eventos especiales siguiéndonos en redes sociales.
          </p>
          <div class="d-flex gap-2">
            <v-btn icon="mdi-instagram" variant="tonal" color="blue-darken-3" />
            <v-btn icon="mdi-facebook" variant="tonal" color="blue-darken-3" />
            <v-btn icon="mdi-twitter" variant="tonal" color="blue-darken-3" />
            <v-btn icon="mdi-youtube" variant="tonal" color="blue-darken-3" />
          </div>
        </v-card>
      </v-col>

    </v-row>

  </v-container>
</template>