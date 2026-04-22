import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { createRouter, createWebHistory } from 'vue-router'
import {createPinia} from 'pinia'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import CatalogoView from './views/CatalogoView.vue'
import FavoritosView from './views/FavoritosView.vue'
import ContactoView from './views/ContactoView.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: { defaultTheme: 'light' },
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/catalogo', name: 'catalogo', component: CatalogoView },
    { path: '/favoritos', name: 'favoritos', component: FavoritosView },
    { path: '/contacto', name: 'contacto', component: ContactoView },
  ],
})

const pinia = createPinia()

createApp(App).use(vuetify).use(router).use(pinia).mount('#app')
