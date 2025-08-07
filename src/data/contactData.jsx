const contactData = {
    title: 'Contact Me',
    subtitle: 'Reach out via form, social media, or support platforms.',

    tabs: [
        {
            label: 'Form',
            value: 'form',
            icon: 'bx bx-envelope',
        },
        {
            label: 'Social',
            value: 'social',
            icon: 'bx bx-link',
        },
        {
            label: 'My QR',
            value: 'qr',
            icon: 'bx bx-heart',
        },
    ],

    socials: [
        {
            label: 'GitHub',
            href: 'https://github.com/MINHHIEU-99',
            icon: 'bx bxl-github',
            description: 'Explore my code & projects',
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/minh-hieu-bui-0b1894225/',
            icon: 'bx bxl-linkedin-square',
            description: 'Let’s connect professionally',
        },
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/bmhieu04/',
            icon: 'bx bxl-instagram',
            description: 'My visual journal & life updates',
        },
    ],

    supportPlatforms: [
        {
            label: 'Zalo',
            type: 'image',
            imageSrc: '/assets/zalo.png',
            alt: 'Scan to get my Zalo',
        },
    ],
};

export default contactData;
