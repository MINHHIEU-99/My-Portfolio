const homeData = {
    title: 'Hi, I’m Hieu Bui 👋',
    typingTexts: [
        'Frontend Developer',
        'React Enthusiast',
        'Tailwind Warrior',
        'UI/UX Explorer',
    ],
    description:
        'I build modern, responsive web apps with clean UI and smooth UX  blending design and code to create experiences that feel intuitive, fast, and delightful to use.',

    img: '/assets/avatar.jpeg',
    buttons: [
        {
            label: 'Explore My Project',
            href: '#portfolio',
            type: 'primary',
        },
        {
            label: 'Download My CV',
            href: '/assets/Hieu_Bui_CV.pdf',
            type: 'secondary',
        },
    ],
    floatingIcons: [
        { icon: 'bx bxl-html5', color: '#e34c26', label: 'HTML' },
        { icon: 'bx bxl-css3', color: '#264de4', label: 'CSS' },
        { icon: 'bx bxl-javascript', color: '#f0db4f', label: 'JavaScript' },
        { icon: 'bx bxl-react', color: '#61dbfb', label: 'React' },
    ],
    socialMedia: [
        {
            platform: 'GitHub',
            icon: 'bx bxl-github',
            href: 'https://github.com/MINHHIEU-99',
        },
        {
            platform: 'Instagram',
            icon: 'bx bxl-instagram',
            href: 'https://www.instagram.com/bmhieu04/',
        },
        {
            platform: 'WhatsApp',
            icon: 'bx bxl-whatsapp',
            href: 'https://wa.me/84349647104',
        },
    ],

    stats: [
        {
            label: 'Experience',
            value: '1+ Years',
            icon: 'bx bx-briefcase',
        },
        {
            label: 'Main Language',
            value: 'JavaScript',
            icon: 'bx bxl-javascript',
        },
        {
            label: 'Total Projects',
            value: '2 Projects',
            icon: 'bx bx-code-alt',
        },
    ],
};

export default homeData;
