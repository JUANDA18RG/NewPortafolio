# Portafolio Personal

Portafolio personal desarrollado con React 19, TypeScript y Vite. Incluye animaciones avanzadas, renderizado 3D, internacionalización (ES/EN) y una colección de componentes visuales de [React Bits](https://reactbits.dev).

---

## Tecnologías principales

| Tecnología                                   | Versión | Descripción          |
| -------------------------------------------- | ------- | -------------------- |
| [React](https://react.dev)                   | 19      | Librería de UI       |
| [TypeScript](https://www.typescriptlang.org) | ~5.9    | Tipado estático      |
| [Vite](https://vitejs.dev)                   | 7       | Bundler y dev server |
| [Tailwind CSS](https://tailwindcss.com)      | 4       | Estilos utilitarios  |

---

## Librerías utilizadas

### Animaciones

| Librería                           | Descripción                                                     |
| ---------------------------------- | --------------------------------------------------------------- |
| [GSAP](https://gsap.com) `^3.14`   | Animaciones de alto rendimiento (timeline, ScrollTrigger, etc.) |
| [Motion](https://motion.dev) `^12` | Animaciones declarativas basadas en Framer Motion               |

### Renderizado 3D

| Librería                                                          | Descripción                                            |
| ----------------------------------------------------------------- | ------------------------------------------------------ |
| [Three.js](https://threejs.org) `^0.167`                          | Motor 3D WebGL                                         |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) `^9` | Renderer de Three.js para React                        |
| [@react-three/drei](https://github.com/pmndrs/drei) `^10`         | Helpers y abstraccciones para R3F                      |
| [OGL](https://github.com/oframe/ogl) `^1.0`                       | WebGL minimalista (usado en componentes de React Bits) |
| [gl-matrix](https://glmatrix.net) `^3.4`                          | Matemáticas para WebGL                                 |
| [postprocessing](https://github.com/pmndrs/postprocessing) `^6`   | Efectos de post-procesado para Three.js                |

### Internacionalización

| Librería                                         | Descripción                    |
| ------------------------------------------------ | ------------------------------ |
| [i18next](https://www.i18next.com) `^25`         | Framework de i18n              |
| [react-i18next](https://react.i18next.com) `^16` | Bindings de i18next para React |

Idiomas soportados: **Español (ES)** y **Inglés (EN)**.

### UI y componentes

| Librería                                                        | Descripción                                |
| --------------------------------------------------------------- | ------------------------------------------ |
| [Radix UI](https://www.radix-ui.com) `^1.4`                     | Primitivas de UI accesibles sin estilos    |
| [shadcn/ui](https://ui.shadcn.com) `^3`                         | Componentes pre-construidos sobre Radix UI |
| [Lucide React](https://lucide.dev) `^0.574`                     | Iconos SVG                                 |
| [React Icons](https://react-icons.github.io/react-icons) `^5.5` | Colección de iconos populares              |

### Utilidades de estilos

| Librería                                                               | Descripción                             |
| ---------------------------------------------------------------------- | --------------------------------------- |
| [clsx](https://github.com/lukeed/clsx) `^2.1`                          | Concatenación condicional de clases CSS |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) `^3.4`     | Merge inteligente de clases Tailwind    |
| [class-variance-authority](https://cva.style) `^0.7`                   | Variantes de componentes con tipado     |
| [tw-animate-css](https://github.com/jamiebuilds/tw-animate-css) `^1.4` | Animaciones CSS para Tailwind           |

### Otras dependencias

| Librería                                                                | Descripción                        |
| ----------------------------------------------------------------------- | ---------------------------------- |
| [face-api.js](https://github.com/justadudewhohacks/face-api.js) `^0.22` | Detección facial con TensorFlow.js |
| [sileo](https://www.npmjs.com/package/sileo) `^0.1`                     | Utilidad adicional                 |

---

## React Bits

Este proyecto integra componentes visuales de **[React Bits](https://reactbits.dev)**, una colección open-source de componentes React con animaciones y efectos visuales avanzados, la mayoría construidos con WebGL, Canvas y CSS.

### Componentes de React Bits utilizados

| Componente              | Descripción                                           |
| ----------------------- | ----------------------------------------------------- |
| `<Aurora />`            | Fondo animado tipo aurora boreal (WebGL)              |
| `<ASCIIText />`         | Texto renderizado con arte ASCII animado              |
| `<ClickSpark />`        | Efecto de chispas en cada clic del usuario            |
| `<FloatingLines />`     | Líneas flotantes animadas en el fondo                 |
| `<GooeyNav />`          | Navegación con efecto gooey (líquido)                 |
| `<GridScan />`          | Cuadrícula con efecto de escaneo                      |
| `<InfiniteMenu />`      | Menú con scroll infinito en 3D                        |
| `<LetterGlitch />`      | Texto con efecto glitch por letras                    |
| `<MetallicPaint />`     | Superficie metálica animada (Canvas)                  |
| `<StickerPeel />`       | Efecto de peeling de sticker                          |
| `<BubbleMenu />`        | Menú con efecto de burbujas                           |
| `<Antigravity />`       | Efecto de anti-gravedad                               |
| `<VariableProximity />` | Texto con fuente variable según proximidad del cursor |
| `<CurvedLoop />`        | Texto o elementos en bucle curvo                      |
| `<LogoLoop />`          | Carrusel de logos en bucle                            |

---

## Estructura del proyecto

```
src/
├── app/                  # Secciones principales
│   ├── navbar/           # Barra de navegación
│   ├── hero/             # Sección Hero
│   ├── tech/             # Sección de tecnologías
│   ├── experience/       # Sección de experiencia
│   ├── ContactUs/        # Sección de contacto
│   └── footer/           # Pie de página
├── components/
│   ├── layout/           # Componentes de React Bits (visuales/animados)
│   └── ui/               # Componentes UI reutilizables
├── data/                 # Datos estáticos (experiencia, navegación)
├── hooks/                # Custom hooks (useTheme, etc.)
├── i18n/                 # Configuración y traducciones ES/EN
├── lib/                  # Utilidades (cn, etc.)
└── styles/               # Estilos CSS por componente
```

---

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## Características destacadas

- **Tema claro/oscuro** con persistencia mediante `useTheme`
- **Internacionalización** completa en español e inglés
- **Animaciones WebGL** de alta fidelidad visual
- **Efectos interactivos** como `ClickSpark` en toda la app
- **Componentes 3D** con React Three Fiber
- **UI accesible** gracias a Radix UI y shadcn

```

```
