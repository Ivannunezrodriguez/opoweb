# Opoweb

**Opoweb** es una plataforma web estática para estudiar oposiciones desde ordenador, tablet o móvil. Está pensada como un campus personal: temario, test interactivos, supuestos prácticos, simulacros y progreso guardado en el navegador.

La primera oposición incluida es:

- **Auxiliar Administrativo - Ayuntamiento de La Puebla de Montalbán**
- Convocatoria: **4 plazas de Auxiliar Administrativo y constitución de bolsa**
- Estructura inicial: **19 temas**, test por temas, supuestos prácticos y simulacros transversales.

> Aviso importante: el contenido es material de estudio. Antes del examen hay que revisar siempre la normativa vigente y los anuncios oficiales de la convocatoria.

---

## Objetivo

La idea de Opoweb es que puedas:

- Ver en la izquierda la oposición que estás preparando.
- Consultar temas desde móvil, tablet o PC.
- Hacer test por temas y corregirlos al momento.
- Ver la respuesta correcta y una justificación.
- Practicar supuestos con solución orientativa.
- Hacer simulacros transversales.
- Guardar el progreso en el navegador.
- Exportar/importar progreso entre dispositivos.
- Añadir más oposiciones en el futuro y marcar temas comunes.

---

## Qué incluye

### 1. Temario

Cada tema incluye:

- resumen estudiable,
- puntos clave,
- esquema visual tipo árbol,
- tabla de repaso,
- etiqueta de tema común cuando puede servir para otras oposiciones.

### 2. Test por temas

Cada tema tiene preguntas tipo test. Al pulsar **Corregir** se muestra:

- aciertos,
- fallos,
- preguntas en blanco,
- nota aproximada,
- respuesta correcta,
- justificación.

La penalización configurada es la habitual de la convocatoria de La Puebla de Montalbán: acierto `+0,20`, fallo `-0,05`, blanco `0`.

### 3. Supuestos prácticos

Los supuestos permiten escribir una respuesta y después abrir una solución orientativa. Sirven para preparar el segundo ejercicio práctico.

### 4. Simulacros transversales

Incluye simulacros de 50 preguntas que mezclan diferentes temas.

### 5. Progreso local

El progreso se guarda en `localStorage`, es decir, en el navegador. Si cambias de dispositivo, puedes usar los botones **Exportar progreso** e **Importar progreso**.

---

## Estructura del proyecto

```text
opoweb/
├── index.html
├── README.md
├── manifest.webmanifest
├── sw.js
├── .nojekyll
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── icons/
│   │   └── icon.svg
│   └── js/
│       └── app.js
└── data/
    └── oposiciones.js
```

| Archivo | Función |
|---|---|
| `index.html` | Página principal. |
| `assets/css/styles.css` | Diseño responsive, menú lateral, tarjetas, test y botones. |
| `assets/js/app.js` | Navegación, corrección de test, progreso y simulacros. |
| `data/oposiciones.js` | Datos de oposiciones, temas, preguntas, supuestos y simulacros. |
| `manifest.webmanifest` | Permite instalar la web como acceso directo/PWA. |
| `sw.js` | Cache básico para carga más rápida. |
| `.nojekyll` | Evita problemas de GitHub Pages con Jekyll. |

---

## Uso local

Puedes abrir directamente `index.html`, pero es mejor levantar un servidor local.

Con Python:

```bash
python -m http.server 8080
```

Después abre:

```text
http://localhost:8080
```

---

## Publicar en GitHub Pages

1. Entra en el repositorio `opoweb`.
2. Ve a **Settings**.
3. Entra en **Pages**.
4. En **Build and deployment**, selecciona:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/root`
5. Guarda.

La web quedará publicada en una URL parecida a:

```text
https://Ivannunezrodriguez.github.io/opoweb/
```

Puede tardar unos minutos en estar disponible.

---

## Instalar en móvil o tablet

### Android / Chrome

1. Abre la URL de GitHub Pages.
2. Pulsa el menú de Chrome.
3. Elige **Añadir a pantalla de inicio** o **Instalar aplicación**.

### iPhone/iPad / Safari

1. Abre la URL de GitHub Pages.
2. Pulsa compartir.
3. Elige **Añadir a pantalla de inicio**.

---

## Añadir otra oposición

El archivo principal de datos es:

```text
data/oposiciones.js
```

Cada oposición tiene esta estructura general:

```js
{
  id: "puebla-aux-admin-2026",
  name: "Auxiliar Administrativo - La Puebla de Montalbán",
  shortName: "La Puebla - Aux. Administrativo",
  themes: [],
  themeTests: {},
  practicalCases: [],
  simulacros: []
}
```

Para añadir otra oposición:

1. Duplica el objeto de la oposición existente.
2. Cambia `id`, `name`, `shortName`, `places`, `exam` y `status`.
3. Añade o reutiliza temas.
4. Marca `commonPotential: true` en los temas que sirvan para varias oposiciones.

---

## Añadir preguntas tipo test

Dentro de `themeTests`, cada pregunta sigue esta forma:

```js
{
  id: "t1-q1",
  text: "Pregunta...",
  options: [
    { letter: "A", text: "Respuesta A" },
    { letter: "B", text: "Respuesta B" },
    { letter: "C", text: "Respuesta C" },
    { letter: "D", text: "Respuesta D" }
  ],
  answer: "B",
  justification: "Explicación de por qué esa opción es correcta."
}
```

---

## Añadir supuestos prácticos

Dentro de `practicalCases`:

```js
{
  id: "sp1",
  title: "Registro de entrada y plazos",
  statement: "Enunciado del supuesto...",
  guidance: "Solución orientativa..."
}
```

---

## Añadir simulacros

Dentro de `simulacros`:

```js
{
  id: "sim1",
  title: "Simulacro transversal 1",
  questions: [ /* 50 preguntas */ ]
}
```

---

## Próximas mejoras recomendadas

- Añadir todos los test definitivos del documento Word.
- Crear modo examen con temporizador de 60 minutos.
- Añadir estadísticas por bloque: jurídico, régimen local, tributario, informática.
- Añadir buscador avanzado por ley/artículo.
- Exportar resultados en CSV.
- Crear más oposiciones reutilizando los temas comunes.

---

## Mantenimiento

Recomendación práctica:

- Usa `main` para la versión publicada.
- Cuando añadas contenido nuevo, actualiza primero `data/oposiciones.js`.
- Comprueba en local antes de subir.
- Cada cambio importante debería tener un commit claro, por ejemplo:

```text
Añadir test del tema 2 Ley 39/2015
```

