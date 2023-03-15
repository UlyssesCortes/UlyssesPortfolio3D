import {
    mobile,
    backend,
    creator,
    web,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];
const experiences = [
    {
        title: "Web Freelancer",
        company_name: "WindowPros",
        icon: starbucks,
        iconBg: "#383E56",
        date: "In progress",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Window Cleaner",
        company_name: "WindowPros",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Feb 2022 - Aug 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Customer service",
        company_name: "Frazer Farms",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2020 - Jan 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const projects = [
    {
        name: "Grace Shoper",
        description:
            "This ecommerce website is built with React for the front-end and Postgres and Express for the back-end, providing users with a complete ecommerce experience. Customers can easily add products to their cart, edit or delete items, and complete purchases. Meanwhile, admins can add products and manage customer orders.",
        tags: [
            {
                name: "React"
            },
            {
                name: "Express"
            },
            {
                name: "Postgress"
            },
            {
                name: "Nodejs"
            },
            {
                name: "CSS"
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Fitness Tracker",
        description:
            "The fitness tracker website allows users to create customized workout routines and add various activities to them. Users can track their progress and monitor their fitness goals by recording the duration and intensity of each workout. ",
        tags: [
            {
                name: "React"
            },
            {
                name: "Express"
            },
            {
                name: "Postgress"
            },
            {
                name: "Nodejs"
            },
            {
                name: "CSS"
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Window Pros",
        description:
            "This React-built website has a clean and responsive UI that allows customers to generate quick online quotes for window cleaning services. It features a service list, pricing calculator, and contact form to help customers select services and request quotes easily. The website is optimized for various devices, ensuring a seamless experience for customers.",
        tags: [
            {
                name: "React"
            },
            {
                name: "Spline"
            },
            {
                name: "CSS"
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, experiences, projects };