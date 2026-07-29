# Estado actual de contenido e internacionalización

## Funcionamiento

`public/site.js` declara `DICT.es` y `DICT.en`. Al iniciar, obtiene `whaid:lang` de `localStorage` (con español como fallback), refleja la selección en `html[data-lang]` y actualiza el botón `#lang-switch`. La aplicación busca elementos con `[data-i18n]`, toma la clave como índice del idioma activo y reemplaza su `textContent`. Variantes como `data-i18n-title` permiten modificar atributos, no solo texto.

El script también expone contenido enriquecido en `window.WHAID_SITE`. El QA strip es React cliente porque observa `data-lang` mediante `MutationObserver` y lee esa estructura. Los textos fallback permanecen en JSX para HTML inicial y resiliencia.

## Dependencias globales

El mismo script coordina `#theme-switch`, persistencia de tema, `#menu-toggle`, `#nav-menu`, filtros del Blog y elementos `.reveal`. Por eso IDs, clases y orden de carga en `app/layout.jsx` son contratos. `wa-chat.js` busca los cuerpos/estados de las dos demos y paneles por IDs y clases; no forma parte del diccionario, pero comparte el DOM controlado globalmente.

## Riesgos

- React y scripts imperativos pueden escribir el mismo DOM y producir estados divergentes.
- Una clave ausente puede dejar fallback vacío o idioma parcial.
- El diccionario no tiene validación de esquema ni detección automática de claves huérfanas.
- El idioma inicial se aplica después de hidratar y puede causar cambio visible.
- Comportamientos no relacionados están acoplados en un único archivo global.

## Migración recomendada (segunda etapa)

1. Extraer `DICT` a módulos de contenido serializables, conservando exactamente claves y valores ES/EN.
2. Añadir una prueba de paridad: mismas claves en ambos idiomas y cobertura de todo `data-i18n`.
3. Crear un proveedor React mínimo que lea/persista la preferencia y establezca `lang`/`data-lang` desde el layout.
4. Migrar una sección estática por vez para consumir contenido como props; mantener temporalmente `data-i18n` como compatibilidad.
5. Migrar el QA enriquecido al mismo catálogo, luego navbar/footer y finalmente Blog.
6. Separar tema, menú, reveals y chat de la capa i18n antes de retirar el reemplazo global.
7. Eliminar claves/atributos heredados solo después de comparar español e inglés ruta por ruta.

Durante toda la transición ambos idiomas deben compartir un esquema, conservar fallback español renderizado en servidor y contar con una tabla de claves migradas/no migradas. No es necesario introducir una librería antes de estabilizar ese contrato de contenido.
