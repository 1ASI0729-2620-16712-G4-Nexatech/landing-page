# VitalTrek Landing Page

Landing page comercial para **VitalTrek**, plataforma SaaS de turismo de aventura por **Nexum Devs**.

---

## Cómo ejecutar

1. Abre este directorio en VS Code (o cualquier editor con Live Server).
2. Haz clic derecho en `index.html` → **Open with Live Server**.
3. La página abrirá en `http://127.0.0.1:5500/` (puerto puede variar).

> No se requiere `npm`, `node` ni ningún build step. Todo es HTML, CSS y JavaScript vanilla.

---

## Estructura de archivos

```
landing-page/
├── index.html              ← Entrada principal
├── README.md
├── assets/
│   ├── images/
│   │   ├── brand/
│   │   │   ├── vitaltrek-logo.svg   ← Logo con wordmark (placeholder — reemplazar)
│   │   │   └── vitaltrek-mark.svg   ← Solo ícono (para favicon — reemplazar)
│   │   └── placeholders/            ← Imágenes de reemplazo futuras
│   └── icons/                       ← Íconos SVG adicionales futuros
├── css/
│   ├── reset.css           ← Reset moderno
│   ├── tokens.css          ← Variables CSS: paleta, tipografía, espaciado
│   ├── main.css            ← Componentes y secciones
│   └── responsive.css      ← Breakpoints mobile-first
└── js/
    ├── i18n.js             ← Traducciones EN/ES y funciones de idioma
    └── main.js             ← Interacciones: menú, FAQ, scroll, reveals
```

---

## Reemplazar el logo

Los archivos `assets/images/brand/vitaltrek-logo.svg` y `vitaltrek-mark.svg` son **marcadores de posición** generados automáticamente.

Para reemplazarlos con el logo final:

1. Exporta tu logo en formato SVG desde Figma / Illustrator.
2. Nombra el archivo `vitaltrek-logo.svg` (con wordmark) y `vitaltrek-mark.svg` (solo ícono).
3. Cópialos a `assets/images/brand/`, sobreescribiendo los existentes.
4. El `vitaltrek-mark.svg` se usa también como **favicon** (`<link rel="icon">`).

---

## Internacionalización

- El idioma inicial es **inglés** (`en`).
- El toggle `EN | ES` en el header y footer cambia todos los textos sin recargar.
- La preferencia se guarda en `localStorage` bajo la clave `vitaltrek-language`.
- Para agregar o editar traducciones: editar el objeto `translations` en `js/i18n.js`.

---

## Notas del MVP académico

- Los datos del dashboard en el hero son **simulados** y están etiquetados como "Demo data".
- Los precios mostrados (S/ 99 / 199 / 299) son orientativos del MVP académico. No se procesa ningún pago.
- El contacto `hello@vitaltrek.pe` es demostrativo.
- La infraestructura IoT (wearable + checkpoints Bluetooth) es una simulación funcional del proyecto.

---

© 2026 Nexum Devs. VitalTrek academic MVP.