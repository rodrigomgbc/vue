import { defineStore } from 'pinia'

export const useFavoritosStore = defineStore('favoritos', {
  state: () => ({
    favoritos: []
  }),

  actions: {
    agregarFavorito(producto) {
      const existe = this.favoritos.find(p => p.id === producto.id)
      if (!existe) {
        this.favoritos.push({ ...producto, nivel: 1 })
      }
    },

    eliminarFavorito(id) {
      this.favoritos = this.favoritos.filter(p => p.id !== id)
    },

    esFavorito(id) {
      return this.favoritos.some(p => p.id === id)
    },

    cambiarNivel(id, nivel) {
      const producto = this.favoritos.find(p => p.id === id)
      if (producto) producto.nivel = nivel
    }
  }
})