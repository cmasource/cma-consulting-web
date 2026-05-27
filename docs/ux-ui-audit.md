# UX/UI Audit Checklist

Guía rápida para revisar la web pública de CMA Consulting antes de publicar o
después de cambios visuales relevantes.

## 1. Branding

- Logo CMA Consulting legible en header y footer.
- cma_source escrito siempre en minúscula y con guion bajo.
- Paleta oficial aplicada: #0D1B3D, #009A9A, #B0B6BD, #F8FAFC, #101828.
- Favicon e iconos de app visibles y coherentes con la marca.
- No aparecen nombres antiguos ni variantes incorrectas de marca.

## 2. Layout

- Contenido interno amplio pero controlado en desktop grande.
- Secciones full-width con contenedor consistente.
- Hero con dos columnas equilibradas en desktop.
- Tarjetas alineadas y con alturas razonables.
- Sin bloques vacíos excesivos entre secciones.

## 3. Responsive

- Revisar 375px, 430px, 768px, 1024px, 1366px, 1440px y 1920px.
- Sin overflow horizontal.
- Header mobile usable y logo sin cortes.
- Cards apiladas correctamente.
- Formulario legible y fácil de completar.

## 4. Accesibilidad

- Buen contraste en botones y textos.
- Focus visible en links, botones y campos.
- Inputs con labels.
- Jerarquía H1/H2/H3 consistente.
- Botones y menú mobile con nombres accesibles.

## 5. Performance

- Evitar imágenes pesadas sin optimizar.
- Mantener animaciones CSS simples.
- Revisar Lighthouse en localhost antes de publicar.
- No cargar librerías visuales si no agregan valor claro.

## 6. SEO

- Title y description correctos.
- Open Graph y Twitter Card configurados.
- Favicon e iconos declarados en metadata.
- Contenido principal renderiza en la home.
- Links internos por anclas funcionan.

## 7. Conversión

- CTA principal visible en header, hero y bloque de diagnóstico.
- CTA secundario claro y con contraste.
- Contacto visible sin depender de scroll excesivo.
- Formulario con estado de éxito simulado.

## 8. Contenido

- No hay lorem ipsum.
- No se exagera el uso de inteligencia artificial.
- Productos en desarrollo no se presentan como terminados.
- Perfil de Matías Alvarez no menciona empleadores.

## 9. Portfolio

- Casos reales o internos claramente identificados.
- No inventar clientes.
- Acciones "Ver caso", "Ver demo" o "Próximamente" según disponibilidad real.

## 10. Contacto

- Variables configurables:
  - `NEXT_PUBLIC_CONTACT_EMAIL`
  - `NEXT_PUBLIC_WHATSAPP_URL`
  - `NEXT_PUBLIC_LINKEDIN_URL`
  - `NEXT_PUBLIC_INSTAGRAM_URL`
- Integración futura posible con Supabase, n8n o email.

## Comandos

```bash
npm run check
npm run build
npm run test:e2e
npm run audit:lighthouse
```

Para generar capturas manuales con Playwright, correr:

```bash
npm run test:ui
```
