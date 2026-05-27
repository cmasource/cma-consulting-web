Brand assets used by the site.

Expected names:
- cma-consulting-header.png
- cma-monogram.png
- cma-source-horizontal.png
- cma-source-stacked.png
- cma-source-app-icon.png
- cma-app-icon-source.png

`src/components/ui/BrandLogo.tsx` reads these files with `next/image` and keeps
their original proportions with `object-contain`.

Dark mode wraps white-background logo assets in a subtle white capsule to avoid
contrast and transparency artifacts. For production, a clean dark-mode asset can
be added and wired into `BrandLogo.tsx`.

Recommended sizes:
- Header horizontal logo: 320x96px or SVG
- Source horizontal logo: 320x96px or SVG
- Icon/favicons: 512x512px square
