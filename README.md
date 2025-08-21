# Blog de Innovación de Alico

Un blog moderno y responsive integrado con CMS compatible con GitHub Pages, diseñado para compartir noticias, proyectos y avances en innovación de Alico.

## 🚀 Características

### Frontend
- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Identidad Visual Alico**: Mantiene la paleta de colores y tipografías corporativas
- **Búsqueda y Filtros**: Sistema de búsqueda por texto y filtrado por categorías
- **Paginación**: Navegación eficiente entre artículos
- **SEO Optimizado**: Meta tags y estructura semántica

### CMS (Content Management System)
- **Netlify CMS**: Sistema de administración de contenido integrado
- **Editor Markdown**: Interfaz intuitiva para crear y editar posts
- **Gestión de Medios**: Subida y organización de imágenes
- **Control de Versiones**: Integración con Git para historial de cambios
- **Autenticación**: Sistema de login seguro para administradores

## 📁 Estructura del Proyecto

```
blog/
├── index.html              # Página principal del blog
├── post.html               # Plantilla para posts individuales
├── admin/
│   └── config.yml          # Configuración del CMS
├── css/
│   ├── blog-styles.css     # Estilos específicos del blog
│   └── post-styles.css     # Estilos para posts individuales
├── js/
│   ├── blog-main.js        # Funcionalidades principales del blog
│   ├── blog-cms.js         # Gestión del CMS
│   └── post-loader.js      # Cargador de posts individuales
└── README.md               # Este archivo
```

## 🛠️ Instalación y Configuración

### 1. Requisitos Previos
- Sitio web alojado en GitHub Pages o Netlify
- Acceso de administrador al repositorio

### 2. Configuración del CMS

#### Para GitHub Pages:
1. Agregar el archivo `admin/config.yml` a tu repositorio
2. Configurar Netlify Identity en tu sitio
3. Habilitar Git Gateway en Netlify

#### Para Netlify:
1. Conectar tu repositorio a Netlify
2. Habilitar Netlify Identity
3. Configurar Git Gateway

### 3. Configuración de Autenticación
```yaml
# En admin/config.yml
backend:
  name: git-gateway
  branch: main
```

## 📝 Uso del CMS

### Acceso al Panel de Administración
1. Navega a tu sitio web
2. Haz clic en "Administrar Blog" (visible solo para usuarios autenticados)
3. Inicia sesión con tus credenciales

### Crear un Nuevo Post
1. En el panel de administración, haz clic en "New Blog Posts"
2. Completa los campos:
   - **Title**: Título del artículo
   - **Publish Date**: Fecha de publicación
   - **Featured Image**: Imagen destacada
   - **Category**: Categoría del post
   - **Author**: Autor del artículo
   - **Tags**: Etiquetas relevantes
   - **Excerpt**: Resumen del artículo
   - **Body**: Contenido completo en Markdown

### Editar Posts Existentes
1. En el panel, busca el post que quieres editar
2. Haz clic en "Edit"
3. Realiza los cambios necesarios
4. Guarda los cambios

## 🎨 Personalización

### Colores Corporativos
Los colores están definidos en variables CSS:
```css
:root {
    --amarillo-oro: #DB9500;        /* Color principal */
    --azul-novo: #003DA6;           /* Azul corporativo */
    --azul-claro: #40B4E5;          /* Azul secundario */
    --verde-natura: #71B338;        /* Verde secundario */
}
```

### Tipografías
- **Títulos**: Zilla Slab (serif)
- **Cuerpo**: Work Sans (sans-serif)

### Categorías
Las categorías predefinidas son:
- Innovación
- Sostenibilidad
- Tecnología
- Proyectos

## 🔧 Funcionalidades Técnicas

### Sistema de Búsqueda
- Búsqueda en tiempo real por título, extracto y tags
- Filtrado por categorías
- Resultados paginados

### Gestión de Comentarios
- Sistema de comentarios integrado
- Formulario de envío con validación
- Moderación de comentarios (para administradores)

### SEO y Metadatos
- Meta tags automáticos
- URLs amigables para SEO
- Estructura de datos semántica

### Responsive Design
- Mobile-first approach
- Breakpoints optimizados
- Touch-friendly en dispositivos móviles

## 📱 Compatibilidad

### Navegadores
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Dispositivos
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Despliegue

### GitHub Pages
1. Sube todos los archivos a tu repositorio
2. Habilita GitHub Pages en la configuración del repositorio
3. Configura el dominio personalizado si es necesario

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el build command y publish directory
3. Habilita Netlify Identity y Git Gateway

## 🔒 Seguridad

### Autenticación
- Sistema de login seguro
- Control de acceso basado en roles
- Sesiones seguras

### Validación
- Validación de formularios en frontend y backend
- Sanitización de entrada de usuario
- Protección contra XSS

## 📊 Analytics y Monitoreo

### Métricas Disponibles
- Número de posts por categoría
- Posts más populares
- Comentarios por post
- Tiempo de lectura estimado

### Integración con Herramientas
- Google Analytics (configurable)
- Google Search Console
- Herramientas de SEO

## 🐛 Solución de Problemas

### Problemas Comunes

#### CMS no se carga
- Verifica que Netlify Identity esté habilitado
- Confirma que Git Gateway esté configurado
- Revisa la consola del navegador para errores

#### Posts no se muestran
- Verifica que los archivos estén en la carpeta correcta
- Confirma que el formato de fecha sea correcto
- Revisa que las imágenes estén en la ruta correcta

#### Estilos no se aplican
- Verifica que los archivos CSS estén en la ruta correcta
- Confirma que las variables CSS estén definidas
- Revisa la consola para errores de CSS

## 🤝 Contribución

### Reportar Bugs
1. Usa el sistema de issues de GitHub
2. Describe el problema detalladamente
3. Incluye pasos para reproducir el error

### Sugerencias de Mejoras
1. Crea un issue con la etiqueta "enhancement"
2. Describe la funcionalidad deseada
3. Explica el beneficio para los usuarios

## 📄 Licencia

Este proyecto está bajo la licencia corporativa de Alico. Todos los derechos reservados.

## 📞 Soporte

Para soporte técnico o preguntas sobre el blog:
- **Email**: innovacion@alico.com
- **Equipo**: Equipo de Innovación
- **Horario**: Lunes a Viernes, 9:00 AM - 6:00 PM

---

**Desarrollado con ❤️ por el Equipo de Innovación de Alico**
