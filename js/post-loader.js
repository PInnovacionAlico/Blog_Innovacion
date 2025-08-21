/* ==================================================
   JAVASCRIPT PARA CARGAR POSTS INDIVIDUALES
   Blog de Innovación Alico
   ================================================== */

class PostLoader {
    constructor() {
        this.currentPost = null;
        this.allPosts = [];
        this.init();
    }
    
    async init() {
        await this.loadPosts();
        this.loadCurrentPost();
        this.setupEventListeners();
        this.renderRelatedPosts();
        this.renderComments();
    }
    
    async loadPosts() {
        try {
            // En un entorno real, esto cargaría desde una API o CMS
            this.allPosts = this.getSamplePosts();
        } catch (error) {
            console.error('Error cargando posts:', error);
            this.showError('Error al cargar los artículos');
        }
    }
    
    getSamplePosts() {
        return [
            {
                id: 1,
                title: "Nuevo Material Sostenible para Empaques",
                excerpt: "Descubrimos un material revolucionario que combina durabilidad con biodegradabilidad, marcando un hito en la industria del packaging sostenible.",
                content: `
                    <h2>Revolución en Materiales Sostenibles</h2>
                    <p>En Alico, estamos constantemente buscando formas de innovar y hacer que nuestros productos sean más sostenibles. Recientemente, hemos desarrollado un nuevo material que promete transformar la industria del packaging.</p>
                    
                    <h3>¿Qué hace especial a este material?</h3>
                    <p>Este nuevo material combina las mejores propiedades de los materiales tradicionales con características biodegradables excepcionales:</p>
                    <ul>
                        <li><strong>Durabilidad:</strong> Mantiene la resistencia necesaria para proteger productos durante el transporte</li>
                        <li><strong>Biodegradabilidad:</strong> Se descompone naturalmente en 6-12 meses</li>
                        <li><strong>Versatilidad:</strong> Puede ser utilizado en múltiples aplicaciones</li>
                        <li><strong>Eficiencia:</strong> Reduce costos de producción en un 15%</li>
                    </ul>
                    
                    <h3>Proceso de Desarrollo</h3>
                    <p>El desarrollo de este material tomó más de dos años de investigación y pruebas. Nuestro equipo de I+D trabajó en colaboración con universidades locales y centros de investigación internacionales.</p>
                    
                    <blockquote>
                        "Este material representa un paso significativo hacia un futuro más sostenible en la industria del packaging. No solo es mejor para el medio ambiente, sino que también ofrece ventajas económicas reales para nuestros clientes."
                        <cite>- Dr. María González, Directora de I+D</cite>
                    </blockquote>
                    
                    <h3>Impacto Ambiental</h3>
                    <p>Con la implementación de este material, estimamos una reducción del 40% en la huella de carbono de nuestros productos de packaging. Esto equivale a:</p>
                    <ul>
                        <li>Eliminar 500 toneladas de CO2 por año</li>
                        <li>Reducir el uso de plásticos en un 60%</li>
                        <li>Contribuir a la economía circular</li>
                    </ul>
                    
                    <h3>Próximos Pasos</h3>
                    <p>Actualmente estamos en la fase de pruebas piloto con algunos de nuestros clientes más importantes. Esperamos lanzar este material al mercado en el segundo trimestre de 2024.</p>
                    
                    <p>Para más información sobre este proyecto o para participar en las pruebas piloto, contáctanos en <a href="mailto:innovacion@alico.com">innovacion@alico.com</a>.</p>
                `,
                category: "sostenibilidad",
                image: "images/posts/material-sostenible.jpg",
                date: "2024-01-15",
                author: "Equipo de Innovación",
                tags: ["sostenibilidad", "materiales", "biodegradable", "investigación"],
                views: 1250
            },
            {
                id: 2,
                title: "Inteligencia Artificial en Control de Calidad",
                excerpt: "Implementamos sistemas de IA avanzados para mejorar la precisión del control de calidad en nuestra línea de producción.",
                content: `
                    <h2>IA Transformando el Control de Calidad</h2>
                    <p>La inteligencia artificial está revolucionando la forma en que garantizamos la calidad de nuestros productos. En Alico, hemos implementado un sistema de IA que detecta defectos con una precisión del 99.7%.</p>
                    
                    <h3>Sistema de Visión Computacional</h3>
                    <p>Nuestro sistema utiliza cámaras de alta resolución y algoritmos de machine learning para:</p>
                    <ul>
                        <li>Detectar imperfecciones microscópicas</li>
                        <li>Identificar variaciones en el color y textura</li>
                        <li>Monitorear la consistencia dimensional</li>
                        <li>Predecir fallas antes de que ocurran</li>
                    </ul>
                    
                    <h3>Resultados Obtenidos</h3>
                    <p>Desde la implementación del sistema, hemos logrado:</p>
                    <ul>
                        <li>Reducción del 85% en defectos de calidad</li>
                        <li>Aumento del 40% en la velocidad de inspección</li>
                        <li>Ahorro del 30% en costos de control de calidad</li>
                        <li>Mejora del 95% en la satisfacción del cliente</li>
                    </ul>
                `,
                category: "tecnologia",
                image: "images/posts/ia-calidad.jpg",
                date: "2024-01-10",
                author: "Departamento de Tecnología",
                tags: ["IA", "calidad", "producción", "machine learning"],
                views: 980
            },
            {
                id: 3,
                title: "Proyecto Lego: Innovación en Colaboración",
                excerpt: "Nuestro proyecto colaborativo con Lego demuestra cómo la innovación abierta puede transformar la industria del packaging.",
                content: `
                    <h2>Colaboración que Inspira</h2>
                    <p>La colaboración con Lego nos ha enseñado que la innovación no tiene límites cuando se combinan diferentes perspectivas y experiencias. Este proyecto ha sido un hito en nuestra estrategia de innovación abierta.</p>
                    
                    <h3>Objetivos del Proyecto</h3>
                    <p>Juntos, nos propusimos:</p>
                    <ul>
                        <li>Crear soluciones de packaging más interactivas</li>
                        <li>Desarrollar materiales educativos</li>
                        <li>Implementar prácticas de sostenibilidad</li>
                        <li>Fomentar la creatividad en los niños</li>
                    </ul>
                    
                    <h3>Logros Destacados</h3>
                    <p>El proyecto ha generado resultados excepcionales:</p>
                    <ul>
                        <li>Nuevo material de packaging biodegradable</li>
                        <li>Sistema de reciclaje innovador</li>
                        <li>Reducción del 70% en desperdicios</li>
                        <li>Premio a la Mejor Innovación Sostenible 2023</li>
                    </ul>
                `,
                category: "proyectos",
                image: "images/posts/proyecto-lego.jpg",
                date: "2024-01-05",
                author: "Equipo de Proyectos",
                tags: ["colaboración", "lego", "innovación abierta", "sostenibilidad"],
                views: 1560
            },
            {
                id: 4,
                title: "Design Thinking en el Desarrollo de Productos",
                excerpt: "Aplicamos metodologías de Design Thinking para crear soluciones centradas en el usuario y el medio ambiente.",
                content: `
                    <h2>Design Thinking: Más allá de la Estética</h2>
                    <p>En Alico, hemos adoptado el Design Thinking como metodología central para el desarrollo de productos. Esta aproximación nos permite crear soluciones que no solo son funcionales, sino que también resuelven problemas reales de nuestros usuarios.</p>
                    
                    <h3>Proceso de Design Thinking</h3>
                    <p>Nuestro proceso sigue cinco etapas clave:</p>
                    <ol>
                        <li><strong>Empatizar:</strong> Entender las necesidades de nuestros usuarios</li>
                        <li><strong>Definir:</strong> Identificar los problemas principales</li>
                        <li><strong>Idear:</strong> Generar múltiples soluciones</li>
                        <li><strong>Prototipar:</strong> Crear versiones de prueba</li>
                        <li><strong>Testear:</strong> Validar con usuarios reales</li>
                    </ol>
                    
                    <h3>Casos de Éxito</h3>
                    <p>Esta metodología nos ha permitido desarrollar:</p>
                    <ul>
                        <li>Packaging ergonómico para adultos mayores</li>
                        <li>Soluciones de almacenamiento para espacios pequeños</li>
                        <li>Sistemas de apertura intuitivos para niños</li>
                        <li>Embalajes reutilizables para comercio electrónico</li>
                    </ul>
                `,
                category: "innovacion",
                image: "images/posts/design-thinking.jpg",
                date: "2024-01-01",
                author: "Equipo de Diseño",
                tags: ["design thinking", "UX", "sostenibilidad", "metodología"],
                views: 890
            },
            {
                id: 5,
                title: "Nuevas Tecnologías de Impresión 3D",
                excerpt: "Exploramos las posibilidades de la impresión 3D para crear empaques personalizados y reducir el desperdicio.",
                content: `
                    <h2>Impresión 3D: El Futuro del Packaging</h2>
                    <p>La impresión 3D está abriendo nuevas posibilidades en la industria del packaging. En Alico, estamos explorando cómo esta tecnología puede revolucionar la forma en que creamos empaques personalizados y sostenibles.</p>
                    
                    <h3>Ventajas de la Impresión 3D</h3>
                    <p>Esta tecnología ofrece múltiples beneficios:</p>
                    <ul>
                        <li><strong>Personalización:</strong> Cada empaque puede ser único</li>
                        <li><strong>Rapidez:</strong> Prototipado en horas, no en semanas</li>
                        <li><strong>Flexibilidad:</strong> Cambios de diseño sin costos adicionales</li>
                        <li><strong>Sostenibilidad:</strong> Solo se imprime lo necesario</li>
                    </ul>
                    
                    <h3>Aplicaciones en Desarrollo</h3>
                    <p>Actualmente estamos trabajando en:</p>
                    <ul>
                        <li>Empaques personalizados para productos premium</li>
                        <li>Prototipos rápidos para validación de diseño</li>
                        <li>Soluciones de packaging para productos únicos</li>
                        <li>Sistemas de almacenamiento modulares</li>
                    </ul>
                `,
                category: "tecnologia",
                image: "images/posts/impresion-3d.jpg",
                date: "2023-12-28",
                author: "Laboratorio de I+D",
                tags: ["3D", "personalización", "reducción de desperdicio", "prototipado"],
                views: 1120
            },
            {
                id: 6,
                title: "Sostenibilidad en la Cadena de Suministro",
                excerpt: "Implementamos prácticas sostenibles en toda nuestra cadena de suministro para reducir la huella de carbono.",
                content: `
                    <h2>Cadena de Suministro Sostenible</h2>
                    <p>La sostenibilidad no se trata solo de nuestros productos finales, sino de todo el proceso que los hace posibles. En Alico, hemos implementado un programa integral para hacer que toda nuestra cadena de suministro sea más verde.</p>
                    
                    <h3>Iniciativas Implementadas</h3>
                    <p>Hemos establecido varios programas clave:</p>
                    <ul>
                        <li><strong>Certificación Verde:</strong> Todos nuestros proveedores deben cumplir estándares ambientales</li>
                        <li><strong>Logística Sostenible:</strong> Uso de vehículos eléctricos y rutas optimizadas</li>
                        <li><strong>Energía Renovable:</strong> Instalación de paneles solares en nuestras instalaciones</li>
                        <li><strong>Reducción de Residuos:</strong> Sistema de reciclaje integral</li>
                    </ul>
                    
                    <h3>Resultados Medibles</h3>
                    <p>Nuestros esfuerzos han generado resultados tangibles:</p>
                    <ul>
                        <li>Reducción del 45% en emisiones de CO2</li>
                        <li>Ahorro del 30% en costos de energía</li>
                        <li>Reciclaje del 85% de nuestros residuos</li>
                        <li>Certificación ISO 14001 para gestión ambiental</li>
                    </ul>
                `,
                category: "sostenibilidad",
                image: "images/posts/cadena-suministro.jpg",
                date: "2023-12-20",
                author: "Equipo de Sostenibilidad",
                tags: ["cadena de suministro", "huella de carbono", "prácticas verdes", "certificación"],
                views: 1340
            }
        ];
    }
    
    loadCurrentPost() {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id'));
        
        if (!postId) {
            this.showError('No se especificó un ID de post');
            return;
        }
        
        this.currentPost = this.allPosts.find(post => post.id === postId);
        
        if (!this.currentPost) {
            this.showError('Post no encontrado');
            return;
        }
        
        this.renderPost();
        this.updatePageTitle();
        this.updateBreadcrumbs();
    }
    
    renderPost() {
        if (!this.currentPost) return;
        
        const post = this.currentPost;
        
        // Actualizar metadatos del post
        document.getElementById('postCategory').textContent = this.getCategoryLabel(post.category);
        document.getElementById('postDate').innerHTML = `
            <span class="material-symbols-rounded">schedule</span>
            ${new Date(post.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}
        `;
        document.getElementById('postAuthor').innerHTML = `
            <span class="material-symbols-rounded">person</span>
            ${post.author}
        `;
        document.getElementById('postViews').innerHTML = `
            <span class="material-symbols-rounded">visibility</span>
            ${post.views.toLocaleString()} vistas
        `;
        
        // Actualizar título y resumen
        document.getElementById('postTitle').textContent = post.title;
        document.getElementById('postExcerpt').textContent = post.excerpt;
        
        // Actualizar imagen
        const postImage = document.getElementById('postImage');
        postImage.src = post.image;
        postImage.alt = post.title;
        
        // Actualizar contenido
        document.getElementById('postContent').innerHTML = post.content;
        
        // Actualizar tags
        this.renderTags(post.tags);
        
        // Actualizar breadcrumbs
        document.getElementById('breadcrumbCategory').textContent = this.getCategoryLabel(post.category);
        document.getElementById('breadcrumbTitle').textContent = post.title;
    }
    
    renderTags(tags) {
        const tagsContainer = document.getElementById('postTags');
        tagsContainer.innerHTML = tags.map(tag => 
            `<span class="post-tag">${tag}</span>`
        ).join('');
    }
    
    getCategoryLabel(category) {
        const labels = {
            'innovacion': 'Innovación',
            'sostenibilidad': 'Sostenibilidad',
            'tecnologia': 'Tecnología',
            'proyectos': 'Proyectos'
        };
        return labels[category] || category;
    }
    
    renderRelatedPosts() {
        if (!this.currentPost) return;
        
        const relatedPosts = this.allPosts
            .filter(post => post.id !== this.currentPost.id && post.category === this.currentPost.category)
            .slice(0, 3);
        
        const relatedContainer = document.getElementById('relatedPosts');
        
        if (relatedPosts.length === 0) {
            relatedContainer.innerHTML = `
                <div class="no-related">
                    <p>No hay artículos relacionados en esta categoría.</p>
                </div>
            `;
            return;
        }
        
        relatedContainer.innerHTML = relatedPosts.map(post => `
            <div class="related-post" onclick="window.location.href='post.html?id=${post.id}'">
                <img src="${post.image}" alt="${post.title}" class="related-post-image">
                <div class="related-post-content">
                    <h3 class="related-post-title">${post.title}</h3>
                    <p class="related-post-excerpt">${post.excerpt}</p>
                </div>
            </div>
        `).join('');
    }
    
    renderComments() {
        const commentsList = document.getElementById('commentsList');
        
        // Simular comentarios existentes
        const comments = [
            {
                author: 'Juan Pérez',
                date: '2024-01-16',
                content: 'Excelente artículo sobre sostenibilidad. Me gustaría saber más sobre cómo implementar estas prácticas en mi empresa.'
            },
            {
                author: 'María García',
                date: '2024-01-15',
                content: 'Muy interesante el proyecto con Lego. ¿Hay planes para expandir esta colaboración a otros productos?'
            },
            {
                author: 'Carlos López',
                date: '2024-01-14',
                content: 'La implementación de IA en control de calidad es fascinante. ¿Podrían compartir más detalles técnicos?'
            }
        ];
        
        if (comments.length === 0) {
            commentsList.innerHTML = `
                <div class="no-comments">
                    <p>No hay comentarios aún. ¡Sé el primero en comentar!</p>
                </div>
            `;
            return;
        }
        
        commentsList.innerHTML = comments.map(comment => `
            <div class="comment">
                <div class="comment-header">
                    <span class="comment-author">${comment.author}</span>
                    <span class="comment-date">${new Date(comment.date).toLocaleDateString('es-ES')}</span>
                </div>
                <div class="comment-content">${comment.content}</div>
            </div>
        `).join('');
    }
    
    setupEventListeners() {
        // Formulario de comentarios
        const commentForm = document.getElementById('commentForm');
        if (commentForm) {
            commentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitComment();
            });
        }
        
        // Newsletter
        const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletterSignup();
            });
        }
    }
    
    async submitComment() {
        const nameInput = document.getElementById('commentName');
        const emailInput = document.getElementById('commentEmail');
        const contentInput = document.getElementById('commentContent');
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const content = contentInput.value.trim();
        
        if (!name || !email || !content) {
            alert('Por favor, completa todos los campos requeridos.');
            return;
        }
        
        try {
            // Simular envío del comentario
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Agregar comentario a la lista
            this.addCommentToList(name, content);
            
            // Limpiar formulario
            commentForm.reset();
            
            // Mostrar mensaje de éxito
            this.showSuccessMessage('Comentario enviado exitosamente');
            
        } catch (error) {
            console.error('Error enviando comentario:', error);
            alert('Error al enviar el comentario. Por favor, intenta de nuevo.');
        }
    }
    
    addCommentToList(name, content) {
        const commentsList = document.getElementById('commentsList');
        const noComments = commentsList.querySelector('.no-comments');
        
        if (noComments) {
            noComments.remove();
        }
        
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${name}</span>
                <span class="comment-date">${new Date().toLocaleDateString('es-ES')}</span>
            </div>
            <div class="comment-content">${content}</div>
        `;
        
        commentsList.insertBefore(newComment, commentsList.firstChild);
    }
    
    async handleNewsletterSignup() {
        const emailInput = document.getElementById('newsletterEmail');
        const email = emailInput.value.trim();
        
        if (!email) {
            alert('Por favor, ingresa un email válido.');
            return;
        }
        
        try {
            // Simular envío
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Mostrar mensaje de éxito
            this.showSuccessMessage('¡Gracias por suscribirte! Te mantendremos informado.');
            
            // Limpiar formulario
            emailInput.value = '';
            
        } catch (error) {
            console.error('Error en newsletter:', error);
            alert('Error al suscribirse. Por favor, intenta de nuevo.');
        }
    }
    
    showSuccessMessage(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <span class="material-symbols-rounded">check_circle</span>
            ${message}
        `;
        
        // Estilos para el mensaje de éxito
        successDiv.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--verde-natura);
            color: white;
            padding: var(--spacing-md);
            border-radius: var(--border-radius-md);
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(successDiv);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }
    
    showError(message) {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `
            <div class="error-state" style="text-align: center; padding: var(--spacing-xxl);">
                <span class="material-symbols-rounded" style="font-size: 48px; color: var(--gris-oscuro);">error</span>
                <h3>Error</h3>
                <p>${message}</p>
                <a href="index.html" class="btn-primary" style="margin-top: var(--spacing-lg);">Volver al Blog</a>
            </div>
        `;
    }
    
    updatePageTitle() {
        if (this.currentPost) {
            document.title = `${this.currentPost.title} | Blog de Innovación Alico`;
        }
    }
    
    updateBreadcrumbs() {
        // Los breadcrumbs se actualizan en renderPost()
    }
}

// Inicializar el cargador de posts cuando el DOM esté listo
let postLoader;

document.addEventListener('DOMContentLoaded', function() {
    postLoader = new PostLoader();
    console.log('📝 Cargador de posts inicializado');
});

// Para debugging
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.debugPost = {
        postLoader: () => postLoader,
        currentPost: () => postLoader?.currentPost,
        allPosts: () => postLoader?.allPosts,
        submitComment: () => postLoader?.submitComment(),
        handleNewsletter: () => postLoader?.handleNewsletterSignup()
    };
    console.log('🚀 Debug post disponible en window.debugPost');
}
