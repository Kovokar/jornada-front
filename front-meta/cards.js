// Função para criar os cards com base nos dados dos perfis
function generateCards() {
    const container = document.getElementById('cards-container');
    
    profilesData.forEach((profile, index) => {
        // Criar elementos base
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'slide';
        input.id = `c${profile.id}`;
        if (index === 0) input.checked = true;
        
        const label = document.createElement('label');
        label.htmlFor = `c${profile.id}`;
        label.className = 'card';
        
        // Renderizar conteúdo do card baseado no tipo
        if (profile.type === 'profile') {
            // Card de perfil completo
            label.innerHTML = `
                <div class="card-wrapper">
                    <!-- Left Section - Profile Info -->
                    <div class="profile-sidebar">
                        <div class="profile-image">
                            <img class="avatar" src="${profile.avatarUrl}" alt="${profile.name}'s profile">
                        </div>
                        <div class="profile-details">
                            <ul>
                                <li><strong>Nome:</strong> ${profile.name}</li>
                                <li><strong>Email:</strong> ${profile.email}</li>
                                <li><strong>Localização:</strong> ${profile.location}</li>
                            </ul>
                        </div>
                    </div>
            
                    <!-- Right Section - Content -->
                    <div class="profile-content">
                        <div class="social-links">
                            ${profile.socialLinks.map(link => `
                                <a href="${link.url}" class="social-button" aria-label="${link.label}">
                                    <i class="${link.icon}"></i>
                                </a>
                            `).join('')}
                        </div>
            
                        <div class="profile-bio"> 
                            <div class="header-section">
                                <h1>Hi there, I'm <a href="#">${profile.headerTitle}</a> 
                                    <img src="${profile.headerGifUrl}" width="25px" alt="Wave">
                                </h1>
                            </div>
                            
                            <div class="subtitle">
                                <h3>${profile.subtitle}</h3>
                            </div>
                            
                            <div class="quote">
                                <h5><i>${profile.quote}</i></h5>
                            </div>
                            
                            <div class="about-me">
                                <h3>${profile.aboutTitle}</h3>
                                
                                <ul class="skills-list">
                                    ${profile.skills.map(skill => `<li>${skill}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="tech-stack">
                                <h4>🛠 Languages and Tools</h4>
                                <div class="tech-icons">
                                    ${profile.techIcons.map(icon => `
                                        <img src="${icon.url}" alt="${icon.alt}">
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (profile.type === 'simple') {
            // Card simples
            label.innerHTML = `
                <div class="card-content" style="background-image: ${profile.background}">
                    <div class="card-icon">
                        <i class="${profile.icon}"></i>
                    </div>
                    <div class="card-description">
                        <h4>${profile.title}</h4>
                        ${profile.description.map(paragraph => `<p>${paragraph}</p>`).join('')}
                    </div>
                </div>
            `;
        }
        
        // Adicionar os elementos ao container
        container.appendChild(input);
        container.appendChild(label);
    });
}

// Executar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', generateCards);