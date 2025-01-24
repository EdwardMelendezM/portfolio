export const mePhoto = "/porftolio/projects/me.png";

export interface Project {
    title: {
        ES: string
        EN: string
    }
    image: string;
    url: string;
    technologies: string[];
    descriptions: {
        ES: string
        EN: string
    }[];
    isTop?: boolean;
}

export const projects: Project[] = [
    {
        title: {
            ES: "Proyecto Odin",
            EN: "Odin Project",
        },
        image: "/porftolio/projects/proy-odin.PNG",
        isTop: true,
        url: "https://odin.onscp.com/auth/login",
        technologies: ["Angular 17", "Go", "Microservicios", "Clean Architecture", "Docker", "Kubernetes", "Gitlab CI/CD", "AWS", "Multi tenants"],
        descriptions: [
            {
                ES: "Colabore en el desarrollo de microservicios con angular 17, implementando clean architecture.",
                EN: "Collaborated in the development of microservices with angular 17, implementing clean architecture.",
            },
            {
                ES: "Colabore en el desarrollo de microservicios con go, implementando clean architecture.",
                EN: "Collaborated in the development of microservices with go, implementing clean architecture.",
            },
            {
                ES: "Colabore en el despliege con kubernetes y docker, implementando CI/CD con Gitlab.",
                EN: "Collaborated in the deployment with kubernetes and docker, implementing CI/CD with Gitlab.",
            },
            {
                ES: "Colabore en la implementacion de multi tenants, para la gestion de multiples empresas en un solo sistema.",
                EN: "Collaborated in the implementation of multi tenants, for the management of multiple companies in a single system.",
            }
        ]
    },
    {
        title: {
            ES: "SinCodigoIA",
            EN: "SinCodigoIA",
        },
        image: "/porftolio/projects/sincodigoIa.png",
        isTop: true,
        url: "https://www.sincodigo.site/",
        technologies: ["Next JS", "Google Cloud", "React Native", "Tailwind CSS", "Docker Compose", "Prisma DB", "Postgres", "Vercel",],
        descriptions: [
            {
                ES: "Colabore en la integracion de vercel con prisma, para la gestion de la base de datos.",
                EN: "Collaborated in the integration of vercel with prisma, for the management of the database.",
            },
            {
                ES: "Mejore la UI/UX del proyecto, implementando tailwind css.",
                EN: "Improved the UI/UX of the project, implementing tailwind css.",
            },
            {
                ES: "Desarrolle un login seguro con Next Auth.",
                EN: "Developed a secure login with Next Auth.",
            }

        ]
    },
    {
        title: {
            ES: "CreativaLab LMS",
            EN: "CreativaLab LMS",
        },
        image: "/porftolio/projects/creativaLab.png",
        isTop: true,
        url: "https://academy.creativalab.tech/auth/login",
        technologies: ["Next JS", "Vercel", "Tailwind CSS", "React JS", "Prisma DB", "Postgres"],
        descriptions: [
            {
                ES: "Colabore en la integracion de vercel con prisma, para la gestion de la base de datos.",
                EN: "Collaborated in the integration of vercel with prisma, for the management of the database.",
            },
            {
                ES: "Mejore la UI/UX del proyecto, implementando tailwind css.",
                EN: "Improved the UI/UX of the project, implementing tailwind css.",
            },
            {
                ES: "Desarrolle un login seguro con Next Auth.",
                EN: "Developed a secure login with Next Auth.",
            }

        ]
    },
    {
        title: {
            ES: "Clone de Airbnb",
            EN: "Airbnb Clone",
        },
        image: "/porftolio/projects/proy-airbnb.PNG",
        url: "https://clone-airbnb-proyect-3x0alluux-edwardmelendezm.vercel.app/",
        technologies: ["Next JS", "Tailwind CSS", "React JS", "Prisma DB", "Planetscale", "Vercel"],
        descriptions: [
            {
                ES: "Colabore en la integracion de planescale con prisma, para la gestion de la base de datos.",
                EN: "Collaborated in the integration of planescale with prisma, for the management of the database.",
            },
            {
                ES: "Mejore la UI/UX del proyecto, implementando tailwind css.",
                EN: "Improved the UI/UX of the project, implementing tailwind css.",
            },
            {
                ES: "Desarrolle un login seguro con Next Auth.",
                EN: "Developed a secure login with Next Auth.",
            }

        ]
    },
    {
        title: {
            ES: "Casa Miau",
            EN: "Casa Miau",
        },
        image: "/porftolio/projects/proy-casa-miau.JPG",
        url: "https://github.com/EdwardMelendezM/CasaMiau",
        technologies: ["Php", "MVC", "Mysql", "Bootstrap", "Javascript"],
        descriptions: [
            {
                ES: "Desarrolle un sistema de gestion de adopciones de mascotas, con un sistema de login y roles.",
                EN: "Developed a pet adoption management system, with a login and roles system.",
            },
            {
                ES: "Colabore en la gestion de la base de datos, implementando un modelo relacional.",
                EN: "Collaborated in the management of the database, implementing a relational model.",
            }

        ]
    },
    {
        title: {
            ES: "Sistema de Gestion de Silabos",
            EN: "Syllabus Management System",
        },
        image: "/porftolio/projects/proy-centro-computo.JPG",
        url: "https://github.com/EdwardMelendezM/SISTEMA-DE-GESTION-DE-SILABOS-Y-CONTROL-DE-ASISTENCIA-PARA-EL-DEPARTAMENTO-ACADEMICO-DE-ING.-INFORMA",
        technologies: ["Php", "MVC", "Mysql", "Bootstrap", "Javascript", "Reportes PDF"],
        descriptions: [
            {
                ES: "Desarrolle un sistema de gestion de silabos y control de asistencia para el departamento academico de Ing. Informatica.",
                EN: "Developed a syllabus management system and attendance control for the academic department of Computer Engineering.",
            },
            {
                ES: "Colabore en la gestion de la base de datos, implementando un modelo relacional.",
                EN: "Collaborated in the management of the database, implementing a relational model.",
            },
            {
                ES: "Mejore la integracion de reportes PDF, para la generacion de reportes de asistencia y silabos.",
                EN: "Improved the integration of PDF reports, for the generation of attendance and syllabus reports.",
            },
            {
                ES: "Colabore en la funcionalidad de ingreso masivo de datos, para la gestion de silabos y asistencia.",
                EN: "Collaborated in the functionality of mass data entry, for the management of syllabi and attendance.",
            }

        ]
    },
    {
        title: {
            ES: "CMS Ecommerce",
            EN: "CMS Ecommerce",
        },
        image: "/porftolio/projects/proy-ecommerce.jpg",
        url: "https://ecommerce-admin-pi-eight.vercel.app/sign-in?redirect_url=https%3A%2F%2Fecommerce-admin-pi-eight.vercel.app%2F",
        technologies: ["CMS", "Next JS", "Tailwind", "React JS", "Prisma DB", "Planetscale", "Vercel"],
        descriptions: [
            {
                ES: "Desarrolle un CMS para la gestion de productos, categorias, usuarios y ordenes.",
                EN: "Developed a CMS for the management of products, categories, users and orders.",
            },
            {
                ES: "Colabore en la integracion de planescale con prisma, para la gestion de la base de datos.",
                EN: "Collaborated in the integration of planescale with prisma, for the management of the database.",
            },
            {
                ES: "Mejore la UI/UX del proyecto, implementando tailwind css.",
                EN: "Improved the UI/UX of the project, implementing tailwind css.",
            },
            {
                ES: "Desarrolle un login seguro con Next Auth.",
                EN: "Developed a secure login with Next Auth.",
            }

        ]
    },
    {
        title: {
            ES: "Afit gym",
            EN: "Afit gym",
        },
        image: "/porftolio/projects/proy-gym-afit.JPG",
        url: "https://edwardmelendezm.github.io/",
        technologies: ["Html", "Css", "Javascript", "Responsive Design"],
        descriptions: [
            {
                ES: "Desarrolle un sitio web para un gimnasio, con un diseño responsive.",
                EN: "Developed a website for a gym, with a responsive design.",
            },
            {
                ES: "Mejore la UI/UX del proyecto, implementando un diseño moderno y minimalista.",
                EN: "Improved the UI/UX of the project, implementing a modern and minimalist design.",
            }

        ]
    },
    {
        title: {
            ES: "CLone de  Messenger",
            EN: "Messenger Clone",
        },
        image: "/porftolio/projects/proy-messenger.jpg",
        url: "https://messenger-clone-next-js-13-fdf5nsnqb-edwardmelendezm.vercel.app/",
        technologies: ["Pusher", "Next JS", "Tailwind CSS", "React JS", "Vercel", "MongoDB"],
        descriptions: [
            {
                ES: "Desarrolle un clon de messenger, con un chat en tiempo real.",
                EN: "Developed a messenger clone, with a real-time chat.",
            },
            {
                ES: "Mejore la UI/UX del proyecto, implementando tailwind css.",
                EN: "Improved the UI/UX of the project, implementing tailwind css.",
            },
            {
                ES: "Desarrolle un login seguro con Next Auth.",
                EN: "Developed a secure login with Next Auth.",
            },
            {
                ES: "Colabore en la integracion de pusher, para el chat en tiempo real.",
                EN: "Collaborated in the integration of pusher, for the real-time chat.",
            }

        ]
    },
];

export interface Experience {
    title: {
        ES: string
        EN: string
    }
    company: {
        ES: string
        EN: string
    }
    duration: {
        ES: string
        EN: string
    }
    description: {
        ES: string
        EN: string
    }
    badges: string[]
}

export const experiences: Experience[] = [
    {
        title: {
            ES: "CEO",
            EN: "CEO",
        },
        company: {
            ES: "Sin Codigo IA",
            EN: "Sin Codigo IA",
        },
        duration: {
            ES: "Dic 2024 - Presente",
            EN: "Dec 2024 - Present",
        },
        description: {
            ES: "Desarrolle un sistema para la gestion de talleres, bootcamps y cursos online, con un sistema de login y roles. Ademas publique la aplicacion en play store para android.",
            EN: "Developed a system for the management of workshops, bootcamps and online courses, with a login and roles system. I also published the application on the play store for android.",
        },
        badges: ['NextJs', 'Docker', 'Postgres', 'React Native', 'Google Cloud', '...'],
    },
    {
        title: {
            ES: "CTO",
            EN: "CTO",
        },
        company: {
            ES: "Creativa Labs",
            EN: "Creativa Labs",
        },
        duration: {
            ES: "Enero 2023 - Presente",
            EN: "January 2023 - Present",
        },
        description: {
            ES: "Colabore en el desarrollo y mantenimiento de una plataforma LMS para la gestion de cursos online. Ademas lideré el equipo de desarrolladores para la creación de aplicaciones web altamente interactivas utilizando tecnologías modernas como Next.js, Prisma, Postgres, Tailwind y Vercel.",
            EN: "Collaborated in the development and maintenance of an LMS platform for the management of online courses. I also led full stack developer team to create highly interactive web applications using modern technologies such as Next.js, Prisma, Postgres, Tailwind, and Vercel.",
        },
        badges: ['NextJs', 'Prisma', 'Postgres', 'Tailwind', 'Vercel', '...'],
    },
    {
        title: {
            ES: "Desarrollador de Software",
            EN: "Software Developer",
        },
        company: {
            ES: "Smart City S.A.C.",
            EN: "Smart City S.A.C.",
        },
        duration: {
            ES: "Set 2023 - Set 2024",
            EN: "Set 2023 - Set 2024",
        },
        description: {
            ES: "Colabore en el desarrollo y mantenimiento de aplicaciones ERP. Ademas mejore el desarrollo de microservicios con angular 17 y go, implementando clean architecture.",
            EN: "Collaborated in the development and maintenance of ERP applications. I also improved the development of microservices with angular 17 and go, implementing clean architecture.",
        },
        badges: ['Angular', 'Go', 'Microservices', 'Kubernetes', 'E2E', '...'],
    },
    {
        title: {
            ES: "Fundador de InfoCode19",
            EN: "Founder of InfoCode19",
        },
        company: {
            ES: "InfoCode19",
            EN: "InfoCode19",
        },
        duration: {
            ES: "Nov 2021 - Dic 2024",
            EN: "Nov 2021 - Dec 2024",
        },
        description: {
            ES: "Desarrolle proyectos de forma free lance para empresas y personas naturales en el area de desarrollo web.",
            EN: "I developed projects on a freelance basis for companies and individuals in the web development area.",
        },
        badges: ['Qwik', 'Astro', 'Nest js', 'React Native', 'Flutter', '...']
    },
    {
        title: {
            ES: "Fundador de ASDU",
            EN: "Founder of ASDU",
        },
        company: {
            EN: "Association of Software Developers of the Unsaac",
            ES: "Asociacion de Desarrolladores de Software de la Unsaac",
        },
        duration: {
            ES: "Dic 2021 - Presente",
            EN: "Dic 2021 - Present",
        },
        description: {
            ES: "Lideré equipos de desarrolladores fullstack para la creación de aplicaciones web altamente interactivas utilizando tecnologías modernas como React.js, Next.js, Node.js y Go.",
            EN: "I led full stack developer teams to create highly interactive web applications using modern technologies such as React.js, Next.js, Node.js, and Go.",
        },
        badges: ['Next js', 'Prisma', 'Mongo DB', 'Tailwind', 'Mysql', '...']
    }
]
