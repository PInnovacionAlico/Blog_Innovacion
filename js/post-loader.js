/* ==================================================
   JAVASCRIPT PARA CARGAR POSTS INDIVIDUALES
   Gestión de contenido y navegación de posts
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
    }
    
    async loadPosts() {
        try {
            // En un entorno real, esto cargaría desde una API o CMS
            this.allPosts = this.getSamplePosts();
        } catch (error) {
            console.error('Error cargando posts:', error);
        }
    }
    
    getSamplePosts() {
        return [
            {
                id: 1,
                title: "Nuevo Material Sostenible para Empaques",
                excerpt: "Descubrimos un material revolucionario que combina durabilidad con biodegradabilidad, marcando un hito en la industria del packaging sostenible.",
                content: `
                    <p>En Alico, estamos constantemente explorando nuevas fronteras en la innovación de materiales. Nuestro último descubrimiento representa un avance significativo en la búsqueda de soluciones sostenibles para la industria del packaging.</p>
                    
                    <h2>El Desafío de la Sostenibilidad</h2>
                    <p>La industria del packaging enfrenta un desafío crucial: crear materiales que sean tanto funcionales como respetuosos con el medio ambiente. Tradicionalmente, hemos tenido que elegir entre durabilidad y biodegradabilidad, pero nuestro nuevo material rompe esta dicotomía.</p>
                    
                    <h3>Características del Nuevo Material</h3>
                    <ul>
                        <li><strong>Biodegradabilidad completa:</strong> Se descompone en 6-12 meses en condiciones naturales</li>
                        <li><strong>Alta resistencia:</strong> Mantiene la integridad estructural durante todo el ciclo de vida del producto</li>
                        <li><strong>Versatilidad:</strong> Compatible con múltiples procesos de fabricación</li>
                        <li><strong>Costo competitivo:</strong> Solo 15% más costoso que materiales tradicionales</li>
                    </ul>
                    
                    <blockquote>
                        "Este material representa un punto de inflexión en nuestra industria. Por primera vez, no tenemos que comprometer la calidad por la sostenibilidad."
                        <cite>- Dr. María González, Directora de I+D</cite>
                    </blockquote>
                    
                    <h2>Proceso de Desarrollo</h2>
                    <p>El desarrollo de este material tomó más de dos años de investigación intensiva. Nuestro equipo de científicos trabajó en colaboración con universidades locales y centros de investigación internacionales para crear una solución verdaderamente innovadora.</p>
                    
                    <h3>Fases del Proyecto</h3>
                    <ol>
                        <li><strong>Investigación básica:</strong> Análisis de materiales naturales y sintéticos</li>
                        <li><strong>Desarrollo de prototipos:</strong> Creación de más de 50 variaciones</li>
                        <li><strong>Pruebas de laboratorio:</strong> Evaluación de propiedades físicas y químicas</li>
                        <li><strong>Validación industrial:</strong> Pruebas en condiciones reales de producción</li>
                    </ol>
                    
                    <h2>Impacto en la Industria</h2>
                    <p>La introducción de este material tiene el potencial de transformar completamente la industria del packaging. Estimamos que podría reducir la huella de carbono del sector en un 30% en los próximos cinco años.</p>
                    
                    <h3>Beneficios Ambientales</h3>
                    <ul>
                        <li>Reducción del 40% en emisiones de CO2 durante la producción</li>
                        <li>Eliminación del 100% de residuos plásticos no biodegradables</li>
                        <li>Menor impacto en ecosistemas marinos y terrestres</li>
                    </ul>
                    
                    <h2>Próximos Pasos</h2>
                    <p>Actualmente estamos en la fase de escalamiento industrial. Nuestro objetivo es tener este material disponible comercialmente para finales de 2024, comenzando con aplicaciones en el sector alimentario y cosmético.</p>
                    
                    <p>Este es solo el comienzo de nuestra revolución sostenible. En Alico, creemos que la innovación y la responsabilidad ambiental pueden y deben ir de la mano.</p>
                `,
                category: "sostenibilidad",
                image: "../assets/images/banners/sgi.jpeg",
                date: "2024-01-15",
                author: "Equipo de Innovación",
                tags: ["sostenibilidad", "materiales", "biodegradable", "innovación"]
            },
            {
                id: 2,
                title: "Inteligencia Artificial en Control de Calidad",
                excerpt: "Implementamos sistemas de IA avanzados para mejorar la precisión del control de calidad en nuestra línea de producción.",
                content: `
                    <p>La revolución digital ha llegado a Alico, y estamos liderando la transformación con la implementación de sistemas de Inteligencia Artificial en nuestro control de calidad.</p>
                    
                    <h2>El Poder de la IA en la Producción</h2>
                    <p>Nuestros nuevos sistemas de IA pueden detectar defectos microscópicos que serían imposibles de identificar a simple vista, mejorando la precisión del control de calidad en un 95%.</p>
                    
                    <h3>Características del Sistema</h3>
                    <ul>
                        <li>Detección automática de defectos en tiempo real</li>
                        <li>Análisis predictivo para prevenir fallas</li>
                        <li>Integración completa con sistemas de producción</li>
                        <li>Interfaz intuitiva para operadores</li>
                    </ul>
                `,
                category: "tecnologia",
                image: "../assets/images/banners/ia.jpg",
                date: "2024-01-10",
                author: "Departamento de Tecnología",
                tags: ["IA", "calidad", "producción", "tecnología"]
            },
            {
                id: 3,
                title: "Proyecto Lego: Innovación en Colaboración",
                excerpt: "Nuestro proyecto colaborativo con Lego demuestra cómo la innovación abierta puede transformar la industria del packaging.",
                content: `
                    <p>La colaboración entre empresas puede generar resultados extraordinarios. Nuestro proyecto con Lego es un ejemplo perfecto de cómo la innovación abierta puede transformar industrias enteras.</p>
                    
                    <h2>Una Alianza Estratégica</h2>
                    <p>Cuando dos gigantes de la innovación se unen, las posibilidades son infinitas. Nuestra colaboración con Lego ha generado soluciones revolucionarias en el packaging de juguetes.</p>
                `,
                category: "proyectos",
                image: "../assets/images/carrousel/lego.jpg",
                date: "2024-01-05",
                author: "Equipo de Proyectos",
                tags: ["colaboración", "lego", "innovación abierta", "juguetes"]
            },
            {
                id: 4,
                title: "Design Thinking en el Desarrollo de Productos",
                excerpt: "Aplicamos metodologías de Design Thinking para crear soluciones centradas en el usuario y el medio ambiente.",
                content: `
                    <p>El Design Thinking no es solo una metodología, es una filosofía que guía todo nuestro proceso de desarrollo de productos en Alico.</p>
                    
                    <h2>Centrados en el Usuario</h2>
                    <p>Cada producto que desarrollamos comienza con una profunda comprensión de las necesidades del usuario final y del impacto ambiental.</p>
                `,
                category: "innovacion",
                image: "../assets/images/banners/design-thinking.JPG",
                date: "2024-01-01",
                author: "Equipo de Diseño",
                tags: ["design thinking", "UX", "sostenibilidad", "metodología"]
            },
            {
                id: 5,
                title: "Nuevas Tecnologías de Impresión 3D",
                excerpt: "Exploramos las posibilidades de la impresión 3D para crear empaques personalizados y reducir el desperdicio.",
                content: `
                    <p>La impresión 3D está revolucionando la forma en que pensamos sobre el packaging. En Alico, estamos explorando las fronteras de esta tecnología.</p>
                    
                    <h2>Personalización Masiva</h2>
                    <p>Con la impresión 3D, podemos crear empaques únicos para cada cliente sin aumentar significativamente los costos de producción.</p>
                `,
                category: "tecnologia",
                image: "../assets/images/carrousel/3decko.jpg",
                date: "2023-12-28",
                author: "Laboratorio de I+D",
                tags: ["3D", "personalización", "reducción de desperdicio", "tecnología"]
            },
            {
                id: 6,
                title: "Sostenibilidad en la Cadena de Suministro",
                excerpt: "Implementamos prácticas sostenibles en toda nuestra cadena de suministro para reducir la huella de carbono.",
                content: `
                    <p>La sostenibilidad no se trata solo de nuestros productos, sino de todo nuestro ecosistema empresarial. Estamos transformando nuestra cadena de suministro completa.</p>
                    
                    <h2>Proveedores Verdes</h2>
                    <p>Trabajamos exclusivamente con proveedores que comparten nuestro compromiso con la sostenibilidad y la responsabilidad ambiental.</p>
                `,
                category: "sostenibilidad",
                image: "../assets/images/carrousel/proveedores.jpg",
                date: "2023-12-20",
                author: "Equipo de Sostenibilidad",
                tags: ["cadena de suministro", "huella de carbono", "prácticas verdes", "proveedores"]
            }
        ];
    }
    
    loadCurrentPost() {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id'));
        
        if (!postId) {
            this.showError('ID de post no especificado');
            return;
        }
        
        const post = this.allPosts.find(p => p.id === postId);
        if (!post) {
            this.showError('Post no encontrado');
            return;
        }
        
        this.currentPost = post;
        this.renderPost();
        this.renderRelatedPosts();
        this.renderComments();
        this.updatePageTitle();
    }
    
    renderPost() {
        const postContent = document.getElementById('postContent');
        if (!postContent || !this.currentPost) return;
        
        const post = this.currentPost;
        const date = new Date(post.date).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        postContent.innerHTML = `
            <header class="post-header">
                <h1 class="post-title">${post.title}</h1>
                <div class="post-meta">
                    <span class="post-category">${this.getCategoryLabel(post.category)}</span>
                    <span class="post-date">
                        <span class="material-symbols-rounded">schedule</span>
                        ${date}
                    </span>
                    <span class="post-author">
                        <span class="material-symbols-rounded">person</span>
                        ${post.author}
                    </span>
                </div>
            </header>
            
            <img src="${post.image}" alt="${post.title}" class="post-image" loading="lazy">
            
            <div class="post-content">
                ${post.content}
            </div>
            
            <div class="post-tags">
                ${post.tags.map(tag => `
                    <a href="index.html?search=${encodeURIComponent(tag)}" class="post-tag">#${tag}</a>
                `).join('')}
            </div>
        `;
    }
    
    renderRelatedPosts() {
        const relatedGrid = document.getElementById('relatedGrid');
        if (!relatedGrid || !this.currentPost) return;
        
        // Obtener posts de la misma categoría o con tags similares
        const relatedPosts = this.allPosts
            .filter(post => post.id !== this.currentPost.id)
            .filter(post => 
                post.category === this.currentPost.category ||
                post.tags.some(tag => this.currentPost.tags.includes(tag))
            )
            .slice(0, 3);
        
        if (relatedPosts.length === 0) {
            relatedGrid.innerHTML = `
                <div class="related-empty">
                    <p>No hay artículos relacionados disponibles.</p>
                </div>
            `;
            return;
        }
        
        relatedGrid.innerHTML = relatedPosts.map(post => `
            <a href="post.html?id=${post.id}" class="related-card">
                <img src="${post.image}" alt="${post.title}" class="related-image" loading="lazy">
                <div class="related-content">
                    <h3 class="related-title">${post.title}</h3>
                    <p class="related-excerpt">${post.excerpt}</p>
                </div>
            </a>
        `).join('');
    }
    
    renderComments() {
        const commentsContainer = document.getElementById('commentsContainer');
        if (!commentsContainer) return;
        
        // En un entorno real, esto cargaría comentarios desde el backend
        const comments = [
            {
                author: 'Juan Pérez',
                content: 'Excelente artículo sobre sostenibilidad. Me encanta ver cómo Alico está liderando el cambio hacia un futuro más verde.',
                date: '2024-01-16T10:30:00Z'
            },
            {
                author: 'María García',
                content: 'Muy interesante el enfoque en la colaboración. ¿Planean expandir este modelo a otros sectores?',
                date: '2024-01-15T15:45:00Z'
            }
        ];
        
        if (comments.length === 0) {
            commentsContainer.innerHTML = `
                <div class="comments-empty">
                    <p>No hay comentarios aún. ¡Sé el primero en comentar!</p>
                </div>
            `;
            return;
        }
        
        commentsContainer.innerHTML = comments.map(comment => {
            const date = new Date(comment.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            return `
                <div class="comment">
                    <div class="comment-header">
                        <span class="comment-author">${comment.author}</span>
                        <span class="comment-date">${date}</span>
                    </div>
                    <div class="comment-content">${comment.content}</div>
                </div>
            `;
        }).join('');
    }
    
    setupEventListeners() {
        const commentForm = document.getElementById('commentForm');
        if (commentForm) {
            commentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitComment();
            });
        }
    }
    
    async submitComment() {
        const form = document.getElementById('commentForm');
        const nameInput = document.getElementById('commentName');
        const emailInput = document.getElementById('commentEmail');
        const contentInput = document.getElementById('commentContent');
        
        if (!form || !nameInput || !emailInput || !contentInput) return;
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const content = contentInput.value.trim();
        
        if (!name || !email || !content) {
            alert('Por favor, completa todos los campos requeridos.');
            return;
        }
        
        // Simular envío de comentario
        const submitBtn = form.querySelector('.submit-comment');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span class="material-symbols-rounded">hourglass_empty</span>
            Enviando...
        `;
        
        try {
            // En un entorno real, esto enviaría el comentario al backend
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Agregar el comentario a la lista
            this.addCommentToList(name, content);
            
            // Limpiar el formulario
            form.reset();
            
            // Mostrar mensaje de éxito
            this.showSuccessMessage('Comentario enviado exitosamente');
            
        } catch (error) {
            console.error('Error enviando comentario:', error);
            alert('Error al enviar el comentario. Por favor, intenta de nuevo.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    }
    
    addCommentToList(name, content) {
        const commentsContainer = document.getElementById('commentsContainer');
        if (!commentsContainer) return;
        
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${name}</span>
                <span class="comment-date">Ahora</span>
            </div>
            <div class="comment-content">${content}</div>
        `;
        
        // Insertar al principio de la lista
        commentsContainer.insertBefore(commentDiv, commentsContainer.firstChild);
    }
    
    showSuccessMessage(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <span class="material-symbols-rounded">check_circle</span>
            ${message}
        `;
        
        document.body.appendChild(successDiv);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
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
    
    updatePageTitle() {
        if (this.currentPost) {
            document.title = `${this.currentPost.title} | Blog de Innovación | Alico`;
        }
    }
    
    showError(message) {
        const postContent = document.getElementById('postContent');
        if (postContent) {
            postContent.innerHTML = `
                <div class="post-error">
                    <span class="material-symbols-rounded">error</span>
                    <h2>Error</h2>
                    <p>${message}</p>
                    <a href="index.html" class="back-to-blog">Volver al Blog</a>
                </div>
            `;
        }
    }
}

// Inicializar el cargador de posts
let postLoader;

document.addEventListener('DOMContentLoaded', function() {
    postLoader = new PostLoader();
    console.log('📝 PostLoader inicializado');
});

// Para debugging
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.debugPost = {
        postLoader: () => postLoader,
        currentPost: () => postLoader?.currentPost,
        loadPost: (id) => {
            if (postLoader) {
                window.location.href = `post.html?id=${id}`;
            }
        }
    };
    console.log('🚀 Debug post disponible en window.debugPost');
}
