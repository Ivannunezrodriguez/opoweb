# OpoWeb · Auxiliar Administrativo Toledo

Web estática para estudiar oposiciones de Auxiliar Administrativo en pueblos de Toledo desde ordenador, tablet o móvil.

URL prevista de GitHub Pages:

```text
https://ivannunezrodriguez.github.io/opoweb/
```

## Convocatorias cargadas

- **La Puebla de Montalbán**: 4 plazas + bolsa. Estado personal: inscrito.
- **Carranque**: 1 plaza + bolsa. Estado personal: inscrito.
- **Las Ventas con Peña Aguilera**: 1 plaza. Estado personal: pendiente de solicitud/seguimiento.

## Qué permite ahora

- Seleccionar la oposición activa desde el menú lateral.
- Ver proceso, enlaces oficiales y calendario de cada convocatoria.
- Estudiar temario por convocatoria.
- Hacer test por temas con corrección, penalización y justificación.
- Practicar supuestos prácticos.
- Hacer simulacros transversales.
- Exportar/importar progreso del navegador.
- Mantener una estructura separada de chats por oposición, OpoWeb y formación/méritos.

## Baremos personales cargados de forma conservadora

- **La Puebla**: DAM probablemente no suma porque las bases solo citan Grado en Derecho o Arquitectura como mérito de titulación. Sin experiencia pública C2 confirmada: 0 puntos.
- **Carranque**: DAM como FP de Grado Superior puede sumar 0,75 puntos si fue aportado/acreditado en plazo. Sin experiencia administrativa pública confirmada: 0 puntos.
- **Las Ventas**: Técnico Superior/DAM puede sumar 2 puntos si se acredita con la solicitud. Formación y ejercicios aprobados solo deben sumarse si cumplen literalmente las bases.

## Privacidad

El repositorio es público. No subas DNI, dirección, teléfono, recibos bancarios, justificantes de registro, certificados completos ni vida laboral. Para calcular méritos, usa el chat de formación y trabaja con datos anonimizados o archivos fuera del repositorio.

## Estructura principal

```text
opoweb/
├── index.html
├── README.md
├── manifest.webmanifest
├── sw.js
├── assets/
│   ├── css/styles.css
│   ├── icons/icon.svg
│   └── js/app.js
├── data/
│   ├── oposiciones.js
│   ├── proceso.js
│   └── formacion_usuario.json
└── docs/
    ├── PROMPTS_CHATS.md
    ├── LA_PUEBLA.md
    ├── CARRANQUE.md
    └── LAS_VENTAS.md
```

## Publicar en GitHub Pages

1. Entra en el repositorio `opoweb`.
2. Ve a **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Rama: `main`; carpeta: `/root`.
5. Guarda y espera unos minutos.

## Cambios de versión

### v0.6.0 - 2026-07-04

- Añadidas **Carranque** y **Las Ventas con Peña Aguilera** al selector de oposiciones.
- Carranque queda marcada como **inscrito**.
- Añadidos temarios iniciales, tests, supuestos y simulacros para Carranque y Las Ventas.
- Añadidos calendarios y enlaces oficiales por convocatoria.
- Añadida estructura de chats por oposición, OpoWeb y formación/méritos.
- Añadida plantilla `data/formacion_usuario.json` para inventario privado de méritos.
- Actualizada caché PWA a `opoweb-v6`.

### v0.5.0 - 2026-07-04

- Añadida vista **Proceso y enlaces**.
- Añadidos enlaces oficiales y calendario del proceso.
- Ampliados los supuestos prácticos.

### v0.1.0 - 2026-07-04

- Primera versión web con temario, test, supuestos, simulacros y progreso local.
