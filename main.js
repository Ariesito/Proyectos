// Datos de la aplicación
const appData = {
    noticias: [
        {
            titulo: "¿Ariesito a Regresado?",
            contenido: "Hace una par de horas Ariesito compartió unas imágenes donde se le veía jugando Minecraft concretamente en (AriesLand) su mundo Survival, es esto un aviso de que regresará?",
            fecha: "14/12/2025",
            icono: "bxs-star"
        },
        {
            titulo: "Nuevo Canal de YouTube",
            contenido: "Ya puedes seguir a AriesitoMc en su Nuevo Canal de YouTube \n(Ariesitomc Official) En el apartado de redes, para no perderte de nuevas noticias y estar pendiente de nuevo contenido",
            fecha: "14/12/2025",
            icono: "bxs-star"
        }        
    ],
    
    proyectos: [
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
            url: "https://m.youtube.com/channel/UCRvXgmzaJSRI7Q9tawlEREA",
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

            // [SE ELIMINÓ la llamada a showLoadingScreen(true);]
            
            const targetHref = this.href;

            // Navegar a la página después del retraso del indicador
            setTimeout(() => {
                window.location.href = targetHref;
            }, 400); // Se ajusta a 400ms para corresponder a la transición CSS
        });
    });
}

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", function() {
    // [SE ELIMINÓ la llamada inicial a showLoadingScreen();]
    
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

