# Changelog del Blog de Alico

## [1.1.0] - 2024-01-16

### ✨ Nuevas Funcionalidades
- **Botón de Accesibilidad**: Agregado botón flotante con panel de accesibilidad
  - Control de tamaño de texto (A-, A, A+)
  - Toggle de modo oscuro
  - Panel responsive y accesible
- **Navegación Mejorada**: Header navigation ahora enlaza correctamente a secciones del index
- **Secciones Adicionales**: Agregadas secciones "Sobre Nosotros" y "Contacto"

### 🔧 Mejoras Técnicas
- **Assets Independientes**: Copiados todos los recursos necesarios del proyecto principal
  - Logo de Alico (`logo-alico.png`)
  - Imagen de Ali (`Ali_head.png`)
  - Estilos corporativos (`main-styles.css`)
  - Script de accesibilidad (`accessibility.js`)
- **CSS Autocontenido**: Todos los estilos del proyecto principal integrados en `blog-styles.css`
- **Footer Consistente**: Footer del blog ahora es idéntico al del proyecto principal

### 📁 Estructura de Archivos
```
blog/
├── images/
│   ├── logo-alico.png          # Logo copiado del proyecto principal
│   └── Ali_head.png           # Imagen de Ali copiada del proyecto principal
├── css/
│   ├── blog-styles.css        # Estilos principales del blog (incluye estilos corporativos)
│   ├── post-styles.css        # Estilos para posts individuales
│   └── main-styles.css        # Estilos corporativos principales
├── js/
│   ├── accessibility.js        # Script de accesibilidad copiado del proyecto principal
│   ├── blog-main.js           # Funcionalidades principales del blog
│   ├── blog-cms.js            # Integración con CMS
│   └── post-loader.js         # Cargador de posts individuales
├── index.html                 # Página principal del blog (actualizada)
├── post.html                  # Template de post individual (actualizado)
└── CHANGELOG.md               # Este archivo
```

### 🎯 Funcionalidades del Botón de Accesibilidad
- **Posición**: Botón flotante fijo en la esquina inferior derecha
- **Colores**: Amarillo oro (estado normal) / Azul novo (panel abierto)
- **Panel**: Modal centrado con controles de accesibilidad
- **Responsive**: Adaptado para dispositivos móviles
- **Persistencia**: Configuraciones guardadas en localStorage

### 🔗 Navegación Corregida
- **Inicio**: Enlaza a `#inicio` (banner principal)
- **Categorías**: Enlaza a `#categorias` (sección de posts)
- **Sobre Nosotros**: Enlaza a `#sobre-nosotros` (nueva sección)
- **Contacto**: Enlaza a `#contacto` (nueva sección)

### 📱 Responsive Design
- **Mobile First**: Diseño optimizado para dispositivos móviles
- **Breakpoints**: 768px y 480px para adaptación completa
- **Touch Friendly**: Botones y controles optimizados para touch

### 🚀 Próximas Mejoras
- [ ] Integración completa con Netlify CMS
- [ ] Sistema de comentarios funcional
- [ ] Newsletter funcional
- [ ] Analytics y métricas
- [ ] SEO optimizado
- [ ] PWA capabilities

---

## [1.0.0] - 2024-01-15

### 🎉 Lanzamiento Inicial
- Blog completo con CMS integrado
- Sistema de posts y categorías
- Diseño responsive y accesible
- Integración con Netlify CMS
- Estructura de archivos organizada
