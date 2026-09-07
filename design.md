# ExpoJuy 2026 - Official Design System (DESIGN.MD)

Sistema de diseño visual para la plataforma web de **ExpoJuy 2026**, basado en la identidad de marca oficial y la guía de estructura visual de referencia.

---

## 🎨 Paleta de Colores Oficial

| Color | Hex | Función / Aplicación |
| :--- | :--- | :--- |
| **Violeta Oscuro** | `#730DD9` | Títulos principales (`h1`, `h2`), botones principales activos, títulos de noticias. |
| **Violeta Medio** | `#7552F2` | Subtítulos, badges de categorías regulares, barra de navegación estilo píldora. |
| **Lavanda** | `#A988F2` | Fondos de hover en botones inactivos, fondos de tarjetas y badges secundarios. |
| **Cyan** | `#29C7D9` | Badges destacados, enlaces "Leer más", acentos de litio y elementos interactivos. |
| **Gris Claro** | `#F2F2F2` | Fondo general de la página (`body`), aportando limpieza y gran legibilidad. |
| **Blanco Puro** | `#FFFFFF` | Fondo de tarjetas de contenido, contenedores de acordeón y modales. |
| **Gris Carbón** | `#1E293B` | Texto de cuerpo principal y eslogan del logotipo oficial. |

---

## 🔤 Tipografía Oficial: Ambit

La plataforma utiliza la familia tipográfica oficial **Ambit** alojada localmente en la carpeta `fuente/`:
- **Ambit Light** (`300`): Detalles sutiles y textos auxiliares.
- **Ambit Regular** (`400`): Cuerpo de texto principal y párrafos.
- **Ambit SemiBold** (`600`): Subtítulos, etiquetas y enlaces de navegación.
- **Ambit Bold** (`700`): Encabezados principales (`h1`, `h2`, `h3`) y botones principales.

```css
@font-face {
  font-family: 'Ambit';
  src: url('../fuente/Ambit-Bold.otf') format('opentype');
  font-weight: 700;
}
```

---

## 📐 Estructura de Layout (Basado en la Referencia)

### 1. Header / Navbar Flotante
- Menú estilo cápsula/píldora centrado superior (`#7552F2` / `#730DD9`).
- Logotipo oficial de ExpoJuy integrado a la izquierda con eslogan: *CONECTANDO PAÍSES · CREANDO OPORTUNIDADES*.

### 2. Hero Banner Fotográfico
- Imagen de fondo representativa de **Ciudad Cultural Jujuy**.
- Título principal en **Ambit Bold** superpuesto.
- Botones de acción redondeados estilo cápsula: `registro` (Pase General / B2B) y `secundario` (Ver Plano / Rondas).

### 3. Bloque de Propuesta de Valor ("Bold Headline")
- Disposición en 2 columnas:
  - **Izquierda**: Gráfico ilustrativo con degradado lavanda a cyan.
  - **Derecha**: Título destacado en **Ambit Bold** (`#730DD9`), bajada descriptiva, botón principal y secundario.

### 4. Cita de Alto Impacto ("Impact Quote")
- Cita en tipografía **Ambit Bold** de gran tamaño:
  > *"Conectando países, creando oportunidades en el corazón del Corredor Bioceánico y el Triángulo del Litio."*

### 5. Grilla de Tarjetas 4 Columnas
- Tarjetas blancas limpias con bordes redondeados (`border-radius: 16px`).
- Muestras de sectores, expositores y casos de éxito.

### 6. Sección FAQS
- Columna izquierda: Título principal **FAQS** (`#730DD9`).
- Columna derecha: Bloques de preguntas en contenedores gris claro (`#F2F2F2`) / blanco con viñetas geométricas (`●`, `◆`, `▲`).

### 7. Ticker de Sponsors ("Drop names with confidence")
- Muestra de logotipos de patrocinadores y aliados en tono monocromático / institucional.

### 8. Footer Institucional
- Fondo claro pulcro con logotipo completo, enlaces en columnas de navegación y derechos reservados.
