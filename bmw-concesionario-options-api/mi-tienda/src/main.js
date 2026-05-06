import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import {createPinia} from 'pinia'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  theme: { defaultTheme: 'light' },
})

const pinia = createPinia()

createApp(App).use(vuetify).use(router).use(pinia).mount('#app')
