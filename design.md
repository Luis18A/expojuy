# ExpoJuy 2026 — Design System & UI Guidelines

> Documento base para diseñar una experiencia web institucional, clara, accesible y escalable para ExpoJuy 2026.

## 1. Propósito

Diseñar el sitio oficial de ExpoJuy 2026 como una plataforma digital moderna para descubrir el evento, conocer a sus expositores, consultar actividades y acceder a información práctica.

La interfaz debe comunicar:

- Innovación y tecnología.
- Producción y desarrollo regional.
- Vinculación empresarial.
- Economía del conocimiento.
- Identidad territorial jujeña.

El criterio visual principal es **corporativo, limpio y funcional**. La estética debe acompañar el contenido y no competir con él.

## 2. Alcance del producto

El sistema visual deberá permitir construir, como mínimo, las siguientes secciones:

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
- Filtros por rubro, sector o territorio.
- Agenda interactiva.
- Mapa del predio.
- Formulario de contacto.
- Panel de novedades.
- Integración con redes sociales.
- Espacios institucionales para sponsors.

## 3. Principios de diseño

### 3.1 Claridad antes que decoración

Cada pantalla debe responder rápidamente:

1. Dónde estoy.
2. Qué puedo hacer.
3. Qué información es prioritaria.
4. Cuál es el siguiente paso.

### 3.2 Jerarquía visual

Usar una jerarquía consistente:

- H1: propósito principal de la página.
- H2: sección o bloque relevante.
- H3: agrupación de contenido.
- Texto auxiliar: contexto, metadatos o instrucciones.
- CTA principal: acción prioritaria.
- CTA secundario: acción complementaria.

### 3.3 Menos opciones, mejores decisiones

Evitar interfaces saturadas. En cada bloque debe existir una acción principal claramente identificable.

### 3.4 Diseño institucional flexible

La identidad debe sentirse oficial y profesional, pero no rígida. Los gradientes territoriales aportan energía y reconocimiento sin utilizarse como fondo dominante en todas las pantallas.

### 3.5 Accesibilidad desde el inicio

La accesibilidad no debe resolverse al final. Todos los componentes deben contemplar contraste, foco visible, navegación por teclado, textos alternativos y estados comprensibles.

## 4. Paleta cromática

### 4.1 Colores base

| Token | HEX | Uso recomendado |
|---|---:|---|
| `color-ink` | `#3C3C3B` | Texto principal, títulos, navegación y elementos de alta legibilidad. |
| `color-paper` | `#F2F2F2` | Fondo general, superficies suaves y zonas de descanso visual. |
| `color-white` | `#FFFFFF` | Cards, modales, formularios y superficies elevadas. |

> Nota: usar `#3C3C3B` y no negro puro para mantener una apariencia más amable y corporativa.

### 4.2 Territorios

Cada territorio funciona como una familia cromática y como recurso de identificación visual. No se deben mezclar los cuatro colores como decoración aleatoria.

| Territorio | Color principal | Color de apoyo | Aplicación |
|---|---:|---:|---|
| Yungas | `#0C6196` | `#A0D9FF` | Tecnología, innovación, naturaleza, información institucional. |
| Valles | `#25C0D4` | `#005539` | Producción, comunidad, servicios, sostenibilidad. |
| Puna | `#820CD0` | `#B3008F` | Cultura, identidad, conocimiento y propuestas destacadas. |
| Quebrada | `#7553F2` | `#FF8A63` | Agenda, experiencias, actividades y llamados a la acción. |

### 4.3 Gradientes oficiales

#### Yungas

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

#### Valles

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

#### Puna

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

#### Quebrada

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

### 4.4 Reglas de uso de color

- El fondo general debe ser `#F2F2F2` o blanco.
- El texto principal debe usar `#3C3C3B`.
- Los colores territoriales deben funcionar como acentos, etiquetas, indicadores, bordes, iconos y secciones destacadas.
- Reservar los gradientes para hero, banners, tarjetas territoriales, estados destacados y bloques de campaña.
- No colocar texto largo sobre gradientes complejos.
- Sobre fondos oscuros, usar texto blanco únicamente cuando el contraste sea suficiente.
- No usar un gradiente como fondo de toda la aplicación.
- Mantener un único color territorial dominante por sección.

## 5. Tokens de diseño

### 5.1 CSS variables

```css
:root {
  --color-ink: #3c3c3b;
  --color-paper: #f2f2f2;
  --color-white: #ffffff;

  --color-yungas: #0c6196;
  --color-yungas-soft: #a0d9ff;
  --color-valles: #25c0d4;
  --color-valles-deep: #005539;
  --color-puna: #820cd0;
  --color-puna-deep: #b3008f;
  --color-quebrada: #7553f2;
  --color-quebrada-warm: #ff8a63;

  --gradient-yungas: linear-gradient(to right top, #0c6196, #3b7db0, #5d9bca, #7ebae4, #a0d9ff);
  --gradient-valles: linear-gradient(to left top, #25c0d4, #00a5aa, #008a81, #006f5c, #005539);
  --gradient-puna: linear-gradient(to left bottom, #820cd0, #9700be, #a500ad, #ae009d, #b3008f);
  --gradient-quebrada: linear-gradient(to right top, #ff8a63, #ff6477, #fa429b, #d13dc8, #7553f2);

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;

  --shadow-sm: 0 2px 8px rgb(60 60 59 / 8%);
  --shadow-md: 0 8px 24px rgb(60 60 59 / 12%);
  --shadow-lg: 0 18px 48px rgb(60 60 59 / 16%);
}
```

## 6. Tipografía

La tipografía oficial deberá definirse a partir del kit institucional. Mientras no esté disponible, utilizar una sans serif contemporánea y altamente legible.

Stack sugerido:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Escala recomendada:

| Nivel | Desktop | Mobile | Peso |
|---|---:|---:|---:|
| Display | 56–72 px | 40–48 px | 700–800 |
| H1 | 40–52 px | 32–38 px | 700 |
| H2 | 32–40 px | 26–32 px | 700 |
| H3 | 22–28 px | 20–24 px | 650–700 |
| Body large | 18–20 px | 17–18 px | 400–500 |
| Body | 16 px | 16 px | 400 |
| Small | 14 px | 14 px | 400–500 |
| Caption | 12–13 px | 12–13 px | 500 |

Reglas:

- Line-height de 1.2 a 1.3 para títulos.
- Line-height de 1.5 a 1.7 para textos corridos.
- No usar más de dos familias tipográficas.
- Evitar textos largos en mayúsculas.
- Mantener una línea de lectura de aproximadamente 60–75 caracteres.

## 7. Layout y grilla

### 7.1 Contenedor

```css
.container {
  width: min(100% - 32px, 1200px);
  margin-inline: auto;
}
```

En pantallas grandes, el contenido principal no debería superar los 1200–1280 px salvo mapas, galerías o visualizaciones específicas.

### 7.2 Grilla

- Desktop: 12 columnas.
- Tablet: 8 columnas.
- Mobile: 4 columnas.
- Gutter desktop: 24–32 px.
- Gutter mobile: 16 px.
- Separación entre secciones: 64–96 px en desktop y 40–64 px en mobile.

### 7.3 Ritmo vertical

Usar múltiplos de 8 px para mantener consistencia. La distancia entre componentes debe responder a su relación, no ser arbitraria.

## 8. Arquitectura de navegación

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

El header debe incluir:

- Logo institucional.
- Navegación principal.
- CTA prioritario.
- Acceso a redes o contacto en desktop.
- Menú colapsable en mobile.

Comportamiento recomendado:

- Header fijo o sticky únicamente si no reduce demasiado el espacio visible.
- Fondo sólido al hacer scroll.
- Estado activo claramente visible.
- Menú mobile con foco atrapado dentro del panel y cierre accesible.

## 9. Estructura de la página de inicio

### 9.1 Hero

Objetivo: comunicar qué es ExpoJuy 2026 y guiar hacia la acción principal.

Contenido sugerido:

- Eyebrow: `ExpoJuy 2026`.
- H1 orientado al valor del evento.
- Descripción breve.
- CTA principal: `Ver agenda` o `Comprar entradas`.
- CTA secundario: `Conocer ExpoJuy`.
- Fecha, lugar o información esencial.
- Recurso visual territorial o imagen institucional.

El hero puede usar un gradiente territorial, pero debe mantener suficiente contraste y una composición simple.

### 9.2 Accesos rápidos

Cards para:

- Agenda.
- Expositores.
- Mapa del predio.
- Entradas.

### 9.3 Territorios

Presentar Yungas, Valles, Puna y Quebrada como una arquitectura visual de contenidos. Cada territorio debe tener una función clara y no convertirse en una simple decoración cromática.

### 9.4 Próximas actividades

Mostrar entre tres y seis actividades destacadas con:

- Fecha.
- Hora.
- Nombre.
- Ubicación.
- Categoría.
- Acción para ver detalle.

### 9.5 Expositores destacados

Cards con imagen o logo, nombre, rubro y enlace a la ficha completa.

### 9.6 Novedades

Usar tarjetas editoriales consistentes. Mostrar fecha, categoría, título y resumen corto.

### 9.7 Sponsors

Respetar la jerarquía de logos según nivel de patrocinio. No deformar, recolorear ni ubicar logos sin respetar sus áreas de protección.

### 9.8 Footer

Incluir:

- Logo.
- Enlaces principales.
- Contacto.
- Redes sociales.
- Sponsors institucionales.
- Política de privacidad.
- Accesibilidad.
- Copyright.

## 10. Componentes principales

### 10.1 Buttons

Variantes:

- `Primary`: fondo territorial, texto blanco.
- `Secondary`: borde territorial, fondo transparente o blanco.
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

- Altura mínima recomendada: 44 px.
- Área táctil mínima: 44 × 44 px.
- Texto orientado a la acción: `Ver agenda`, `Buscar expositor`, `Consultar mapa`.
- No usar demasiados botones con igual peso visual.

### 10.2 Cards

Variantes:

- Card de expositor.
- Card de actividad.
- Card de noticia.
- Card territorial.
- Card de acceso rápido.

Reglas:

- Una card debe tener una acción principal.
- Mantener altura consistente dentro de una misma grilla.
- Evitar sombras fuertes.
- Usar borde sutil cuando la superficie sea blanca sobre fondo claro.
- Toda la card puede ser clickeable, pero debe existir un estado de foco visible.

### 10.3 Tags y badges

Usos:

- Rubro.
- Territorio.
- Estado de una actividad.
- Tipo de contenido.

No utilizar badges como decoración sin significado funcional.

### 10.4 Inputs y formularios

Cada input debe tener:

- Label visible.
- Placeholder opcional, nunca sustitutivo del label.
- Texto de ayuda cuando sea necesario.
- Estado de error explicativo.
- Estado de éxito cuando corresponda.
- Mensaje compatible con lectores de pantalla.

Ejemplo de búsqueda:

```text
Buscar expositores, rubros o actividades
[____________________________________] [Buscar]
```

### 10.5 Tabs y filtros

Usar tabs cuando las categorías sean pocas y mutuamente excluyentes. Usar filtros cuando el usuario pueda combinar criterios.

Los filtros deben indicar:

- Cantidad de resultados.
- Filtros activos.
- Acción para limpiar.
- Estado vacío.

### 10.6 Modal y drawer

Utilizar para información secundaria o acciones puntuales. No esconder información crítica exclusivamente en modales.

### 10.7 Toast y alertas

Los mensajes deben ser breves, claros y no depender únicamente del color.

Ejemplos:

- `La consulta se envió correctamente.`
- `No encontramos expositores con esos filtros.`
- `Revisá los campos marcados antes de continuar.`

## 11. Pantallas funcionales

### Expositores

Debe permitir:

- Buscar por nombre.
- Filtrar por rubro.
- Filtrar por territorio.
- Ordenar resultados.
- Abrir una ficha individual.

La ficha puede incluir:

- Nombre.
- Logo o imagen.
- Rubro.
- Descripción.
- Ubicación dentro del predio.
- Sitio web y redes.
- Botón para ver en el mapa.

### Agenda

Debe permitir:

- Ver por día.
- Filtrar por tipo de actividad.
- Ver horario y ubicación.
- Guardar o compartir una actividad.
- Acceder al detalle.

En mobile, priorizar una vista vertical por bloques horarios.

### Mapa

Debe incluir:

- Leyenda.
- Sectores diferenciados.
- Búsqueda de expositor.
- Accesos y servicios.
- Ubicación del usuario, si técnicamente corresponde.
- Alternativa textual para personas que no puedan utilizar el mapa visual.

### Noticias

Debe incluir:

- Categorías.
- Fecha.
- Título.
- Imagen optimizada.
- Resumen.
- Detalle completo.
- Compartir.

### Entradas

El flujo debe explicar:

1. Qué tipo de entrada se selecciona.
2. Cuánto cuesta o si es gratuita.
3. Qué datos se solicitan.
4. Cómo se confirma la operación.
5. Cómo se obtiene o presenta la entrada.

Evitar formularios largos en un único paso.

## 12. Responsive design

### Mobile first

La experiencia mobile debe ser prioritaria porque muchas consultas ocurrirán durante la visita al evento.

Breakpoints sugeridos:

```css
@media (min-width: 640px) { /* tablet pequeña */ }
@media (min-width: 768px) { /* tablet */ }
@media (min-width: 1024px) { /* desktop */ }
@media (min-width: 1280px) { /* desktop amplio */ }
```

Reglas:

- No depender de hover para descubrir información.
- Convertir tablas complejas en cards o listas desplazables.
- Mantener CTAs visibles y fáciles de tocar.
- Evitar carruseles automáticos.
- No ocultar funcionalidades importantes en desktop que luego no existan en mobile.
- Probar con texto real y títulos largos.

## 13. Accesibilidad

Objetivo: alcanzar una experiencia alineada con WCAG 2.2 AA.

Requisitos:

- Contraste suficiente entre texto y fondo.
- Foco visible en todos los elementos interactivos.
- Navegación completa por teclado.
- Orden lógico de tabulación.
- HTML semántico.
- Un solo H1 por página.
- Labels asociados a inputs.
- Texto alternativo para imágenes relevantes.
- Descripción vacía para imágenes decorativas.
- No comunicar información solo con color.
- Subtítulos o transcripciones para contenido audiovisual.
- Respeto por `prefers-reduced-motion`.
- Tamaño táctil mínimo de 44 × 44 px.
- Mensajes de error claros y accionables.

Ejemplo:

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

## 14. Motion y microinteracciones

La animación debe orientar, confirmar o dar continuidad. No debe distraer.

Usos permitidos:

- Aparición sutil de contenido.
- Cambio de estado en botones.
- Confirmación de filtros.
- Transición entre vistas.
- Feedback de carga.

Reglas:

- Duración habitual: 150–250 ms.
- Usar easing suave.
- No animar todos los elementos al cargar.
- No usar parallax como requisito para comprender el contenido.
- Respetar reducción de movimiento.

## 15. Imágenes y recursos visuales

- Priorizar fotografías institucionales y de producción real.
- Evitar imágenes genéricas de stock sin relación con Jujuy o ExpoJuy.
- Mantener proporciones consistentes.
- Optimizar peso y utilizar formatos modernos cuando sea posible.
- Definir recortes para desktop y mobile.
- No superponer texto importante sobre zonas visualmente complejas.

## 16. Tono de contenido

El contenido debe ser:

- Institucional, pero cercano.
- Claro y directo.
- Orientado a la acción.
- Inclusivo.
- Sin tecnicismos innecesarios.

Ejemplos de microcopy:

- `Conocé la agenda completa`.
- `Encontrá expositores por rubro`.
- `Planificá tu recorrido`.
- `Descubrí las propuestas de ExpoJuy`.
- `Consultá cómo llegar`.

Evitar:

- Frases excesivamente grandilocuentes.
- Párrafos largos en el hero.
- Botones genéricos como `Hacé clic acá`.
- Mensajes de error culpabilizantes.

## 17. Arquitectura técnica prevista

La propuesta debe poder evolucionar hacia un sitio mantenible y escalable.

Stack sugerido para una futura implementación:

- React o Next.js.
- TypeScript.
- CSS Modules, Tailwind CSS o sistema equivalente.
- CMS o fuente de datos para noticias, agenda y expositores.
- API para entradas, formularios o integraciones.
- Hosting y dominio institucional provistos por la organización.

Criterios técnicos:

- Componentes reutilizables.
- Datos separados de la presentación.
- Optimización de imágenes.
- SEO técnico.
- Analítica con consentimiento.
- Manejo seguro de formularios.
- Documentación para mantenimiento.

## 18. Uso responsable de IA

La IA puede utilizarse como apoyo para:

- Exploración de conceptos.
- Wireframes y prototipos.
- Redacción inicial.
- Generación de variantes visuales.
- Optimización de código.
- Automatización y documentación.
- Pruebas de accesibilidad.

Toda salida generada por IA debe ser revisada por el equipo. No utilizar imágenes, textos, código o recursos sin verificar derechos, precisión, accesibilidad y coherencia con la identidad institucional.

## 19. Checklist de calidad

### Antes de aprobar una pantalla

- [ ] La pantalla tiene un objetivo claro.
- [ ] El H1 explica dónde está el usuario.
- [ ] Existe una acción principal.
- [ ] La navegación es consistente.
- [ ] La jerarquía visual se entiende sin leer todo.
- [ ] El color territorial tiene una función.
- [ ] El contraste es suficiente.
- [ ] El contenido funciona en mobile.
- [ ] Los estados de loading, error, vacío y éxito están contemplados.
- [ ] Los elementos interactivos tienen foco visible.
- [ ] Las imágenes tienen tratamiento responsive.

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
- [ ] Responsive mobile.
- [ ] Estados principales.
- [ ] Justificación de la paleta.
- [ ] Estrategia de accesibilidad.
- [ ] Tecnologías previstas.
- [ ] Declaración de uso de IA.

## 20. Decisión visual resumida

La interfaz se construye sobre una base neutra y corporativa, formada por `#3C3C3B`, `#F2F2F2` y blanco. Los cuatro territorios funcionan como un sistema de acentos y navegación visual: Yungas comunica innovación, Valles producción y comunidad, Puna identidad y conocimiento, y Quebrada experiencias y acción.

El resultado buscado es una web institucional limpia, rápida de comprender y fácil de mantener, con suficiente personalidad para representar a Jujuy sin sacrificar usabilidad.
