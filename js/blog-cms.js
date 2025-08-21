/* ==================================================
   JAVASCRIPT DEL CMS PARA NETLIFY
   Integración con Netlify Identity y CMS
   ================================================== */

class BlogCMS {
    constructor() {
        this.isAuthenticated = false;
        this.currentUser = null;
        this.init();
    }
    
    async init() {
        this.checkAuthentication();
        this.setupEventListeners();
    }
    
    async checkAuthentication() {
        if (window.netlifyIdentity) {
            const user = netlifyIdentity.currentUser();
            if (user) {
                this.isAuthenticated = true;
                this.currentUser = user;
                this.showCMSButton();
            } else {
                this.hideCMSButton();
            }
            
            // Escuchar cambios en el estado de autenticación
            netlifyIdentity.on('login', (user) => {
                this.isAuthenticated = true;
                this.currentUser = user;
                this.showCMSButton();
                console.log('Usuario autenticado:', user);
            });
            
            netlifyIdentity.on('logout', () => {
                this.isAuthenticated = false;
                this.currentUser = null;
                this.hideCMSButton();
                console.log('Usuario desconectado');
            });
        }
    }
    
    setupEventListeners() {
        const cmsButton = document.getElementById('cmsButton');
        if (cmsButton) {
            cmsButton.addEventListener('click', () => {
                this.openCMS();
            });
        }
    }
    
    showCMSButton() {
        const cmsButton = document.getElementById('cmsButton');
        if (cmsButton) {
            cmsButton.style.display = 'flex';
        }
    }
    
    hideCMSButton() {
        const cmsButton = document.getElementById('cmsButton');
        if (cmsButton) {
            cmsButton.style.display = 'none';
        }
    }
    
    openCMS() {
        if (this.isAuthenticated) {
            // Abrir el CMS de Netlify
            if (window.netlifyIdentity) {
                netlifyIdentity.open('cms');
            } else {
                // Fallback: redirigir a la página del admin
                window.location.href = 'admin/';
            }
        } else {
            this.showLoginModal();
        }
    }
    
    showLoginModal() {
        if (window.netlifyIdentity) {
            netlifyIdentity.open('login');
        } else {
            alert('Por favor, inicia sesión para acceder al CMS');
        }
    }
    
    // Métodos del CMS (simulados para desarrollo)
    async createPost(postData) {
        try {
            // En un entorno real, esto enviaría los datos al CMS
            console.log('Creando post:', postData);
            
            // Simular respuesta exitosa
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
        try {
            console.log('Actualizando post:', postId, postData);
            
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
        try {
            console.log('Eliminando post:', postId);
            
            return {
                success: true,
                message: 'Post eliminado exitosamente'
            };
        } catch (error) {
            console.error('Error eliminando post:', error);
            throw error;
        }
    }
    
    async getBlogStats() {
        try {
            // Simular estadísticas del blog
            return {
                totalPosts: 6,
                totalViews: 7140,
                totalComments: 23,
                totalCategories: 4,
                monthlyGrowth: 15.5
            };
        } catch (error) {
            console.error('Error obteniendo estadísticas:', error);
            throw error;
        }
    }
    
    async getCategories() {
        try {
            return [
                { id: 1, name: 'Innovación', slug: 'innovacion', count: 1 },
                { id: 2, name: 'Sostenibilidad', slug: 'sostenibilidad', count: 2 },
                { id: 3, name: 'Tecnología', slug: 'tecnologia', count: 2 },
                { id: 4, name: 'Proyectos', slug: 'proyectos', count: 1 }
            ];
        } catch (error) {
            console.error('Error obteniendo categorías:', error);
            throw error;
        }
    }
    
    async createCategory(categoryData) {
        try {
            console.log('Creando categoría:', categoryData);
            
            return {
                success: true,
                categoryId: Date.now(),
                message: 'Categoría creada exitosamente'
            };
        } catch (error) {
            console.error('Error creando categoría:', error);
            throw error;
        }
    }
    
    async uploadImage(file) {
        try {
            console.log('Subiendo imagen:', file.name);
            
            // Simular subida exitosa
            return {
                success: true,
                imageUrl: `images/posts/${file.name}`,
                message: 'Imagen subida exitosamente'
            };
        } catch (error) {
            console.error('Error subiendo imagen:', error);
            throw error;
        }
    }
    
    async getComments(postId) {
        try {
            // Simular comentarios
            return [
                {
                    id: 1,
                    author: 'Juan Pérez',
                    email: 'juan@example.com',
                    content: 'Excelente artículo sobre sostenibilidad',
                    date: '2024-01-16',
                    approved: true
                },
                {
                    id: 2,
                    author: 'María García',
                    email: 'maria@example.com',
                    content: 'Muy interesante el proyecto con Lego',
                    date: '2024-01-15',
                    approved: false
                }
            ];
        } catch (error) {
            console.error('Error obteniendo comentarios:', error);
            throw error;
        }
    }
    
    async approveComment(commentId) {
        try {
            console.log('Aprobando comentario:', commentId);
            
            return {
                success: true,
                message: 'Comentario aprobado exitosamente'
            };
        } catch (error) {
            console.error('Error aprobando comentario:', error);
            throw error;
        }
    }
    
    async deleteComment(commentId) {
        try {
            console.log('Eliminando comentario:', commentId);
            
            return {
                success: true,
                message: 'Comentario eliminado exitosamente'
            };
        } catch (error) {
            console.error('Error eliminando comentario:', error);
            throw error;
        }
    }
    
    // Métodos de gestión de usuarios
    async getUsers() {
        try {
            return [
                {
                    id: 1,
                    name: 'Admin Principal',
                    email: 'admin@alico.com',
                    role: 'admin',
                    lastLogin: '2024-01-16'
                },
                {
                    id: 2,
                    name: 'Editor de Contenido',
                    email: 'editor@alico.com',
                    role: 'editor',
                    lastLogin: '2024-01-15'
                }
            ];
        } catch (error) {
            console.error('Error obteniendo usuarios:', error);
            throw error;
        }
    }
    
    async inviteUser(userData) {
        try {
            console.log('Invitando usuario:', userData);
            
            return {
                success: true,
                message: 'Invitación enviada exitosamente'
            };
        } catch (error) {
            console.error('Error invitando usuario:', error);
            throw error;
        }
    }
    
    // Métodos de configuración del sitio
    async getSiteConfig() {
        try {
            return {
                siteName: 'Blog de Innovación Alico',
                siteDescription: 'Blog oficial de Alico con las últimas noticias sobre innovación, sostenibilidad y tecnología',
                logo: 'images/logo-alico.png',
                primaryColor: '#DB9500',
                secondaryColor: '#003DA6',
                socialLinks: {
                    facebook: 'https://facebook.com/alico',
                    twitter: 'https://twitter.com/alico',
                    linkedin: 'https://linkedin.com/company/alico'
                }
            };
        } catch (error) {
            console.error('Error obteniendo configuración del sitio:', error);
            throw error;
        }
    }
    
    async updateSiteConfig(configData) {
        try {
            console.log('Actualizando configuración del sitio:', configData);
            
            return {
                success: true,
                message: 'Configuración actualizada exitosamente'
            };
        } catch (error) {
            console.error('Error actualizando configuración:', error);
            throw error;
        }
    }
    
    // Métodos de análisis y reportes
    async getAnalytics(startDate, endDate) {
        try {
            // Simular datos de analytics
            return {
                pageViews: 15420,
                uniqueVisitors: 8230,
                topPosts: [
                    { title: 'Proyecto Lego: Innovación en Colaboración', views: 1560 },
                    { title: 'Nuevo Material Sostenible para Empaques', views: 1250 },
                    { title: 'Sostenibilidad en la Cadena de Suministro', views: 1340 }
                ],
                topReferrers: [
                    { source: 'Google', visits: 4560 },
                    { source: 'LinkedIn', visits: 2340 },
                    { source: 'Direct', visits: 1890 }
                ]
            };
        } catch (error) {
            console.error('Error obteniendo analytics:', error);
            throw error;
        }
    }
    
    // Métodos de respaldo y exportación
    async exportContent(format = 'json') {
        try {
            console.log('Exportando contenido en formato:', format);
            
            // Simular exportación
            return {
                success: true,
                downloadUrl: `export/blog-content-${Date.now()}.${format}`,
                message: 'Contenido exportado exitosamente'
            };
        } catch (error) {
            console.error('Error exportando contenido:', error);
            throw error;
        }
    }
    
    async backupDatabase() {
        try {
            console.log('Creando respaldo de la base de datos');
            
            return {
                success: true,
                backupId: `backup-${Date.now()}`,
                message: 'Respaldo creado exitosamente'
            };
        } catch (error) {
            console.error('Error creando respaldo:', error);
            throw error;
        }
    }
}

// Inicializar el CMS cuando el DOM esté listo
let blogCMS;

document.addEventListener('DOMContentLoaded', function() {
    blogCMS = new BlogCMS();
    console.log('🔧 CMS de Alico inicializado');
});

// Para debugging
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.debugCMS = {
        blogCMS: () => blogCMS,
        createPost: (data) => blogCMS?.createPost(data),
        updatePost: (id, data) => blogCMS?.updatePost(id, data),
        deletePost: (id) => blogCMS?.deletePost(id),
        getStats: () => blogCMS?.getBlogStats(),
        getCategories: () => blogCMS?.getCategories(),
        getUsers: () => blogCMS?.getUsers(),
        getAnalytics: (start, end) => blogCMS?.getAnalytics(start, end)
    };
    console.log('🚀 Debug CMS disponible en window.debugCMS');
}
