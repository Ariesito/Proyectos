// Datos de la aplicación
const appData = {
    noticias: [
        {
            titulo: "Nuevos Cambios en la Web",
            contenido: "Se cambiaron algunos Estilos en la Web para una mejor experiencia.",
            fecha: "1/10/2025",
            icono: "bxs-news"
        },
        {
            titulo: "Obsidian 2.4",
            contenido: "¿Se Confirma La Obsidian Update? Recientemente Ariesito envió algunas imágenes en su comunidad de WhatsApp que demuestran que está trabajando en Obsidian. ¡Posiblemente sea una de las más grandes actualizaciones!",
            fecha: "11/09/2025",
            icono: "bxs-palette"
        },
        {
            titulo: "Nuevo Canal",
            contenido: "AriesitoMc tiene un nuevo nombre de usuario en todas sus redes sociales (@SoyAriesitomc). ¿Qué esperas para seguirlo?",
            fecha: "11/09/2025",
            icono: "bxs-star"
        }
    ],
    
    proyectos: [
        {
            titulo: "Export World 1.21.93+",
            descripcion: "Descarga la última versión de esta maravillosa textura para exportar tus mundos en Minecraft Bedrock con la mejor calidad y rendimiento.",
            imagen: "https://i.postimg.cc/htPFkgVS/pack-icon.png",
            enlace: "https://linkvertise.com/1356996/2CLfIqkU7XTB?o=sharing",
            icono: "bxs-palette"
        },
        {
            titulo: "Obsidian V2.3",
            descripcion: "Optimiza tu juego al máximo con este increíble optimizador que mejora el rendimiento y la experiencia visual en Minecraft.",
            imagen: "https://i.postimg.cc/mgrqdjGk/pack-icon-2.png",
            enlace: "https://link-target.net/1356996/zMa3fwoanGAK",
            icono: "bxs-palette"
        }
    ],
    
    redes: [
        {
            nombre: "YouTube",
            descripcion: "Suscríbete para ver tutoriales, showcases y reviews de mis packs de texturas. Contenido exclusivo cada semana.",
            url: "https://www.youtube.com/@soyariesitomc",
            icono: "fab fa-youtube",
            color: "#FF0000"
        },
        {
            nombre: "TikTok",
            descripcion: "Mira contenido corto con previews exclusivas y behind the scenes de mis proyectos más recientes.",
            url: "https://www.tiktok.com/@ariesitomc?_t=ZM-8xxPsP17Jzx&_r=1",
            icono: "fab fa-tiktok",
            color: "#000000"
        },
        {
            nombre: "Discord",
            descripcion: "Únete a nuestra comunidad para soporte, eventos exclusivos, previews y mucho más contenido especial.",
            url: "https://discord.gg/DgrckyxNMr",
            icono: "fab fa-discord",
            color: "#5865F2"
        },
        {
            nombre: "WhatsApp",
            descripcion: "Sé el primero en enterarte de todo lo nuevo sobre AriesitoMc y sus proyectos directamente en tu celular.",
            url: "https://whatsapp.com/channel/0029Vb74InvEwEjnCiAVjD1b",
            icono: "fab fa-whatsapp",
            color: "#25D366"
        }
    ]
};

// Animación de carga - MODIFICADA para usar sessionStorage
function showLoadingScreen(force = false) {
    const loadingScreen = document.getElementById('loading-screen');
    const hasVisited = sessionStorage.getItem('hasVisited');

    // Solo mostrar si no ha visitado la sesión o si se fuerza (como en la navegación)
    if (loadingScreen && (!hasVisited || force)) {
        // Establecer la bandera para la sesión
        sessionStorage.setItem('hasVisited', 'true');
        
        // Mostrar loading screen
        loadingScreen.style.display = 'flex';
        loadingScreen.classList.remove('fade-out');
        
        // Ocultar después de un tiempo
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, force ? 800 : 2000); // Animación más corta para transiciones
    } else if (loadingScreen) {
        // Si ya visitó en esta sesión, ocultar inmediatamente por si acaso
        loadingScreen.style.display = 'none';
    }
}

// Cargar noticias
function loadNoticias() {
    const grid = document.getElementById('noticias-grid');
    if (!grid) return;
    
    appData.noticias.forEach(noticia => {
        const card = document.createElement('div');
        card.className = 'noticia glass';
        card.innerHTML = `
            <h3><i class='bx ${noticia.icono}'></i> ${noticia.titulo}</h3>
            <p>${noticia.contenido}</p>
            <div class="fecha"><i class='bx bx-calendar'></i> ${noticia.fecha}</div>
        `;
        grid.appendChild(card);
    });
}

// Cargar proyectos
function loadProyectos() {
    const grid = document.getElementById('proyectos-grid');
    if (!grid) return;
    
    appData.proyectos.forEach(proyecto => {
        const card = document.createElement('div');
        card.className = 'proyecto glass';
        card.innerHTML = `
            <img src="${proyecto.imagen}" alt="${proyecto.titulo}" onerror="this.src='https://via.placeholder.com/400x200/1a1a1a/b36bff?text=${encodeURIComponent(proyecto.titulo)}'">
            <div class="proyecto-contenido">
                <h3><i class='bx ${proyecto.icono}'></i> ${proyecto.titulo}</h3>
                <p>${proyecto.descripcion}</p>
                <a href="${proyecto.enlace}" target="_blank"><i class='bx bx-download'></i> Descargar</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Cargar redes
function loadRedes() {
    const container = document.getElementById('redes-container');
    if (!container) return;
    
    appData.redes.forEach(red => {
        const card = document.createElement('div');
        card.className = 'red-card glass';
        card.innerHTML = `
            <div class="red-icon" style="color: ${red.color}">
                <i class="${red.icono}"></i>
            </div>
            <h3>${red.nombre}</h3>
            <p>${red.descripcion}</p>
            <a href="${red.url}" target="_blank" class="red-btn" style="background: ${red.color}; color: white;">
                <i class="${red.icono}"></i> Visitar ${red.nombre}
            </a>
        `;
        container.appendChild(card);
    });
}

// Configurar funcionalidad de descarga de app
function setupAppDownload() {
    const downloadBtn = document.getElementById('download-apk');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Nombre del archivo APK
            const apkFileName = 'AriesitoMc.apk';
            const apkUrl = apkFileName;
            
            // Mostrar estado de descarga
            showDownloadStatus();
            
            // Verificar si el archivo existe
            fetch(apkUrl, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        // Crear enlace de descarga
                        const link = document.createElement('a');
                        link.href = apkUrl;
                        link.download = apkFileName;
                        link.target = '_blank';
                        
                        // Simular clic
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        
                        // Mostrar mensaje de éxito
                        console.log('✅ Descarga iniciada: ' + apkFileName);
                    } else {
                        throw new Error('Archivo no encontrado');
                    }
                })
                .catch(error => {
                    console.error('❌ Error al descargar:', error);
                    // Si falla la verificación, intentar descargar directamente
                    const link = document.createElement('a');
                    link.href = apkUrl;
                    link.download = apkFileName;
                    link.target = '_blank';
                    
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
        });
    }
}

// Mostrar estado de descarga
function showDownloadStatus() {
    const statusElement = document.getElementById('download-status');
    if (statusElement) {
        statusElement.style.display = 'block';
        setTimeout(() => {
            statusElement.style.display = 'none';
        }, 3000);
    }
}

// Navegación mejorada
function setupNavigation() {
    const navLinks = document.querySelectorAll('.navbar-link');
    const indicator = document.querySelector('.indicator');
    if (!indicator) return;
    
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';
    let activeLink = null;

    // Determinar el enlace activo al cargar la página
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
            activeLink = link;
            link.classList.add('active');
        }
    });

    // Posicionar el indicador inicialmente
    function positionIndicator() {
        if (activeLink) {
            indicator.style.left = `${activeLink.offsetLeft + (activeLink.offsetWidth / 2)}px`;
            indicator.classList.add('visible');
        }
    }

    // Posicionar después de que se carguen las fuentes
    setTimeout(positionIndicator, 100);
    window.addEventListener('resize', positionIndicator);

    // Manejar clics en los enlaces
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover clase 'active' del enlace anterior
            if (activeLink) {
                activeLink.classList.remove('active');
            }

            // Actualizar el enlace activo y añadir la clase 'active'
            activeLink = this;
            activeLink.classList.add('active');

            // Mover el indicador
            positionIndicator();

            // Mostrar animación de carga ANTES de navegar
            showLoadingScreen(true); // Forzar la animación para la transición
            
            const targetHref = this.href;

            // Navegar a la página después del retraso de la animación (800ms)
            setTimeout(() => {
                window.location.href = targetHref;
            }, 800);
        });
    });
}

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", function() {
    // Mostrar animación de carga inicial (solo si no ha visitado)
    showLoadingScreen();
    
    // Configurar navegación
    setupNavigation();
    
    // Cargar contenido específico de cada página
    loadNoticias();
    loadProyectos();
    loadRedes();
    setupAppDownload();
    
    // Prevenir zoom con gestos
    document.addEventListener('gesturestart', e => e.preventDefault());
    
    // Mejorar carga de imágenes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x200/1a1a1a/b36bff?text=Imagen+No+Disponible';
        });
    });
});

// Smooth scroll para mejor experiencia
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
