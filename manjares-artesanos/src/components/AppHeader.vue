<template>
  <header class="header">
    <div class="header__logo-wrap">
      <img
        :src="logoSrc"
        alt="Manjares Artesanos"
        class="header__logo"
        @error="onLogoError"
      />
    </div>

    <nav class="header__nav">
      <ul class="header__nav-list">
        <li
          v-for="product in products"
          :key="product.id"
          class="header__nav-item"
        >
          <a :href="'#producto-' + product.id" class="header__nav-link">
            {{ product.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',

  props: {
    products: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      logoFallback: false
    }
  },

  computed: {
  logoSrc() {
    return '/logo.png'
  }
},

  methods: {
    onLogoError() {
      this.logoFallback = true
    },
    openWhatsApp() {
      window.open('https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido', '_blank')
    }
  }
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px 0;
}

.header__logo-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}

.header__logo {
  height: 60px;
  width: auto;
  object-fit: contain;
}

.header__nav {
  width: 100%;
  border-top: 0.5px solid var(--color-border);
}

.header__nav-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  gap: 0;
}

.header__nav-item {
  border-right: 0.5px solid var(--color-border);
}

.header__nav-item:first-child {
  border-left: 0.5px solid var(--color-border);
}

.header__nav-link {
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-ink-muted);
  padding: 10px 20px;
  transition: color 0.2s, background 0.2s;
}

.header__nav-link:hover {
  color: var(--color-accent);
  background: var(--color-accent-light);
}

.header__wa-btn {
  display: none;
  align-items: center;
  gap: 8px;
  background: #25d366;
  color: white;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  padding: 8px 18px;
  border-radius: 0;
  margin-bottom: 16px;
  margin-top: 12px;
  transition: opacity 0.2s;
}

.header__wa-btn:hover {
  opacity: 0.88;
}

.header__wa-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: white;
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .header {
    padding: 16px 20px 0;
  }

  .header__nav-link {
    font-size: 9px;
    padding: 9px 12px;
    letter-spacing: 0.1em;
  }

  .header__wa-btn {
    display: flex;
  }
}
</style>
