/* ==================================================
   JAVASCRIPT PRINCIPAL DEL BLOG DE ALICO
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
        this.updateStats();
        this.updateCategoryCounts();
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
                image: "images/posts/material-sostenible.jpg",
                date: "2024-01-15",
                author: "Equipo de Innovación",
                tags: ["sostenibilidad", "materiales", "biodegradable"],
                views: 1250
            },
            {
                id: 2,
                title: "Inteligencia Artificial en Control de Calidad",
                excerpt: "Implementamos sistemas de IA avanzados para mejorar la precisión del control de calidad en nuestra línea de producción.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                category: "tecnologia",
                image: "images/posts/ia-calidad.jpg",
                date: "2024-01-10",
                author: "Departamento de Tecnología",
                tags: ["IA", "calidad", "producción"],
                views: 980
            },
            {
                id: 3,
                title: "Proyecto Lego: Innovación en Colaboración",
                excerpt: "Nuestro proyecto colaborativo con Lego demuestra cómo la innovación abierta puede transformar la industria del packaging.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                category: "proyectos",
                image: "images/posts/proyecto-lego.jpg",
                date: "2024-01-05",
                author: "Equipo de Proyectos",
                tags: ["colaboración", "lego", "innovación abierta"],
                views: 1560
            },
            {
                id: 4,
                title: "Design Thinking en el Desarrollo de Productos",
                excerpt: "Aplicamos metodologías de Design Thinking para crear soluciones centradas en el usuario y el medio ambiente.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                category: "innovacion",
                image: "images/posts/design-thinking.jpg",
                date: "2024-01-01",
                author: "Equipo de Diseño",
                tags: ["design thinking", "UX", "sostenibilidad"],
                views: 890
            },
            {
                id: 5,
                title: "Nuevas Tecnologías de Impresión 3D",
                excerpt: "Exploramos las posibilidades de la impresión 3D para crear empaques personalizados y reducir el desperdicio.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                category: "tecnologia",
                image: "images/posts/impresion-3d.jpg",
                date: "2023-12-28",
                author: "Laboratorio de I+D",
                tags: ["3D", "personalización", "reducción de desperdicio"],
                views: 1120
            },
            {
                id: 6,
                title: "Sostenibilidad en la Cadena de Suministro",
                excerpt: "Implementamos prácticas sostenibles en toda nuestra cadena de suministro para reducir la huella de carbono.",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                category: "sostenibilidad",
                image: "images/posts/cadena-suministro.jpg",
                date: "2023-12-20",
                author: "Equipo de Sostenibilidad",
                tags: ["cadena de suministro", "huella de carbono", "prácticas verdes"],
                views: 1340
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
        
        // Categorías destacadas
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const category = card.dataset.category;
                this.filterByCategory(category);
            });
        });
        
        // Newsletter
        const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletterSignup();
            });
        }
    }
    
    setActiveFilter(clickedButton) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        clickedButton.classList.add('active');
    }
    
    filterByCategory(category) {
        // Actualizar botón activo
        const filterBtn = document.querySelector(`[data-category="${category}"]`);
        if (filterBtn) {
            this.setActiveFilter(filterBtn);
        }
        
        this.currentCategory = category;
        this.currentPage = 1;
        this.filterPosts();
        
        // Scroll a los posts
        document.querySelector('.posts-section').scrollIntoView({ 
            behavior: 'smooth' 
        });
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
        this.updateCategoryCounts();
    }
    
    renderPosts() {
        const postsGrid = document.getElementById('postsGrid');
        const loadingState = document.getElementById('loadingState');
        const emptyState = document.getElementById('emptyState');
        
        if (!postsGrid) return;
        
        // Ocultar estado de carga
        if (loadingState) loadingState.style.display = 'none';
        
        const startIndex = (this.currentPage - 1) * this.postsPerPage;
        const endIndex = startIndex + this.postsPerPage;
        const postsToShow = this.filteredPosts.slice(startIndex, endIndex);
        
        if (postsToShow.length === 0) {
            postsGrid.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }
        
        if (emptyState) emptyState.style.display = 'none';
        
        postsGrid.innerHTML = postsToShow.map(post => this.getPostHTML(post)).join('');
        
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
            <article class="post-card" data-post-id="${post.id}">
                <img src="${post.image}" alt="${post.title}" class="post-image" loading="lazy">
                <div class="post-content">
                    <div class="post-meta">
                        <span class="post-category">${this.getCategoryLabel(post.category)}</span>
                        <span class="post-date">
                            <span class="material-symbols-rounded">schedule</span>
                            ${date}
                        </span>
                    </div>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="post.html?id=${post.id}" class="post-read-more">
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
    
    setupPostEventListeners() {
        const postCards = document.querySelectorAll('.post-card');
        postCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.post-read-more')) {
                    const postId = card.dataset.postId;
                    window.location.href = `post.html?id=${postId}`;
                }
            });
        });
    }
    
    setupPagination() {
        const paginationContainer = document.getElementById('paginationContainer');
        if (!paginationContainer) return;
        
        const totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);
        
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
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
        
        paginationContainer.innerHTML = paginationHTML;
    }
    
    goToPage(page) {
        const totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);
        if (page < 1 || page > totalPages) return;
        
        this.currentPage = page;
        this.renderPosts();
        this.setupPagination();
        
        // Scroll suave hacia arriba
        document.querySelector('.posts-section').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
    
    updateStats() {
        const totalPosts = document.getElementById('totalPosts');
        const totalViews = document.getElementById('totalViews');
        
        if (totalPosts) {
            totalPosts.textContent = this.posts.length;
        }
        
        if (totalViews) {
            const totalViewsCount = this.posts.reduce((sum, post) => sum + (post.views || 0), 0);
            totalViews.textContent = totalViewsCount.toLocaleString();
        }
    }
    
    updateCategoryCounts() {
        const categoryCounts = {};
        
        // Contar posts por categoría
        this.posts.forEach(post => {
            categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
        });
        
        // Actualizar contadores en las tarjetas de categorías
        Object.keys(categoryCounts).forEach(category => {
            const categoryCard = document.querySelector(`[data-category="${category}"] .category-count`);
            if (categoryCard) {
                categoryCard.textContent = `${categoryCounts[category]} artículos`;
            }
        });
    }
    
    async handleNewsletterSignup() {
        const emailInput = document.getElementById('newsletterEmail');
        const email = emailInput.value.trim();
        
        if (!email) {
            alert('Por favor, ingresa un email válido.');
            return;
        }
        
        // Simular envío
        try {
            // En un entorno real, esto enviaría el email al backend
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
        const postsGrid = document.getElementById('postsGrid');
        if (postsGrid) {
            postsGrid.innerHTML = `
                <div class="error-state">
                    <span class="material-symbols-rounded">error</span>
                    <h3>Error</h3>
                    <p>${message}</p>
                </div>
            `;
        }
    }
}

// Funciones globales para navegación
function scrollToPosts() {
    document.querySelector('.posts-section').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function scrollToCategories() {
    document.querySelector('.featured-categories').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Inicializar el blog cuando el DOM esté listo
let blogManager;

document.addEventListener('DOMContentLoaded', function() {
    blogManager = new BlogManager();
    console.log('🎨 Blog de Alico cargado exitosamente');
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
