<template>
  <footer class="footer">
    <div class="footer__columns">

      <div class="footer__col footer__col--about">
        <h4 class="footer__col-title">Quiénes somos</h4>
        <div class="footer__col-line"></div>
        <div class="footer__logo-small">
          <span class="footer__logo-main">Manjares</span>
          <em class="footer__logo-accent"> Artesanos</em>
        </div>
        <p class="footer__text">
          Desde 1998 seleccionamos personalmente los productos gourmet más excepcionales para llevarlos directamente a tu mesa. Caviar de esturión, mariscos de las rías gallegas y carnes de razas selectas con origen certificado.
        </p>
        <p class="footer__text">
          Trabajamos directamente con productores artesanales para garantizar la máxima frescura y autenticidad en cada pedido.
        </p>
        <div class="footer__contact">
          <span class="footer__contact-item">
            <span class="footer__contact-label">Tel.</span>
            +34 600 000 000
          </span>
          <span class="footer__contact-item">
            <span class="footer__contact-label">Email</span>
            pedidos@manjaresartesanos.com
          </span>
          <span class="footer__contact-item">
            <span class="footer__contact-label">Madrid</span>
            Entrega a domicilio en 24h
          </span>
        </div>
      </div>

      <div class="footer__col footer__col--shipping">
        <h4 class="footer__col-title">Distribución</h4>
        <div class="footer__col-line"></div>
        <ul class="footer__shipping-list">
          <li
            v-for="item in shippingInfo"
            :key="item.id"
            class="footer__shipping-item"
          >
            <span class="footer__shipping-icon">{{ item.icon }}</span>
            <div>
              <div class="footer__shipping-title">{{ item.title }}</div>
              <div class="footer__shipping-desc">{{ item.desc }}</div>
            </div>
          </li>
        </ul>
        <div class="footer__zones">
          <div class="footer__zones-label">Zonas de entrega</div>
          <div class="footer__zones-tags">
            <span
              v-for="zone in zones"
              :key="zone"
              class="footer__zone-tag"
            >
              {{ zone }}
            </span>
          </div>
        </div>
      </div>

      <div class="footer__col footer__col--newsletter">
        <h4 class="footer__col-title">Mantenerse informado</h4>
        <div class="footer__col-line"></div>
        <p class="footer__text">
          Recibe en tu correo las novedades de temporada, productos exclusivos y disponibilidad especial antes que nadie.
        </p>

        <form class="footer__form" @submit.prevent="submitForm">
          <div class="footer__form-group">
            <label class="footer__form-label" for="footer-name">Nombre</label>
            <input
              id="footer-name"
              v-model="formData.name"
              type="text"
              class="footer__form-input"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div class="footer__form-group">
            <label class="footer__form-label" for="footer-email">Correo electrónico</label>
            <input
              id="footer-email"
              v-model="formData.email"
              type="email"
              class="footer__form-input"
              placeholder="tu@correo.com"
              required
            />
          </div>
          <button
            type="submit"
            class="footer__form-btn"
            :disabled="formSubmitted"
          >
            <span v-if="!formSubmitted">Suscribirme →</span>
            <span v-else>✓ Suscrito correctamente</span>
          </button>
        </form>

        <p class="footer__privacy">
          Sin spam. Puedes darte de baja en cualquier momento.
        </p>
      </div>

    </div>

    <div class="footer__bottom">
      <span class="footer__copyright">
        © {{ currentYear }} Manjares Artesanos — Todos los derechos reservados
      </span>
      <div class="footer__bottom-links">
        <a href="#" class="footer__bottom-link">Aviso legal</a>
        <a href="#" class="footer__bottom-link">Privacidad</a>
        <a href="#" class="footer__bottom-link">Cookies</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',

  data() {
    return {
      formData: {
        name: '',
        email: ''
      },
      formSubmitted: false,

      shippingInfo: [
        {
          id: 1,
          icon: '❄',
          title: 'Envío en frío garantizado',
          desc: 'Embalaje isotérmico con hielo seco o gel refrigerante según el producto.'
        },
        {
          id: 2,
          icon: '⏱',
          title: 'Entrega en 24 horas',
          desc: 'Pedidos realizados antes de las 14:00h, entregados al día siguiente.'
        },
        {
          id: 3,
          icon: '✦',
          title: 'Producto fresco diario',
          desc: 'Recibimos mercancía cada mañana directamente de nuestros proveedores.'
        },
        {
          id: 4,
          icon: '◈',
          title: 'Pedido mínimo',
          desc: 'Sin pedido mínimo. Gastos de envío desde 8,90 € según zona.'
        }
      ],

      zones: [
        'Madrid', 'Barcelona', 'Valencia', 'Sevilla',
        'Bilbao', 'Málaga', 'Resto peninsular'
      ]
    }
  },

  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  },

  methods: {
    submitForm() {
      if (this.formData.name && this.formData.email) {
        this.formSubmitted = true
        this.formData.name = ''
        this.formData.email = ''
      }
    }
  }
}
</script>

<style scoped>
.footer {
  background: var(--color-dark);
  color: #fafaf8;
  border-top: 1px solid var(--color-border-dark);
}

.footer__columns {
  display: grid;
  grid-template-columns: 1.1fr 1fr 1fr;
  border-bottom: 1px solid #222;
}

.footer__col {
  padding: 48px 36px;
  border-right: 0.5px solid #222;
}

.footer__col:last-child {
  border-right: none;
}

.footer__col-title {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 12px;
  font-weight: 400;
}

.footer__col-line {
  height: 1px;
  background: #222;
  margin-bottom: 24px;
}

.footer__logo-small {
  font-family: var(--font-serif);
  font-size: 22px;
  margin-bottom: 16px;
}

.footer__logo-main {
  color: #fafaf8;
  font-weight: 400;
}

.footer__logo-accent {
  font-style: italic;
  color: var(--color-accent);
}

.footer__text {
  font-family: var(--font-serif);
  font-size: 14px;
  color: #777;
  line-height: 1.7;
  margin-bottom: 14px;
}

.footer__contact {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__contact-item {
  font-family: var(--font-mono);
  font-size: 11px;
  color: #888;
  letter-spacing: 0.05em;
}

.footer__contact-label {
  color: #555;
  margin-right: 10px;
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.footer__shipping-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 28px;
}

.footer__shipping-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.footer__shipping-icon {
  font-size: 16px;
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 2px;
  font-style: normal;
}

.footer__shipping-title {
  font-family: var(--font-serif);
  font-size: 15px;
  color: #e8e8e0;
  margin-bottom: 3px;
}

.footer__shipping-desc {
  font-family: var(--font-serif);
  font-size: 13px;
  color: #666;
  font-style: italic;
  line-height: 1.5;
}

.footer__zones {
  border-top: 0.5px solid #222;
  padding-top: 20px;
}

.footer__zones-label {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #555;
  margin-bottom: 12px;
}

.footer__zones-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.footer__zone-tag {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.1em;
  color: #888;
  border: 0.5px solid #333;
  padding: 3px 10px;
}

.footer__form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 14px;
}

.footer__form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer__form-label {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #555;
}

.footer__form-input {
  background: #111;
  border: 0.5px solid #333;
  color: #e8e8e0;
  font-family: var(--font-serif);
  font-size: 15px;
  padding: 10px 14px;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
}

.footer__form-input::placeholder {
  color: #444;
}

.footer__form-input:focus {
  border-color: var(--color-accent);
}

.footer__form-btn {
  background: var(--color-accent);
  color: #fafaf8;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 12px 20px;
  border: none;
  transition: opacity 0.2s;
  align-self: flex-start;
}

.footer__form-btn:hover:not(:disabled) {
  opacity: 0.85;
}

.footer__form-btn:disabled {
  background: #3a3a3a;
  color: #888;
  cursor: default;
}

.footer__privacy {
  font-family: var(--font-mono);
  font-size: 9px;
  color: #444;
  letter-spacing: 0.08em;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 36px;
  background: #080808;
}

.footer__copyright {
  font-family: var(--font-mono);
  font-size: 10px;
  color: #444;
  letter-spacing: 0.1em;
}

.footer__bottom-links {
  display: flex;
  gap: 20px;
}

.footer__bottom-link {
  font-family: var(--font-mono);
  font-size: 9px;
  color: #444;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: color 0.2s;
}

.footer__bottom-link:hover {
  color: var(--color-accent);
}

@media (max-width: 900px) {
  .footer__columns {
    grid-template-columns: 1fr;
  }

  .footer__col {
    border-right: none;
    border-bottom: 0.5px solid #222;
    padding: 36px 24px;
  }

  .footer__bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
    padding: 16px 20px;
  }
}
</style>
