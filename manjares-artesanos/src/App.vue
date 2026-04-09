<template>
  <div id="app">
    <AppHeader :products="products" />
    <HeroSlider />
    <ProductGrid :products="products" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import HeroSlider from './components/HeroSlider.vue'
import ProductGrid from './components/ProductGrid.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',

  components: {
    AppHeader,
    HeroSlider,
    ProductGrid,
    AppFooter
  },

  data() {
    return {
      products: [
        {
          id: 'marisco',
          name: 'Mariscos',
          category: 'Marisco',
          origin: 'Coruña · Cedeira · Ribeira · San Lucar · Isla Cristina',
          description: 'Granos medianos de tonos dorados. Sabor a nuez con notas marinas profundas.',
          icon: '🫧',
          color: '#1a1a12',
          image: './public/imagenes/productos/mariscos.jpg'
        },
        {
          id: 'iberico-bellota',
          name: 'Ibérico Bellota',
          category: 'Carnes',
          origin: 'Extremadura · España',
          description: 'Cerdo ibérico de raza pura, criado en dehesa. Sabor intenso y textura suave.',
          icon: '🫧',
          color: '#141410',
          image: './public/imagenes/productos/iberico-bellota.jpg'
        },
        {
          id: 'caviar',
          name: 'Caviar de esturión',
          category: 'Caviar',
          origin: 'Bretaña · Francia',
          description: 'Capturado cada mañana. Entregado vivo el mismo día del pedido. Peso medio 800g.',
          icon: '🦞',
          color: '#1f0d0d',
          image: './public/imagenes/productos/caviar.jpg'
        },
        {
          id: 'angulas',
          name: 'Angulas',
          category: 'Angulas',
          origin: 'Ría de Vigo · Galicia',
          description: 'Temporada de octubre a mayo. Cocido artesanalmente o vivo según preferencia.',
          icon: '🦀',
          color: '#1f1008',
          image: './public/imagenes/productos/angulas.jpg'
        },
        {
          id: 'pescado',
          name: 'Pescados',
          category: 'Pescado',
          origin: 'Burela · Coruña',
          description: 'Nuestro pescadero preparará los pescados a tu gusto (en rodajas, en lomos, enteros...).',
          icon: '🦪',
          color: '#0d1a18',
          image: './public/imagenes/productos/pescado.jpg'
        },
        {
          id: 'conservas-pescado',
          name: 'Conservas de pescado',
          category: 'Pescado',
          origin: 'Costa Cantábrica · ES',
          description: 'De temporada, cocida en agua de mar. Textura delicada y sabor intenso a mar.',
          icon: '🦀',
          color: '#180d0d',
          image: './public/imagenes/productos/conservas-pescado.jpg'
        },
        {
          id: 'vinos',
          name: 'Vinos',
          category: 'Bebidas',
          origin: 'Ribera del Duero · España',
          description: 'Vinos tintos de gran calidad. Sabor complejo y estructura equilibrada.',
          icon: '🍷',
          color: '#1f0f08',
          image: './public/imagenes/productos/vinos.jpg'
        },
        {
          id: 'carne',
          name: 'Carnes',
          category: 'Carne',
          origin: 'Galicia · España',
          description: 'Maduración 45 días. Grasa infiltrada excepcional. Corte a demanda desde 800g.',
          icon: '🥩',
          color: '#1a0e0a',
          image: './public/imagenes/productos/carne.jpg'
        },
        {
          id: 'conservas-vegetales',
          name: 'Conservas de vegetales',
          category: 'Conservas',
          origin: 'Cantabria · España',
          description: 'De temporada, cocida en agua de mar. Textura delicada y sabor intenso a mar.',
          icon: '🥬',
          color: '#1a1208',
          image: './public/imagenes/productos/conservas-vegetales.jpg'
        },
        {
          id: 'aceite',
          name: 'Aceite de oliva',
          category: 'Conservas',
          origin: 'Andalucía · España',
          description: 'Obtenido de olivas de la variedad Picual. Sabor intenso y aroma afrutado.',
          icon: '🫒',
          color: '#0f0f0a',
          image: './public/imagenes/productos/aceite.jpg'
        },
        {
          id: 'atun',
          name: 'Atún rojo',
          category: 'Pescado',
          origin: 'Alaska · EEUU',
          description: 'Sockeye de pesca sostenible certificada. Ahumado en frío de forma artesanal.',
          icon: '🐟',
          color: '#0d1520',
          image: './public/imagenes/productos/atun.jpg'
        },
        {
          id: 'string-unico-sin-espacios',
          name: 'Nombre visible del producto',
          category: 'Categoría',
          origin: 'Lugar de origen',
          description: 'Descripción breve y elegante del producto',
          icon: '🔤',
          color: '#xxxxxx',
          image: ''
        }
      ]
    }
  }
}
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
