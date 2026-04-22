<template>
  <!-- <div>
    <ProductCard
      v-for="p in productos"
      :key="p.id"
      :product="p"
      @delete="handleDelete"
      @duplicate="handleDuplicate"
    />
  </div> -->

  <h1>Bienvenido a la tienda</h1>
      <v-row>
        <v-col v-for="p in productos" :key="p.id" cols="12" md="4">
          <ProductCard :product="p"
          @delete="handleDelete"
          @duplicate="handleDuplicate"
          />
          <!-- <v-card>
            <v-card-title>Producto 1</v-card-title>
          </v-card> -->
        </v-col>
      </v-row>

</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductList",
  components: { ProductCard },
  props: {
    productos: {
      type: Array,
      required: true,
    },
  },
  emits: ["delete-product", "duplicate-product"],
  methods: {
    handleDelete(id) {
      this.$emit("delete-product", id);
    },
    handleDuplicate(product) {
      this.$emit("duplicate-product", product);
    },
  },
};
</script>
