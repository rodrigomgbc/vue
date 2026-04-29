<template>
    <v-row>
        <v-col
            v-for="cat in categorias"
            :key="cat.id"
            cols="6" sm="3"
        >
            <v-card
                color="blue-darken-3"
                theme="dark"
                class="text-center pa-4"
                hover
                :to="`/catalogo?categoriaId=${cat.id}`"
            >
                <div class="font-weight-bold">{{ cat.nombre }}</div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
    defineProps({
        categorias: {
            type: Array,
            required: true
        }
    })
</script>