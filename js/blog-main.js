/* ==================================================
   JAVASCRIPT PRINCIPAL DEL BLOG
   Funcionalidades de filtrado, búsqueda y paginación
   ================================================== */

class BlogManager {
    constructor() {
        this.posts = [];
        this.filteredPosts = [];
        this.currentPage = 1;
        this.postsPerPage = 6;
        this.currentCategory = 'todos';
        this.searchTerm = '';
        
        this.init();
    }
    
    async init() {
        await this.loadPosts();
        this.setupEventListeners();
        this.renderPosts();
        this.setupPagination();
    }
    
    async loadPosts() {
        try {
            // En un entorno real, esto cargaría desde una API o CMS
            // Por ahora, usamos datos de ejemplo
            this.posts = this.getSamplePosts();
            this.filteredPosts = [...this.posts];
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
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                category: "sostenibilidad",
                image: "../assets/images/banners/sgi.jpeg",
                date: "2024-01-15",
                author: "Equipo de Innovación",
                tags: ["sostenibilidad", "materiales", "biodegradable"]
            },
            {
                id: 2,
                title: "Inteligencia Artificial en Control de Calidad",
                excerpt: "Implementamos sistemas de IA avanzados para mejorar la precisión del control de calidad en nuestra línea de producción.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                category: "tecnologia",
                image: "../assets/images/banners/ia.jpg",
                date: "2024-01-10",
                author: "Departamento de Tecnología",
                tags: ["IA", "calidad", "producción"]
            },
            {
                id: 3,
                title: "Proyecto Lego: Innovación en Colaboración",
                excerpt: "Nuestro proyecto colaborativo con Lego demuestra cómo la innovación abierta puede transformar la industria del packaging.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                category: "proyectos",
                image: "../assets/images/carrousel/lego.jpg",
                date: "2024-01-05",
                author: "Equipo de Proyectos",
                tags: ["colaboración", "lego", "innovación abierta"]
            },
            {
                id: 4,
                title: "Design Thinking en el Desarrollo de Productos",
                excerpt: "Aplicamos metodologías de Design Thinking para crear soluciones centradas en el usuario y el medio ambiente.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                category: "innovacion",
                image: "../assets/images/banners/design-thinking.JPG",
                date: "2024-01-01",
                author: "Equipo de Diseño",
                tags: ["design thinking", "UX", "sostenibilidad"]
            },
            {
                id: 5,
                title: "Nuevas Tecnologías de Impresión 3D",
                excerpt: "Exploramos las posibilidades de la impresión 3D para crear empaques personalizados y reducir el desperdicio.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                category: "tecnologia",
                image: "../assets/images/carrousel/3decko.jpg",
                date: "2023-12-28",
                author: "Laboratorio de I+D",
                tags: ["3D", "personalización", "reducción de desperdicio"]
            },
            {
                id: 6,
                title: "Sostenibilidad en la Cadena de Suministro",
                excerpt: "Implementamos prácticas sostenibles en toda nuestra cadena de suministro para reducir la huella de carbono.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                category: "sostenibilidad",
                image: "../assets/images/carrousel/proveedores.jpg",
                date: "2023-12-20",
                author: "Equipo de Sostenibilidad",
                tags: ["cadena de suministro", "huella de carbono", "prácticas verdes"]
            }
        ];
    }
    
    setupEventListeners() {
        // Búsqueda
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value.toLowerCase();
                this.filterPosts();
            });
        }
        
        // Filtros de categoría
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setActiveFilter(e.target);
                this.currentCategory = e.target.dataset.category;
                this.currentPage = 1;
                this.filterPosts();
            });
        });
    }
    
    setActiveFilter(clickedButton) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        clickedButton.classList.add('active');
    }
    
    filterPosts() {
        this.filteredPosts = this.posts.filter(post => {
            const matchesCategory = this.currentCategory === 'todos' || post.category === this.currentCategory;
            const matchesSearch = post.title.toLowerCase().includes(this.searchTerm) ||
                                post.excerpt.toLowerCase().includes(this.searchTerm) ||
                                post.tags.some(tag => tag.toLowerCase().includes(this.searchTerm));
            
            return matchesCategory && matchesSearch;
        });
        
        this.currentPage = 1;
        this.renderPosts();
        this.setupPagination();
    }
    
    renderPosts() {
        const blogGrid = document.getElementById('blogGrid');
        if (!blogGrid) return;
        
        const startIndex = (this.currentPage - 1) * this.postsPerPage;
        const endIndex = startIndex + this.postsPerPage;
        const postsToShow = this.filteredPosts.slice(startIndex, endIndex);
        
        if (postsToShow.length === 0) {
            blogGrid.innerHTML = this.getEmptyStateHTML();
            return;
        }
        
        blogGrid.innerHTML = postsToShow.map(post => this.getPostHTML(post)).join('');
        
        // Agregar event listeners a los botones de "Leer más"
        this.setupPostEventListeners();
    }
    
    getPostHTML(post) {
        const date = new Date(post.date).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        return `
            <article class="blog-card" data-post-id="${post.id}">
                <img src="${post.image}" alt="${post.title}" class="blog-image" loading="lazy">
                <div class="blog-content">
                    <div class="blog-meta">
                        <span class="blog-category">${this.getCategoryLabel(post.category)}</span>
                        <span class="blog-date">
                            <span class="material-symbols-rounded">schedule</span>
                            ${date}
                        </span>
                    </div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <a href="post.html?id=${post.id}" class="blog-read-more">
                        Leer más
                        <span class="material-symbols-rounded">arrow_forward</span>
                    </a>
                </div>
            </article>
        `;
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
    
    getEmptyStateHTML() {
        return `
            <div class="blog-empty">
                <span class="material-symbols-rounded">search_off</span>
                <h3>No se encontraron artículos</h3>
                <p>Intenta ajustar los filtros o la búsqueda para encontrar más contenido.</p>
            </div>
        `;
    }
    
    setupPostEventListeners() {
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.blog-read-more')) {
                    const postId = card.dataset.postId;
                    window.location.href = `post.html?id=${postId}`;
                }
            });
        });
    }
    
    setupPagination() {
        const pagination = document.getElementById('pagination');
        if (!pagination) return;
        
        const totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);
        
        if (totalPages <= 1) {
            pagination.innerHTML = '';
            return;
        }
        
        let paginationHTML = '';
        
        // Botón anterior
        paginationHTML += `
            <button class="pagination-btn" 
                    onclick="blogManager.goToPage(${this.currentPage - 1})"
                    ${this.currentPage === 1 ? 'disabled' : ''}>
                <span class="material-symbols-rounded">chevron_left</span>
            </button>
        `;
        
        // Números de página
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= this.currentPage - 1 && i <= this.currentPage + 1)) {
                paginationHTML += `
                    <button class="pagination-btn ${i === this.currentPage ? 'active' : ''}"
                            onclick="blogManager.goToPage(${i})">
                        ${i}
                    </button>
                `;
            } else if (i === this.currentPage - 2 || i === this.currentPage + 2) {
                paginationHTML += '<span class="pagination-dots">...</span>';
            }
        }
        
        // Botón siguiente
        paginationHTML += `
            <button class="pagination-btn" 
                    onclick="blogManager.goToPage(${this.currentPage + 1})"
                    ${this.currentPage === totalPages ? 'disabled' : ''}>
                <span class="material-symbols-rounded">chevron_right</span>
            </button>
        `;
        
        pagination.innerHTML = paginationHTML;
    }
    
    goToPage(page) {
        const totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);
        if (page < 1 || page > totalPages) return;
        
        this.currentPage = page;
        this.renderPosts();
        this.setupPagination();
        
        // Scroll suave hacia arriba
        window.scrollTo({
            top: document.getElementById('blogGrid').offsetTop - 100,
            behavior: 'smooth'
        });
    }
    
    showError(message) {
        const blogGrid = document.getElementById('blogGrid');
        if (blogGrid) {
            blogGrid.innerHTML = `
                <div class="blog-error">
                    <span class="material-symbols-rounded">error</span>
                    <h3>Error</h3>
                    <p>${message}</p>
                </div>
            `;
        }
    }
}

// Inicializar el blog cuando el DOM esté listo
let blogManager;

document.addEventListener('DOMContentLoaded', function() {
    // Verificar breadcrumb
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb) {
        console.log('✅ Breadcrumb encontrado y visible');
        console.log('📍 Ruta del breadcrumb:', breadcrumb.textContent.trim());
    } else {
        console.warn('⚠️ Breadcrumb no encontrado');
    }
    
    // Marcar componentes como cargados
    setTimeout(() => {
        document.body.classList.add('components-loaded');
        console.log('✅ Página Blog inicializada');
    }, 800);
    
    // Inicializar el blog
    blogManager = new BlogManager();
    
    console.log('🎨 Blog de Alico cargado exitosamente');
});

// Listener para cuando los componentes estén cargados
window.addEventListener('components-loaded', function() {
    console.log('🎉 Evento: Todos los componentes han sido cargados en el Blog');
});

// Para debugging
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.debugBlog = {
        blogManager: () => blogManager,
        goToPage: (page) => blogManager?.goToPage(page),
        filterPosts: () => blogManager?.filterPosts(),
        searchPosts: (term) => {
            if (blogManager) {
                blogManager.searchTerm = term;
                blogManager.filterPosts();
            }
        }
    };
    console.log('🚀 Debug blog disponible en window.debugBlog');
}
