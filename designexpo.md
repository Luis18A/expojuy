# ExpoJuy 2026 — Design System y Guía UI/UX

> Documento integral para una web institucional limpia, editorial, fluida y visualmente inmersiva. Define el sistema territorial dinámico, la interfaz glassmorphism, los layouts, la navegación por secciones y los criterios de implementación.

---

## 1. Dirección visual

ExpoJuy 2026 debe combinar una base corporativa clara con una presentación editorial de alto impacto. La referencia visual buscada es una interfaz de producto premium: mucho aire, composición precisa, transparencias sutiles, tipografía protagonista, imágenes grandes y transiciones suaves.

La web no debe parecer una colección de bloques genéricos. Debe sentirse como una experiencia continua en la que cada sección tiene una composición propia, pero comparte un mismo sistema visual.

### Palabras clave

- Limpia.
- Institucional.
- Editorial.
- Inmersiva.
- Precisa.
- Fluida.
- Contemporánea.
- Territorial.
- Accesible.
- Premium sin exceso.

### Lo que se busca

- Navegación tipo glassmorphism, translúcida y liviana.
- Secciones con mucho espacio negativo.
- Imágenes grandes y bien recortadas.
- Encabezados de alto impacto.
- Transiciones suaves entre secciones.
- Cards finas, no excesivamente redondeadas.
- Gradientes territoriales usados con intención.
- Jerarquía visual clara y poco ruido.

### Lo que se debe evitar

- Interfaces saturadas de tarjetas.
- Bordes redondeados en exceso.
- Sombras fuertes o artificiales.
- Gradientes decorativos sin función.
- Animaciones permanentes que distraigan.
- Demasiados colores activos al mismo tiempo.
- Secciones con alturas y espaciados arbitrarios.
- Botones grandes y pesados sin necesidad.
- Bloques de texto largos sobre imágenes complejas.

---

## 2. Alcance funcional

La propuesta debe poder construir, como mínimo:

- Inicio.
- Sobre ExpoJuy 2026.
- Expositores.
- Agenda de actividades.
- Noticias y novedades.
- Plano o mapa del predio.
- Sponsors y aliados.
- Contacto.
- Preguntas frecuentes.
- Redes sociales.
- Compra o gestión de entradas.

Funcionalidades prioritarias:

- Buscador de expositores.
- Filtros por rubro, sector y territorio.
- Agenda interactiva.
- Mapa del predio.
- Formularios de contacto.
- Panel de novedades.
- Integración con redes sociales.
- Espacios institucionales para sponsors.
- Gestión de entradas.
- Selección de territorio con cambio de tema global.

---

## 3. Principios de diseño

### 3.1 Claridad antes que decoración

Cada pantalla debe responder rápidamente:

1. Dónde está la persona.
2. Qué información es más importante.
3. Qué puede hacer.
4. Cuál es el próximo paso.

### 3.2 Composición editorial

Cada sección debe tener una composición visual clara: un título, un contenido principal y una acción. No todos los elementos necesitan estar dentro de una card.

Priorizar:

- Bloques de texto abiertos.
- Imágenes de gran escala.
- Separadores finos.
- Listas limpias.
- Grillas asimétricas controladas.
- Superposición leve entre elementos.

### 3.3 Aire y ritmo

El espacio vacío es parte de la identidad. No llenar cada zona disponible. La interfaz debe respirar y permitir que el contenido importante se destaque.

### 3.4 Institucional, pero cercana

ExpoJuy debe sentirse oficial y profesional sin resultar fría. La personalidad aparece en la fotografía, la tipografía, los colores territoriales y las transiciones, no en decoraciones innecesarias.

### 3.5 Mobile first

Muchas consultas ocurrirán desde el predio o durante el evento. La versión móvil debe ser una experiencia completa, no una adaptación reducida del escritorio.

### 3.6 Accesibilidad integrada

Contraste, foco visible, navegación por teclado, semántica y contenido comprensible son requisitos desde la primera versión.

---

## 4. Sistema visual base

### 4.1 Colores institucionales

| Token | HEX | Uso |
|---|---:|---|
| `color-page` | `#F2F2F2` | Fondo general de la web en tema claro. |
| `color-surface` | `#FFFFFF` | Superficies elevadas, cards y formularios. |
| `color-ink` | `#3C3C3B` | Texto principal, títulos y navegación. |
| `color-ink-muted` | `rgb(60 60 59 / 72%)` | Textos secundarios y metadatos. |
| `color-border` | `rgb(60 60 59 / 12%)` | Bordes y separadores finos. |

### 4.2 Regla de fondo

El fondo general del tema claro debe ser siempre **`#F2F2F2`**.

- No utilizar blanco puro como fondo de toda la página.
- Utilizar `#FFFFFF` en cards, menús, formularios, modales, drawers y paneles que necesiten separarse del fondo.
- Mantener `#3C3C3B` como color de texto principal.
- Reservar el color territorial para acciones, acentos y estados activos.

---

## 5. Sistema territorial dinámico

### 5.1 Concepto

ExpoJuy se organiza en cuatro territorios: **Yungas, Valles, Puna y Quebrada**. Cada territorio tiene una familia cromática propia.

Cuando una persona selecciona un territorio desde el Hero, la web activa un tema global. El cambio no es solamente un filtro de contenido: actualiza el lenguaje visual de toda la one page de forma coherente.

La estructura, tipografía, grilla, fondo general y legibilidad permanecen estables. Cambian los elementos semánticos de énfasis: CTAs, enlaces, tabs, filtros, badges, focos, cards destacadas, recursos gráficos y zonas activas del mapa.

### 5.2 Regiones y colores

| Territorio | Color principal | Color de apoyo | Aplicación |
|---|---:|---:|---|
| Yungas | `#0C6196` | `#A0D9FF` | Innovación, tecnología, información institucional y naturaleza. |
| Valles | `#005539` | `#25C0D4` | Producción, comunidad, servicios y sostenibilidad. |
| Puna | `#820CD0` | `#B3008F` | Identidad, conocimiento, cultura y propuestas destacadas. |
| Quebrada | `#7553F2` | `#FF8A63` | Agenda, experiencias, actividades y llamados a la acción. |

### 5.3 Regla de aplicación

- Una región activa domina los elementos interactivos de la interfaz.
- No mezclar colores territoriales aleatoriamente dentro de una misma sección.
- Los gradientes se reservan para Hero, banners, transiciones y destacados.
- No usar un gradiente como fondo permanente de toda la aplicación.
- No colocar textos largos directamente sobre gradientes complejos.
- El color no puede ser la única señal de estado: sumar texto, ícono, borde, check o cambio de peso.

---

## 6. Gradientes oficiales

### Yungas

```css
background-image: linear-gradient(to right top, #0c6196, #3b7db0, #5d9bca, #7ebae4, #a0d9ff);
```

### Valles

```css
background-image: linear-gradient(to left top, #25c0d4, #00a5aa, #008a81, #006f5c, #005539);
```

### Puna

```css
background-image: linear-gradient(to left bottom, #820cd0, #9700be, #a500ad, #ae009d, #b3008f);
```

### Quebrada

```css
background-image: linear-gradient(to right top, #ff8a63, #ff6477, #fa429b, #d13dc8, #7553f2);
```

---

## 7. Tokens CSS

Los componentes no deben utilizar valores HEX directamente. Deben consumir tokens semánticos para que el cambio de región actualice toda la interfaz.

```css
:root {
  --color-page: #f2f2f2;
  --color-surface: #ffffff;
  --color-ink: #3c3c3b;
  --color-ink-muted: rgb(60 60 59 / 72%);
  --color-border: rgb(60 60 59 / 12%);

  --theme-primary: #3c3c3b;
  --theme-primary-hover: #20201f;
  --theme-primary-soft: #f2f2f2;
  --theme-on-primary: #ffffff;
  --theme-gradient: linear-gradient(135deg, #3c3c3b, #666664);
  --theme-focus-ring: rgb(60 60 59 / 42%);
  --theme-tint: rgb(60 60 59 / 6%);

  --glass-bg: rgb(255 255 255 / 58%);
  --glass-bg-strong: rgb(255 255 255 / 76%);
  --glass-border: rgb(255 255 255 / 72%);
  --glass-shadow: 0 12px 40px rgb(60 60 59 / 10%);

  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-pill: 999px;

  --shadow-sm: 0 2px 8px rgb(60 60 59 / 8%);
  --shadow-md: 0 8px 24px rgb(60 60 59 / 12%);
  --shadow-lg: 0 18px 48px rgb(60 60 59 / 16%);

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
}
```

### Tema Yungas

```css
[data-theme="yungas"] {
  --theme-primary: #0c6196;
  --theme-primary-hover: #084b75;
  --theme-primary-soft: #a0d9ff;
  --theme-on-primary: #ffffff;
  --theme-gradient: linear-gradient(to right top, #0c6196, #3b7db0, #5d9bca, #7ebae4, #a0d9ff);
  --theme-focus-ring: rgb(12 97 150 / 42%);
  --theme-tint: rgb(160 217 255 / 28%);
}
```

### Tema Valles

```css
[data-theme="valles"] {
  --theme-primary: #005539;
  --theme-primary-hover: #003d29;
  --theme-primary-soft: #25c0d4;
  --theme-on-primary: #ffffff;
  --theme-gradient: linear-gradient(to left top, #25c0d4, #00a5aa, #008a81, #006f5c, #005539);
  --theme-focus-ring: rgb(0 85 57 / 42%);
  --theme-tint: rgb(37 192 212 / 20%);
}
```

### Tema Puna

```css
[data-theme="puna"] {
  --theme-primary: #820cd0;
  --theme-primary-hover: #62099d;
  --theme-primary-soft: #b3008f;
  --theme-on-primary: #ffffff;
  --theme-gradient: linear-gradient(to left bottom, #820cd0, #9700be, #a500ad, #ae009d, #b3008f);
  --theme-focus-ring: rgb(130 12 208 / 40%);
  --theme-tint: rgb(179 0 143 / 12%);
}
```

### Tema Quebrada

```css
[data-theme="quebrada"] {
  --theme-primary: #7553f2;
  --theme-primary-hover: #5738cb;
  --theme-primary-soft: #ff8a63;
  --theme-on-primary: #ffffff;
  --theme-gradient: linear-gradient(to right top, #ff8a63, #ff6477, #fa429b, #d13dc8, #7553f2);
  --theme-focus-ring: rgb(117 83 242 / 42%);
  --theme-tint: rgb(255 138 99 / 16%);
}
```

### Tema neutral

```css
[data-theme="all"] {
  --theme-primary: #3c3c3b;
  --theme-primary-hover: #20201f;
  --theme-primary-soft: #f2f2f2;
  --theme-on-primary: #ffffff;
  --theme-gradient: linear-gradient(135deg, #3c3c3b, #666664);
  --theme-focus-ring: rgb(60 60 59 / 42%);
  --theme-tint: rgb(60 60 59 / 6%);
}
```

---

## 8. Estilo glassmorphism

El glassmorphism se utiliza como una capa de navegación y contexto, no como decoración aplicada a todo.

### Principios

- Transparencia moderada.
- Blur visible, pero no excesivo.
- Bordes blancos de baja opacidad.
- Sombras suaves.
- Contenido legible detrás del panel.
- Menos redondeado que una interfaz de producto genérica.

### Navegación glass

```css
.glass-nav {
  background: rgb(255 255 255 / 58%);
  border: 1px solid rgb(255 255 255 / 72%);
  box-shadow: 0 12px 40px rgb(60 60 59 / 10%), inset 0 1px 0 rgb(255 255 255 / 60%);
  backdrop-filter: blur(18px) saturate(125%);
  -webkit-backdrop-filter: blur(18px) saturate(125%);
}
```

### Reglas de uso

- Aplicar glass principalmente al header, navegación flotante, filtros y paneles contextuales.
- No utilizar glass en cada card de contenido.
- No superponer glass sobre fondos muy cargados sin aumentar la opacidad.
- En mobile, priorizar legibilidad y reducir blur si afecta el rendimiento.
- Cuando el header pasa sobre una imagen oscura, usar una variante oscura con texto blanco.

### Variante oscura

```css
.glass-nav--dark {
  background: rgb(12 12 12 / 34%);
  border-color: rgb(255 255 255 / 18%);
  color: #ffffff;
  box-shadow: 0 12px 40px rgb(0 0 0 / 18%), inset 0 1px 0 rgb(255 255 255 / 10%);
}
```

---

## 9. Header y navegación

### Composición

El header debe ser una pieza flotante, liviana y estable:

- Logo a la izquierda.
- Navegación central o alineada según breakpoint.
- CTA principal a la derecha.
- Indicador compacto del territorio activo.

```text
[ Logo ExpoJuy ]       [ Inicio  ExpoJuy  Agenda  Expositores  Mapa ]       [ Entradas ]
```

### Estilo

- Posición sticky o fixed según la composición del Hero.
- Ancho máximo de 1200–1280 px.
- Altura aproximada de 56–68 px.
- Padding horizontal de 12–16 px dentro del contenedor.
- Bordes finos.
- Radios entre 12 y 16 px para el contenedor.
- El estado activo se expresa con fondo territorial suave, línea o cápsula fina.
- Evitar una barra completamente opaca y pesada.

### Header al hacer scroll

El header puede iniciar translúcido sobre el Hero y adquirir mayor contraste al hacer scroll:

```css
.site-header {
  transition: background 300ms ease, box-shadow 300ms ease, transform 300ms ease;
}

.site-header.is-scrolled {
  background: rgb(255 255 255 / 82%);
  box-shadow: 0 8px 24px rgb(60 60 59 / 10%);
  backdrop-filter: blur(20px) saturate(125%);
}
```

### Transición de navegación

El cambio de sección debe sentirse fluido, no como una recarga visual.

- Scroll suave entre anclas.
- Indicador activo que se desplaza entre links.
- Cambio de color interpolado con `transition`.
- Contenido que aparece con desplazamiento leve y opacidad.
- No usar transiciones largas para cada bloque.

```css
html {
  scroll-behavior: smooth;
}

.nav-link {
  transition: color 240ms ease, background-color 240ms ease, transform 240ms ease;
}

.section-reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 700ms ease, transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.section-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

Respetar `prefers-reduced-motion` y desactivar desplazamientos innecesarios.

---

## 10. Layout general de la one page

La web debe utilizar una secuencia de layouts editoriales, no una repetición de grillas idénticas.

### 10.1 Hero de pantalla completa

- Altura mínima: `min-height: 92svh`.
- Composición de dos columnas en desktop.
- Texto principal a la izquierda.
- Imagen o composición territorial a la derecha.
- Selector de región integrado dentro del Hero.
- CTA principal visible sin hacer scroll.
- Fondo con imagen, textura o gradiente territorial suave.

```css
.hero {
  min-height: 92svh;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: center;
  gap: clamp(32px, 6vw, 96px);
  padding: 128px 0 72px;
}
```

### 10.2 Banda de datos rápidos

Una franja liviana debajo del Hero para mostrar:

- Fecha.
- Lugar.
- Cantidad de expositores.
- Actividades.
- Acceso a entradas.

Usar separadores finos y números destacados, no cards pesadas.

### 10.3 Sección editorial alternada

Para `Sobre ExpoJuy`:

- Una sección con imagen grande a la izquierda y texto a la derecha.
- La siguiente invierte la composición.
- Mantener el mismo ancho de contenido.
- Utilizar acentos territoriales en líneas, numeración o etiquetas.

```css
.editorial-split {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: clamp(32px, 8vw, 120px);
}

.editorial-split:nth-child(even) .editorial-media {
  order: 2;
}
```

### 10.4 Expositores como índice visual

No mostrar todos los expositores como una grilla de cards iguales.

Layout recomendado:

- Buscador arriba.
- Filtros en una barra liviana.
- Lista o grilla de dos columnas.
- Logo, nombre, rubro y territorio.
- Hover con aparición de acción y acento territorial.

### 10.5 Agenda como timeline

Presentar la agenda como una línea temporal limpia:

- Selector de día.
- Hora alineada en una columna.
- Actividad en otra columna.
- Línea o punto territorial como indicador.
- Filtros desplegables en mobile.

Evitar tablas densas y tarjetas repetitivas.

### 10.6 Mapa como bloque inmersivo

El mapa puede ocupar una sección amplia con:

- Contenedor visual grande.
- Panel lateral de búsqueda.
- Leyenda mínima.
- Resultado seleccionado resaltado por el tema territorial.
- Alternativa textual debajo o en panel accesible.

### 10.7 Noticias como composición editorial

Usar una noticia principal grande y noticias secundarias más pequeñas:

```text
[ Noticia principal grande ] [ Noticia secundaria ]
                         [ Noticia secundaria ]
```

La noticia principal puede ocupar dos filas. Evitar que todas las publicaciones tengan el mismo peso.

### 10.8 Sponsors como cierre institucional

- Fondo limpio.
- Logos agrupados por nivel.
- Mucho espacio alrededor.
- Sin animaciones excesivas.
- Respeto por proporciones y áreas de protección.

### 10.9 Footer compacto

El footer debe cerrar la experiencia sin convertirse en otra página:

- Logo.
- Navegación.
- Contacto.
- Redes.
- Sponsors institucionales.
- Legal y accesibilidad.
- Acento territorial fino.

---

## 11. Sistema de espaciado y forma

### Espaciado

Usar múltiplos de 8 px:

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
}
```

### Radios

El estilo de referencia utiliza bordes suaves, pero finos y controlados.

- Inputs: 8–10 px.
- Cards: 10–16 px.
- Paneles grandes: 16 px.
- Navegación flotante: 14–18 px.
- Chips y botones compactos: `999px`.
- No usar `border-radius: 28px` o más en todos los elementos.
- Reservar los radios grandes para Hero, medios visuales o componentes especiales.

### Bordes

- Preferir bordes de 1 px.
- Usar `rgb(60 60 59 / 12%)` sobre fondos claros.
- Usar `rgb(255 255 255 / 30–70%)` en superficies glass.
- No utilizar bordes gruesos como recurso decorativo principal.

### Sombras

Las sombras deben ser suaves y amplias:

```css
box-shadow: 0 12px 40px rgb(60 60 59 / 10%);
```

Evitar sombras negras duras o muy pequeñas que hagan parecer que cada elemento flota por separado.

---

## 12. Tipografía

La tipografía oficial debe respetar el kit institucional cuando esté disponible. Hasta definirla, utilizar una sans serif contemporánea y legible.

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Escala

| Nivel | Desktop | Mobile | Peso |
|---|---:|---:|---:|
| Display | 64–88 px | 42–54 px | 700–800 |
| H1 | 48–64 px | 34–42 px | 700 |
| H2 | 36–48 px | 28–34 px | 700 |
| H3 | 24–30 px | 21–25 px | 650–700 |
| Body grande | 18–20 px | 17–18 px | 400–500 |
| Body | 16 px | 16 px | 400 |
| Small | 14 px | 14 px | 400–500 |
| Caption | 12–13 px | 12–13 px | 500 |

Reglas:

- Títulos con line-height de 1.05–1.2.
- Párrafos con line-height de 1.5–1.7.
- Usar una familia para texto y, como máximo, una familia de display.
- Evitar mayúsculas sostenidas en bloques largos.
- Mantener una longitud de lectura de 60–75 caracteres.

---

## 13. Componentes UI

### 13.1 Botones

Variantes:

- `Primary`: fondo del color territorial activo y texto blanco.
- `Secondary`: borde y texto territorial sobre fondo transparente.
- `Ghost`: acción secundaria sin contenedor pesado.
- `Inverse`: para fondos oscuros o imágenes.

Estilo:

- Altura mínima de 44 px.
- Padding horizontal de 18–24 px.
- Radio entre 8 y 12 px para botones principales.
- Radio pill solo para CTAs especiales o controles compactos.
- Transición de 200–240 ms.
- Icono opcional, no obligatorio.

```css
.button {
  min-height: 44px;
  padding: 0 20px;
  border-radius: 10px;
  transition: transform 220ms ease, background-color 220ms ease, color 220ms ease;
}

.button:hover {
  transform: translateY(-2px);
}
```

### 13.2 Cards

Las cards deben ser más finas y menos redondeadas que en una interfaz genérica.

Reglas:

- Fondo blanco o superficie glass solo cuando corresponda.
- Borde de 1 px.
- Radio de 10–16 px.
- Sombra mínima o inexistente.
- Acento territorial en borde, línea, etiqueta o icono.
- No colocar todos los elementos dentro de cards si una lista editorial funciona mejor.

### 13.3 Tags y badges

Usos:

- Rubro.
- Territorio.
- Estado de actividad.
- Tipo de contenido.

Usar formas compactas, tipografía pequeña y color suave. No convertir cada dato en una cápsula.

### 13.4 Inputs y formularios

Cada campo debe incluir:

- Label visible.
- Placeholder opcional.
- Estado de foco.
- Estado de error explicativo.
- Estado de éxito cuando corresponda.
- Mensaje compatible con lectores de pantalla.

```css
.input {
  min-height: 46px;
  background: #ffffff;
  border: 1px solid rgb(60 60 59 / 18%);
  border-radius: 8px;
  padding: 0 14px;
  transition: border-color 200ms ease, box-shadow 200ms ease;
}

.input:focus {
  border-color: var(--theme-primary);
  box-shadow: 0 0 0 3px var(--theme-focus-ring);
  outline: none;
}
```

### 13.5 Tabs y filtros

- Tabs con línea activa fina.
- Filtros dentro de una barra glass o superficie blanca liviana.
- Mostrar filtros activos como texto y color.
- Incluir siempre `Limpiar filtros`.
- No esconder filtros importantes detrás de múltiples interacciones.

### 13.6 Modal y drawer

Usar para información secundaria o acciones puntuales. La entrada y salida deben ser suaves y rápidas. No esconder información esencial únicamente en modales.

### 13.7 Toast y alertas

Los mensajes deben ser breves, claros y no depender únicamente del color.

---

## 14. Selector territorial en el Hero

### Estructura

```text
Explorá ExpoJuy por territorio

[ Todos ] [ Yungas ] [ Valles ] [ Puna ] [ Quebrada ]

Territorio activo: Yungas
Descubrí innovación, producción y propuestas vinculadas a las Yungas.

[ Ver propuestas ] [ Ver en el mapa ]
```

### Comportamiento

1. La persona elige una región.
2. Se actualiza `data-theme` en el elemento raíz.
3. El Hero cambia gradiente, copy e imagen contextual.
4. Los componentes actualizan sus tokens de color.
5. Agenda, expositores, noticias y mapa priorizan contenidos asociados.
6. El estado se conserva durante la navegación.
7. El control persiste fuera del Hero para permitir cambiar la región.
8. La opción `Todos` restablece el estado neutral.

### Accesibilidad

- Usar botones reales.
- Utilizar `aria-pressed="true"` o un radio group.
- No depender solo del color.
- Sumar texto, borde o indicador visual.
- Comunicar cambios dinámicos con `aria-live="polite"`.

---

## 15. Aplicación de tokens en CSS

```css
body {
  background: var(--color-page);
  color: var(--color-ink);
}

.card,
.modal,
.form-panel,
.dropdown,
.table-wrapper {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.section--themed {
  background: var(--theme-tint);
}

.button--primary {
  background: var(--theme-primary);
  color: var(--theme-on-primary);
  border-color: var(--theme-primary);
}

.button--primary:hover {
  background: var(--theme-primary-hover);
  border-color: var(--theme-primary-hover);
}

.button--secondary {
  background: transparent;
  border: 1px solid var(--theme-primary);
  color: var(--theme-primary);
}

.button--secondary:hover {
  background: var(--theme-tint);
}

a {
  color: var(--theme-primary);
}

:focus-visible {
  outline: 3px solid var(--theme-focus-ring);
  outline-offset: 3px;
}
```

---

## 16. Transiciones entre secciones

La navegación debe tener continuidad visual.

### Transiciones recomendadas

- Scroll suave entre anclas.
- Aparición por opacidad y desplazamiento vertical leve.
- Cambio de color interpolado al cambiar de región.
- Imágenes con reveal mediante clip-path o máscara suave.
- Indicador activo que se desplaza entre enlaces.
- Cambio de Hero con crossfade, no con salto brusco.

### Duraciones

- Microinteracción: 150–240 ms.
- Cambio de componente: 300–500 ms.
- Entrada de sección: 600–800 ms.
- Cambio de Hero o tema: 700–1200 ms.

### CSS base

```css
html {
  scroll-behavior: smooth;
}

.section-reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 700ms ease, transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.section-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.theme-transition,
.theme-transition * {
  transition-property: color, background-color, border-color, box-shadow, fill, stroke;
  transition-duration: 900ms;
  transition-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}
```

### JavaScript conceptual

```js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll('.section-reveal').forEach((section) => observer.observe(section));
```

No introducir transiciones si `prefers-reduced-motion: reduce` está activo.

---

## 17. Responsive design

### Breakpoints

```css
@media (min-width: 640px) { /* tablet pequeña */ }
@media (min-width: 768px) { /* tablet */ }
@media (min-width: 1024px) { /* desktop */ }
@media (min-width: 1280px) { /* desktop amplio */ }
```

### Reglas

- Diseñar mobile first.
- No depender de hover.
- Convertir composiciones de dos columnas en una columna sin perder jerarquía.
- Mantener CTAs visibles.
- Evitar carruseles automáticos.
- Hacer que el selector territorial pueda desplazarse horizontalmente si es necesario.
- Usar imágenes con recorte específico para mobile.
- Reducir blur y sombras en dispositivos de menor rendimiento.
- Mantener áreas táctiles de al menos 44 × 44 px.

### Hero mobile

- Texto primero.
- Selector territorial debajo del texto principal.
- Imagen o recurso visual después del CTA.
- Header con navegación colapsada.
- No utilizar un Hero tan alto que esconda la acción principal.

---

## 18. Accesibilidad

Objetivo: experiencia alineada con WCAG 2.2 AA.

Requisitos:

- Contraste suficiente.
- Foco visible.
- Navegación completa por teclado.
- Orden lógico de tabulación.
- HTML semántico.
- Un H1 por página.
- Labels asociados a inputs.
- Texto alternativo para imágenes relevantes.
- Texto alternativo vacío para imágenes decorativas.
- No comunicar información únicamente con color.
- Subtítulos y transcripciones para contenido audiovisual.
- Respeto por `prefers-reduced-motion`.
- Área táctil mínima de 44 × 44 px.
- Errores claros y accionables.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 19. Imágenes y recursos visuales

- Priorizar fotografías institucionales, de producción real y vinculadas a Jujuy.
- Utilizar imágenes grandes como protagonistas de las composiciones editoriales.
- Mantener ratios consistentes por tipo de contenido.
- Optimizar peso y usar formatos modernos.
- Definir recortes para desktop y mobile.
- No ubicar texto importante sobre zonas complejas.
- Usar overlays solo para asegurar legibilidad.
- Utilizar texturas, líneas y gradientes territoriales con baja opacidad.

---

## 20. Motion y microinteracciones

La animación debe orientar, confirmar una acción o dar continuidad.

Usos permitidos:

- Reveal al entrar en viewport.
- Cambio de estado en botones.
- Transición de filtros.
- Crossfade de Hero.
- Desplazamiento suave de indicadores.
- Aparición de imágenes.
- Actualización de color territorial.

Reglas:

- No animar todos los elementos al cargar.
- No bloquear el acceso al contenido.
- No utilizar parallax como requisito para comprender la información.
- Respetar reducción de movimiento.
- La interacción debe continuar siendo clara sin animación.

---

## 21. Pantallas funcionales

### Expositores

Debe permitir:

- Buscar por nombre.
- Filtrar por rubro.
- Filtrar por territorio.
- Ordenar resultados.
- Abrir ficha individual.

La ficha puede incluir nombre, logo, rubro, descripción, territorio, ubicación, web, redes y acción para ver en el mapa.

### Agenda

Debe permitir:

- Ver por día.
- Filtrar por tipo de actividad.
- Priorizar actividades del territorio activo.
- Ver horario y ubicación.
- Guardar o compartir.
- Acceder al detalle.

Usar timeline en desktop y lista vertical en mobile.

### Mapa

Debe incluir leyenda, sectores, búsqueda de expositores, accesos, servicios, resaltado de territorio activo y alternativa textual.

### Noticias

Debe incluir categoría, fecha, título, imagen, resumen, detalle, compartir y etiqueta territorial cuando corresponda.

### Entradas

El flujo debe explicar:

1. Tipo de entrada.
2. Precio o gratuidad.
3. Datos solicitados.
4. Confirmación.
5. Forma de acceso.

### Contacto y FAQ

El contacto debe tener canales claros, tiempo de respuesta esperado y formulario breve. Las preguntas frecuentes deben resolver dudas operativas de forma directa.

---

## 22. Persistencia del territorio

Orden de prioridad:

1. URL: `?region=yungas`.
2. `localStorage`.
3. Estado inicial: `all`.

```js
const validRegions = ['all', 'yungas', 'valles', 'puna', 'quebrada'];

function setRegion(region) {
  const selected = validRegions.includes(region) ? region : 'all';

  document.documentElement.dataset.theme = selected;
  localStorage.setItem('expoJuyRegion', selected);

  const url = new URL(window.location.href);

  if (selected === 'all') {
    url.searchParams.delete('region');
  } else {
    url.searchParams.set('region', selected);
  }

  window.history.replaceState({}, '', url);
}
```

En React o Next.js, administrar la región desde contexto global o store liviano. Los componentes deben consumir tokens CSS y evitar condicionales de color duplicados.

---

## 23. Arquitectura técnica sugerida

Stack posible:

- React o Next.js.
- TypeScript.
- CSS Modules, Tailwind CSS o sistema equivalente.
- CMS o fuente de datos para noticias, agenda y expositores.
- API para entradas, formularios e integraciones.
- Hosting y dominio institucional.

Criterios técnicos:

- Componentes reutilizables.
- Datos separados de presentación.
- Sistema de tokens CSS.
- Imágenes optimizadas.
- SEO técnico.
- Analítica con consentimiento.
- Formularios seguros.
- Estados de carga, error, vacío y éxito.
- Documentación para mantenimiento.

---

## 24. Uso responsable de IA

La IA puede utilizarse como apoyo para exploración conceptual, wireframes, prototipos, redacción inicial, variantes visuales, optimización de código, documentación y pruebas de accesibilidad.

Toda salida debe ser revisada por el equipo. Validar derechos de uso, precisión, accesibilidad, seguridad y coherencia con la identidad institucional.

---

## 25. Checklist de calidad

### Dirección visual

- [ ] La web se siente limpia y editorial.
- [ ] Existe suficiente espacio negativo.
- [ ] La navegación usa glassmorphism con moderación.
- [ ] Las cards no están excesivamente redondeadas.
- [ ] Las sombras son suaves.
- [ ] Los bordes son finos.
- [ ] Las imágenes tienen protagonismo.
- [ ] No hay ruido visual innecesario.

### Sistema territorial

- [ ] Existe estado `Todos los territorios`.
- [ ] Seleccionar una región cambia el tema global.
- [ ] El Hero cambia gradiente y contenido.
- [ ] CTAs, links, tabs, filtros, badges, focos y cards responden al tema.
- [ ] El mapa destaca resultados de la región activa.
- [ ] La región permanece durante la navegación.
- [ ] Existe control persistente para cambiar o limpiar la selección.
- [ ] El estado activo no depende solo del color.

### UX y UI

- [ ] El fondo general es `#F2F2F2`.
- [ ] Las superficies elevadas utilizan blanco.
- [ ] El H1 explica dónde está la persona.
- [ ] Cada sección tiene una acción principal.
- [ ] La navegación es consistente.
- [ ] Los estados loading, error, vacío y éxito están previstos.
- [ ] El contenido funciona en mobile.
- [ ] Los elementos interactivos tienen foco visible.

### Entrega del prototipo

- [ ] Inicio.
- [ ] Sobre ExpoJuy.
- [ ] Expositores.
- [ ] Agenda.
- [ ] Mapa.
- [ ] Noticias.
- [ ] Sponsors.
- [ ] Contacto.
- [ ] Preguntas frecuentes.
- [ ] Flujo de entradas.
- [ ] Selector territorial.
- [ ] Transiciones entre secciones.
- [ ] Responsive mobile.
- [ ] Estrategia de accesibilidad.
- [ ] Tecnologías previstas.
- [ ] Declaración de uso de IA.

---

## 26. Decisión visual final

La web de ExpoJuy 2026 debe combinar una base institucional clara con una presentación visual premium y editorial.

El fondo general usa `#F2F2F2`, las superficies elevadas usan blanco y el texto principal utiliza `#3C3C3B`. Los territorios Yungas, Valles, Puna y Quebrada funcionan como temas dinámicos: al seleccionar una región desde el Hero, la one page actualiza sus colores funcionales, contenido contextual, gradientes, filtros, acciones y detalles del mapa.

La navegación incorpora transparencia y blur de forma moderada. Las secciones utilizan layouts alternados, imágenes grandes, listas limpias, timelines, grillas asimétricas y cards finas. Las transiciones son suaves y cortas, con respeto por la accesibilidad y la reducción de movimiento.

El resultado buscado es una experiencia moderna, liviana y memorable, con identidad jujeña visible y una interfaz que prioriza la información, la orientación y la usabilidad.
