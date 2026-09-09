# ExpoJuy 2026 — Design System y Guía UI/UX

> Documento integral de diseño para la web oficial de ExpoJuy 2026. Define identidad visual, sistema territorial dinámico, componentes, navegación, accesibilidad, responsive y criterios de implementación.
> **Guía de Copywriting, SEO y GEO:** Ver [PROPUESTA_COMUNICACION_SEO_GEO.md](file:///c:/Users/luisC/Music/expojuy%20gemini/PROPUESTA_COMUNICACION_SEO_GEO.md) para el sistema permanente de mensajes por audiencia, SEO y optimización para buscadores IA.

---

## 1. Propósito

ExpoJuy 2026 debe presentarse como una plataforma digital institucional, moderna, clara y fácil de usar. El sitio debe ayudar a visitantes, expositores, sponsors y medios a descubrir el evento, consultar la agenda, ubicar stands, conocer propuestas y acceder a información práctica.

La interfaz debe comunicar:

- Innovación y tecnología.
- Producción y desarrollo regional.
- Vinculación empresarial.
- Economía del conocimiento.
- Identidad territorial de Jujuy.

El lenguaje visual buscado es **corporativo, limpio, accesible y escalable**. El diseño debe priorizar claridad, jerarquía y orientación a la acción antes que efectos decorativos.

---

## 2. Alcance funcional

La propuesta debe poder construir, como mínimo, estas secciones:

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

---

## 3. Principios de diseño

### Claridad antes que decoración

Cada pantalla debe responder rápidamente:

1. Dónde está la persona.
2. Qué información es más importante.
3. Qué puede hacer.
4. Cuál es el próximo paso.

### Jerarquía consistente

La interfaz debe usar títulos, textos, acciones y espacios de forma previsible. Una sección debe tener una acción principal clara y no competir con demasiados CTAs del mismo peso.

### Institucional, pero cercana

ExpoJuy debe sentirse oficial y profesional sin resultar fría ni rígida. Los territorios suman personalidad, pero la estructura visual se mantiene coherente en toda la experiencia.

### Mobile first

Muchas consultas se harán desde el predio o durante el evento. La versión móvil debe ser una experiencia completa, no una adaptación reducida del escritorio.

### Accesibilidad integrada

Contraste, foco visible, navegación por teclado, semántica y contenido comprensible son requisitos de diseño desde la primera versión.

---

## 4. Sistema visual base

### Colores institucionales

| Token | HEX | Uso |
|---|---:|---|
| `color-page` | `#F2F2F2` | Fondo general de la web en tema claro. |
| `color-surface` | `#FFFFFF` | Cards, modales, formularios, dropdowns y superficies elevadas. |
| `color-ink` | `#3C3C3B` | Texto principal, títulos, navegación y elementos de alta legibilidad. |
| `color-ink-muted` | `rgb(60 60 59 / 72%)` | Texto secundario, metadatos y ayudas. |
| `color-border` | `rgb(60 60 59 / 12%)` | Bordes sutiles y separadores. |

### Regla de fondo

El fondo general del tema claro debe ser siempre **`#F2F2F2`**, el blanco institucional proporcionado por la paleta.

- No usar blanco puro como fondo general de toda la página.
- Usar `#FFFFFF` solo en superficies que necesiten elevarse o separarse del fondo: cards, inputs, modales, drawers, paneles y tablas.
- Mantener `#3C3C3B` como color de texto principal; evita el negro puro y preserva un tono corporativo más amable.

---

## 5. Sistema territorial dinámico

### Concepto central

ExpoJuy se organiza visualmente en cuatro territorios: **Yungas, Valles, Puna y Quebrada**. Cada territorio tiene una familia cromática propia.

Cuando una persona selecciona un territorio desde el Hero, la web activa un **tema global**. El cambio no funciona solo como filtro de contenido: actualiza los colores de interfaz de toda la one page de forma consistente.

La estructura, tipografía, grilla, fondo general y legibilidad no cambian. Cambian los elementos semánticos de énfasis: CTAs, enlaces, tabs, filtros, badges, focos, cards destacadas, recursos gráficos y zonas activas del mapa.

### Regiones y colores

| Territorio | Color principal | Color de apoyo | Uso recomendado |
|---|---:|---:|---|
| Yungas | `#0C6196` | `#A0D9FF` | Innovación, tecnología, información institucional y naturaleza. |
| Valles | `#005539` | `#25C0D4` | Producción, comunidad, servicios y sostenibilidad. |
| Puna | `#820CD0` | `#B3008F` | Identidad, conocimiento, cultura y propuestas destacadas. |
| Quebrada | `#7553F2` | `#FF8A63` | Agenda, experiencias, actividades y llamados a la acción. |

### Regla de aplicación

- Una región activa domina los elementos interactivos de la interfaz.
- No mezclar colores territoriales aleatoriamente dentro de una misma sección.
- Los gradientes se reservan para Hero, banners, cards territoriales o campañas destacadas.
- No usar un gradiente como fondo de toda la aplicación.
- No colocar textos largos directamente sobre gradientes complejos.
- El color no puede ser la única señal de estado; sumar texto, icono, borde, check o cambio de peso.

---

## 6. Gradientes oficiales

### Yungas

```css
background-image: linear-gradient(
  to right top,
  #0c6196,
  #3b7db0,
  #5d9bca,
  #7ebae4,
  #a0d9ff
);
```

### Valles

```css
background-image: linear-gradient(
  to left top,
  #25c0d4,
  #00a5aa,
  #008a81,
  #006f5c,
  #005539
);
```

### Puna

```css
background-image: linear-gradient(
  to left bottom,
  #820cd0,
  #9700be,
  #a500ad,
  #ae009d,
  #b3008f
);
```

### Quebrada

```css
background-image: linear-gradient(
  to right top,
  #ff8a63,
  #ff6477,
  #fa429b,
  #d13dc8,
  #7553f2
);
```

---

## 7. Tokens de diseño

Los componentes no deben usar HEX directos. Deben consumir tokens semánticos. Así, un cambio de región actualiza automáticamente toda la UI asociada.

### Tokens base

```css
:root {
  /* Base institucional */
  --color-page: #f2f2f2;
  --color-surface: #ffffff;
  --color-ink: #3c3c3b;
  --color-ink-muted: rgb(60 60 59 / 72%);
  --color-border: rgb(60 60 59 / 12%);

  /* Tema neutral por defecto */
  --theme-primary: #3c3c3b;
  --theme-primary-hover: #20201f;
  --theme-primary-soft: #f2f2f2;
  --theme-on-primary: #ffffff;
  --theme-gradient: linear-gradient(135deg, #3c3c3b, #666664);
  --theme-focus-ring: rgb(60 60 59 / 42%);
  --theme-tint: rgb(60 60 59 / 6%);

  /* Bordes, radios y sombra */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --shadow-sm: 0 2px 8px rgb(60 60 59 / 8%);
  --shadow-md: 0 8px 24px rgb(60 60 59 / 12%);
  --shadow-lg: 0 18px 48px rgb(60 60 59 / 16%);

  /* Espaciado */
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
  --theme-gradient: linear-gradient(
    to right top,
    #0c6196,
    #3b7db0,
    #5d9bca,
    #7ebae4,
    #a0d9ff
  );
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
  --theme-gradient: linear-gradient(
    to left top,
    #25c0d4,
    #00a5aa,
    #008a81,
    #006f5c,
    #005539
  );
  --theme-focus-ring: rgb(0 85 57 / 42%);
  --theme-tint: rgb(37 192 212 / 20%);
}
```

> En Valles, usar `#005539` para CTA, títulos de énfasis, links y texto sobre superficies claras. Usar `#25C0D4` como color suave de apoyo, acento, fondo tenue o indicador.

### Tema Puna

```css
[data-theme="puna"] {
  --theme-primary: #820cd0;
  --theme-primary-hover: #62099d;
  --theme-primary-soft: #b3008f;
  --theme-on-primary: #ffffff;
  --theme-gradient: linear-gradient(
    to left bottom,
    #820cd0,
    #9700be,
    #a500ad,
    #ae009d,
    #b3008f
  );
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
  --theme-gradient: linear-gradient(
    to right top,
    #ff8a63,
    #ff6477,
    #fa429b,
    #d13dc8,
    #7553f2
  );
  --theme-focus-ring: rgb(117 83 242 / 42%);
  --theme-tint: rgb(255 138 99 / 16%);
}
```

### Tema Todos los territorios

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

## 8. Cambio de tema por región

### Disparador principal

El selector de regiones del Hero activa el tema y contextualiza el contenido.

```text
Explorá ExpoJuy por territorio

[ Todos ] [ Yungas ] [ Valles ] [ Puna ] [ Quebrada ]

Territorio activo: Yungas
Descubrí innovación, producción y propuestas vinculadas a las Yungas.

[ Ver propuestas ] [ Ver en el mapa ]
```

### Comportamiento esperado

1. La persona elige una región desde el Hero.
2. La web actualiza el atributo global, por ejemplo `data-theme="puna"`.
3. El Hero cambia a la información y gradiente del territorio.
4. Toda la one page actualiza sus tokens visuales.
5. Agenda, expositores, noticias y mapa priorizan o filtran contenidos asociados.
6. La región se conserva durante la navegación.
7. La persona puede elegir otra región o volver a `Todos los territorios` desde un control persistente.

### Elementos que cambian

| Elemento | Cambio con región activa |
|---|---|
| Hero | Gradiente, contenido contextual, CTA y detalles gráficos. |
| CTA principal | Fondo del color primario del tema. |
| CTA secundario | Borde y texto del color primario. |
| Enlaces | Color primario y hover de mayor contraste. |
| Tabs activos | Línea, borde o fondo territorial. |
| Filtros activos | Borde, icono, contador y fondo suave del tema. |
| Badges | Familia cromática territorial. |
| Cards destacadas | Borde superior, ícono o franja del color activo. |
| Estado de foco | Outline del color territorial. |
| Mapa | Zonas y resultados relacionados resaltados. |
| Footer | Franja superior o acento territorial discreto. |

### Elementos que se mantienen

- Fondo general `#F2F2F2`.
- Texto principal `#3C3C3B`.
- Cards y superficies elevadas en blanco.
- Arquitectura de información.
- Grilla.
- Tipografía.
- Navegación.
- Criterios de accesibilidad.

El cambio de tema debe sentirse como una personalización ordenada de ExpoJuy, no como si cada región fuera un sitio distinto.

---

## 9. Aplicación de tokens en UI

### Fondo, superficies y secciones

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
```

### Botones y enlaces

```css
.button--primary {
  background: var(--theme-primary);
  color: var(--theme-on-primary);
  border: 1px solid var(--theme-primary);
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

### Hero

```css
.hero {
  background-image: var(--theme-gradient);
  color: #ffffff;
}

.hero__overlay {
  background: linear-gradient(
    90deg,
    rgb(0 0 0 / 48%),
    rgb(0 0 0 / 10%)
  );
}
```

Usar overlay únicamente cuando una fotografía o una zona clara del gradiente afecte el contraste del texto.

### Cards, tabs, filtros y badges

```css
.card--featured {
  border-top: 4px solid var(--theme-primary);
}

.badge--region,
.filter-chip[aria-pressed="true"] {
  background: var(--theme-tint);
  border: 1px solid var(--theme-primary);
  color: var(--theme-primary);
}

.tab[aria-selected="true"] {
  color: var(--theme-primary);
  border-bottom: 3px solid var(--theme-primary);
}
```

---

## 10. Tipografía

La tipografía oficial deberá respetar el kit de identidad institucional cuando esté disponible. Hasta definirla, utilizar una sans serif contemporánea, clara y ampliamente disponible.

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

| Nivel | Desktop | Mobile | Peso |
|---|---:|---:|---:|
| Display | 56–72 px | 40–48 px | 700–800 |
| H1 | 40–52 px | 32–38 px | 700 |
| H2 | 32–40 px | 26–32 px | 700 |
| H3 | 22–28 px | 20–24 px | 650–700 |
| Body grande | 18–20 px | 17–18 px | 400–500 |
| Body | 16 px | 16 px | 400 |
| Small | 14 px | 14 px | 400–500 |
| Caption | 12–13 px | 12–13 px | 500 |

Reglas:

- Títulos: line-height entre 1.2 y 1.3.
- Párrafos: line-height entre 1.5 y 1.7.
- No usar más de dos familias tipográficas.
- Evitar mayúsculas sostenidas en textos largos.
- Mantener un ancho de lectura aproximado de 60 a 75 caracteres.

---

## 11. Layout, grilla y espaciado

### Contenedor

```css
.container {
  width: min(100% - 32px, 1200px);
  margin-inline: auto;
}
```

El contenido general no debe superar 1200–1280 px en desktop, excepto mapas, galerías o visualizaciones que requieran mayor ancho.

### Grilla

- Desktop: 12 columnas.
- Tablet: 8 columnas.
- Mobile: 4 columnas.
- Gutter desktop: 24–32 px.
- Gutter mobile: 16 px.
- Separación entre secciones: 64–96 px en desktop.
- Separación entre secciones: 40–64 px en mobile.

### Ritmo vertical

Usar múltiplos de 8 px. La distancia entre elementos debe expresar la relación entre contenidos: elementos asociados van más cerca; secciones distintas, más separadas.

---

## 12. Navegación

### Navegación principal

- Inicio.
- ExpoJuy.
- Expositores.
- Agenda.
- Mapa.
- Noticias.
- Información útil.

### Acciones destacadas

- Comprar entradas.
- Ver agenda.
- Buscar expositores.

### Header

Debe incluir:

- Logo institucional.
- Navegación principal.
- CTA prioritario.
- Selector o indicador del territorio activo.
- Acceso a redes o contacto en desktop.
- Menú colapsable en mobile.

Comportamiento recomendado:

- Header sticky solo si aporta utilidad real y no quita espacio excesivo.
- Al hacer scroll, usar fondo sólido blanco o `#F2F2F2` con borde sutil.
- Mostrar claramente el enlace de navegación activo.
- El menú mobile debe permitir cierre visible, foco contenido dentro del panel y cierre con tecla Escape.
- El control `Todos / Yungas / Valles / Puna / Quebrada` debe estar disponible fuera del Hero, como selector compacto o filtro persistente.

---

## 13. Página de inicio

### Hero

Objetivo: comunicar qué es ExpoJuy 2026, mostrar el territorio activo y llevar hacia la acción prioritaria.

Contenido sugerido:

- Eyebrow: `ExpoJuy 2026`.
- H1 con propuesta de valor del evento.
- Descripción breve.
- Selector territorial.
- CTA principal: `Ver agenda` o `Comprar entradas`.
- CTA secundario: `Conocer ExpoJuy` o `Ver en el mapa`.
- Fecha, lugar e información esencial.
- Imagen institucional o recurso territorial.

El Hero cambia gradiente, copy contextual y contenidos destacados según la región seleccionada.

### Accesos rápidos

Cards para:

- Agenda.
- Expositores.
- Mapa del predio.
- Entradas.

### Territorios

Presentar los cuatro territorios como sistema de exploración y organización de contenidos. Cada tarjeta territorial debe tener nombre, descripción breve, color correspondiente y una acción de selección.

### Próximas actividades

Mostrar entre tres y seis actividades destacadas con:

- Fecha.
- Hora.
- Nombre.
- Ubicación.
- Categoría.
- Territorio, si aplica.
- Acción para ver detalle.

### Expositores destacados

Cards con logo o imagen, nombre, rubro, territorio y enlace a ficha completa.

### Novedades

Tarjetas editoriales consistentes con fecha, categoría, título, resumen breve e imagen optimizada.

### Sponsors

Respetar jerarquías por nivel de patrocinio. No deformar, recolorear ni ubicar logos sin respetar sus áreas de protección.

### Footer

Incluir:

- Logo.
- Enlaces principales.
- Contacto.
- Redes sociales.
- Sponsors institucionales.
- Política de privacidad.
- Declaración de accesibilidad.
- Copyright.
- Acento superior discreto del tema territorial activo.

---

## 14. Componentes UI

### Botones

Variantes:

- `Primary`: fondo del color territorial activo y texto blanco.
- `Secondary`: borde y texto del color territorial activo.
- `Ghost`: sin borde, para acciones de bajo énfasis.
- `Inverse`: para fondos oscuros o gradientes.

Estados obligatorios:

- Default.
- Hover.
- Focus visible.
- Active.
- Disabled.
- Loading.

Reglas:

- Altura mínima: 44 px.
- Área táctil mínima: 44 × 44 px.
- Texto accionable: `Ver agenda`, `Buscar expositor`, `Consultar mapa`.
- Evitar muchos botones de igual jerarquía dentro del mismo bloque.

### Cards

Variantes:

- Card de expositor.
- Card de actividad.
- Card de noticia.
- Card territorial.
- Card de acceso rápido.
- Card de sponsor.

Reglas:

- Cada card debe tener una acción principal.
- Mantener alturas consistentes dentro de una misma grilla.
- Usar fondo blanco, borde sutil y sombra suave.
- Las cards destacadas incorporan un acento territorial, no un fondo completo saturado.
- Toda card clickeable debe mostrar estado hover y foco visible.

### Tags y badges

Usos permitidos:

- Rubro.
- Territorio.
- Estado de actividad.
- Tipo de contenido.

No usar badges como decoración sin significado funcional.

### Inputs y formularios

Cada campo debe incluir:

- Label visible.
- Placeholder opcional; nunca reemplaza al label.
- Texto de ayuda cuando sea necesario.
- Estado de error explicativo.
- Estado de éxito cuando corresponda.
- Mensaje compatible con lector de pantalla.

Ejemplo:

```text
Buscar expositores, rubros o actividades
[____________________________________] [Buscar]
```

### Tabs y filtros

- Usar tabs cuando las categorías sean pocas y excluyentes.
- Usar filtros cuando se puedan combinar criterios.
- Mostrar cantidad de resultados, filtros activos y acción `Limpiar filtros`.
- Diseñar estados: inicial, cargando, sin resultados, error y resultados.

### Modales y drawers

Usar para contenido secundario, confirmaciones o acciones puntuales. No colocar información crítica únicamente dentro de un modal.

### Toast y alertas

Los mensajes deben ser breves, claros y no depender solo del color.

Ejemplos:

- `La consulta se envió correctamente.`
- `No encontramos expositores con esos filtros.`
- `Revisá los campos marcados antes de continuar.`

---

## 15. Pantallas funcionales

### Expositores

Debe permitir:

- Buscar por nombre.
- Filtrar por rubro.
- Filtrar por territorio.
- Ordenar resultados.
- Abrir una ficha individual.

La ficha individual puede incluir:

- Nombre.
- Logo o imagen.
- Rubro.
- Descripción.
- Territorio.
- Ubicación dentro del predio.
- Sitio web y redes.
- Botón `Ver en el mapa`.

### Agenda

Debe permitir:

- Ver por día.
- Filtrar por tipo de actividad.
- Filtrar o destacar actividades de la región activa.
- Ver horario y ubicación.
- Guardar o compartir actividad.
- Acceder al detalle.

En mobile, priorizar vista vertical por bloques horarios. No depender de tablas rígidas.

### Mapa

Debe incluir:

- Leyenda.
- Sectores diferenciados.
- Búsqueda de expositor.
- Accesos y servicios.
- Resaltado de zonas correspondientes al territorio activo.
- Alternativa textual para quienes no puedan usar el mapa visual.
- Ubicación del usuario solo si es pertinente y cuenta con consentimiento.

### Noticias

Debe incluir:

- Categorías.
- Fecha.
- Título.
- Imagen optimizada.
- Resumen.
- Detalle completo.
- Compartir.
- Filtro o etiqueta territorial cuando corresponda.

### Entradas

El flujo debe explicar claramente:

1. Tipo de entrada.
2. Precio o condición de gratuidad.
3. Datos solicitados.
4. Confirmación de la operación.
5. Forma de acceso o presentación de la entrada.

Evitar formularios extensos de un único paso.

### Contacto y FAQ

El contacto debe ofrecer canales claros, tiempo de respuesta esperado y formulario breve. La sección de preguntas frecuentes debe resolver dudas operativas sin obligar a navegar por muchas páginas.

---

## 16. Responsive design

### Breakpoints sugeridos

```css
@media (min-width: 640px) { /* tablet pequeña */ }
@media (min-width: 768px) { /* tablet */ }
@media (min-width: 1024px) { /* desktop */ }
@media (min-width: 1280px) { /* desktop amplio */ }
```

### Reglas responsive

- Diseñar mobile first.
- No depender de hover para descubrir información o ejecutar acciones.
- Convertir tablas complejas en cards, listas o contenedores desplazables.
- Mantener CTAs visibles y fáciles de tocar.
- Evitar carruseles automáticos.
- No ocultar funciones importantes en mobile.
- Probar con textos reales, nombres de expositores largos y distintos tamaños de pantalla.
- El selector territorial debe funcionar con botones amplios y desplazamiento horizontal controlado si el ancho es limitado.

---

## 17. Accesibilidad

Objetivo: una experiencia alineada con WCAG 2.2 AA.

Requisitos:

- Contraste suficiente entre texto y fondo.
- Foco visible en todos los elementos interactivos.
- Navegación completa por teclado.
- Orden lógico de tabulación.
- HTML semántico.
- Un solo H1 por página.
- Labels asociados a inputs.
- Texto alternativo en imágenes relevantes.
- Texto alternativo vacío en imágenes decorativas.
- No comunicar información exclusivamente con color.
- Subtítulos o transcripciones para video y audio.
- Respeto por `prefers-reduced-motion`.
- Tamaño táctil mínimo de 44 × 44 px.
- Errores claros, específicos y accionables.

### Selector territorial accesible

- Usar botones reales, no `div` clickeables.
- Usar `aria-pressed="true"` para señalar el territorio activo o implementar un radio group correctamente.
- Sumar check, etiqueta o cambio de texto al color del estado activo.
- Si el contenido cambia sin recargar, comunicarlo mediante `aria-live="polite"`.
- Mantener visible la opción `Todos los territorios`.

### Reducción de movimiento

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

## 18. Motion y microinteracciones

La animación debe orientar, confirmar una acción o mostrar continuidad. No debe distraer ni bloquear el acceso al contenido.

Usos permitidos:

- Aparición suave de contenido.
- Cambio de estado en botones.
- Confirmación de filtros.
- Transición entre vistas.
- Indicadores de carga.
- Cambio de tema territorial.

Reglas:

- Duración habitual: 150–250 ms.
- Usar easing suave.
- No animar todos los componentes al cargar la página.
- No utilizar parallax como requisito para comprender contenido.
- Respetar preferencias de reducción de movimiento.

---

## 19. Imágenes y recursos visuales

- Priorizar fotografías institucionales, de producción real y de la experiencia ExpoJuy.
- Evitar stock genérico que no represente Jujuy, sus territorios o el evento.
- Mantener proporciones consistentes para cada tipo de card.
- Optimizar peso de imágenes y usar formatos modernos cuando sea posible.
- Definir recortes específicos para desktop y mobile.
- No ubicar texto clave sobre áreas visualmente complejas.
- Usar los gradientes territoriales como soporte de composición, no como sustituto de imágenes relevantes.

---

## 20. Tono de contenido

El contenido debe ser:

- Institucional, pero cercano.
- Claro y directo.
- Inclusivo.
- Útil y orientado a la acción.
- Libre de tecnicismos innecesarios.

Microcopy sugerido:

- `Conocé la agenda completa`.
- `Encontrá expositores por rubro`.
- `Planificá tu recorrido`.
- `Descubrí las propuestas de ExpoJuy`.
- `Consultá cómo llegar`.
- `Explorá este territorio`.
- `Ver actividades de Puna`.

Evitar:

- Frases excesivamente grandilocuentes.
- Párrafos largos dentro del Hero.
- Botones genéricos como `Hacé clic acá`.
- Mensajes de error que culpabilicen a la persona usuaria.

---

## 21. Persistencia del territorio

La región seleccionada debe mantenerse durante el recorrido de la one page y, si corresponde, durante la sesión.

Orden de prioridad sugerido:

1. Parámetro de URL: `?region=yungas`.
2. Preferencia en `localStorage`.
3. Tema inicial: `all`.

```js
const validRegions = ["all", "yungas", "valles", "puna", "quebrada"];

function setRegion(region) {
  const selected = validRegions.includes(region) ? region : "all";

  document.documentElement.dataset.theme = selected;
  localStorage.setItem("expoJuyRegion", selected);

  const url = new URL(window.location.href);

  if (selected === "all") {
    url.searchParams.delete("region");
  } else {
    url.searchParams.set("region", selected);
  }

  window.history.replaceState({}, "", url);
}
```

En React o Next.js, administrar la región desde un contexto global o store liviano. Evitar condicionales de color duplicados en cada componente: los componentes deben consumir tokens CSS semánticos.

---

## 22. Arquitectura técnica sugerida

Stack posible para una futura implementación:

- React o Next.js.
- TypeScript.
- CSS Modules, Tailwind CSS o sistema equivalente.
- CMS o fuente de datos para noticias, agenda y expositores.
- API para entradas, formularios e integraciones.
- Hosting y dominio institucional.

Criterios técnicos:

- Componentes reutilizables.
- Datos separados de la capa visual.
- Sistema de tokens CSS.
- Imágenes optimizadas.
- SEO técnico.
- Analítica con consentimiento.
- Formularios seguros.
- Documentación para mantenimiento.
- Estados de carga, error, vacío y éxito.

---

## 23. Uso responsable de IA

La IA puede utilizarse como apoyo para:

- Exploración de conceptos.
- Wireframes y prototipos.
- Redacción inicial.
- Variantes visuales.
- Optimización de código.
- Automatización y documentación.
- Pruebas de accesibilidad.

Toda salida generada con IA debe ser revisada por el equipo. No utilizar imágenes, textos, código o recursos sin validar derechos de uso, precisión, accesibilidad, seguridad y coherencia con la identidad institucional.

---

## 24. Checklist de calidad

### Antes de aprobar una pantalla

- [ ] La pantalla tiene un objetivo claro.
- [ ] El H1 explica dónde se encuentra la persona.
- [ ] Existe una acción principal.
- [ ] La navegación es consistente.
- [ ] La jerarquía se entiende sin leer todo el contenido.
- [ ] El fondo general es `#F2F2F2`.
- [ ] Las cards y paneles usan blanco puro.
- [ ] El color territorial tiene una función concreta.
- [ ] El contraste es suficiente.
- [ ] Los elementos interactivos tienen foco visible.
- [ ] Los estados loading, error, vacío y éxito están previstos.
- [ ] El contenido funciona correctamente en mobile.
- [ ] Las imágenes tienen tratamiento responsive y texto alternativo cuando corresponde.

### Antes de aprobar el sistema territorial

- [ ] Existe estado `Todos los territorios`.
- [ ] La selección territorial cambia el tema global.
- [ ] El Hero cambia gradiente y contenido contextual.
- [ ] CTAs, links, tabs, filtros, badges, focos y cards destacadas responden al tema.
- [ ] El mapa puede destacar resultados de la región activa.
- [ ] La región activa permanece durante la navegación.
- [ ] Existe un control persistente para cambiar o limpiar la selección.
- [ ] El estado activo no depende solamente del color.
- [ ] Los gradientes conservan contraste suficiente.

### Antes de presentar el prototipo

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
- [ ] Selector territorial y temas dinámicos.
- [ ] Responsive mobile.
- [ ] Estados principales de componentes.
- [ ] Estrategia de accesibilidad.
- [ ] Tecnologías previstas.
- [ ] Declaración de uso de IA.

---

## 25. Decisión visual final

La web de ExpoJuy 2026 se construye sobre una base clara, institucional y corporativa: fondo `#F2F2F2`, superficies blancas y texto `#3C3C3B`.

Los territorios funcionan como un sistema de temas dinámicos. Al seleccionar Yungas, Valles, Puna o Quebrada desde el Hero, la one page actualiza sus colores funcionales sin perder consistencia: el contenido se contextualiza y los elementos interactivos adoptan la identidad del territorio elegido.

El resultado buscado es una experiencia profesional, moderna, accesible y fácil de mantener; con identidad jujeña visible, pero siempre al servicio de la información y la usabilidad.
