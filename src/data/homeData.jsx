const homeData = {
    title: 'Hi, I’m Hieu Bui 👋',
    typingTexts: [
        'Junior Software Engineer',
        'Fullstack Web Developer',
        'AI / ML Engineer',
        'Computer Vision Enthusiast',
    ],
    description:
        'Junior Software Engineer with 2 years of experience in fullstack web development and AI-integrated applications  building responsive UIs, API backends, and ML core from data collection and model training to optimization and production deployment.',

    img: '/assets/hieu.jpeg',
    buttons: [
        {
            label: 'Explore My Project',
            href: '#portfolio',
            type: 'primary',
        },
        {
            label: 'Download My CV',
            href: '/assets/myCV__ML_VT.pdf',
            type: 'secondary',
        },
    ],
    floatingIcons: [
        { icon: 'bx bxl-python', color: '#3776ab', label: 'Python' },
        { icon: 'bx bxl-tensorflow', color: '#ff6f00', label: 'TensorFlow' },
        { icon: 'bx bxl-react', color: '#61dbfb', label: 'React' },
        { icon: 'bx bxl-javascript', color: '#f0db4f', label: 'JavaScript' },
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
            value: '2+ Years',
            icon: 'bx bx-briefcase',
        },
        {
            label: 'Main Language',
            value: 'Python',
            icon: 'bx bxl-python',
        },
        {
            label: 'Total Projects',
            value: '7+ Projects',
            icon: 'bx bx-code-alt',
        },
    ],
};

export default homeData;
