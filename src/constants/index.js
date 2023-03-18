import {
    mobile,
    backend,
    creator,
    web,
    windowPros,
    frazierFarms,
    graceShoper,
    fitness,
    windowProsIcon,
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
        title: "Web Designer",
        icon: creator,
    },
];
const experiences = [
    {
        title: "Freelance Web Developer",
        company_name: "WindowPros",
        icon: windowPros,
        iconBg: "#E6DEDD",
        date: "Mar 2023 – Current",
        points: [
            "Develop a user-friendly website that allowed customers to easily request a quote for the business's services. ",
            "Leverage skills used in React, CSS and HTML to create a responsive website with an intuitive interface.",
            "Collaborate closely with the business owners throughout the development process to ensure that the website met their needs and reflected their brand values.",
        ],
    },
    {
        title: "Associate",
        company_name: "WindowPros",
        icon: windowPros,
        iconBg: "#E6DEDD",
        date: "Feb 2022 - Aug 2022",
        points: [
            "Enhanced strong customer service skills by providing efficient service in a fast-paced environment.",
            "Contributed to a team that constantly communicated to achieve company goals.",
            "Recognized the value of teamwork and contributed to building a team that consistently worked together to achieve success.",
        ],
    },
    {
        title: "Produce Specialist",
        company_name: "Frazer Farms",
        icon: frazierFarms,
        iconBg: "#E6DEDD",
        date: "Jan 2020 - Jan 2021  ",
        points: [
            "Ensuring proper product presentation through arranging, creating displays, and stocking products.",
            "Providing customer service by helping customers find products, answering inquiries, and providing recommendations.",
            "Maintaining store cleanliness by keeping shelves tidy, labeling products, and addressing spills or messes while answering calls and addressing customer inquiries professionally.",
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
        image: graceShoper,
        source_code_link: "https://github.com/The-Three-Codemigos/grace_shopper",
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
        image: fitness,
        source_code_link: "https://github.com/UlyssesCortes/UNIV_Fitness-tracker_FrontEnd",
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
        image: windowProsIcon,
        source_code_link: "https://github.com/UlyssesCortes/WindowPro",
    },
];

export { services, experiences, projects };