const PROJECTS = [
    {
        id: '1',
        title: 'Sabor & Arte - Cardápio Digital',
        description: 'Aplicação web para restaurante fictício com cardápio digital interativo, organização por categorias e experiência responsiva para dispositivos móveis.',
        tags: ['HTML', 'CSS', 'JAVASCRIPT'],
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
        accentColor: '#ff00ff',
        url: 'https://lucaspass.github.io/Cardapio-Digital---Restaurante-Sabor---Arte/'
    },
    {
        id: '2',
        title: 'CRM Leads - Sistema de Captação Inteligente',
        description: 'Sistema de captura de leads com quiz estratégico para identificar necessidades e interesses dos usuários, integrado a banco de dados para armazenamento e análise das informações.',
        tags: ['HTML', 'CSS', 'JS', 'NODE.JS', 'POSTGRESQL'],
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
        accentColor: '#00e5e6',
        url: 'https://system-crm-leads-pi.vercel.app/'
    },
    {
        id: '3',
        title: 'Landing Page - Loja de Joias BV Variedades',
        description: 'Landing page moderna e responsiva desenvolvida para loja de joias BV Variedades, focada em apresentação visual sofisticada, identidade da marca e conversão de clientes.',
        tags: ['HTML', 'CSS', 'JAVASCRIPT'],
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
        accentColor: '#ff00ff',
        url: 'https://lucaspass.github.io/Bv-Variedades/'
    }
];

const TECH_STACK = [
    { name: 'NODE.JS', icon: 'terminal', color: '#00e5e6' },
    { name: 'REACT', icon: 'deployed_code', color: '#ff00ff' },
    { name: 'POSTGRESQL', icon: 'database', color: '#00e5e6' },
    { name: 'HTML', icon: 'token', color: '#ff00ff' },
    { name: 'CSS', icon: 'language', color: '#00e5e6' },
    { name: 'JAVA SCRIPT', icon: 'view_in_ar', color: '#ff00ff' }
];



document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projects-grid');
    const techGrid = document.getElementById('tech-grid');
    renderProjects(PROJECTS);
    renderTechStack(TECH_STACK);

});

function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="card-img">
                <img src="${project.image}" alt="${project.title}">
                <div class="img-overlay"></div>
                <div class="corner-top-left"></div>
                <div class="corner-bottom-right"></div>
            </div>
            <div class="card-body">
                <div class="card-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.url}" target="_blank" class="card-link">
                    EXPLORAR PROJETO
                    <i class="material-symbols-outlined">arrow_forward</i>
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderTechStack(techStack) {
    const grid = document.getElementById('tech-grid');
    grid.innerHTML = '';

    techStack.forEach(tech => {
        const card = document.createElement('div');
        card.className = 'tech-card';
        card.innerHTML = `
            <i class="material-symbols-outlined" style="color: ${tech.color}">${tech.icon}</i>
            <span>${tech.name}</span>
        `;
        grid.appendChild(card);
    });
}
