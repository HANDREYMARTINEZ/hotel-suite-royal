# Hotel Suite Royal · Melgar

Landing page del Hotel Suite Royal (Melgar, Tolima, Colombia), en español e inglés.

**Sitio publicado:** https://hotel-suite-royal.vercel.app · [English](https://hotel-suite-royal.vercel.app/en)

## Estructura

```
index.html        Página en español
en/index.html     Página en inglés
css/styles.css    Estilos (compartidos)
js/main.js        Interacciones: menú, slider, galería, visor, formulario de reserva por WhatsApp
assets/img/       Fotos del hotel
vercel.json       Configuración de Vercel (URLs limpias, caché de imágenes)
```

Sitio estático, sin dependencias ni paso de compilación.

## Configuración

El número de WhatsApp se define al inicio de `js/main.js`:

```js
const WHATSAPP_NUMBER = '573000000000'; // formato internacional, solo dígitos
```

## Desarrollo local

```bash
python -m http.server 5500
```

Luego abre http://localhost:5500.

## Publicar

```bash
npx vercel deploy --prod
```

Los cambios de contenido deben hacerse en las dos versiones: `index.html` y `en/index.html`.
