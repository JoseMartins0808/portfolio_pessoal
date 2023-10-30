import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import imgAxios from "../public/static/img/stack/axios.png";
import imgZod from "../public/static/img/stack/zod.png";
import imgBcrypt from "../public/static/img/stack/bcrypt.png";
import imgJpa from "../public/static/img/stack/jpa.jpg";

import {
    SiTypescript, SiTailwindcss,
    SiNextdotjs, SiNestjs, SiPython, SiDjango,
    SiSpringboot, SiJsonwebtokens, SiPostgresql,
    SiSqlite, SiPrisma, SiHibernate, SiApachemaven, SiCsharp, SiDotnet,
    // SiSass, SiJest, SiMysql, SiExpress,
} from "react-icons/si";
import { FaDocker, FaJava } from "react-icons/fa";
import { RxStitchesLogo } from "react-icons/rx";

export const projects = [
    {
        title: "Shop Cars",
        description: "Um site de anúncios de veículos a nível profissional, onde em cada anúncio é possível inserir múltiplas imagens, comentários, dados do veículo e anunciante, contato ao anunciante via WhatsApp, e disparo de e-mails automáticos de acordo com a regra de negócio.",
        language: "TypeScript",
        gitLink: "https://github.com/KenzieCars/ShopCars",
        deployLink: "https://frontend-one-opal.vercel.app/",
        linkedIn: null,
        stacks: [
            {
                title: "HTML",
                img: imgHTML
            },
            {
                title: "CSS",
                img: imgCSS
            },
            {
                title: "Node Js",
                img: imgNode
            },
            {
                title: "Styled Components",
                img: imgStyled
            },
            {
                title: "React Js",
                img: imgReact
            },
            {
                title: "TypeScript",
                img: SiTypescript
            },
            {
                title: "Zod",
                img: imgZod
            },
            {
                title: "Axios",
                img: imgAxios
            },
            {
                title: "Nest Js",
                img: SiNestjs
            },
            {
                title: "Json Web Token",
                img: SiJsonwebtokens
            },
            {
                title: "PostgreSQL",
                img: SiPostgresql
            },
            {
                title: "Bcrypt",
                img: imgBcrypt
            },
            {
                title: "Prisma ORM",
                img: SiPrisma
            }
        ],
        images: []
    },
    {
        title: "Controle de Contratos",
        language: "C Sharp",
        description: "Uma API em C# e Asp .NET, onde é possível cadastrar pessoas e contratos, modificar contratos e excluir os mesmos.",
        gitLink: "https://github.com/JoseMartins0808/Contract_control_csharp",
        deployLink: null,
        linkedIn: null,
        stacks: [
            {
                title: "C Sharp",
                img: SiCsharp
            },
            {
                title: "ASP .NET",
                img: SiDotnet
            }
        ],
        images: []
    },
    {
        title: "Controle de Finanças",
        description: "Uma API em Java e Spring Boot, onde é possível criar usuário e conta, realizar depósito em conta, e transferir valores entre contas.",
        language: "Java",
        gitLink: "https://github.com/JoseMartins0808/Java_API_Financial_Control",
        deployLink: null,
        linkedIn: "https://www.linkedin.com/posts/jose-martins-de-souza-netto_github-josemartins0808javaapifinancialcontrol-activity-7117881109610164224-YazO?utm_source=share&utm_medium=member_desktop",
        stacks: [
            {
                title: "Java",
                img: FaJava
            },
            {
                title: "Spring Boot",
                img: SiSpringboot
            },
            {
                title: "Apache Maven",
                img: SiApachemaven
            },
            {
                title: "Bcrypt",
                img: imgBcrypt
            },
            {
                title: "PostgreSQL",
                img: SiPostgresql
            },
            {
                title: "Hibernate ORM",
                img: SiHibernate
            },
            {
                title: "JPA",
                img: imgJpa
            }
        ],
        images: []
    },
    {
        title: "Gerenciamento de Biblioteca",
        description: "Um projeto em grupo, onde criamos uma API Rest de uma biblioteca. Cadastra-se livros e podemos adicionar comentários ao livro. Cadastra-se cópias, e podemos reservar cópias para empréstimos, com data de devolução. Há também disparo de e-mail avisando da data da devolução, e bloqueio de usuário.",
        language: "Python",
        gitLink: "https://github.com/BookWise-API/bookwise-api",
        deployLink: null,
        linkedIn: null,
        stacks: [
            {
                title: "Python",
                img: SiPython
            },
            {
                title: "Django",
                img: SiDjango
            },
            {
                title: "PostgreSQL",
                img: SiPostgresql
            },
            {
                title: "Json Web Token",
                img: SiJsonwebtokens
            }
        ],
        images: []
    },
    {
        title: "Lista de Tarefas",
        description: "Uma API em Java, onde é possível cadastrar usuários e suas respectivas tarefas, por descrição e prioridade.",
        language: "Java",
        gitLink: "https://github.com/JoseMartins0808/Java_Next-TO-DO-LIST-Full_Stack",
        deployLink: "https://to-do-list-cx47.onrender.com",
        linkedIn: "https://www.linkedin.com/posts/jose-martins-de-souza-netto_java-activity-7117231000442540032-Wt53?utm_source=share&utm_medium=member_desktop",
        stacks: [
            {
                title: "Docker",
                img: FaDocker
            },
            {
                title: "Java",
                img: FaJava
            },
            {
                title: "Spring Boot",
                img: SiSpringboot
            },
            {
                title: "Apache Maven",
                img: SiApachemaven
            },
            {
                title: "Hibernate ORM",
                img: SiHibernate
            },
            {
                title: "JPA",
                img: imgJpa
            }
        ],
        images: []
    },
    {
        title: "Rick and Morty",
        description: "Uma página web que consome a API do Rick and Morty, renderizando os personagens de acordo com o avanço das páginas.",
        language: "JavaScript",
        gitLink: "https://github.com/JoseMartins0808/Rick-and-Morty",
        deployLink: null,
        linkedIn: "https://www.linkedin.com/posts/jose-martins-de-souza-netto_euquedesenvolvi-activity-7026756250725924864-dfcI?utm_source=share&utm_medium=member_desktop",
        stacks: [
            {
                title: "HTML",
                img: imgHTML
            },
            {
                title: "CSS",
                img: imgCSS
            },
            {
                title: "JsvaScript",
                img: imgJS
            },
            {
                title: "Node Js",
                img: imgNode
            },
            {
                title: "React Js",
                img: imgReact
            },
            {
                title: "Axios",
                img: imgAxios
            }
        ],
        images: []
    },
    {
        title: "Music Player",
        description: "Um projeto Full Stack criado em Next Js(frontend) e Nest Js(backend), onde é possível cadastrar músicas e ouví-las no player.",
        language: "TypeScript",
        gitLink: "https://github.com/JoseMartins0808/music-player_full_stack",
        deployLink: null,
        linkedIn: null,
        stacks: [
            {
                title: "Node Js",
                img: imgNode
            },
            {
                title: "TypeScript",
                img: SiTypescript
            },
            {
                title: "Tailwind Css",
                img: SiTailwindcss
            },
            {
                title: "Next Js",
                img: SiNextdotjs
            },
            {
                title: "Axios",
                img: imgAxios
            },
            {
                title: "Nest Js",
                img: SiNestjs
            },
            {
                title: "PostgreSQL",
                img: SiPostgresql
            },
            {
                title: "Bcrypt",
                img: imgBcrypt
            },
            {
                title: "Json Web Token",
                img: SiJsonwebtokens
            },
            {
                title: "Prisma ORM",
                img: SiPrisma
            }
        ],
        images: []
    },
    {
        title: "Portfólio Pessoal",
        description: "A web page com meus principais projetos, criado em React Js, com modais de apresentação de stacks, e aporte de 9 idiomas diferentes.",
        language: "TypeScript",
        gitLink: "https://github.com/JoseMartins0808/portfolio_pessoal",
        deployLink: "https://portfolio-pessoal-jose-martins.vercel.app/",
        linkedIn: "https://www.linkedin.com/posts/jose-martins-de-souza-netto_com-grande-alegria-que-apresento-meu-portf%C3%B3lio-activity-7091677355219259392-ejpj?utm_source=share&utm_medium=member_desktop",
        stacks: [
            {
                title: "Node JS",
                img: imgNode
            },
            {
                title: "React Js",
                img: imgReact
            },
            {
                title: "TypeScript",
                img: SiTypescript
            },
            {
                title: "Stitches Css",
                img: RxStitchesLogo
            },
            {
                title: "Axios",
                img: imgAxios
            }
        ],
        images: []
    },
    {
        title: "Loja da Tecnologia",
        description: "Um projeto full stack onde apresenta uma loja virtual para aquisição de itens eletrônicos. É possível fazer login na loja através de uma conta Google.",
        language: "TypeScript",
        gitLink: "https://github.com/JoseMartins0808/tech-store_full-stack",
        deployLink: null,
        linkedIn: null,
        stacks: [
            {
                title: "Node JS",
                img: imgNode
            },
            {
                title: "TypeScript",
                img: SiTypescript
            },
            {
                title: "Tailwind Css",
                img: SiTailwindcss
            },
            {
                title: "Next Js",
                img: SiNextdotjs
            },
            {
                title: "Axios",
                img: imgAxios
            }
        ],
        images: []
    },
    // {
    //     title: "",
    //     language: "",
    //     gitLink: "",
    //     deployLink: "",
    //     linkedIn: "",
    //     stacks: [],
    //     images: []
    // },
    // {
    //     title: "",
    //     language: "",
    //     gitLink: "",
    //     deployLink: "",
    //     linkedIn: "",
    //     stacks: [],
    //     images: []
    // },
    // {
    //     title: "",
    //     language: "",
    //     gitLink: "",
    //     deployLink: "",
    //     linkedIn: "",
    //     stacks: [],
    //     images: []
    // },
]