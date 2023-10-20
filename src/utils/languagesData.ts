// there is 9 languages: portuguese, english, spanish, japanese, ukrainian, german, français, russian, chinese.
export const language = {
    portuguese: {
        titles: {
            portuguese: "português",
            english: "inglês",
            spanish: "espanhol",
            japanese: "japonês",
            ukrainian: "ucraniano",
            german: "alemão",
            fançais: "francês",
            russian: "russo",
            chinese: "chinês"
        },
        whatsButton: "Falar no whatsapp",
        apresentationTitle: "Criando experiências por meio da tecnologia",
        apresentationDescription: "Sou Desenvolvedor Web Full Stack formado na Kenzie Academy Brasil, participando de diversos projetos, resolvendo problemas de alto nível e procurando desenvolver novas habilidades",
        apresentationButtons: ["Projetos", "Tecnologias"],
        stacksTitle: "Ferramentas que domino (clique para saber mais)",
        stacksDescription: {
            footerMessage: "Página web: ",
            html: {
                description: "HTML (HyperText Markup Language) é o bloco de construção mais básico da Web. Ele define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML são geralmente usadas para descrever a aparência/apresentação (CSS) ou funcionalidade/comportamento (JavaScript) de uma página da web.",
            },
            css: {
                description: "Cascading Style Sheets — ou CSS — é a primeira tecnologia que você deve começar a aprender depois do HTML. Enquanto o HTML é usado para definir a estrutura e a semântica do seu conteúdo, o CSS é usado para estilizá-lo e organizá-lo. Por exemplo, você pode usar CSS para alterar a fonte, a cor, o tamanho e o espaçamento do seu conteúdo, dividi-lo em várias colunas ou adicionar animações e outros recursos decorativos.",
            },
            javaScript: {
                description: "JavaScript (JS) é uma linguagem de programação interpretada leve (ou compilada just-in-time) com funções de primeira classe. Embora seja mais conhecida como linguagem de script para páginas da Web, muitos ambientes que não são de navegador também a utilizam, como Node.js, Apache CouchDB e Adobe Acrobat. JavaScript é uma linguagem dinâmica baseada em protótipo, multiparadigma, de thread único, que oferece suporte a estilos orientados a objetos, imperativos e declarativos (programação funcional).",
            },
            nodeJs: {
                description: "",
            },
            styledComponents: {
                description: "",
            },
            react: {
                description: "",
            },
            typeScript: {
                description: "",
            },
            docker: {
                description: "",
            },
            tailwind: {
                description: "Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
            },
            sass: {
                description: "CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
            },
            stitches: {
                description: "CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience. Avoids unnecessary prop interpolations at runtime, making it more performant than other styling libraries. Stitches has a dedicated React lib, but @stitches/core works with any framework including Vue, Svelte, and even vanilla HTML. Packed full of useful features like theming, smart tokens, css prop, utils, and a fully-typed API."
            },
            nextJs: {
                description: "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
            },
            zod: {
                description: "Zod is a TypeScript-first schema declaration and validation library. The term schema is used to broadly refer to any data type, from a simple string to a complex nested object. Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. It's easy to compose simpler types into complex data structures.",
            },
            axios: {
                description: "Axios é um cliente HTTP baseado em promessas para o Node.js e para o navegador. É isomórfico, podendo rodar no navegador e no Node.js com a mesma base de código. No lado do servidor usa o código nativo do Node.js (modulo http), enquanto no lado do cliente (navegador) usa XMLHttpRequests.",
            },
            solid: {
                description: ""
            },
            expressJs: {
                description: ""
            },
            nestJs: {
                description: ""
            },
            python: {
                description: ""
            },
            django: {
                description: ""
            },
            java: {
                description: ""
            },
            springBoot: {
                description: ""
            },
            jsonWebToken: {
                description: ""
            },
            postgreSql: {
                description: ""
            },
            bcrypt: {
                description: ""
            },
            jest: {
                description: ""
            },
            mySql: {
                description: ""
            },
            sqlite3: {
                description: ""
            },
            prisma: {
                description: ""
            },
            hibernate: {
                description: ""
            },
            jpa: {
                description: ""
            }
        }

    },
    english: {
        titles: {
            portuguese: "portuguese",
            english: "english",
            spanish: "spanish",
            japanese: "japanese",
            ukrainian: "ukrainian",
            german: "german",
            fançais: "french",
            russian: "russian",
            chinese: "chinese"
        },
        whatsButton: "Talk on whatsapp",
        apresentationTitle: "Creating experiences through technology",
        apresentationDescription: "I am a Full Stack Web Developer graduated from Kenzie Academy Brasil, participating in several projects, solving high-level problems and looking to develop new skills",
        apresentationButtons: ["Projects", "Technologies"],
        stacksTitle: "Tools I master (click to find out more)",
        stacksDescription: {
            footerMessage: "Web page: ",
            html: {
                description: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)."
            },
            css: {
                description: "Cascading Style Sheets — or CSS — is the first technology you should start learning after HTML. While HTML is used to define the structure and semantics of your content, CSS is used to style it and lay it out. For example, you can use CSS to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features."
            },
            javaScript: {
                description: "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (functional programming) styles."
            },
            nodeJs: {
                description: "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. Node.js being designed without threads doesn't mean you can't take advantage of multiple cores in your environment, which allows you to share sockets between processes to enable load balancing over your cores."
            },
            styledComponents: {
                description: "CSS for the <Component/> Age. Styling your way with speed, strong typing, and flexibility."
            },
            react: {
                description: "The library for web and native user interfaces. React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps."
            },
            typeScript: {
                description: "TypeScript is JavaScript with syntax for types. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript understands JavaScript and uses type inference to give you great tooling without additional code."
            },
            docker: {
                description: "Make better, secure software from the start. Develop your own unique applications with Docker images and create multiple containers using Docker Compose. Docker works with all development tools such as VS Code, CircleCI, and GitHub. Run in any environment consistently from on-premises Kubernetes to AWS ECS, Azure ACI, Google GKE, and more."
            },
            tailwind: {
                description: "Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
            },
            sass: {
                description: "CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
            },
            stitches: {
                description: "CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience. Avoids unnecessary prop interpolations at runtime, making it more performant than other styling libraries. Stitches has a dedicated React lib, but @stitches/core works with any framework including Vue, Svelte, and even vanilla HTML. Packed full of useful features like theming, smart tokens, css prop, utils, and a fully-typed API."
            },
            nextJs: {
                description: "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
            },
            zod: {
                description: "Zod is a TypeScript-first schema declaration and validation library. The term schema is used to broadly refer to any data type, from a simple string to a complex nested object. Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. It's easy to compose simpler types into complex data structures.",
            },
            axios: {
                description: "Axios é um cliente HTTP baseado em promessas para o Node.js e para o navegador. É isomórfico, podendo rodar no navegador e no Node.js com a mesma base de código. No lado do servidor usa o código nativo do Node.js (modulo http), enquanto no lado do cliente (navegador) usa XMLHttpRequests.",
            },
            expressJs: {
                description: "Framework web rápido, flexível e minimalista para Node.js. É um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel."
            },
            nestJs: {
                description: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications. Gives you true flexibility by allowing use of any other libraries thanks to modular architecture. An adaptable ecosystem that is a fully-fledged backbone for all kinds of server-side applications. Takes advantage of latest JavaScript features, bringing design patterns and mature solutions to Node.js world."
            },
            python: {
                description: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a batteries included language due to its comprehensive standard library"
            },
            django: {
                description: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It's free and open source. Django was designed to help developers take applications from concept to completion as quickly as possible. Takes security seriously and helps developers avoid many common security mistakes. Some of the busiest sites on the web leverage Django's ability to quickly and flexibly scale."
            },
            java: {
                description: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages."
            },
            springBoot: {
                description: "pring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can \"just run\". Create stand-alone Spring applications. Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files). Provide opinionated 'starter' dependencies to simplify your build configuration. Automatically configure Spring and 3rd party libraries whenever possible. Provide production-ready features such as metrics, health checks, and externalized configuration. Absolutely no code generation and no requirement for XML configuration"
            },
            jsonWebToken: {
                description: "JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it."
            },
            postgreSql: {
                description: "PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads. The origins of PostgreSQL date back to 1986 as part of the POSTGRES project at the University of California at Berkeley and has more than 35 years of active development on the core platform. PostgreSQL has earned a strong reputation for its proven architecture, reliability, data integrity, robust feature set, extensibility, and the dedication of the open source community behind the software to consistently deliver performant and innovative solutions. PostgreSQL runs on all major operating systems, has been ACID-compliant since 2001, and has powerful add-ons such as the popular PostGIS geospatial database extender. It is no surprise that PostgreSQL has become the open source relational database of choice for many people and organisations."
            },
            bcrypt: {
                description: "bcrypt is a password-hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher and presented at USENIX in 1999. Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power. The bcrypt function is the default password hash algorithm for OpenBSD, and was the default for some Linux distributions such as SUSE Linux. There are implementations of bcrypt in C, C++, C#, Embarcadero Delphi, Elixir, Go, Java, JavaScript, Perl, PHP, Ruby, and other languages."
            },
            jest: {
                description: "Jest is a delightful JavaScript Testing Framework with a focus on simplicity. Make tests which keep track of large objects with ease. Snapshots live either alongside your tests, or embedded inline. Tests are parallelized by running them in their own processes to maximize performance."
            },
            mySql: {
                description: "MySQL HeatWave is a fully managed database service for transactions, real- time analytics across data warehouses and data lakes, and machine learning services, without the complexity, latency, and cost of ETL duplication. It is available on OCI, AWS, and Azure. The most comprehensive set of advanced features, management tools and technical support to achieve the highest levels of MySQL scalability, security, reliability, and uptime. MySQL Cluster enables users to meet the database challenges of next generation web, cloud, and communications services with uncompromising scalability, uptime and agility."
            },
            sqlite3: {
                description: "SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine. SQLite is the most used database engine in the world. SQLite is built into all mobile phones and most computers and comes bundled inside countless other applications that people use every day. The SQLite file format is stable, cross-platform, and backwards compatible and the developers pledge to keep it that way through the year 2050. SQLite database files are commonly used as containers to transfer rich content between systems and as a long-term archival format for data."
            },
            prisma: {
                description: "Next-generation Node.js and TypeScript ORM. Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion. The Prisma schema is intuitive and lets you declare your database tables in a human-readable way — making your data modeling experience a delight. You define your models by hand or introspect them from an existing database."
            },
            hibernate: {
                description: "Hibernate ORM enables developers to more easily write applications whose data outlives the application process. As an Object/Relational Mapping (ORM) framework, Hibernate is concerned with data persistence as it applies to relational databases (via JDBC). In addition to its own \"native\" API, Hibernate is also an implementation of the Java Persistence API (JPA) specification. As such, it can be easily used in any environment supporting JPA including Java SE applications, Java EE application servers, Enterprise OSGi containers, etc. Hibernate supports lazy initialization, numerous fetching strategies and optimistic locking with automatic versioning and time stamping. Hibernate requires no special database tables or fields and generates much of the SQL at system initialization time instead of at runtime. Hibernate consistently offers superior performance over straight JDBC code, both in terms of developer productivity and runtime performance."
            },
            jpa: {
                description: "Jakarta Persistence (JPA; formerly Java Persistence API) is a Jakarta EE application programming interface specification that describes the management of relational data in enterprise Java applications. A persistence entity is a lightweight Java class with its state typically persisted to a table in a relational database. Instances of such an entity correspond to individual rows in the table. Entities typically have relationships with other entities, and these relationships are expressed through object/relational mapping (ORM) metadata. This metadata may be specified directly in the entity class file by using annotations or in a separate XML descriptor file distributed with the application."
            }
        }

    },
    spanish: {
        titles: {
            portuguese: "portugués",
            english: "inglés",
            spanish: "español",
            japanese: "japonés",
            ukrainian: "ucranio",
            german: "alemán",
            fançais: "francés",
            russian: "ruso",
            chinese: "chino"
        },
        whatsButton: "hablar por whatsap",
        apresentationTitle: "Creando experiencias a través de la tecnología",
        apresentationDescription: "Soy Desarrollador Web Full Stack graduado de Kenzie Academy Brasil, participando en varios proyectos, resolviendo problemas de alto nivel y buscando desarrollar nuevas habilidades.",
        apresentationButtons: ["Proyectos", "Tecnologías"],
        stacksTitle: "Herramientas que domino (haga clic para obtener más información)",
        stacksDescription: {
            footerMessage: "Página web: ",
            html: {
                description: "HTML (lenguaje de marcado de hipertexto) es el bloque de construcción más básico de la Web. Define el significado y la estructura del contenido web. Otras tecnologías además de HTML se utilizan generalmente para describir la apariencia/presentación (CSS) o la funcionalidad/comportamiento (JavaScript) de una página web."
            },
            css: {
                description: "Las hojas de estilo en cascada, o CSS, son la primera tecnología que debes empezar a aprender después de HTML. Mientras que HTML se utiliza para definir la estructura y la semántica de su contenido, CSS se utiliza para diseñarlo y diseñarlo. Por ejemplo, puede utilizar CSS para modificar la fuente, el color, el tamaño y el espaciado de su contenido, dividirlo en varias columnas o agregar animaciones y otras características decorativas."
            },
            javaScript: {
                description: "JavaScript (JS) es un lenguaje de programación ligero interpretado (o compilado justo a tiempo) con funciones de primera clase. Si bien es más conocido como lenguaje de programación para páginas web, muchos entornos que no son de navegador también lo utilizan, como Node.js, Apache CouchDB y Adobe Acrobat. JavaScript es un lenguaje dinámico basado en prototipos, multiparadigma, de un solo subproceso, que admite estilos orientados a objetos, imperativos y declarativos (programación funcional)."
            },
            nodeJs: {
                description: ""
            },
            styledComponents: {
                description: ""
            },
            react: {
                description: ""
            },
            typeScript: {
                description: ""
            },
            docker: {
                description: ""
            },
            tailwind: {
                description: "Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
            },
            sass: {
                description: "CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
            },
            stitches: {
                description: "CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience. Avoids unnecessary prop interpolations at runtime, making it more performant than other styling libraries. Stitches has a dedicated React lib, but @stitches/core works with any framework including Vue, Svelte, and even vanilla HTML. Packed full of useful features like theming, smart tokens, css prop, utils, and a fully-typed API."
            },
            nextJs: {
                description: "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
            },
            zod: {
                description: "Zod is a TypeScript-first schema declaration and validation library. The term schema is used to broadly refer to any data type, from a simple string to a complex nested object. Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. It's easy to compose simpler types into complex data structures.",
            },
            axios: {
                description: "Axios é um cliente HTTP baseado em promessas para o Node.js e para o navegador. É isomórfico, podendo rodar no navegador e no Node.js com a mesma base de código. No lado do servidor usa o código nativo do Node.js (modulo http), enquanto no lado do cliente (navegador) usa XMLHttpRequests.",
            },
            solid: {
                description: ""
            },
            expressJs: {
                description: ""
            },
            nestJs: {
                description: ""
            },
            python: {
                description: ""
            },
            django: {
                description: ""
            },
            java: {
                description: ""
            },
            springBoot: {
                description: ""
            },
            jsonWebToken: {
                description: ""
            },
            postgreSql: {
                description: ""
            },
            bcrypt: {
                description: ""
            },
            jest: {
                description: ""
            },
            mySql: {
                description: ""
            },
            sqlite3: {
                description: ""
            },
            prisma: {
                description: ""
            },
            hibernate: {
                description: ""
            },
            jpa: {
                description: ""
            }
        }

    },
    japanese: {
        titles: {
            portuguese: "ポルトガル語",
            english: "英語",
            spanish: "スペイン語",
            japanese: "日本語",
            ukrainian: "ウクライナ語",
            german: "ドイツ人",
            fançais: "フランス語",
            russian: "ロシア",
            chinese: "中国語"
        },
        whatsButton: "WhatsApp で話す",
        apresentationTitle: "テクノロジーによる体験の創造",
        apresentationDescription: "私は Kenzie Academy Brasil を卒業したフルスタック Web 開発者で、いくつかのプロジェクトに参加し、高レベルの問題を解決し、新しいスキルの開発を目指しています。",
        apresentationButtons: ["プロジェクト", "テクノロジー"],
        stacksTitle: "私がマスターしているツール (クリックして詳細を確認)",
        stacksDescription: {
            footerMessage: "ウェブページ: ",
            html: {
                description: "HTML (HyperText Markup Language) は、Web の最も基本的な構成要素です。 Web コンテンツの意味と構造を定義します。一般に、Web ページの外観/プレゼンテーション (CSS) または機能/動作 (JavaScript) を記述するために、HTML 以外の他のテクノロジが使用されます。"
            },
            css: {
                description: "カスケード スタイル シート (CSS) は、HTML の次に学習を開始する必要があるテクノロジです。 HTML はコンテンツの構造とセマンティクスを定義するために使用されますが、CSS はコンテンツのスタイルとレイアウトに使用されます。たとえば、CSS を使用して、コンテンツのフォント、色、サイズ、間隔を変更したり、コンテンツを複数の列に分割したり、アニメーションやその他の装飾機能を追加したりできます。"
            },
            javaScript: {
                description: "JavaScript (JS) は、ファーストクラスの関数を備えた軽量のインタープリタ (またはジャストインタイム コンパイル) プログラミング言語です。 Web ページのスクリプト言語として最もよく知られていますが、Node.js、Apache CouchDB、Adobe Acrobat など、ブラウザ以外の多くの環境でも使用されています。 JavaScript は、プロトタイプベースのマルチパラダイム、シングルスレッドの動的言語であり、オブジェクト指向、命令型、宣言型 (関数型プログラミング) スタイルをサポートしています。"
            },
            nodeJs: {
                description: ""
            },
            styledComponents: {
                description: ""
            },
            react: {
                description: ""
            },
            typeScript: {
                description: ""
            },
            docker: {
                description: ""
            },
            tailwind: {
                description: "Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
            },
            sass: {
                description: "CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
            },
            stitches: {
                description: "CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience. Avoids unnecessary prop interpolations at runtime, making it more performant than other styling libraries. Stitches has a dedicated React lib, but @stitches/core works with any framework including Vue, Svelte, and even vanilla HTML. Packed full of useful features like theming, smart tokens, css prop, utils, and a fully-typed API."
            },
            nextJs: {
                description: "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
            },
            zod: {
                description: "Zod is a TypeScript-first schema declaration and validation library. The term schema is used to broadly refer to any data type, from a simple string to a complex nested object. Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. It's easy to compose simpler types into complex data structures.",
            },
            axios: {
                description: "Axios é um cliente HTTP baseado em promessas para o Node.js e para o navegador. É isomórfico, podendo rodar no navegador e no Node.js com a mesma base de código. No lado do servidor usa o código nativo do Node.js (modulo http), enquanto no lado do cliente (navegador) usa XMLHttpRequests.",
            },
            solid: {
                description: ""
            },
            expressJs: {
                description: ""
            },
            nestJs: {
                description: ""
            },
            python: {
                description: ""
            },
            django: {
                description: ""
            },
            java: {
                description: ""
            },
            springBoot: {
                description: ""
            },
            jsonWebToken: {
                description: ""
            },
            postgreSql: {
                description: ""
            },
            bcrypt: {
                description: ""
            },
            jest: {
                description: ""
            },
            mySql: {
                description: ""
            },
            sqlite3: {
                description: ""
            },
            prisma: {
                description: ""
            },
            hibernate: {
                description: ""
            },
            jpa: {
                description: ""
            }
        }

    },
    ukrainian: {
        titles: {
            portuguese: "португальська",
            english: "англійська",
            spanish: "Іспанська",
            japanese: "Японський",
            ukrainian: "українська",
            german: "Німецький",
            fançais: "французька",
            russian: "російський",
            chinese: "китайський"
        },
        whatsButton: "Спілкуйтеся в WhatsApp",
        apresentationTitle: "Створення досвіду за допомогою технологій",
        apresentationDescription: "Я веб-розробник Full Stack, закінчив Kenzie Academy Brasil, беру участь у кількох проектах, вирішую проблеми високого рівня та хочу розвивати нові навички",
        apresentationButtons: ["проекти", "технології"],
        stacksTitle: "Інструменти, якими я володію (натисніть, щоб дізнатися більше)",
        stacksDescription: {
            footerMessage: "веб-сторінка: ",
            html: {
                description: "HTML (мова гіпертекстової розмітки) є основним будівельним блоком Інтернету. Він визначає значення та структуру веб-вмісту. Інші технології, окрім HTML, зазвичай використовуються для опису зовнішнього вигляду/подання веб-сторінки (CSS) або функціональності/поведінки (JavaScript)."
            },
            css: {
                description: "Каскадні таблиці стилів — або CSS — це перша технологія, яку ви повинні почати вивчати після HTML. Тоді як HTML використовується для визначення структури та семантики вашого вмісту, CSS використовується для його стилізації та компонування. Наприклад, ви можете використовувати CSS, щоб змінити шрифт, колір, розмір і відстань вмісту, розділити його на кілька стовпців або додати анімацію та інші декоративні функції."
            },
            javaScript: {
                description: "JavaScript (JS) — це полегшена інтерпретована (або своєчасно скомпільована) мова програмування з першокласними функціями. Хоча він найбільш відомий як мова сценаріїв для веб-сторінок, багато середовищ без браузерів також використовують його, наприклад Node.js, Apache CouchDB і Adobe Acrobat. JavaScript — це заснована на прототипі, багатопарадигмальна, однопотокова, динамічна мова, яка підтримує об’єктно-орієнтований, імперативний і декларативний (функціональне програмування) стилі."
            },
            nodeJs: {
                description: ""
            },
            styledComponents: {
                description: ""
            },
            react: {
                description: ""
            },
            typeScript: {
                description: ""
            },
            docker: {
                description: ""
            },
            tailwind: {
                description: "Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
            },
            sass: {
                description: "CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
            },
            stitches: {
                description: "CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience. Avoids unnecessary prop interpolations at runtime, making it more performant than other styling libraries. Stitches has a dedicated React lib, but @stitches/core works with any framework including Vue, Svelte, and even vanilla HTML. Packed full of useful features like theming, smart tokens, css prop, utils, and a fully-typed API."
            },
            nextJs: {
                description: "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
            },
            zod: {
                description: "Zod is a TypeScript-first schema declaration and validation library. The term schema is used to broadly refer to any data type, from a simple string to a complex nested object. Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. It's easy to compose simpler types into complex data structures.",
            },
            axios: {
                description: "Axios é um cliente HTTP baseado em promessas para o Node.js e para o navegador. É isomórfico, podendo rodar no navegador e no Node.js com a mesma base de código. No lado do servidor usa o código nativo do Node.js (modulo http), enquanto no lado do cliente (navegador) usa XMLHttpRequests.",
            },
            solid: {
                description: ""
            },
            expressJs: {
                description: ""
            },
            nestJs: {
                description: ""
            },
            python: {
                description: ""
            },
            django: {
                description: ""
            },
            java: {
                description: ""
            },
            springBoot: {
                description: ""
            },
            jsonWebToken: {
                description: ""
            },
            postgreSql: {
                description: ""
            },
            bcrypt: {
                description: ""
            },
            jest: {
                description: ""
            },
            mySql: {
                description: ""
            },
            sqlite3: {
                description: ""
            },
            prisma: {
                description: ""
            },
            hibernate: {
                description: ""
            },
            jpa: {
                description: ""
            }
        }

    },
    german: {
        titles: {
            portuguese: "portugiesisch",
            english: "englisch",
            spanish: "spanisch",
            japanese: "japanisch",
            ukrainian: "ukrainisch",
            german: "deutsch",
            fançais: "französisch",
            russian: "russisch",
            chinese: "chinesisch"
        },
        whatsButton: "Sprechen Sie über WhatsApp",
        apresentationTitle: "Erlebnisse durch Technologie schaffen",
        apresentationDescription: "Ich bin ein Full-Stack-Webentwickler mit Abschluss an der Kenzie Academy Brasil, der an mehreren Projekten teilnimmt, komplexe Probleme löst und neue Fähigkeiten entwickeln möchte",
        apresentationButtons: ["Projekte", "Technologien"],
        stacksTitle: "Werkzeuge, die ich beherrsche (klicken Sie hier, um mehr zu erfahren)",
        stacksDescription: {
            footerMessage: "Website: ",
            html: {
                description: "HTML (HyperText Markup Language) ist der grundlegendste Baustein des Webs. Es definiert die Bedeutung und Struktur von Webinhalten. Neben HTML werden im Allgemeinen auch andere Technologien verwendet, um das Erscheinungsbild/die Präsentation (CSS) oder die Funktionalität/das Verhalten (JavaScript) einer Webseite zu beschreiben."
            },
            css: {
                description: "Cascading Style Sheets – oder CSS – ist die erste Technologie, die Sie nach HTML erlernen sollten. Während HTML verwendet wird, um die Struktur und Semantik Ihres Inhalts zu definieren, wird CSS verwendet, um ihn zu formatieren und zu gestalten. Mit CSS können Sie beispielsweise Schriftart, Farbe, Größe und Abstand Ihres Inhalts ändern, ihn in mehrere Spalten aufteilen oder Animationen und andere dekorative Funktionen hinzufügen."
            },
            javaScript: {
                description: "JavaScript (JS) ist eine leichtgewichtig interpretierte (oder Just-in-Time-kompilierte) Programmiersprache mit erstklassigen Funktionen. Während sie vor allem als Skriptsprache für Webseiten bekannt ist, wird sie auch von vielen Nicht-Browser-Umgebungen verwendet, beispielsweise Node.js, Apache CouchDB und Adobe Acrobat. JavaScript ist eine prototypbasierte, multiparadigmatische, dynamische Single-Thread-Sprache, die objektorientierte, imperative und deklarative (funktionale Programmierung) Stile unterstützt."
            },
            nodeJs: {
                description: ""
            },
            styledComponents: {
                description: ""
            },
            react: {
                description: ""
            },
            typeScript: {
                description: ""
            },
            docker: {
                description: ""
            },
            tailwind: {
                description: "Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
            },
            sass: {
                description: "CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
            },
            stitches: {
                description: "CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience. Avoids unnecessary prop interpolations at runtime, making it more performant than other styling libraries. Stitches has a dedicated React lib, but @stitches/core works with any framework including Vue, Svelte, and even vanilla HTML. Packed full of useful features like theming, smart tokens, css prop, utils, and a fully-typed API."
            },
            nextJs: {
                description: "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
            },
            zod: {
                description: "Zod is a TypeScript-first schema declaration and validation library. The term schema is used to broadly refer to any data type, from a simple string to a complex nested object. Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. It's easy to compose simpler types into complex data structures.",
            },
            axios: {
                description: "Axios é um cliente HTTP baseado em promessas para o Node.js e para o navegador. É isomórfico, podendo rodar no navegador e no Node.js com a mesma base de código. No lado do servidor usa o código nativo do Node.js (modulo http), enquanto no lado do cliente (navegador) usa XMLHttpRequests.",
            },
            solid: {
                description: ""
            },
            expressJs: {
                description: ""
            },
            nestJs: {
                description: ""
            },
            python: {
                description: ""
            },
            django: {
                description: ""
            },
            java: {
                description: ""
            },
            springBoot: {
                description: ""
            },
            jsonWebToken: {
                description: ""
            },
            postgreSql: {
                description: ""
            },
            bcrypt: {
                description: ""
            },
            jest: {
                description: ""
            },
            mySql: {
                description: ""
            },
            sqlite3: {
                description: ""
            },
            prisma: {
                description: ""
            },
            hibernate: {
                description: ""
            },
            jpa: {
                description: ""
            }
        }

    },
    français: {
        titles: {
            portuguese: "portugais",
            english: "anglais",
            spanish: "espagnol",
            japanese: "japonais",
            ukrainian: "ukrainien",
            german: "allemand",
            fançais: "français",
            russian: "russe",
            chinese: "chinois"
        },
        whatsButton: "Parlez sur WhatsApp",
        apresentationTitle: "Créer des expériences grâce à la technologie",
        apresentationDescription: "Je suis un développeur Web Full Stack diplômé de la Kenzie Academy Brasil, participant à plusieurs projets, résolvant des problèmes de haut niveau et cherchant à développer de nouvelles compétences.",
        apresentationButtons: ["Projets", "Les technologies"],
        stacksTitle: "Outils que je maîtrise (cliquez pour en savoir plus)",
        stacksDescription: {
            footerMessage: "Page web: ",
            html: {
                description: "HTML (HyperText Markup Language) est l’élément de base du Web. Il définit la signification et la structure du contenu Web. D'autres technologies que HTML sont généralement utilisées pour décrire l'apparence/présentation (CSS) ou la fonctionnalité/comportement (JavaScript) d'une page Web."
            },
            css: {
                description: "Les feuilles de style en cascade – ou CSS – sont la première technologie que vous devriez commencer à apprendre après le HTML. Alors que HTML est utilisé pour définir la structure et la sémantique de votre contenu, CSS est utilisé pour le styliser et le présenter. Par exemple, vous pouvez utiliser CSS pour modifier la police, la couleur, la taille et l'espacement de votre contenu, le diviser en plusieurs colonnes ou ajouter des animations et d'autres éléments décoratifs."
            },
            javaScript: {
                description: "JavaScript (JS) est un langage de programmation léger interprété (ou compilé juste à temps) doté de fonctions de première classe. Bien qu'il soit surtout connu comme langage de script pour les pages Web, de nombreux environnements autres que les navigateurs l'utilisent également, tels que Node.js, Apache CouchDB et Adobe Acrobat. JavaScript est un langage dynamique, multi-paradigmes, monothread, basé sur un prototype, prenant en charge les styles orientés objet, impératifs et déclaratifs (programmation fonctionnelle)."
            },
            nodeJs: {
                description: ""
            },
            styledComponents: {
                description: ""
            },
            react: {
                description: ""
            },
            typeScript: {
                description: ""
            },
            docker: {
                description: ""
            },
            tailwind: {
                description: "Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
            },
            sass: {
                description: "CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
            },
            stitches: {
                description: "CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience. Avoids unnecessary prop interpolations at runtime, making it more performant than other styling libraries. Stitches has a dedicated React lib, but @stitches/core works with any framework including Vue, Svelte, and even vanilla HTML. Packed full of useful features like theming, smart tokens, css prop, utils, and a fully-typed API."
            },
            nextJs: {
                description: "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
            },
            zod: {
                description: "Zod is a TypeScript-first schema declaration and validation library. The term schema is used to broadly refer to any data type, from a simple string to a complex nested object. Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. It's easy to compose simpler types into complex data structures.",
            },
            axios: {
                description: "Axios é um cliente HTTP baseado em promessas para o Node.js e para o navegador. É isomórfico, podendo rodar no navegador e no Node.js com a mesma base de código. No lado do servidor usa o código nativo do Node.js (modulo http), enquanto no lado do cliente (navegador) usa XMLHttpRequests.",
            },
            solid: {
                description: ""
            },
            expressJs: {
                description: ""
            },
            nestJs: {
                description: ""
            },
            python: {
                description: ""
            },
            django: {
                description: ""
            },
            java: {
                description: ""
            },
            springBoot: {
                description: ""
            },
            jsonWebToken: {
                description: ""
            },
            postgreSql: {
                description: ""
            },
            bcrypt: {
                description: ""
            },
            jest: {
                description: ""
            },
            mySql: {
                description: ""
            },
            sqlite3: {
                description: ""
            },
            prisma: {
                description: ""
            },
            hibernate: {
                description: ""
            },
            jpa: {
                description: ""
            }
        }

    },
    russian: {
        titles: {
            portuguese: "португальский",
            english: "Английский",
            spanish: "испанский",
            japanese: "Японский",
            ukrainian: "украинец",
            german: "Немецкий",
            fançais: "Французский",
            russian: "Русский",
            chinese: "Китайский"
        },
        whatsButton: "Поговорите в WhatsApp",
        apresentationTitle: "Создание опыта с помощью технологий",
        apresentationDescription: "Я веб-разработчик Full Stack, окончил Академию Кензи в Бразилии, участвую в нескольких проектах, решаю проблемы высокого уровня и стремлюсь развивать новые навыки.",
        apresentationButtons: ["Проекты", "Технологии"],
        stacksTitle: "Инструменты, которыми я владею (нажмите, чтобы узнать больше)",
        stacksDescription: {
            footerMessage: "веб-страница: ",
            html: {
                description: "HTML (язык гипертекстовой разметки) — это самый основной строительный блок Интернета. Он определяет значение и структуру веб-контента. Помимо HTML, для описания внешнего вида/представления веб-страницы (CSS) или функциональности/поведения (JavaScript) обычно используются и другие технологии."
            },
            css: {
                description: "Каскадные таблицы стилей (или CSS) — это первая технология, которую вам следует начать изучать после HTML. В то время как HTML используется для определения структуры и семантики вашего контента, CSS используется для его стилизации и размещения. Например, вы можете использовать CSS, чтобы изменить шрифт, цвет, размер и интервал вашего контента, разделить его на несколько столбцов или добавить анимацию и другие декоративные функции."
            },
            javaScript: {
                description: "JavaScript (JS) — это легковесный интерпретируемый (или оперативно компилируемый) язык программирования с первоклассными функциями. Хотя он наиболее известен как язык сценариев для веб-страниц, его также используют многие небраузерные среды, например Node.js, Apache CouchDB и Adobe Acrobat. JavaScript — это многопарадигмальный однопоточный динамический язык на основе прототипов, поддерживающий объектно-ориентированный, императивный и декларативный (функциональное программирование) стили."
            },
            nodeJs: {
                description: ""
            },
            styledComponents: {
                description: ""
            },
            react: {
                description: ""
            },
            typeScript: {
                description: ""
            },
            docker: {
                description: ""
            },
            tailwind: {
                description: "Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
            },
            sass: {
                description: "CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
            },
            stitches: {
                description: "CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience. Avoids unnecessary prop interpolations at runtime, making it more performant than other styling libraries. Stitches has a dedicated React lib, but @stitches/core works with any framework including Vue, Svelte, and even vanilla HTML. Packed full of useful features like theming, smart tokens, css prop, utils, and a fully-typed API."
            },
            nextJs: {
                description: "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
            },
            zod: {
                description: "Zod is a TypeScript-first schema declaration and validation library. The term schema is used to broadly refer to any data type, from a simple string to a complex nested object. Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. It's easy to compose simpler types into complex data structures.",
            },
            axios: {
                description: "Axios é um cliente HTTP baseado em promessas para o Node.js e para o navegador. É isomórfico, podendo rodar no navegador e no Node.js com a mesma base de código. No lado do servidor usa o código nativo do Node.js (modulo http), enquanto no lado do cliente (navegador) usa XMLHttpRequests.",
            },
            solid: {
                description: ""
            },
            expressJs: {
                description: ""
            },
            nestJs: {
                description: ""
            },
            python: {
                description: ""
            },
            django: {
                description: ""
            },
            java: {
                description: ""
            },
            springBoot: {
                description: ""
            },
            jsonWebToken: {
                description: ""
            },
            postgreSql: {
                description: ""
            },
            bcrypt: {
                description: ""
            },
            jest: {
                description: ""
            },
            mySql: {
                description: ""
            },
            sqlite3: {
                description: ""
            },
            prisma: {
                description: ""
            },
            hibernate: {
                description: ""
            },
            jpa: {
                description: ""
            }
        }

    },
    chinese: {
        titles: {
            portuguese: "葡萄牙语",
            english: "英语",
            spanish: "西班牙语",
            japanese: "日本人",
            ukrainian: "乌克兰",
            german: "德语",
            fançais: "法语",
            russian: "俄语",
            chinese: "中国人"
        },
        whatsButton: "在 Whatsapp 上交谈",
        apresentationTitle: "通过技术创造体验",
        apresentationDescription: "我是一名全端 Web 開發人員，畢業於巴西 Kenzie Academy 參與多個項目，解決高級問題並尋求發展新技能",
        apresentationButtons: ["项目", "技术"],
        stacksTitle: "我掌握的工具（点击查看更多）",
        stacksDescription: {
            footerMessage: "网页: ",
            html: {
                description: "HTML（超文本标记语言）是 Web 最基本的构建块。它定义了网页内容的含义和结构。除 HTML 之外的其他技术通常用于描述网页的外观/表示 (CSS) 或功能/行为 (JavaScript)。"
            },
            css: {
                description: "级联样式表（或 CSS）是继 HTML 之后您应该开始学习的第一项技术。 HTML 用于定义内容的结构和语义，而 CSS 用于设置内容的样式和布局。例如，您可以使用 CSS 更改内容的字体、颜色、大小和间距，将其拆分为多列，或添加动画和其他装饰功能。"
            },
            javaScript: {
                description: "JavaScript (JS) 是一种具有一流功能的轻量级解释（或即时编译）编程语言。虽然它是最著名的网页脚本语言，但许多非浏览器环境也使用它，例如 Node.js、Apache CouchDB 和 Adob​​e Acrobat。 JavaScript 是一种基于原型、多范式、单线程、动态语言，支持面向对象、命令式和声明式（函数式编程）风格。"
            },
            nodeJs: {
                description: ""
            },
            styledComponents: {
                description: ""
            },
            react: {
                description: ""
            },
            typeScript: {
                description: ""
            },
            docker: {
                description: ""
            },
            tailwind: {
                description: "Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
            },
            sass: {
                description: "CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
            },
            stitches: {
                description: "CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience. Avoids unnecessary prop interpolations at runtime, making it more performant than other styling libraries. Stitches has a dedicated React lib, but @stitches/core works with any framework including Vue, Svelte, and even vanilla HTML. Packed full of useful features like theming, smart tokens, css prop, utils, and a fully-typed API."
            },
            nextJs: {
                description: "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
            },
            zod: {
                description: "Zod is a TypeScript-first schema declaration and validation library. The term schema is used to broadly refer to any data type, from a simple string to a complex nested object. Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. It's easy to compose simpler types into complex data structures.",
            },
            axios: {
                description: "Axios é um cliente HTTP baseado em promessas para o Node.js e para o navegador. É isomórfico, podendo rodar no navegador e no Node.js com a mesma base de código. No lado do servidor usa o código nativo do Node.js (modulo http), enquanto no lado do cliente (navegador) usa XMLHttpRequests.",
            },
            solid: {
                description: ""
            },
            expressJs: {
                description: ""
            },
            nestJs: {
                description: ""
            },
            python: {
                description: ""
            },
            django: {
                description: ""
            },
            java: {
                description: ""
            },
            springBoot: {
                description: ""
            },
            jsonWebToken: {
                description: ""
            },
            postgreSql: {
                description: ""
            },
            bcrypt: {
                description: ""
            },
            jest: {
                description: ""
            },
            mySql: {
                description: ""
            }
        }

    }
}