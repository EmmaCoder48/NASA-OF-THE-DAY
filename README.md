# 🌌 NASA of the Day | Daily Astronomy Showcase

Next.js · React · NASA API

---

## 🚀 Desafíos Técnicos y Soluciones

### 1. Manejo de Media Dinámica (Imagen vs Video)

**Problema:** La API APOD de la NASA puede devolver imágenes o videos (YouTube/Vimeo), lo que puede romper el layout si no se maneja correctamente.

**Solución:** Implementé renderizado condicional basado en el campo `media_type`, mostrando imágenes optimizadas o iframes según el caso, manteniendo una UI estable y consistente.

---

### 2. UI Espacial Clara para Contenido Científico

**Problema:** Las descripciones oficiales suelen ser extensas y densas, afectando la experiencia de lectura.

**Solución:** Apliqué una jerarquía visual simple con contenedores centrados, ancho limitado y tipografía limpia para priorizar legibilidad sin perder estética espacial.

---

## 🛠️ Stack Tecnológico

- **Framework:** Next.js (App Router)
- **UI Library:** React
- **Styling:** CSS Modules
- **API:** NASA Open API – Astronomy Picture of the Day (APOD)

---

## 📡 Características Principales

- 🌌 Imagen o video astronómico del día
- 📝 Título y descripción oficial de la NASA
- 📅 Contenido actualizado diariamente
- 🌑 Diseño oscuro estilo espacial
- 📱 Layout responsive para desktop y mobile

