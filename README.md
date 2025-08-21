# 🎨 Blog de Innovación Alico

Un blog moderno y profesional para compartir las últimas novedades sobre innovación, sostenibilidad y tecnología en la industria del packaging.

## ✨ Características

- **Diseño Responsivo**: Adaptado a todos los dispositivos
- **CMS Integrado**: Netlify CMS para gestión de contenido
- **Búsqueda y Filtros**: Sistema avanzado de búsqueda por categorías
- **Comentarios**: Sistema de comentarios integrado
- **Newsletter**: Suscripción por email
- **SEO Optimizado**: Meta tags y estructura semántica
- **Performance**: Carga rápida y optimizada
- **Accesibilidad**: Cumple estándares WCAG

## 🏗️ Estructura del Proyecto

```
blog/
├── index.html              # Página principal del blog
├── post.html               # Plantilla para posts individuales
├── css/
│   ├── blog-styles.css     # Estilos principales del blog
│   └── post-styles.css     # Estilos para posts individuales
├── js/
│   ├── blog-main.js        # Funcionalidades principales
│   ├── blog-cms.js         # Integración con CMS
│   └── post-loader.js      # Cargador de posts individuales
├── admin/
│   ├── index.html          # Panel de administración
│   └── config.yml          # Configuración del CMS
├── images/
│   └── posts/              # Imágenes de los posts
└── README.md               # Este archivo
```

## 🚀 Instalación y Configuración

### 1. Requisitos Previos

- Cuenta de GitHub
- Cuenta de Netlify (gratuita)
- Editor de código (VS Code recomendado)

### 2. Configuración de GitHub Pages

1. **Subir el proyecto a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Blog de Innovación Alico"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   git push -u origin main
   ```

2. **Configurar GitHub Pages**:
   - Ve a Settings > Pages en tu repositorio
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save

### 3. Configuración de Netlify CMS

#### Paso 1: Crear cuenta en Netlify
1. Ve a [netlify.com](https://netlify.com)
2. Crea una cuenta gratuita
3. Conecta tu cuenta de GitHub

#### Paso 2: Conectar el repositorio
1. En Netlify, haz clic en "New site from Git"
2. Selecciona GitHub y tu repositorio
3. Configuración de build:
   - Build command: (dejar vacío)
   - Publish directory: (dejar vacío)
4. Haz clic en "Deploy site"

#### Paso 3: Configurar Netlify Identity
1. En tu sitio de Netlify, ve a Settings > Identity
2. Haz clic en "Enable Identity"
3. En Registration, selecciona "Invite only"
4. En Services, habilita "Git Gateway"

#### Paso 4: Configurar Git Gateway
1. Ve a Settings > Identity > Services
2. En Git Gateway, haz clic en "Enable Git Gateway"
3. Esto permitirá que el CMS edite tu repositorio

#### Paso 5: Invitar usuarios
1. Ve a Identity > Invite
2. Envía invitaciones por email
3. Los usuarios recibirán un email para configurar su contraseña

#### Paso 6: Configurar el dominio
1. En tu sitio de Netlify, ve a Domain management
2. Cambia el dominio personalizado si es necesario
3. Actualiza `config.yml` con tu URL real

### 4. Configuración Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio/blog
   ```

2. **Servidor local** (opcional):
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js
   npx serve .
   
   # Con PHP
   php -S localhost:8000
   ```

3. **Abrir en el navegador**:
   ```
   http://localhost:8000
   ```

## 📝 Uso del CMS

### Acceder al CMS

1. Ve a `tu-sitio.netlify.app/admin/`
2. Inicia sesión con tu cuenta de Netlify
3. Comienza a crear contenido

### Crear un Nuevo Post

1. En el CMS, haz clic en "New Blog"
2. Completa los campos:
   - **Título**: Título del post
   - **Resumen**: Descripción corta
   - **Contenido**: Contenido en Markdown
   - **Categoría**: Selecciona una categoría
   - **Imagen Principal**: Sube una imagen
   - **Autor**: Nombre del autor
   - **Tags**: Palabras clave separadas por comas
   - **Fecha**: Fecha de publicación
3. Haz clic en "Publish" o "Save as draft"

### Gestionar Categorías

1. Ve a "Categories" en el CMS
2. Crea nuevas categorías según necesites
3. Asigna colores y descripciones

### Gestionar Autores

1. Ve a "Authors" en el CMS
2. Agrega información de los autores
3. Incluye avatares y biografías

## 🎨 Personalización

### Colores Corporativos

Los colores están definidos en CSS variables:

```css
:root {
    --amarillo-oro: #DB9500;        /* Color principal */
    --azul-novo: #003DA6;           /* Color secundario */
    --azul-claro: #40B4E5;          /* Color de acento */
    --verde-natura: #71B338;        /* Color de éxito */
}
```

### Fuentes

- **Títulos**: Zilla Slab (serif)
- **Cuerpo**: Work Sans (sans-serif)

### Imágenes

- **Posts**: 1200x800px (16:9)
- **Avatares**: 200x200px (cuadradas)
- **Logos**: SVG recomendado

## 🔧 Funcionalidades Técnicas

### Sistema de Búsqueda

- Búsqueda en tiempo real
- Filtros por categoría
- Búsqueda en título, resumen y tags

### Paginación

- 6 posts por página
- Navegación intuitiva
- URLs amigables

### Comentarios

- Sistema de moderación
- Notificaciones por email
- Protección anti-spam

### Newsletter

- Suscripción por email
- Categorías de interés
- Gestión de suscriptores

## 📱 Responsive Design

### Breakpoints

- **Desktop**: > 1200px
- **Tablet**: 768px - 1200px
- **Mobile**: < 768px

### Características

- Grid adaptativo
- Imágenes responsivas
- Menú hamburguesa en móvil
- Touch gestures

## 🚀 Despliegue

### GitHub Pages

1. El sitio se despliega automáticamente
2. Cambios se reflejan en 1-2 minutos
3. URL: `https://tu-usuario.github.io/tu-repositorio`

### Netlify

1. Despliegue automático desde GitHub
2. Previews para pull requests
3. URL personalizada disponible

## 🔒 Seguridad

### Autenticación

- Netlify Identity
- Invitaciones por email
- Contraseñas seguras

### Permisos

- Solo usuarios invitados pueden editar
- Roles de usuario configurables
- Acceso restringido al CMS

## 📊 Analytics

### Google Analytics

1. Crea una cuenta en [analytics.google.com](https://analytics.google.com)
2. Obtén tu ID de seguimiento
3. Agrega el código en `admin/config.yml`

### Netlify Analytics

- Métricas básicas incluidas
- Análisis de rendimiento
- Reportes de errores

## 🐛 Troubleshooting

### Problemas Comunes

#### CMS no carga
- Verifica que Netlify Identity esté habilitado
- Confirma que Git Gateway esté activo
- Revisa la consola del navegador

#### Imágenes no se muestran
- Verifica las rutas en `config.yml`
- Confirma que las carpetas existan
- Revisa permisos de archivos

#### Cambios no se reflejan
- Espera 1-2 minutos para GitHub Pages
- Verifica que el commit esté en la rama main
- Revisa el estado del despliegue en Netlify

### Logs y Debug

```javascript
// En la consola del navegador
console.log('Debug blog:', window.debugBlog);
console.log('Debug CMS:', window.debugCMS);
console.log('Debug admin:', window.debugAdmin);
```

## 📚 Recursos Adicionales

### Documentación

- [Netlify CMS Docs](https://www.netlifycms.org/docs/)
- [GitHub Pages](https://pages.github.com/)
- [Netlify Docs](https://docs.netlify.com/)

### Herramientas

- [Markdown Editor](https://stackedit.io/)
- [Image Optimizer](https://tinypng.com/)
- [Color Picker](https://coolors.co/)

### Comunidad

- [Netlify Community](https://community.netlify.com/)
- [GitHub Community](https://github.community/)

## 🤝 Contribución

### Cómo Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature
3. Haz commit de tus cambios
4. Push a la rama
5. Abre un Pull Request

### Guía de Estilo

- Usa ESLint para JavaScript
- Sigue las convenciones de CSS
- Documenta funciones complejas
- Incluye tests cuando sea posible

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

### Contacto

- **Email**: innovacion@alico.com
- **GitHub Issues**: [Crear issue](https://github.com/tu-usuario/tu-repositorio/issues)
- **Documentación**: [Wiki del proyecto](https://github.com/tu-usuario/tu-repositorio/wiki)

### Horarios de Soporte

- **Lunes - Viernes**: 9:00 AM - 6:00 PM (GMT-5)
- **Respuesta**: 24-48 horas

---

**Desarrollado con ❤️ por el equipo de Alico**

*Última actualización: Enero 2024*
