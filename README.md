# Whaid Public Site

Este repositorio contiene el sitio público de Whaid. La aplicación pública vive en `frontend/` y usa Next.js App Router con contenido del Home controlado por React, diccionarios locales para español/inglés y datos del Blog obtenidos desde la integración existente.

## Rama de refactorización

La refactorización progresiva del frontend se acumula en `codex/initiate-architectural-refactor-of-frontend`. Las ramas de trabajo deben derivarse de esa rama y abrir pull requests de regreso a ella, no a `main`.

## Instalación y ejecución

```bash
cd frontend
npm install
npm run dev
```

## Build de producción

```bash
cd frontend
npm run build
npm run start
```

## Calidad mínima

```bash
cd frontend
npm run validate:i18n
npm run lint
npm run check
```

`check` ejecuta validación de traducciones, lint y build de producción.
