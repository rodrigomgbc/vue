# Manjares Artesanos — Web Gourmet

Proyecto Vue 3 con Options API para la tienda online de Manjares Artesanos.

## Estructura del proyecto

```
manjares-artesanos/
├── public/
│   └── logo.png          ← Coloca aquí el logo del negocio
├── src/
│   ├── assets/
│   │   └── main.css       ← Variables CSS globales y reset
│   ├── components/
│   │   ├── AppHeader.vue  ← Header con logo + navegación por productos
│   │   ├── HeroSlider.vue ← Carrusel automático de imágenes hero
│   │   ├── ProductGrid.vue← Grid de los 11 productos
│   │   └── AppFooter.vue  ← Footer 3 columnas + barra de copyright
│   ├── App.vue            ← Componente raíz con datos de productos
│   └── main.js            ← Punto de entrada
├── index.html
├── vite.config.js
└── package.json
```

## Instalación y arranque

```bash
npm install
npm run dev
```

## Personalización

### Logo
Coloca el archivo del logo en `/public/logo.png`.
El componente `AppHeader.vue` lo carga automáticamente.
Si el archivo no existe, muestra el nombre en tipografía como fallback.

### Imágenes del slider
En `HeroSlider.vue`, en el array `slides`, rellena el campo `image` de cada slide con la ruta a tu imagen:
```js
{ image: '/images/hero-caviar.jpg', ... }
```

### Imágenes de productos
En `App.vue`, en el array `products`, rellena el campo `image` de cada producto:
```js
{ image: '/images/caviar-oscietra.jpg', ... }
```
Mientras `image` esté vacío, se muestra el placeholder de color con el icono emoji.

### Número de WhatsApp
Busca `wa.me/34600000000` en los componentes y cámbialo por el número real.

### Datos de productos
Todos los productos se gestionan desde `App.vue` en el array `products`.
Cada producto tiene: `id`, `name`, `category`, `origin`, `description`, `price`, `icon`, `color`, `image`.

## Tecnologías
- Vue 3 con **Options API**
- Vite como bundler
- CSS puro con variables (sin framework)
- Google Fonts: EB Garamond + Space Mono
