<template>
  <!-- <v-app>
    <v-main>
      <h1>Mi aplicación con Vuetify</h1>
      <v-btn color="primary"> Guardar </v-btn>
    </v-main>
  </v-app>
 

  <v-app>
            barra de arriba
  <v-app-bar color="primary">
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-toolbar-title>Tienda DA2</v-toolbar-title>
  </v-app-bar>
              menu lateral
  <v-navigation-drawer v-model="drawer">
    <v-list>
      <v-list-item title="Inicio" prepend-icon="mdi-home"/>
      <v-list-item title="Productos" prepend-icon="mdi-package-variant"/>
      <v-list-item title="Pedidos" prepend-icon="mdi-cart"/>
    </v-list>
  </v-navigation-drawer>
  
  <v-main>
    <v-container>
      
      <h1>Bienvenido a la tienda</h1>
      <v-row>
        <v-col cols="4">
          <v-card>
            <v-card-title>Producto 1</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-title>Producto 2</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card>
            <v-card-title>Producto 3</v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <ProductList :productos="productosIni" 
      @delete-product="eliminarProducto"
      @duplicate-product="duplicarProducto"
      />
    </v-container>
  </v-main>
</v-app> -->

<v-app>
  <AppHeader />

  <v-main>
    <router-view />
  </v-main>

  <AppFooter />
</v-app>

</template>

<script>
import ProductList from './components/products/ProductList.vue';
import { productosIniciales } from "@/data/productos";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
// Importar componentes y ficheros de datos

export default {
  name: "App",
  components: { AppHeader, AppFooter, ProductList },
  data() {
    return {
      // declarar los datos a utilizar
      productosIni: productosIniciales,
      drawer: true,
    };
  },

  methods: {
    eliminarProducto(id) {
      this.productosIni = this.productosIni.filter((p) => p.id !== id);
    },
    agregarProducto() {
      if (this.nuevoProducto.trim() !== "") {
        this.productosIni.push(this.nuevoProducto);
        this.nuevoProducto = "";
      }
    },
    duplicarProducto(product) {
      const nuevo = {
        ...product,
        id: Date.now(),
      };
      this.productosIni.push(nuevo);
    },
  },
  computed: {
    totalProductos() {
      return this.productosIni.length;
    },
  },
};
</script>

<style scoped>
.layout {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #2c3e50;
  margin-bottom: 10px;
}

p {
  color: #555;
  margin-bottom: 20px;
}
</style>