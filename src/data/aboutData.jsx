const aboutData = {
    title: 'About Me',
    subtitle: 'Discover my journey, passions, and the story behind my work',
    image: '/assets/profile.jpeg',

    biodata: [
        { label: 'Name', value: 'Bùi Minh Hiếu', icon: 'bx bx-id-card' },
        {
            label: 'Date of Birth',
            value: 'August,04-1999',
            icon: 'bx bx-calendar',
        },
        {
            label: 'Place of Birth',
            value: 'Vung Tau, Vietnam',
            icon: 'bx bx-map',
        },
        {
            label: 'Email',
            value: 'bmhieu481999@gmail.com',
            icon: 'bx bx-envelope',
        },
        { label: 'Phone', value: '+84 349 647 104', icon: 'bx bx-phone' },
        {
            label: 'Education',
            value: 'University of Technology',
            icon: 'bx bx-book',
        },
        // { label: "GPA", value: "3.55 / 4.00", icon: "bx bx-award" },
    ],

    resume: {
        label: 'Download My Resume',
        href: '/assets/Hieu_Bui_CV.pdf',
        icon: 'bx bx-download',
    },

    aboutNarrative: {
        whoAmI: {
            text: `I'm a frontend developer who crafts responsive, interactive, and clean UIs. With a background in Informatics Engineering, I blend design sense with technical logic.`,
            icon: 'bx-info-circle',
        },
        approach: {
            text: `I focus on user-centered design, performance, and accessibility   always evolving with modern tech to deliver seamless digital experiences.`,
            icon: 'bx-bulb',
        },
    },
};

export default aboutData;
