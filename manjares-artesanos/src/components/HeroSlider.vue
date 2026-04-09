<template>
  <section class="slider">
    <!-- Pista de los slides-->
    <div class="slider__track" :style="trackStyle">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slider__slide"
        :style="{ backgroundColor: slide.color }"
      >
        <img
          v-if="slide.image"
          :src="slide.image"
          :alt="slide.alt"
          class="slider__img"
        />
        <div class="slider__overlay">
          <div class="slider__content">
            <span class="slider__kicker">{{ slide.kicker }}</span>
            <h2 class="slider__title">{{ slide.title }}</h2>
            <p class="slider__subtitle">{{ slide.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="slider__controls">
      <button
        class="slider__arrow slider__arrow--prev"
        @click="prevSlide"
        aria-label="Anterior"
      >
        ←
      </button>

      <div class="slider__dots">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          class="slider__dot"
          :class="{ 'slider__dot--active': currentIndex === index }"
          @click="goToSlide(index)"
          :aria-label="'Ir a slide ' + (index + 1)"
        ></button>
      </div>

      <button
        class="slider__arrow slider__arrow--next"
        @click="nextSlide"
        aria-label="Siguiente"
      >
        →
      </button>
    </div>

    <div class="slider__progress">
      <div class="slider__progress-bar" :style="progressStyle"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSlider',

  data() {
    return {
      currentIndex: 0,
      intervalId: null,
      progressWidth: 0,
      progressIntervalId: null,
      intervalDuration: 5000,

      slides: [
        {
          image: '',
          color: '#1a1a12',
          alt: 'Caviar premium',
          kicker: 'Selección exclusiva',
          title: 'Caviar de esturión',
          subtitle: 'Oscietra, Beluga y Sevruga. Origen certificado, entrega en frío.'
        },
        {
          image: '',
          color: '#0d1f18',
          alt: 'Mariscos frescos',
          kicker: 'Directo de las rías',
          title: 'Mariscos vivos',
          subtitle: 'Bogavante, centollo y nécora. Capturado y entregado el mismo día.'
        },
        {
          image: '',
          color: '#1f0d0d',
          alt: 'Carnes premium',
          kicker: 'Razas selectas',
          title: 'Carnes maduradas',
          subtitle: 'Wagyu A5, buey gallego y cortes excepcionales. Maduración controlada.'
        },
        {
          image: '',
          color: '#1a1208',
          alt: 'Foie gras artesanal',
          kicker: 'Producto artesano',
          title: 'Foie gras & trufa',
          subtitle: 'Elaboración artesanal. Seleccionados personalmente en origen.'
        }
      ]
    }
  },

  computed: {
    trackStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`
      }
    },

    progressStyle() {
      return {
        width: this.progressWidth + '%'
      }
    }
  },

  mounted() {
    this.startAutoplay()
  },

  beforeUnmount() {
    this.stopAutoplay()
  },

  methods: {
    startAutoplay() {
      this.progressWidth = 0
      this.progressIntervalId = setInterval(() => {
        this.progressWidth += (100 / (this.intervalDuration / 50))
      }, 50)

      this.intervalId = setInterval(() => {
        this.nextSlide()
      }, this.intervalDuration)
    },

    stopAutoplay() {
      clearInterval(this.intervalId)
      clearInterval(this.progressIntervalId)
    },

    resetAutoplay() {
      this.stopAutoplay()
      this.startAutoplay()
    },

    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length
      this.resetProgress()
    },

    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length
      this.resetAutoplay()
    },

    goToSlide(index) {
      this.currentIndex = index
      this.resetAutoplay()
    },

    resetProgress() {
      clearInterval(this.progressIntervalId)
      this.progressWidth = 0
      this.progressIntervalId = setInterval(() => {
        this.progressWidth += (100 / (this.intervalDuration / 50))
      }, 50)
    }
  }
}
</script>

<style scoped>
.slider {
  position: relative;
  overflow: hidden;
  height: 500px;
  border-bottom: 1px solid var(--color-border-dark);
}

.slider__track {
  display: flex;
  height: 100%;
  transition: transform 0.7s cubic-bezier(0.77, 0, 0.175, 1);
}

.slider__slide {
  min-width: 100%;
  height: 100%;
  position: relative;
  flex-shrink: 0;
}

.slider__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.75;
}

.slider__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 52px 60px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.72) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    transparent 100%
  );
}

.slider__content {
  max-width: 600px;
}

.slider__kicker {
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 12px;
  opacity: 0.9;
}

.slider__title {
  font-family: var(--font-serif);
  font-size: 52px;
  font-weight: 400;
  line-height: 1.0;
  color: #fafaf8;
  margin-bottom: 14px;
}

.slider__subtitle {
  font-family: var(--font-serif);
  font-size: 17px;
  color: rgba(250, 250, 248, 0.72);
  font-style: italic;
  max-width: 440px;
  line-height: 1.5;
}

.slider__controls {
  position: absolute;
  bottom: 28px;
  right: 40px;
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 10;
}

.slider__arrow {
  font-family: var(--font-mono);
  font-size: 16px;
  color: rgba(250, 250, 248, 0.6);
  background: none;
  border: none;
  padding: 4px 8px;
  transition: color 0.2s;
  line-height: 1;
}

.slider__arrow:hover {
  color: #fafaf8;
}

.slider__dots {
  display: flex;
  gap: 8px;
}

.slider__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(250, 250, 248, 0.35);
  border: none;
  padding: 0;
  transition: background 0.3s, transform 0.3s;
}

.slider__dot--active {
  background: #fafaf8;
  transform: scale(1.4);
}

.slider__progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.15);
}

.slider__progress-bar {
  height: 100%;
  background: var(--color-accent);
  transition: width 0.05s linear;
}

@media (max-width: 768px) {
  .slider {
    height: 360px;
  }

  .slider__title {
    font-size: 34px;
  }

  .slider__overlay {
    padding: 32px 24px;
  }

  .slider__controls {
    right: 20px;
    bottom: 20px;
  }
}
</style>
