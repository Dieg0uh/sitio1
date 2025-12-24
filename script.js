const featuresData = {
    'Velocidad': {
        title: 'Velocidad Extrema',
        description: 'Nuestra arquitectura está construida sobre bases sólidas que garantizan tiempos de carga inferiores a 100ms. Utilizamos técnicas de renderizado estático y optimización de recursos automática.',
        icon: '⚡'
    },
    'Diseño': {
        title: 'Diseño Vanguardista',
        description: 'Cada píxel ha sido cuidado obsesivamente. Implementamos las últimas tendencias de Glassmorphism y Neumorphism para crear una interfaz que no solo se ve bien, sino que se siente bien.',
        icon: '👁️‍🗨️'
    },
    'Fluidez': {
        title: 'Animaciones Fluidas',
        description: 'Utilizando la aceleración por hardware de CSS y transiciones optimizadas, logramos una experiencia de usuario suave como la seda, funcionando a 60fps estables en cualquier dispositivo.',
        icon: '🌊'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('feature-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalIcon = document.getElementById('modal-icon');
    const closeBtn = document.querySelector('.close-modal');
    const cards = document.querySelectorAll('.card');

    function openModal(featureKey) {
        const data = featuresData[featureKey];
        if (data) {
            modalTitle.textContent = data.title;
            modalDesc.textContent = data.description;
            modalIcon.textContent = data.icon;

            modal.classList.remove('hidden');
            // Small timeout to allow display:block to apply before opacity transition
            setTimeout(() => {
                modal.classList.add('visible');
            }, 10);
        }
    }

    function closeModal() {
        modal.classList.remove('visible');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300); // Wait for transition
    }

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            openModal(title);
        });
    });

    closeBtn.addEventListener('click', closeModal);

    // Close on click outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('visible')) {
            closeModal();
        }
    });
});
