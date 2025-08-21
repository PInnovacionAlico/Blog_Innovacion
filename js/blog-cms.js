/* ==================================================
   JAVASCRIPT DEL CMS DEL BLOG
   Funcionalidades de administración y gestión
   ================================================== */

class BlogCMS {
    constructor() {
        this.isAuthenticated = false;
        this.currentUser = null;
        this.init();
    }
    
    init() {
        this.checkAuthentication();
        this.setupCMSEvents();
    }
    
    checkAuthentication() {
        // Verificar si el usuario está autenticado con Netlify Identity
        if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
                if (user) {
                    this.isAuthenticated = true;
                    this.currentUser = user;
                    this.showCMSButton();
                    console.log('✅ Usuario autenticado:', user.email);
                } else {
                    this.isAuthenticated = false;
                    this.currentUser = null;
                    this.hideCMSButton();
                    console.log('ℹ️ Usuario no autenticado');
                }
            });
            
            window.netlifyIdentity.on("login", user => {
                this.isAuthenticated = true;
                this.currentUser = user;
                this.showCMSButton();
                console.log('🔐 Usuario logueado:', user.email);
            });
            
            window.netlifyIdentity.on("logout", () => {
                this.isAuthenticated = false;
                this.currentUser = null;
                this.hideCMSButton();
                console.log('🚪 Usuario deslogueado');
            });
        }
    }
    
    setupCMSEvents() {
        // Event listener para el botón de administración
        document.addEventListener('click', (e) => {
            if (e.target.closest('.cms-button')) {
                e.preventDefault();
                this.openCMS();
            }
        });
    }
    
    showCMSButton() {
        const cmsAdmin = document.getElementById('cmsAdmin');
        if (cmsAdmin) {
            cmsAdmin.style.display = 'block';
        }
    }
    
    hideCMSButton() {
        const cmsAdmin = document.getElementById('cmsAdmin');
        if (cmsAdmin) {
            cmsAdmin.style.display = 'none';
        }
    }
    
    openCMS() {
        if (!this.isAuthenticated) {
            this.showLoginModal();
            return;
        }
        
        // Abrir el CMS de Netlify
        if (window.netlifyIdentity) {
            window.netlifyIdentity.open('cms');
        } else {
            // Fallback: abrir en nueva ventana
            window.open('/admin', '_blank');
        }
    }
    
    showLoginModal() {
        const modal = document.createElement('div');
        modal.className = 'cms-login-modal';
        modal.innerHTML = `
            <div class="cms-modal-content">
                <div class="cms-modal-header">
                    <h3>Acceso al CMS</h3>
                    <button class="cms-modal-close" onclick="this.closest('.cms-login-modal').remove()">
                        <span class="material-symbols-rounded">close</span>
                    </button>
                </div>
                <div class="cms-modal-body">
                    <p>Para acceder al panel de administración del blog, debes iniciar sesión.</p>
                    <button class="cms-login-btn" onclick="blogCMS.login()">
                        <span class="material-symbols-rounded">login</span>
                        Iniciar Sesión
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Cerrar modal al hacer clic fuera
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
    
    login() {
        if (window.netlifyIdentity) {
            window.netlifyIdentity.open('login');
        }
    }
    
    // Métodos para gestión de contenido
    async createPost(postData) {
        if (!this.isAuthenticated) {
            throw new Error('Usuario no autenticado');
        }
        
        try {
            // En un entorno real, esto enviaría los datos al CMS
            console.log('📝 Creando nuevo post:', postData);
            
            // Simular creación exitosa
            return {
                success: true,
                postId: Date.now(),
                message: 'Post creado exitosamente'
            };
        } catch (error) {
            console.error('Error creando post:', error);
            throw error;
        }
    }
    
    async updatePost(postId, postData) {
        if (!this.isAuthenticated) {
            throw new Error('Usuario no autenticado');
        }
        
        try {
            console.log('✏️ Actualizando post:', postId, postData);
            
            // Simular actualización exitosa
            return {
                success: true,
                message: 'Post actualizado exitosamente'
            };
        } catch (error) {
            console.error('Error actualizando post:', error);
            throw error;
        }
    }
    
    async deletePost(postId) {
        if (!this.isAuthenticated) {
            throw new Error('Usuario no autenticado');
        }
        
        try {
            console.log('🗑️ Eliminando post:', postId);
            
            // Simular eliminación exitosa
            return {
                success: true,
                message: 'Post eliminado exitosamente'
            };
        } catch (error) {
            console.error('Error eliminando post:', error);
            throw error;
        }
    }
    
    // Métodos para gestión de usuarios
    getCurrentUser() {
        return this.currentUser;
    }
    
    getUserRole() {
        if (!this.currentUser) return 'guest';
        
        // En un entorno real, esto vendría del backend
        // Por ahora, simulamos roles basados en el email
        if (this.currentUser.email.includes('admin')) return 'admin';
        if (this.currentUser.email.includes('editor')) return 'editor';
        return 'author';
    }
    
    canEditPosts() {
        const role = this.getUserRole();
        return ['admin', 'editor', 'author'].includes(role);
    }
    
    canDeletePosts() {
        const role = this.getUserRole();
        return ['admin', 'editor'].includes(role);
    }
    
    canManageUsers() {
        const role = this.getUserRole();
        return role === 'admin';
    }
    
    // Métodos para estadísticas del blog
    async getBlogStats() {
        if (!this.isAuthenticated) {
            throw new Error('Usuario no autenticado');
        }
        
        try {
            // En un entorno real, esto vendría del backend
            return {
                totalPosts: 6,
                publishedPosts: 6,
                draftPosts: 0,
                totalViews: 1250,
                totalComments: 45,
                lastUpdated: new Date().toISOString()
            };
        } catch (error) {
            console.error('Error obteniendo estadísticas:', error);
            throw error;
        }
    }
    
    // Métodos para gestión de categorías
    async getCategories() {
        return [
            { id: 'innovacion', name: 'Innovación', count: 1 },
            { id: 'sostenibilidad', name: 'Sostenibilidad', count: 2 },
            { id: 'tecnologia', name: 'Tecnología', count: 2 },
            { id: 'proyectos', name: 'Proyectos', count: 1 }
        ];
    }
    
    async createCategory(categoryData) {
        if (!this.isAuthenticated) {
            throw new Error('Usuario no autenticado');
        }
        
        try {
            console.log('🏷️ Creando categoría:', categoryData);
            return { success: true, categoryId: Date.now() };
        } catch (error) {
            console.error('Error creando categoría:', error);
            throw error;
        }
    }
    
    // Métodos para gestión de imágenes
    async uploadImage(file) {
        if (!this.isAuthenticated) {
            throw new Error('Usuario no autenticado');
        }
        
        try {
            console.log('📸 Subiendo imagen:', file.name);
            
            // Simular subida exitosa
            return {
                success: true,
                imageUrl: URL.createObjectURL(file),
                imageId: Date.now()
            };
        } catch (error) {
            console.error('Error subiendo imagen:', error);
            throw error;
        }
    }
    
    // Métodos para gestión de comentarios
    async getComments(postId) {
        // En un entorno real, esto vendría del backend
        return [
            {
                id: 1,
                author: 'Juan Pérez',
                content: 'Excelente artículo sobre sostenibilidad',
                date: '2024-01-16T10:30:00Z',
                approved: true
            }
        ];
    }
    
    async approveComment(commentId) {
        if (!this.isAuthenticated) {
            throw new Error('Usuario no autenticado');
        }
        
        try {
            console.log('✅ Aprobando comentario:', commentId);
            return { success: true };
        } catch (error) {
            console.error('Error aprobando comentario:', error);
            throw error;
        }
    }
    
    async deleteComment(commentId) {
        if (!this.isAuthenticated) {
            throw new Error('Usuario no autenticado');
        }
        
        try {
            console.log('🗑️ Eliminando comentario:', commentId);
            return { success: true };
        } catch (error) {
            console.error('Error eliminando comentario:', error);
            throw error;
        }
    }
}

// Inicializar el CMS
let blogCMS;

document.addEventListener('DOMContentLoaded', function() {
    blogCMS = new BlogCMS();
    console.log('🔧 CMS del blog inicializado');
});

// Función global para abrir el CMS
function openCMS() {
    if (blogCMS) {
        blogCMS.openCMS();
    }
}

// Para debugging
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.debugCMS = {
        cms: () => blogCMS,
        login: () => blogCMS?.login(),
        createPost: (data) => blogCMS?.createPost(data),
        updatePost: (id, data) => blogCMS?.updatePost(id, data),
        deletePost: (id) => blogCMS?.deletePost(id),
        getStats: () => blogCMS?.getBlogStats(),
        getUserRole: () => blogCMS?.getUserRole()
    };
    console.log('🚀 Debug CMS disponible en window.debugCMS');
}
