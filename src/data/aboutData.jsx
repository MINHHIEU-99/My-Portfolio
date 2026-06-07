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
        { label: 'Phone', value: '+84 34 964 7104', icon: 'bx bx-phone' },
        {
            label: 'Education',
            value: 'Ho Chi Minh University of Technology',
            icon: 'bx bx-book',
        },
        {
            label: 'Degree',
            value: 'B.Eng, Telecommunication & Electronics',
            icon: 'bx bx-award',
        },
        { label: 'TOEIC', value: '640', icon: 'bx bx-medal' },
    ],

    resume: {
        label: 'Download My Resume',
        href: '/assets/myCV__ML_VT.pdf',
        icon: 'bx bx-download',
    },

    aboutNarrative: {
        whoAmI: {
            text: `I'm a Junior Software Engineer working across ML, backend, and frontend in production. I've shipped ML features for face verification and mask detection, and build fullstack web apps end to end.`,
            icon: 'bx-info-circle',
        },
        approach: {
            text: `I own the full ML lifecycle  data collection, model training, optimization, and ONNX/TensorRT deployment  while building clean, responsive React UIs and reliable REST/Node.js backends around it.`,
            icon: 'bx-bulb',
        },
    },
};

export default aboutData;
