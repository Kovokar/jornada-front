// Dados dos perfis - Edite este arquivo para adicionar ou modificar perfis
const profilesData = [
    {
        id: 1,
        type: 'profile',
        name: 'Pedro Guilherme',
        email: 'Pkovokar@gmail.com',
        location: 'Teresina - PI',
        avatarUrl: 'https://avatars.githubusercontent.com/u/65097883?s=400&u=dada9383e9ef6f633cc2e2beaae19bb989770222&v=4',
        socialLinks: [
            { icon: 'fab fa-github', url: 'https://github.com/username', label: 'GitHub' },
            { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/pedro-guilherme-7b1b3b1b3/', label: 'LinkedIn' },
            { icon: 'far fa-file-alt', url: '#', label: 'Resume' }
        ],
        headerTitle: 'Pedro',
        headerGifUrl: 'https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif',
        subtitle: '🙎 Pedro Guilherme | 💻 Programming Student | 🛸 Brasil, PI',
        quote: '⚡️ I don\'t trust people who don\'t write SQL queries in uppercase ⚡️',
        aboutTitle: 'I\'m an 18-year-old Full-Stack Developer from Brazil.',
        skills: [
            '🚀 Currently learning Go and React.js',
            '💡 Experienced with JavaScript, TypeScript, Vue, and more',
            '🔍 Passionate about Offensive Cybersecurity',
            '💻 FullStack Developer with an emphasis on Backend',
            '🌟 Always striving to live life at its best'
        ],
        techIcons: [
            { url: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg', alt: 'JavaScript' },
            { url: 'https://www.vectorlogo.zone/logos/python/python-icon.svg', alt: 'Python' },
            { url: 'https://www.vectorlogo.zone/logos/golang/golang-icon.svg', alt: 'Go' },
            { url: 'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg', alt: 'Bash' },
            { url: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg', alt: 'Vue.js' },
            { url: 'https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg', alt: 'Django' }
        ]
    },
    {
        id: 2,
        type: 'simple',
        icon: 'fas fa-laptop-code',
        title: 'Digital Technology',
        description: [
            'Technology is advancing at an unprecedented pace.',
            'From AI to robotics, the future is here.',
            'Embrace innovation and shape the world of tomorrow.'
        ],
        background: 'linear-gradient(142deg, #5f14bd, #347ae2)'
    },
    {
        id: 3,
        type: 'simple',
        icon: 'fas fa-globe',
        title: 'Globalization',
        description: [
            'Help people all over the world',
            'Connect across borders and cultures',
            'Create global solutions for local problems'
        ],
        background: 'linear-gradient(142deg, #14bd5f, #347ae2)'
    },
    // Add this object to your profilesData array in profiles.js
    {
        id: 4,
        type: 'profile',
        name: 'Alex Chen',
        email: 'alex.chen@example.com',
        location: 'San Francisco - CA',
        avatarUrl: 'https://api.placeholder.com/400/320',
        socialLinks: [
            { icon: 'fab fa-github', url: 'https://github.com/alexchen', label: 'GitHub' },
            { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/alexchen/', label: 'LinkedIn' },
            { icon: 'fab fa-twitter', url: 'https://twitter.com/alexchen', label: 'Twitter' },
            { icon: 'far fa-file-alt', url: '#', label: 'Resume' }
        ],
        headerTitle: 'Alex',
        headerGifUrl: 'https://media.giphy.com/media/3ohhwMDyS6rv3sB8s8/giphy.gif',
        subtitle: '👨‍💻 Full-Stack Engineer | 🌉 San Francisco | 🚀 AI Enthusiast',
        quote: '💭 Code is like humor. When you have to explain it, it\'s bad! 💭',
        aboutTitle: 'Software engineer with a passion for AI and clean code.',
        skills: [
            '⚛️ React & React Native specialist',
            '🧠 Machine Learning practitioner',
            '🛠️ DevOps and CI/CD pipeline expert',
            '📱 Mobile app development enthusiast',
            '🎨 UI/UX design hobbyist'
        ],
        techIcons: [
            { url: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg', alt: 'React' },
            { url: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg', alt: 'Node.js' },
            { url: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg', alt: 'TensorFlow' },
            { url: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg', alt: 'AWS' },
            { url: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg', alt: 'Docker' },
            { url: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg', alt: 'Figma' }
        ]
    }
    // Adicione mais perfis conforme necessário
];