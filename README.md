# Opoweb

**Opoweb** es una plataforma web estática para estudiar oposiciones desde ordenador, tablet o móvil. Está pensada como un campus personal: temario, test interactivos, supuestos prácticos, simulacros, enlaces oficiales del proceso y progreso guardado en el navegador.

La primera oposición incluida es:

- **Auxiliar Administrativo - Ayuntamiento de La Puebla de Montalbán**
- Convocatoria: **4 plazas de Auxiliar Administrativo y constitución de bolsa**
- Estructura: **19 temas oficiales**, test por temas, supuestos prácticos, simulacros transversales, calendario del proceso y enlaces oficiales.

> Aviso importante: el contenido es material de estudio. Antes del examen hay que revisar siempre la normativa vigente, las bases y los anuncios oficiales de la convocatoria.

---

## Web publicada

Cuando GitHub Pages esté activo, la web se consulta aquí:

```text
https://ivannunezrodriguez.github.io/opoweb/
```

---

## Qué incluye

### 1. Proceso y enlaces

La web incluye un apartado específico con:

- enlace al BOE de la convocatoria,
- enlace a la página municipal de Ofertas de Empleo Público,
- enlace al BOP de Toledo para buscar el anuncio 2026-1965,
- calendario del proceso con hitos publicados, estimados y pendientes.

### 2. Temario

Cada tema se llama como el enunciado oficial de la oposición y se estructura solo por los puntos pedidos en ese enunciado.

Ejemplo:

```text
Tema 1. La Constitución española de 1978. Estructura. La reforma constitucional. Derechos y deberes fundamentales de los españoles. Garantía y suspensión.

- Documento base
- Estructura
- La reforma constitucional
- Derechos y deberes fundamentales de los españoles
- Garantía y suspensión
```

No se añade contenido genérico fuera del programa.

### 3. Test por temas

Cada tema tiene **12 preguntas tipo test**. Al pulsar **Corregir** se muestra:

- aciertos,
- fallos,
- preguntas en blanco,
- nota aproximada,
- respuesta correcta,
- justificación.

La penalización configurada es la de la convocatoria: acierto `+0,20`, fallo `-0,05`, blanco `0`.

### 4. Supuestos prácticos

Incluye **20 supuestos prácticos** orientados a los puntos oficiales del temario: procedimiento administrativo, registros, plazos, recursos, protección de datos, tributos locales, administración electrónica, informática y prevención.

### 5. Simulacros transversales

Incluye **3 simulacros de 50 preguntas** mezclando todo el temario.

### 6. Progreso local

El progreso se guarda en `localStorage`, es decir, en el navegador. Para moverlo entre PC, tablet y móvil se usan los botones **Exportar progreso** e **Importar progreso**.

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
    ├── oposiciones.js
    └── proceso.js
```

| Archivo | Función |
|---|---|
| `index.html` | Página principal. |
| `assets/css/styles.css` | Diseño responsive, menú lateral, tarjetas, test y botones. |
| `assets/js/app.js` | Navegación, corrección de test, progreso, simulacros y vista de proceso. |
| `data/oposiciones.js` | Temas oficiales, test, supuestos y simulacros. |
| `data/proceso.js` | Enlaces oficiales, calendario, changelog y ampliación de supuestos. |
| `manifest.webmanifest` | Permite instalar la web como acceso directo/PWA. |
| `sw.js` | Caché básica de la aplicación. |
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

Puede tardar unos minutos en publicar después de cada cambio.

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

## Cómo añadir otra oposición

El archivo principal es:

```text
data/oposiciones.js
```

Cada oposición debe tener:

```js
{
  id: 'puebla-aux-admin-2026',
  name: 'Auxiliar Administrativo - La Puebla de Montalbán',
  shortName: 'La Puebla - Aux. Administrativo',
  places: '4 plazas + bolsa',
  exam: '...',
  status: '...',
  scoring: { correct: 0.20, wrong: -0.05, blank: 0 },
  themes: [],
  themeTests: {},
  practicalCases: [],
  simulacros: []
}
```

Para añadir enlaces, calendario o changelog específicos puede usarse `data/proceso.js` o crear un archivo equivalente por oposición.

---

## Automatización de avisos

El repositorio no envía correos por sí solo. La vigilancia de novedades debe hacerse externamente comprobando fuentes oficiales:

- BOE,
- BOP Toledo,
- web municipal,
- sede electrónica si publica anuncios del proceso.

Hay una vigilancia diaria configurada desde ChatGPT para detectar novedades relevantes. Para aviso por correo electrónico hace falta configurar un canal de email o indicar una dirección concreta y permitir el envío cuando aparezca una novedad.

---

## Cambios de versión

### v0.5.0 - 2026-07-04

- Añadida vista **Proceso y enlaces**.
- Añadidos enlaces oficiales: BOE, web municipal de empleo y BOP Toledo.
- Añadido calendario del proceso con hitos publicados, estimados y pendientes.
- Ampliados los supuestos prácticos a 20.
- Añadido `data/proceso.js` para separar datos del proceso del temario.
- Actualizada caché a `opoweb-v5`.

### v0.4.0 - 2026-07-04

- Corregido fallo de despliegue en GitHub Pages.
- Simplificación segura de datos para evitar errores de publicación.
- Actualizada caché a `opoweb-v4`.

### v0.3.0 - 2026-07-04

- Temario reestructurado por títulos exactos del programa oficial.
- Cada tema se organiza por los puntos oficiales del enunciado.
- Eliminado contenido genérico fuera del programa.

### v0.2.0 - 2026-07-04

- Temario ampliado para estudio.
- Actualización de caché.

### v0.1.0 - 2026-07-04

- Primera versión web.
- Temario, test por temas, supuestos, simulacros y progreso local.

---

## Próximas mejoras recomendadas

- Convertir el calendario en una vista mensual real.
- Añadir descarga `.ics` para importar fechas a Google Calendar.
- Añadir temporizador de examen.
- Añadir estadísticas por bloque.
- Sustituir preguntas genéricas por preguntas jurídicas específicas artículo por artículo.
- Añadir más oposiciones reutilizando temas comunes.
