import {
    mobile,
    backend,
    design,
    web,
    windowProsIcon,
    coding,
    graceShoper,
    fitness,
    VazquezBarber
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
        title: "Fullstack Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Web Designer",
        icon: design,
    },
];
const experiences = [
    {
        title: "Web Developer",
        company_name: "VazquezBarber",
        icon: coding,
        iconBg: "#E6DEDD",
        date: "Mar 2024 - May 2024",
        points: [
            "Simplify appointment scheduling for clients with an intuitive online booking system integrated seamlessly into the website.",
            "User-friendly interface that offers convenience and accessibility, allowing clients to easily view available time slots, select preferred services, and book appointments hassle-free.",
            "Worked closely with barbershop owner to ensure the website met his needs and reflected his brand.",
        ],
    },
    {
        title: "Freelance Web Developer",
        company_name: "WindowPros",
        icon: coding,
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
        icon: windowProsIcon,
        iconBg: "#E6DEDD",
        date: "Feb 2022 - Aug 2022",
        points: [
            "Enhanced strong customer service skills by providing efficient service in a fast-paced environment.",
            "Contributed to a team that constantly communicated to achieve company goals.",
            "Recognized the value of teamwork and contributed to building a team that consistently worked together to achieve success.",
        ],
    }
];

const projects = [
    {
        name: "VazquezBarber",
        description:
            "Revolutionized a local barbershop's efficiency with a custom website, integrating Calendly for seamless appointment scheduling. Utilized React, CSS, and HTML to craft a responsive platform, ensuring clients can easily book appointments anytime, anywhere. Collaborated closely with the owners to tailor the site to their needs, reinforcing their commitment to customer service.",
        tags: [
            {
                name: "React"
            },
            {
                name: "JavaScript"
            },
            {
                name: "HTML/CSS"
            },
            {
                name: "Calendly"
            },
            {
                name: "Lottie"
            },
        ],
        image: VazquezBarber,
        source_code_link: "https://github.com/UlyssesCortes/VazquezBarber",
        project_url: "https://vazquezbarber.com/",
    },
    {
        name: "DigitalDepot",
        description:
            "Experience seamless shopping on my furniture ecommerce website with intuitive functionalities and impressive features. Explore home shop categories and special offers with ease. Effortlessly discover products using smart search and convenient filters. Enjoy smooth image previews with Framer Motion animation. This user friendly platform reflects my development skills and aims to provide a delightful experience for furniture enthusiasts.",
        tags: [
            {
                name: "React"
            },
            {
                name: "JavaScript"
            },
            {
                name: "Express"
            },
            {
                name: "Postgress"
            },
            {
                name: "Stripe"
            },
            {
                name: "Nodejs"
            },
            {
                name: "HTML/CSS"
            },
            {
                name: "Axios"
            },
            {
                name: "Lottie"
            },
            {
                name: "Framer Motion"
            },
        ],
        image: graceShoper,
        source_code_link: "https://github.com/UlyssesCortes/digitalDepot",
        project_url: "https://digitaldepot.website/",
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
                name: "JavaScript"
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
                name: "HTML/CSS"
            },
        ],
        image: fitness,
        source_code_link: "https://github.com/UlyssesCortes/UNIV_Fitness-tracker_FrontEnd",
        project_url: "https://silly-torte-725ca7.netlify.app/",
    }
];

export { services, experiences, projects };