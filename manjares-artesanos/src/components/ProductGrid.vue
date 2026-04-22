<template>
  <section class="products" id="productos">
    <div class="products__header">
      <div class="products__header-line"></div>
      <h2 class="products__title">Nuestra <em>selección</em></h2>
      <div class="products__header-line"></div>
    </div>

    <div class="products__grid">
      <article
        v-for="product in products"
        :key="product.id"
        class="product-card"
        :id="'producto-' + product.id"
        @mouseenter="hoveredId = product.id"
        @mouseleave="hoveredId = null"
      >
        <div class="product-card__image-wrap">
          <div
            class="product-card__image-placeholder"
            :style="{ backgroundColor: product.color }"
          >
            <span class="product-card__icon">{{ product.icon }}</span>
          </div>
          <img
            v-if="product.image"
            :src="product.image"
            :alt="product.name"
            class="product-card__image"
          />
          <div class="product-card__badge-wrap">
            <span class="product-card__badge">{{ product.category }}</span>
          </div>
        </div>

        <div class="product-card__body">
          <span class="product-card__origin">{{ product.origin }}</span>
          <h3 class="product-card__name">{{ product.name }}</h3>
          <p class="product-card__desc">{{ product.description }}</p>
          <div class="product-card__footer">
            <button class="product-card__cta" @click="requestProduct(product)">
              Consultar →
            </button>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductGrid',

  props: {
    products: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      hoveredId: null
    }
  },

  methods: {
    requestProduct(product) {
      const msg = encodeURIComponent(
        `Hola, me interesa el producto: ${product.name}. ¿Podríais indicarme disponibilidad?`
      )
      window.open(`https://wa.me/34600000000?text=${msg}`, '_blank')
    }
  }
}
</script>

<style scoped>
.products {
  padding: 64px 40px;
  border-bottom: 1px solid var(--color-border-dark);
}

.products__header {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 48px;
}

.products__header-line {
  flex: 1;
  height: 1px;
  background: var(--color-border-dark);
}

.products__title {
  font-family: var(--font-serif);
  font-size: 36px;
  font-weight: 400;
  color: var(--color-ink);
  white-space: nowrap;
}

.products__title em {
  font-style: italic;
  color: var(--color-accent);
}

.products__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.product-card {
  border: 1px solid var(--color-border);
  border-radius: 4px;
  transition: background 0.25s, box-shadow 0.25s;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  background: var(--color-accent-light);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.product-card__image-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1/1;
  flex-shrink: 0;
}

.product-card__image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card__icon {
  font-size: 52px;
  opacity: 0.85;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.product-card:hover .product-card__icon {
  transform: scale(1.12);
}

.product-card__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-card__image {
  transform: scale(1.04);
}

.product-card__badge-wrap {
  position: absolute;
  top: 14px;
  left: 14px;
}

.product-card__badge {
  display: inline-block;
  background: var(--color-bg);
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-ink);
  padding: 4px 10px;
}

.product-card__body {
  padding: 20px 22px 22px;
}

.product-card__origin {
  display: block;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 6px;
}

.product-card__name {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 400;
  color: var(--color-ink);
  margin-bottom: 8px;
  line-height: 1.2;
}

.product-card__desc {
  font-family: var(--font-serif);
  font-size: 16px;
  font-style: italic;
  color: var(--color-ink);
  line-height: 1.55;
  margin-bottom: 18px;
}

.product-card__footer {
  display: flex;
  justify-content: center;
  border-top: 0.5px solid var(--color-border);
  padding-top: 14px;
}

.product-card__cta {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
  background: none;
  border: 0.5px solid var(--color-accent);
  padding: 6px 14px;
  transition: background 0.2s, color 0.2s;
}

.product-card__cta:hover {
  background: var(--color-accent);
  color: var(--color-bg);
}

@media (max-width: 1024px) {
  .products__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .products {
    padding: 40px 20px;
  }

  .products__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .products__grid {
    grid-template-columns: 1fr;
  }
}
</style>
