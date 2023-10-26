// there is 9 languages: portuguese, english, spanish, japanese, ukrainian, german, français, russian, chinese.
export const language = {
    portuguese: {
        title: "Idioma",
        titles: {
            portuguese: "português",
            english: "inglês",
            spanish: "espanhol",
            japanese: "japonês",
            ukrainian: "ucraniano",
            german: "alemão",
            french: "francês",
            russian: "russo",
            chinese: "chinês"
        },
        whatsButton: "Falar no whatsapp",
        apresentationTitle: "Criando experiências por meio da tecnologia",
        apresentationDescription: "Sou Desenvolvedor Web Full Stack formado na Kenzie Academy Brasil, participando de diversos projetos, resolvendo problemas de alto nível e procurando desenvolver novas habilidades",
        apresentationButtons: ["Projetos", "Tecnologias"],
        stacksTitle: "Ferramentas que domino (clique para saber mais)",
        stacksDescription: {
            footerMessage: "Página web:",
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
                description: "Como um tempo de execução JavaScript assíncrono orientado a eventos, o Node.js foi projetado para construir aplicativos de rede escalonáveis. Node.js é semelhante em design e influenciado por sistemas como Ruby's Event Machine e Python's Twisted. O Node.js leva o modelo de evento um pouco mais longe. Ele apresenta um loop de eventos como uma construção de tempo de execução em vez de uma biblioteca. Em outros sistemas, sempre há uma chamada de bloqueio para iniciar o loop de eventos. O Node.js sendo projetado sem threads não significa que você não possa aproveitar as vantagens de vários núcleos em seu ambiente, o que permite compartilhar soquetes entre processos para permitir o balanceamento de carga em seus núcleos.",
            },
            styledComponents: {
                description: "CSS para a era <Component/>. Estilize seu estilo com velocidade, digitação forte e flexibilidade.",
            },
            react: {
                description: "A biblioteca para interfaces de usuário web e nativas. O React permite construir interfaces de usuário a partir de peças individuais chamadas componentes. Crie seus próprios componentes React como Thumbnail, LikeButton e Video. Em seguida, combine-os em telas, páginas e aplicativos inteiros.",
            },
            typeScript: {
                description: "TypeScript é JavaScript com sintaxe para tipos. TypeScript é uma linguagem de programação fortemente tipada baseada em JavaScript, oferecendo melhores ferramentas em qualquer escala. TypeScript entende JavaScript e usa inferência de tipo para fornecer ótimas ferramentas sem código adicional.",
            },
            docker: {
                description: "Crie software melhor e seguro desde o início. Desenvolva seus próprios aplicativos exclusivos com imagens Docker e crie vários contêineres usando Docker Compose. Docker funciona com todas as ferramentas de desenvolvimento, como VS Code, CircleCI e GitHub. Execute em qualquer ambiente de forma consistente, desde Kubernetes local até AWS ECS, Azure ACI, Google GKE e muito mais.",
            },
            tailwind: {
                description: "Crie sites modernos rapidamente, sem sair do HTML. Uma estrutura CSS utilitária repleta de classes como flex, pt-4, text-center e rotate-90 que podem ser compostas para construir qualquer design, diretamente em sua marcação.",
            },
            sass: {
                description: "CSS com superpoderes. Sass é a linguagem de extensão CSS de nível profissional mais madura, estável e poderosa do mundo.",
            },
            stitches: {
                description: "CSS-in-JS com tempo de execução quase zero, SSR, suporte multivariante e a melhor experiência de desenvolvedor da categoria. Evita interpolações desnecessárias de prop em tempo de execução, tornando-o mais eficiente do que outras bibliotecas de estilo. Stitches tem uma biblioteca React dedicada, mas @stitches/core funciona com qualquer estrutura, incluindo Vue, Svelte e até mesmo HTML vanilla. Repleto de recursos úteis, como temas, tokens inteligentes, suporte css, utilitários e uma API totalmente digitada."
            },
            nextJs: {
                description: "A estrutura React para a Web. Usado por algumas das maiores empresas do mundo, Next.js permite que você crie aplicativos Web full-stack, estendendo os recursos mais recentes do React e integrando poderosas ferramentas JavaScript baseadas em Rust para compilações mais rápidas.",
            },
            zod: {
                description: "Zod é uma primeira biblioteca de declaração e validação de esquema TypeScript. O termo esquema é usado para se referir amplamente a qualquer tipo de dados, desde uma string simples até um objeto aninhado complexo. Zod foi projetado para ser o mais amigável possível ao desenvolvedor. O objetivo é eliminar declarações de tipo duplicadas. Com Zod, você declara um validador uma vez e Zod inferirá automaticamente o tipo TypeScript estático. É fácil compor tipos mais simples em estruturas de dados complexas.",
            },
            axios: {
                description: "Axios é um cliente HTTP baseado em promessas para o Node.js e para o navegador. É isomórfico, podendo rodar no navegador e no Node.js com a mesma base de código. No lado do servidor usa o código nativo do Node.js (modulo http), enquanto no lado do cliente (navegador) usa XMLHttpRequests.",
            },
            expressJs: {
                description: "Framework web rápido, flexível e minimalista para Node.js. É um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel."
            },
            nestJs: {
                description: "Uma estrutura Node.js progressiva para construir aplicativos do lado do servidor eficientes, confiáveis ​​e escaláveis. Oferece verdadeira flexibilidade, permitindo o uso de qualquer outra biblioteca graças à arquitetura modular. Um ecossistema adaptável que é uma espinha dorsal completa para todos os tipos de aplicativos do lado do servidor. Aproveita os recursos mais recentes do JavaScript, trazendo padrões de design e soluções maduras para o mundo Node.js."
            },
            python: {
                description: "Python é uma linguagem de programação de alto nível e de uso geral. Sua filosofia de design enfatiza a legibilidade do código com o uso de recuo significativo. Python é digitado dinamicamente. Ele suporta vários paradigmas de programação, incluindo programação estruturada (particularmente processual), orientada a objetos e funcional. É frequentemente descrito como uma linguagem com baterias incluídas devido à sua abrangente biblioteca padrão"
            },
            django: {
                description: "Django é uma estrutura web Python de alto nível que incentiva o desenvolvimento rápido e um design limpo e pragmático. Desenvolvido por desenvolvedores experientes, ele cuida de grande parte do incômodo do desenvolvimento web, para que você possa se concentrar em escrever seu aplicativo sem precisar reinventar a roda. É gratuito e de código aberto. O Django foi projetado para ajudar os desenvolvedores a levar os aplicativos do conceito à conclusão o mais rápido possível. Leva a segurança a sério e ajuda os desenvolvedores a evitar muitos erros comuns de segurança. Alguns dos sites mais movimentados da web aproveitam a capacidade do Django de escalar de forma rápida e flexível."
            },
            java: {
                description: "Java é uma linguagem de programação orientada a objetos, baseada em classes e de alto nível, projetada para ter o mínimo possível de dependências de implementação. É uma linguagem de programação de uso geral destinada a permitir que os programadores escrevam uma vez e executem em qualquer lugar (WORA), o que significa que o código Java compilado pode ser executado em todas as plataformas que suportam Java sem a necessidade de recompilar. Os aplicativos Java são normalmente compilados em bytecode que pode ser executado em qualquer máquina virtual Java (JVM), independentemente da arquitetura do computador subjacente. A sintaxe de Java é semelhante a C e C++, mas possui menos recursos de baixo nível do que qualquer um deles. O tempo de execução Java fornece recursos dinâmicos (como reflexão e modificação de código de tempo de execução) que normalmente não estão disponíveis em linguagens compiladas tradicionais."
            },
            springBoot: {
                description: "O Spring Boot facilita a criação de aplicativos independentes baseados em Spring de nível de produção que você pode \"simplesmente executar\". Crie aplicativos Spring independentes. Incorpore Tomcat, Jetty ou Undertow diretamente (sem necessidade de implantar arquivos WAR). Forneça dependências 'iniciais' opinativas para simplificar sua configuração de compilação. Configure automaticamente bibliotecas Spring e de terceiros sempre que possível. Forneça recursos prontos para produção, como métricas, verificações de integridade e configuração externalizada. Absolutamente nenhuma geração de código e nenhum requisito para configuração XML"
            },
            jsonWebToken: {
                description: "JSON Web Token (JWT) é um padrão aberto que define uma maneira compacta e independente de transmitir informações com segurança entre as partes como um objeto JSON. Essas informações podem ser verificadas e confiáveis ​​porque são assinadas digitalmente. Embora os JWTs possam ser criptografados para também fornecer sigilo entre as partes, nos concentraremos nos tokens assinados. Os tokens assinados podem verificar a integridade das declarações contidas neles, enquanto os tokens criptografados ocultam essas declarações de outras partes. Quando os tokens são assinados usando pares de chaves pública/privada, a assinatura também certifica que apenas a parte que detém a chave privada é quem a assinou."
            },
            postgreSql: {
                description: "PostgreSQL é um poderoso sistema de banco de dados relacional de objeto de código aberto que usa e estende a linguagem SQL combinada com muitos recursos que armazenam e dimensionam com segurança as cargas de trabalho de dados mais complicadas. As origens do PostgreSQL remontam a 1986 como parte do projeto POSTGRES da Universidade da Califórnia em Berkeley e tem mais de 35 anos de desenvolvimento ativo na plataforma central. O PostgreSQL conquistou uma forte reputação por sua arquitetura comprovada, confiabilidade, integridade de dados, conjunto robusto de recursos, extensibilidade e dedicação da comunidade de código aberto por trás do software para fornecer soluções inovadoras e de desempenho consistente."
            },
            bcrypt: {
                description: "bcrypt é uma função de hashing de senha desenvolvida por Niels Provos e David Mazières, baseada na cifra Blowfish e apresentada na USENIX em 1999. Além de incorporar um sal para proteger contra ataques de tabela arco-íris, bcrypt é uma função adaptativa: ao longo do tempo, a contagem de iterações pode ser aumentado para torná-lo mais lento, de modo que permaneça resistente a ataques de busca de força bruta, mesmo com o aumento do poder de computação. A função bcrypt é o algoritmo de hash de senha padrão para OpenBSD e foi o padrão para algumas distribuições Linux, como SUSE Linux. Existem implementações de bcrypt em C, C++, C#, Embarcadero Delphi, Elixir, Go, Java, JavaScript, Perl, PHP, Ruby e outras linguagens."
            },
            jest: {
                description: "Jest é um framework de teste de JavaScript encantador com foco na simplicidade. Faça testes que rastreiem objetos grandes com facilidade. Os instantâneos ficam junto com seus testes ou incorporados in-line. Os testes são paralelizados executando-os em seus próprios processos para maximizar o desempenho."
            },
            mySql: {
                description: "MySQL HeatWave é um serviço de banco de dados totalmente gerenciado para transações, análises em tempo real em data warehouses e data lakes e serviços de aprendizado de máquina, sem a complexidade, a latência e o custo da duplicação de ETL. Está disponível em OCI, AWS e Azure. O conjunto mais abrangente de recursos avançados, ferramentas de gerenciamento e suporte técnico para atingir os mais altos níveis de escalabilidade, segurança, confiabilidade e tempo de atividade do MySQL. O MySQL Cluster permite que os usuários enfrentem os desafios de banco de dados da próxima geração de serviços web, nuvem e comunicações com escalabilidade, tempo de atividade e agilidade intransigentes."
            },
            sqlite: {
                description: "SQLite é uma biblioteca em linguagem C que implementa um mecanismo de banco de dados SQL pequeno, rápido, independente, de alta confiabilidade e completo. SQLite é o mecanismo de banco de dados mais usado no mundo. O SQLite está integrado em todos os telefones celulares e na maioria dos computadores e vem integrado em inúmeros outros aplicativos que as pessoas usam todos os dias. O formato de arquivo SQLite é estável, multiplataforma e compatível com versões anteriores e os desenvolvedores se comprometem a mantê-lo assim até o ano de 2050. Os arquivos de banco de dados SQLite são comumente usados ​​como contêineres para transferir conteúdo rico entre sistemas e como formato de arquivamento de longo prazo para dados."
            },
            prisma: {
                description: "Node.js e TypeScript ORM de última geração. Prisma desbloqueia um novo nível de experiência do desenvolvedor ao trabalhar com bancos de dados graças ao seu modelo de dados intuitivo, migrações automatizadas, segurança de tipo e preenchimento automático. O esquema Prisma é intuitivo e permite que você declare suas tabelas de banco de dados de uma forma legível – tornando sua experiência de modelagem de dados uma delícia. Você define seus modelos manualmente ou os analisa a partir de um banco de dados existente."
            },
            hibernate: {
                description: "O Hibernate ORM permite que os desenvolvedores escrevam com mais facilidade aplicações cujos dados sobrevivem ao processo de aplicação. Como uma estrutura de Mapeamento Objeto/Relacional (ORM), o Hibernate se preocupa com a persistência de dados conforme se aplica a bancos de dados relacionais (via JDBC). Além de sua própria API “nativa”, o Hibernate também é uma implementação da especificação Java Persistence API (JPA). Como tal, ele pode ser facilmente usado em qualquer ambiente que suporte JPA, incluindo aplicativos Java SE, servidores de aplicativos Java EE, contêineres Enterprise OSGi, etc. O Hibernate suporta inicialização lenta, inúmeras estratégias de busca e bloqueio otimista com versionamento automático e registro de data e hora. O Hibernate não requer tabelas ou campos especiais do banco de dados e gera grande parte do SQL no momento da inicialização do sistema, e não no tempo de execução. O Hibernate oferece consistentemente desempenho superior em relação ao código JDBC direto, tanto em termos de produtividade do desenvolvedor quanto de desempenho em tempo de execução."
            },
            jpa: {
                description: "Jakarta Persistence (JPA; anteriormente Java Persistence API) é uma especificação de interface de programação de aplicativos Jakarta EE que descreve o gerenciamento de dados relacionais em aplicativos Java corporativos. Uma entidade de persistência é uma classe Java leve com seu estado normalmente persistido em uma tabela em um banco de dados relacional. As instâncias de tal entidade correspondem a linhas individuais da tabela. As entidades normalmente têm relacionamentos com outras entidades, e esses relacionamentos são expressos por meio de metadados de mapeamento objeto/relacional (ORM). Esses metadados podem ser especificados diretamente no arquivo de classe de entidade usando anotações ou em um arquivo descritor XML separado distribuído com o aplicativo."
            },
            maven: {
                description: "Apache Maven é uma ferramenta de gerenciamento e compreensão de projetos de software. Com base no conceito de modelo de objeto de projeto (POM), o Maven pode gerenciar a construção, os relatórios e a documentação de um projeto a partir de uma informação central."
            }
        }

    },
    english: {
        title: "Language",
        titles: {
            portuguese: "portuguese",
            english: "english",
            spanish: "spanish",
            japanese: "japanese",
            ukrainian: "ukrainian",
            german: "german",
            french: "french",
            russian: "russian",
            chinese: "chinese"
        },
        whatsButton: "Talk on whatsapp",
        apresentationTitle: "Creating experiences through technology",
        apresentationDescription: "I am a Full Stack Web Developer graduated from Kenzie Academy Brasil, participating in several projects, solving high-level problems and looking to develop new skills",
        apresentationButtons: ["Projects", "Technologies"],
        stacksTitle: "Tools I master (click to find out more)",
        stacksDescription: {
            footerMessage: "Web page:",
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
                description: "Axios is a promise-based HTTP client for Node.js and the browser. It is isomorphic, being able to run in a browser and in Node.js with the same code base. The server side uses native Node.js code (http module), while the client side (browser) uses XMLHttpRequests.",
            },
            expressJs: {
                description: "Fast, flexible and minimalist web framework for Node.js. It is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
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
                description: "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can \"just run\". Create stand-alone Spring applications. Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files). Provide opinionated 'starter' dependencies to simplify your build configuration. Automatically configure Spring and 3rd party libraries whenever possible. Provide production-ready features such as metrics, health checks, and externalized configuration. Absolutely no code generation and no requirement for XML configuration"
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
            sqlite: {
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
            },
            maven: {
                description: "Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information."
            }
        }

    },
    spanish: {
        title: "Idioma",
        titles: {
            portuguese: "portugués",
            english: "inglés",
            spanish: "español",
            japanese: "japonés",
            ukrainian: "ucranio",
            german: "alemán",
            french: "francés",
            russian: "ruso",
            chinese: "chino"
        },
        whatsButton: "hablar por whatsap",
        apresentationTitle: "Creando experiencias a través de la tecnología",
        apresentationDescription: "Soy Desarrollador Web Full Stack graduado de Kenzie Academy Brasil, participando en varios proyectos, resolviendo problemas de alto nivel y buscando desarrollar nuevas habilidades.",
        apresentationButtons: ["Proyectos", "Tecnologías"],
        stacksTitle: "Herramientas que domino (haga clic para obtener más información)",
        stacksDescription: {
            footerMessage: "Página web:",
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
                description: "Como tiempo de ejecución de JavaScript asincrónico controlado por eventos, Node.js está diseñado para crear aplicaciones de red escalables. Node.js es similar en diseño e influenciado por sistemas como Ruby's Event Machine y Python's Twisted. Node.js lleva el modelo de eventos un poco más allá. Presenta un bucle de eventos como una construcción en tiempo de ejecución en lugar de una biblioteca. En otros sistemas, siempre hay una llamada de bloqueo para iniciar el ciclo de eventos. El hecho de que Node.js esté diseñado sin subprocesos no significa que no pueda aprovechar múltiples núcleos en su entorno, lo que le permite compartir sockets entre procesos para permitir el equilibrio de carga en sus núcleos."
            },
            styledComponents: {
                description: "CSS para la era <Component/>. Diseñe a su manera con velocidad, escritura fuerte y flexibilidad."
            },
            react: {
                description: "La biblioteca para interfaces de usuario web y nativas. React te permite crear interfaces de usuario a partir de piezas individuales llamadas componentes. Cree sus propios componentes de React como Thumbnail, LikeButton y Video. Luego combínalos en pantallas, páginas y aplicaciones completas."
            },
            typeScript: {
                description: "TypeScript es JavaScript con sintaxis para tipos. TypeScript es un lenguaje de programación fuertemente tipado que se basa en JavaScript y le brinda mejores herramientas a cualquier escala. TypeScript comprende JavaScript y utiliza la inferencia de tipos para brindarle excelentes herramientas sin código adicional."
            },
            docker: {
                description: "Cree software mejor y seguro desde el principio. Desarrolle sus propias aplicaciones únicas con imágenes de Docker y cree múltiples contenedores usando Docker Compose. Docker funciona con todas las herramientas de desarrollo como VS Code, CircleCI y GitHub. Ejecútelo en cualquier entorno de manera consistente, desde Kubernetes local hasta AWS ECS, Azure ACI, Google GKE y más."
            },
            tailwind: {
                description: "Cree rápidamente sitios web modernos sin abandonar su HTML. Un marco CSS de utilidad repleto de clases como flex, pt-4, text-center y rotate-90 que se pueden componer para crear cualquier diseño, directamente en tu marcado.",
            },
            sass: {
                description: "CSS con superpoderes. Sass es el lenguaje de extensión CSS de nivel profesional más maduro, estable y potente del mundo.",
            },
            stitches: {
                description: "CSS en JS con tiempo de ejecución casi nulo, SSR, compatibilidad con múltiples variantes y la mejor experiencia para desarrolladores de su clase. Evita interpolaciones de accesorios innecesarias en tiempo de ejecución, lo que la hace más eficaz que otras bibliotecas de estilos. Stitches tiene una biblioteca React dedicada, pero @stitches/core funciona con cualquier marco, incluidos Vue, Svelte e incluso HTML básico. Repleto de funciones útiles como temas, tokens inteligentes, accesorios CSS, utilidades y una API completamente escrita."
            },
            nextJs: {
                description: "El marco React para la Web. Utilizado por algunas de las empresas más grandes del mundo, Next.js le permite crear aplicaciones web de pila completa ampliando las últimas funciones de React e integrando poderosas herramientas de JavaScript basadas en Rust para las compilaciones más rápidas.",
            },
            zod: {
                description: "Zod es una biblioteca de validación y declaración de esquemas basada en TypeScript. El término esquema se utiliza para referirse ampliamente a cualquier tipo de datos, desde una simple cadena hasta un objeto anidado complejo. Zod está diseñado para ser lo más amigable posible para los desarrolladores. El objetivo es eliminar declaraciones de tipo duplicadas. Con Zod, declaras un validador una vez y Zod inferirá automáticamente el tipo de TypeScript estático. Es fácil componer tipos más simples en estructuras de datos complejas.",
            },
            axios: {
                description: "Axios es un cliente HTTP basado en promesas para Node.js y para el navegador. Es isomórfico, podendo rodar no navegador y no Node.js con una misma base de código. Ningún lado del servidor usa el código nativo de Node.js (módulo http), mientras que ningún lado del cliente (navegador) usa XMLHttpRequests.",
            },
            expressJs: {
                description: "Framework web rápido, flexible y minimalista para Node.js. Es un marco de aplicación web Node.js mínimo y flexible que proporciona un conjunto sólido de funciones para aplicaciones web y móviles."
            },
            nestJs: {
                description: "Un marco Node.js progresivo para crear aplicaciones del lado del servidor eficientes, confiables y escalables. Le brinda verdadera flexibilidad al permitir el uso de cualquier otra biblioteca gracias a la arquitectura modular. Un ecosistema adaptable que es una columna vertebral completa para todo tipo de aplicaciones del lado del servidor. Aprovecha las últimas funciones de JavaScript, aportando patrones de diseño y soluciones maduras al mundo Node.js."
            },
            python: {
                description: "Python es un lenguaje de programación de alto nivel y de propósito general. Su filosofía de diseño enfatiza la legibilidad del código con el uso de sangría significativa. Python se escribe dinámicamente. Admite múltiples paradigmas de programación, incluida la programación estructurada (particularmente procedimental), orientada a objetos y funcional. A menudo se describe como un lenguaje con pilas incluidas debido a su completa biblioteca estándar."
            },
            django: {
                description: "Django es un marco web Python de alto nivel que fomenta un desarrollo rápido y un diseño limpio y pragmático. Creado por desarrolladores experimentados, se encarga de gran parte de las molestias del desarrollo web, para que puedas concentrarte en escribir tu aplicación sin necesidad de reinventar la rueda. Es gratuito y de código abierto. Django fue diseñado para ayudar a los desarrolladores a llevar las aplicaciones desde el concepto hasta su finalización lo más rápido posible. Se toma en serio la seguridad y ayuda a los desarrolladores a evitar muchos errores de seguridad comunes. Algunos de los sitios más concurridos de la web aprovechan la capacidad de Django para escalar de forma rápida y flexible."
            },
            java: {
                description: "Java es un lenguaje de programación orientado a objetos, basado en clases y de alto nivel que está diseñado para tener la menor cantidad de dependencias de implementación posible. Es un lenguaje de programación de propósito general destinado a permitir a los programadores escribir una vez y ejecutar en cualquier lugar (WORA), lo que significa que el código Java compilado se puede ejecutar en todas las plataformas que admitan Java sin necesidad de volver a compilarlo. Las aplicaciones Java generalmente se compilan en un código de bytes que puede ejecutarse en cualquier máquina virtual Java (JVM) independientemente de la arquitectura de la computadora subyacente. La sintaxis de Java es similar a la de C y C++, pero tiene menos funciones de bajo nivel que cualquiera de ellos. El tiempo de ejecución de Java proporciona capacidades dinámicas (como reflexión y modificación del código de tiempo de ejecución) que normalmente no están disponibles en los lenguajes compilados tradicionales."
            },
            springBoot: {
                description: "Spring Boot facilita la creación de aplicaciones independientes basadas en Spring de nivel de producción que puede \"simplemente ejecutar\". Cree aplicaciones Spring independientes. Incruste Tomcat, Jetty o Undertow directamente (no es necesario implementar archivos WAR). Proporcione dependencias \"iniciales\" obstinadas para simplificar la configuración de su compilación. Configure automáticamente bibliotecas Spring y de terceros siempre que sea posible. Proporcione funciones listas para producción, como métricas, comprobaciones de estado y configuración externalizada. Absolutamente sin generación de código y sin necesidad de configuración XML"
            },
            jsonWebToken: {
                description: "JSON Web Token (JWT) es un estándar abierto que define una forma compacta y autónoma de transmitir información de forma segura entre partes como un objeto JSON. Esta información se puede verificar y confiar porque está firmada digitalmente. Aunque los JWT se pueden cifrar para proporcionar también secreto entre las partes, nos centraremos en los tokens firmados. Los tokens firmados pueden verificar la integridad de los reclamos contenidos en ellos, mientras que los tokens cifrados ocultan esos reclamos a otras partes. Cuando los tokens se firman utilizando pares de claves pública/privada, la firma también certifica que solo la parte que posee la clave privada es la que la firmó."
            },
            postgreSql: {
                description: "PostgreSQL es un potente sistema de base de datos relacional de objetos de código abierto que utiliza y amplía el lenguaje SQL combinado con muchas funciones que almacenan y escalan de forma segura las cargas de trabajo de datos más complicadas. Los orígenes de PostgreSQL se remontan a 1986 como parte del proyecto POSTGRES de la Universidad de California en Berkeley y cuenta con más de 35 años de desarrollo activo en la plataforma central. PostgreSQL se ha ganado una sólida reputación por su arquitectura comprobada, confiabilidad, integridad de datos, conjunto de características sólidas, extensibilidad y la dedicación de la comunidad de código abierto detrás del software para ofrecer constantemente soluciones innovadoras y de alto rendimiento."
            },
            bcrypt: {
                description: "bcrypt es una función de hash de contraseñas diseñada por Niels Provos y David Mazières, basada en el cifrado Blowfish y presentada en USENIX en 1999. Además de incorporar una sal para proteger contra ataques a la tabla Rainbow, bcrypt es una función adaptativa: con el tiempo, el recuento de iteraciones se puede aumentar para hacerlo más lento, de modo que siga siendo resistente a los ataques de búsqueda de fuerza bruta incluso con una potencia de cálculo cada vez mayor. La función bcrypt es el algoritmo hash de contraseña predeterminado para OpenBSD y era el predeterminado para algunas distribuciones de Linux como SUSE Linux. Existen implementaciones de bcrypt en C, C++, C#, Embarcadero Delphi, Elixir, Go, Java, JavaScript, Perl, PHP, Ruby y otros lenguajes."
            },
            jest: {
                description: "Jest es un encantador marco de prueba de JavaScript centrado en la simplicidad. Realice pruebas que realicen un seguimiento de objetos grandes con facilidad. Las instantáneas se encuentran junto a sus pruebas o integradas en línea. Las pruebas se paralelizan ejecutándolas en sus propios procesos para maximizar el rendimiento."
            },
            mySql: {
                description: "MySQL HeatWave es un servicio de base de datos totalmente administrado para transacciones, análisis en tiempo real en almacenes y lagos de datos y servicios de aprendizaje automático, sin la complejidad, la latencia y el costo de la duplicación ETL. Está disponible en OCI, AWS y Azure. El conjunto más completo de funciones avanzadas, herramientas de administración y soporte técnico para lograr los niveles más altos de escalabilidad, seguridad, confiabilidad y tiempo de actividad de MySQL. MySQL Cluster permite a los usuarios enfrentar los desafíos de las bases de datos de los servicios web, de nube y de comunicaciones de próxima generación con escalabilidad, tiempo de actividad y agilidad sin concesiones."
            },
            sqlite: {
                description: "SQLite es una biblioteca en lenguaje C que implementa un motor de base de datos SQL pequeño, rápido, autónomo, de alta confiabilidad y con todas las funciones. SQLite es el motor de base de datos más utilizado del mundo. SQLite está integrado en todos los teléfonos móviles y en la mayoría de las computadoras y viene incluido en muchas otras aplicaciones que la gente usa todos los días. El formato de archivo SQLite es estable, multiplataforma y compatible con versiones anteriores y los desarrolladores se comprometen a mantenerlo así hasta el año 2050. Los archivos de base de datos SQLite se usan comúnmente como contenedores para transferir contenido enriquecido entre sistemas y como formato de archivo a largo plazo. para datos."
            },
            prisma: {
                description: "Node.js y TypeScript ORM de próxima generación. Prisma desbloquea un nuevo nivel de experiencia para desarrolladores cuando trabaja con bases de datos gracias a su modelo de datos intuitivo, migraciones automatizadas, seguridad de tipos y autocompletado. El esquema Prisma es intuitivo y le permite declarar las tablas de su base de datos de una manera legible por humanos, lo que hace que su experiencia de modelado de datos sea un placer. Usted define sus modelos a mano o los examina a partir de una base de datos existente."
            },
            hibernate: {
                description: "Hibernate ORM permite a los desarrolladores escribir más fácilmente aplicaciones cuyos datos sobreviven al proceso de solicitud. Como marco de Mapeo de Objetos/Relacional (ORM), Hibernate se preocupa por la persistencia de datos en su aplicación a bases de datos relacionales (a través de JDBC). Además de su propia API \"nativa\", Hibernate también es una implementación de la especificación Java Persistence API (JPA). Como tal, se puede utilizar fácilmente en cualquier entorno que admita JPA, incluidas aplicaciones Java SE, servidores de aplicaciones Java EE, contenedores Enterprise OSGi, etc. Hibernate admite inicialización diferida, numerosas estrategias de recuperación y bloqueo optimista con control de versiones automático y marca de tiempo. Hibernate no requiere tablas o campos de base de datos especiales y genera gran parte del SQL en el momento de la inicialización del sistema en lugar de en el tiempo de ejecución. Hibernate ofrece constantemente un rendimiento superior al código JDBC directo, tanto en términos de productividad del desarrollador como de rendimiento en tiempo de ejecución."
            },
            jpa: {
                description: "Jakarta Persistence (JPA; anteriormente Java Persistence API) es una especificación de interfaz de programación de aplicaciones Jakarta EE que describe la gestión de datos relacionales en aplicaciones Java empresariales. Una entidad de persistencia es una clase Java liviana cuyo estado generalmente persiste en una tabla en una base de datos relacional. Las instancias de dicha entidad corresponden a filas individuales de la tabla. Las entidades normalmente tienen relaciones con otras entidades, y estas relaciones se expresan a través de metadatos de mapeo de objetos/relacionales (ORM). Estos metadatos se pueden especificar directamente en el archivo de clase de entidad mediante el uso de anotaciones o en un archivo descriptor XML separado distribuido con la aplicación."
            },
            maven: {
                description: "Apache Maven es una herramienta de comprensión y gestión de proyectos de software. Basado en el concepto de modelo de objetos de proyecto (POM), Maven puede gestionar la construcción, los informes y la documentación de un proyecto desde una pieza de información central."
            }
        }

    },
    japanese: {
        title: "言語",
        titles: {
            portuguese: "ポルトガル語",
            english: "英語",
            spanish: "スペイン語",
            japanese: "日本語",
            ukrainian: "ウクライナ語",
            german: "ドイツ人",
            french: "フランス語",
            russian: "ロシア",
            chinese: "中国語"
        },
        whatsButton: "WhatsApp で話す",
        apresentationTitle: "テクノロジーによる体験の創造",
        apresentationDescription: "私は Kenzie Academy Brasil を卒業したフルスタック Web 開発者で、いくつかのプロジェクトに参加し、高レベルの問題を解決し、新しいスキルの開発を目指しています。",
        apresentationButtons: ["プロジェクト", "テクノロジー"],
        stacksTitle: "私がマスターしているツール (クリックして詳細を確認)",
        stacksDescription: {
            footerMessage: "ウェブページ:",
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
                description: "Node.js は、非同期イベント駆動型 JavaScript ランタイムとして、スケーラブルなネットワーク アプリケーションを構築するように設計されています。 Node.js は、Ruby の Event Machine や Python の Twisted などのシステムと設計が似ており、その影響を受けています。 Node.js はイベント モデルをさらに進化させます。イベント ループをライブラリではなくランタイム構造として提供します。他のシステムでは、イベント ループを開始するためのブロッキング呼び出しが常に存在します。 Node.js がスレッドなしで設計されているからといって、環境内で複数のコアを利用できないわけではありません。これにより、プロセス間でソケットを共有して、コア全体の負荷分散が可能になります。"
            },
            styledComponents: {
                description: "<Component/> Age の CSS。スピード、強力なタイピング、柔軟性で思いどおりのスタイルを実現します。"
            },
            react: {
                description: "Web およびネイティブ ユーザー インターフェイス用のライブラリ。 React を使用すると、コンポーネントと呼ばれる個々の部分からユーザー インターフェイスを構築できます。 Thumbnail、LikeButton、Video などの独自の React コンポーネントを作成します。次に、それらを画面全体、ページ、アプリに結合します。"
            },
            typeScript: {
                description: "TypeScript は、型の構文を備えた JavaScript です。 TypeScript は、JavaScript をベースに構築された厳密に型指定されたプログラミング言語であり、あらゆる規模でより優れたツールを提供します。 TypeScript は JavaScript を理解し、型推論を使用して、追加のコードなしで優れたツールを提供します。"
            },
            docker: {
                description: "最初からより優れた安全なソフトウェアを作成します。 Docker イメージを使用して独自のアプリケーションを開発し、Docker Compose を使用して複数のコンテナーを作成します。 Docker は、VS Code、CircleCI、GitHub などのすべての開発ツールと連携します。オンプレミスの Kubernetes から AWS ECS、Azure ACI、Google GKE など、あらゆる環境で一貫して実行します。"
            },
            tailwind: {
                description: "HTML から離れることなく、最新の Web サイトを迅速に構築できます。 flex、pt-4、text-center、rotate-90 などのクラスが詰め込まれたユーティリティ優先の CSS フレームワークで、マークアップ内で直接構成して任意のデザインを構築できます。",
            },
            sass: {
                description: "スーパーパワーを備えた CSS。 Sass は、世界で最も成熟し、安定しており、強力なプロフェッショナル グレードの CSS 拡張言語です。",
            },
            stitches: {
                description: "ほぼゼロのランタイム、SSR、マルチバリアントのサポート、クラス最高の開発者エクスペリエンスを備えた CSS-in-JS。実行時に不要なプロップ補間を回避し、他のスタイリング ライブラリよりもパフォーマンスが向上します。 Stitches には専用の React ライブラリがありますが、@stitches/core は Vue、Svelte、さらには標準の HTML を含むあらゆるフレームワークで動作します。テーマ、スマート トークン、CSS プロパティ、ユーティリティ、完全に型指定された API などの便利な機能が満載です。"
            },
            nextJs: {
                description: "Web 用の React フレームワーク。世界最大手の企業の一部で使用されている Next.js を使用すると、最新の React 機能を拡張し、強力な Rust ベースの JavaScript ツールを統合して最速のビルドを実現することで、フルスタックの Web アプリケーションを作成できます。",
            },
            zod: {
                description: "Zod は、TypeScript ファーストのスキーマ宣言および検証ライブラリです。スキーマという用語は、単純な文字列から複雑なネストされたオブジェクトに至るまで、あらゆるデータ型を広く指すために使用されます。 Zod は、可能な限り開発者にとって使いやすいように設計されています。目標は、重複した型宣言を排除することです。 Zod を使用すると、バリデーターを一度宣言すると、Zod が静的な TypeScript 型を自動的に推論します。単純な型を複雑なデータ構造に組み込むのは簡単です。",
            },
            axios: {
                description: "Axios とクライアントは、Node.js やナビゲーターのプロメッサとして使用される HTTP ベースです。これは、コードのメスマ ベースである Node.js をサポートするものではありません。 Node.js (modulo http) をサーバーとして使用したり、XMLHttpRequests を使用してクライアント (navegador) を作成したりする必要はありません。",
            },
            expressJs: {
                description: "Node.js 用の高速、柔軟、シンプルな Web フレームワーク。これは、Web およびモバイル アプリケーションに堅牢な機能セットを提供する、最小限で柔軟な Node.js Web アプリケーション フレームワークです。"
            },
            nestJs: {
                description: "効率的で信頼性が高く、スケーラブルなサーバー側アプリケーションを構築するための進歩的な Node.js フレームワーク。モジュラー アーキテクチャにより他のライブラリを使用できるため、真の柔軟性が得られます。あらゆる種類のサーバー側アプリケーションの本格的なバックボーンとなる適応性のあるエコシステム。最新の JavaScript 機能を利用して、デザイン パターンと成熟したソリューションを Node.js の世界にもたらします。"
            },
            python: {
                description: "Python は、高レベルの汎用プログラミング言語です。その設計哲学は、大幅なインデントを使用してコードの読みやすさを重視しています。 Python は動的に型付けされます。構造化 (特に手続き型)、オブジェクト指向、関数型プログラミングなど、複数のプログラミング パラダイムをサポートします。包括的な標準ライブラリがあるため、バッテリーを含む言語としてよく説明されます。"
            },
            django: {
                description: "Django は、迅速な開発とクリーンで実用的な設計を促進する高レベルの Python Web フレームワークです。経験豊富な開発者によって構築されており、Web 開発の面倒な作業の多くが処理されるため、車輪の再発明をすることなくアプリの作成に集中できます。無料でオープンソースです。 Django は、開発者がアプリケーションをコンセプトから完成までできるだけ早く進めることができるように設計されています。セキュリティを真剣に受け止め、開発者が多くの一般的なセキュリティ上の間違いを回避できるようにします。 Web 上で最もビジーなサイトの一部では、Django の迅速かつ柔軟な拡張機能を活用しています。"
            },
            java: {
                description: "Java は、実装の依存関係をできる限り少なくするように設計された、高レベルのクラスベースのオブジェクト指向プログラミング言語です。これは、プログラマが一度書いたらどこでも実行できる (WORA) ことを目的とした汎用プログラミング言語です。つまり、コンパイルされた Java コードは、再コンパイルすることなく、Java をサポートするすべてのプラットフォームで実行できます。 Java アプリケーションは通常、基盤となるコンピューター アーキテクチャに関係なく、任意の Java 仮想マシン (JVM) 上で実行できるバイトコードにコンパイルされます。 Java の構文は C および C++ に似ていますが、どちらよりも低レベルの機能が少なくなっています。 Java ランタイムは、従来のコンパイル言語では通常利用できない動的機能 (リフレクションやランタイム コードの変更など) を提供します。"
            },
            springBoot: {
                description: "Spring Boot を使用すると、「実行するだけ」のスタンドアロンの実稼働グレードの Spring ベースのアプリケーションを簡単に作成できます。スタンドアロン Spring アプリケーションを作成します。 Tomcat、Jetty、または Undertow を直接埋め込みます (WAR ファイルをデプロイする必要はありません)。独自の「スターター」依存関係を提供して、ビルド構成を簡素化します。可能な限り Spring およびサードパーティのライブラリを自動的に構成します。メトリクス、ヘルスチェック、外部化された構成などの本番環境に対応した機能を提供します。コード生成や XML 構成の必要はまったくありません"
            },
            jsonWebToken: {
                description: "JSON Web Token (JWT) は、関係者間で情報を JSON オブジェクトとして安全に送信するためのコンパクトで自己完結型の方法を定義するオープン スタンダードです。この情報はデジタル署名されているため、検証および信頼できます。 JWT を暗号化して当事者間の機密性を確保することもできますが、ここでは署名付きトークンに焦点を当てます。署名付きトークンはその中に含まれるクレームの整合性を検証できますが、暗号化されたトークンはそれらのクレームを他の当事者から隠します。公開鍵と秘密鍵のペアを使用してトークンに署名すると、その署名により、秘密鍵を保持している当事者のみがそれに署名した当事者であることも証明されます。"
            },
            postgreSql: {
                description: "PostgreSQL は、最も複雑なデータ ワークロードを安全に保存および拡張する多くの機能と組み合わせた SQL 言語を使用および拡張する、強力なオープン ソース オブジェクト リレーショナル データベース システムです。 PostgreSQL の起源は、カリフォルニア大学バークレー校の POSTGRES プロジェクトの一環として 1986 年に遡り、コア プラットフォームで 35 年以上にわたって活発な開発が行われてきました。 PostgreSQL は、実績のあるアーキテクチャ、信頼性、データの整合性、堅牢な機能セット、拡張性、そしてパフォーマンスと革新的なソリューションを一貫して提供するソフトウェアの背後にあるオープンソース コミュニティの献身的に高い評価を得ています。"
            },
            bcrypt: {
                description: "bcrypt は、Blowfish 暗号に基づいて Niels Provos と David Mazières によって設計されたパスワード ハッシュ関数であり、1999 年に USENIX で発表されました。bcrypt は、レインボー テーブル攻撃から保護するためのソルトを組み込んでいるだけでなく、適応関数でもあります。時間の経過とともに反復回数が増加します。を増やすと速度が低下するため、計算能力が増加してもブルートフォース検索攻撃に対する耐性が維持されます。 bcrypt 関数は、OpenBSD のデフォルトのパスワード ハッシュ アルゴリズムであり、SUSE Linux などの一部の Linux ディストリビューションのデフォルトでした。 C、C++、C#、Embarcadero Delphi、Elixir、Go、Java、JavaScript、Perl、PHP、Ruby、およびその他の言語での bcrypt の実装があります。"
            },
            jest: {
                description: "Jest は、シンプルさに重点を置いた優れた JavaScript テスト フレームワークです。大きなオブジェクトを簡単に追跡するテストを作成します。スナップショットはテストと一緒に保存されるか、インラインに埋め込まれます。テストは、パフォーマンスを最大化するために独自のプロセスで実行することで並列化されます。"
            },
            mySql: {
                description: "MySQL HeatWave は、トランザクション、データ ウェアハウスとデータ レイクにわたるリアルタイム分析、および機械学習サービスのためのフルマネージド データベース サービスであり、ETL 重複の複雑さ、遅延、コストがありません。 OCI、AWS、Azure で利用できます。最高レベルの MySQL のスケーラビリティ、セキュリティ、信頼性、稼働時間を実現するための高度な機能、管理ツール、技術サポートの最も包括的なセット。 MySQL Cluster を使用すると、ユーザーは妥協のないスケーラビリティ、稼働時間、俊敏性を備えて、次世代の Web、クラウド、通信サービスのデータベースの課題に対処できます。"
            },
            sqlite: {
                description: "SQLite は、小型、高速、自己完結型、高信頼性、フル機能の SQL データベース エンジンを実装する C 言語ライブラリです。 SQLite は、世界で最も使用されているデータベース エンジンです。 SQLite はすべての携帯電話とほとんどのコンピューターに組み込まれており、人々が毎日使用する無数の他のアプリケーションにバンドルされています。 SQLite ファイル形式は安定しており、クロスプラットフォームで下位互換性があり、開発者は 2050 年までこの形式を維持することを約束しています。SQLite データベース ファイルは、システム間でリッチ コンテンツを転送するためのコンテナとして、また長期アーカイブ形式としてよく使用されます。データ用。"
            },
            prisma: {
                description: "次世代の Node.js および TypeScript ORM。 Prisma は、直感的なデータ モデル、自動移行、タイプ セーフティおよびオートコンプリートにより、データベースを操作する際の新しいレベルの開発者エクスペリエンスを実現します。 Prisma スキーマは直感的で、人間が判読できる方法でデータベース テーブルを宣言できるため、データ モデリング エクスペリエンスが楽しくなります。モデルを手動で定義するか、既存のデータベースからモデルをイントロスペクトします。"
            },
            hibernate: {
                description: "Hibernate ORM を使用すると、開発者は、データがアプリケーション プロセスよりも長く存続するアプリケーションをより簡単に作成できます。オブジェクト/リレーショナル マッピング (ORM) フレームワークとして、Hibernate はリレーショナル データベースに (JDBC 経由で) 適用されるため、データの永続性に関心があります。 Hibernate は、独自の「ネイティブ」 API に加えて、Java Persistence API (JPA) 仕様の実装でもあります。そのため、Java SE アプリケーション、Java EE アプリケーション サーバー、Enterprise OSGi コンテナなど、JPA をサポートするあらゆる環境で簡単に使用できます。Hibernate は、遅延初期化、多数のフェッチ戦略、および自動バージョニングとタイムスタンプによる楽観的ロックをサポートしています。 Hibernate は特別なデータベース テーブルやフィールドを必要とせず、実行時ではなくシステム初期化時に SQL の多くを生成します。 Hibernate は、開発者の生産性と実行時のパフォーマンスの両方の点で、通常の JDBC コードよりも優れたパフォーマンスを一貫して提供します。"
            },
            jpa: {
                description: "Jakarta Persistence (JPA、旧称 Java Persistence API) は、エンタープライズ Java アプリケーションにおけるリレーショナル データの管理を記述する Jakarta EE アプリケーション プログラミング インターフェイス仕様です。永続エンティティは、通常、その状態がリレーショナル データベース内のテーブルに永続化される軽量の Java クラスです。このようなエンティティのインスタンスは、テーブル内の個々の行に対応します。通常、エンティティには他のエンティティとの関係があり、これらの関係はオブジェクト/リレーショナル マッピング (ORM) メタデータを通じて表現されます。このメタデータは、アノテーションを使用してエンティティ クラス ファイル内で直接指定することも、アプリケーションとともに配布される別の XML 記述子ファイル内で指定することもできます。"
            },
            maven: {
                description: "Apache Maven は、ソフトウェア プロジェクトの管理および理解ツールです。プロジェクト オブジェクト モデル (POM) の概念に基づいて、Maven はプロジェクトのビルド、レポート、ドキュメントを中心的な情報から管理できます。"
            }
        }

    },
    ukrainian: {
        title: "Мова",
        titles: {
            portuguese: "португальська",
            english: "англійська",
            spanish: "Іспанська",
            japanese: "Японський",
            ukrainian: "українська",
            german: "Німецький",
            french: "французька",
            russian: "російський",
            chinese: "китайський"
        },
        whatsButton: "Спілкуйтеся в WhatsApp",
        apresentationTitle: "Створення досвіду за допомогою технологій",
        apresentationDescription: "Я веб-розробник Full Stack, закінчив Kenzie Academy Brasil, беру участь у кількох проектах, вирішую проблеми високого рівня та хочу розвивати нові навички",
        apresentationButtons: ["проекти", "технології"],
        stacksTitle: "Інструменти, якими я володію (натисніть, щоб дізнатися більше)",
        stacksDescription: {
            footerMessage: "веб-сторінка:",
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
                description: "Як асинхронне середовище виконання JavaScript, кероване подіями, Node.js розроблено для створення масштабованих мережевих програм. Node.js подібний за дизайном до таких систем, як Ruby's Event Machine і Python's Twisted. Node.js розвиває модель подій трохи далі. Він представляє цикл подій як конструкцію часу виконання, а не як бібліотеку. В інших системах завжди існує блокуючий виклик для запуску циклу подій. Оскільки Node.js розроблено без потоків, це не означає, що ви не можете скористатися перевагами кількох ядер у своєму середовищі, що дозволяє вам спільно використовувати сокети між процесами, щоб забезпечити балансування навантаження на ваші ядра."
            },
            styledComponents: {
                description: "CSS для віку <Component/>. Стилізуйте свій стиль завдяки швидкості, надійному друку та гнучкості."
            },
            react: {
                description: "Бібліотека для веб-інтерфейсу та рідного інтерфейсу користувача. React дозволяє створювати інтерфейси користувача з окремих частин, які називаються компонентами. Створюйте власні компоненти React, такі як Thumbnail, LikeButton і Video. Потім об’єднайте їх у цілі екрани, сторінки та програми."
            },
            typeScript: {
                description: "TypeScript — це JavaScript із синтаксисом для типів. TypeScript — це строго типізована мова програмування, яка ґрунтується на JavaScript і надає вам кращі інструменти будь-якого масштабу. TypeScript розуміє JavaScript і використовує визначення типу, щоб надати вам чудові інструменти без додаткового коду."
            },
            docker: {
                description: "З самого початку створюйте краще безпечне програмне забезпечення. Розробляйте власні унікальні програми за допомогою зображень Docker і створюйте кілька контейнерів за допомогою Docker Compose. Docker працює з усіма інструментами розробки, такими як VS Code, CircleCI та GitHub. Послідовно працюйте в будь-якому середовищі від локального Kubernetes до AWS ECS, Azure ACI, Google GKE тощо."
            },
            tailwind: {
                description: "Швидко створюйте сучасні веб-сайти, не відриваючись від свого HTML. Перший утилітарний фреймворк CSS, наповнений такими класами, як flex, pt-4, text-center і rotate-90, які можна скомпонувати для створення будь-якого дизайну безпосередньо у вашій розмітці.",
            },
            sass: {
                description: "CSS з надздібностями. Sass — найдосконаліша, стабільна та найпотужніша професійна мова розширення CSS у світі.",
            },
            stitches: {
                description: "CSS-in-JS із майже нульовим часом виконання, SSR, багатоваріантною підтримкою та найкращим у своєму класі досвідом розробника. Уникає непотрібних інтерполяцій під час виконання, що робить його більш продуктивним, ніж інші бібліотеки стилів. У Stitches є спеціальна бібліотека React, але @stitches/core працює з будь-яким фреймворком, включаючи Vue, Svelte і навіть ванільний HTML. Наповнений корисними функціями, як-от оформлення тем, смарт-токени, підказка css, утиліти та повністю типізований API."
            },
            nextJs: {
                description: "React Framework для Інтернету. Використовується деякими з найбільших світових компаній, Next.js дає змогу створювати повний стек веб-додатків, розширюючи найновіші функції React та інтегруючи потужні інструменти JavaScript на основі Rust для найшвидшої збірки.",
            },
            zod: {
                description: "Zod — це перша бібліотека для оголошення схем і перевірки на TypeScript. Термін «схема» використовується для широкого позначення будь-якого типу даних, від простого рядка до складного вкладеного об’єкта. Zod розроблено так, щоб бути максимально зручним для розробників. Мета полягає в тому, щоб усунути повторювані оголошення типів. З Zod ви оголошуєте валідатор один раз, і Zod автоматично визначить статичний тип TypeScript. Простіші типи легко поєднувати в складні структури даних.",
            },
            axios: {
                description: "Axios є базовим HTTP-клієнтом із повідомленнями для Node.js і для навігатора. É isomórfico, podendo rodar no navegador e no Node.js com a mesma base de código. Сервідор США не використовує або рідний код Node.js (за модулем http), але клієнт (навігатор) не використовує XMLHttpRequests.",
            },
            expressJs: {
                description: "Швидкий, гнучкий і мінімалістичний веб-фреймворк для Node.js. Це мінімальний і гнучкий фреймворк веб-додатків Node.js, який забезпечує надійний набір функцій для веб- і мобільних додатків."
            },
            nestJs: {
                description: "Прогресивна структура Node.js для створення ефективних, надійних і масштабованих програм на стороні сервера. Надає справжню гнучкість, дозволяючи використовувати будь-які інші бібліотеки завдяки модульній архітектурі. Адаптивна екосистема, яка є повноцінною основою для всіх типів програм на стороні сервера. Використовує переваги найновіших функцій JavaScript, вносячи шаблони проектування та зрілі рішення у світ Node.js."
            },
            python: {
                description: "Python — це мова програмування високого рівня загального призначення. Його філософія дизайну наголошує на зручності читання коду з використанням значних відступів. Python динамічно типізується. Він підтримує кілька парадигм програмування, включаючи структуроване (зокрема процедурне), об’єктно-орієнтоване та функціональне програмування. Його часто описують як мову з акумуляторами через його повну стандартну бібліотеку"
            },
            django: {
                description: "Django — це високорівневий веб-фреймворк Python, який заохочує швидку розробку та чистий, прагматичний дизайн. Створений досвідченими розробниками, він впорається з більшою частиною клопоту веб-розробки, тому ви можете зосередитися на написанні свого додатка без потреби винаходити колесо. Це безкоштовно та з відкритим кодом. Django було розроблено, щоб допомогти розробникам якнайшвидше перевести додатки від концепції до завершення. Серйозно ставиться до безпеки та допомагає розробникам уникнути багатьох поширених помилок безпеки. Деякі з найзавантаженіших веб-сайтів використовують здатність Django швидко та гнучко масштабуватися."
            },
            java: {
                description: "Java — це високорівнева об’єктно-орієнтована мова програмування на основі класів, яка розроблена таким чином, щоб мати якомога менше залежностей реалізації. Це мова програмування загального призначення, призначена для того, щоб програмісти могли написати один раз і запустити будь-де (WORA), тобто скомпільований код Java може працювати на всіх платформах, які підтримують Java, без необхідності повторної компіляції. Програми Java зазвичай скомпільовані в байт-код, який може працювати на будь-якій віртуальній машині Java (JVM) незалежно від базової архітектури комп’ютера. Синтаксис Java подібний до C і C++, але має менше можливостей низького рівня, ніж обидва з них. Середовище виконання Java надає динамічні можливості (такі як відображення та модифікація коду середовища виконання), які зазвичай недоступні в традиційних скомпільованих мовах."
            },
            springBoot: {
                description: "Spring Boot дозволяє легко створювати автономні додатки на основі Spring продуктивного класу, які можна \"просто запускати\". Створюйте автономні програми Spring. Вставте Tomcat, Jetty або Undertow напряму (не потрібно розгортати файли WAR). Надайте впевнені «початкові» залежності, щоб спростити конфігурацію збірки. Автоматично налаштовуйте Spring і бібліотеки сторонніх розробників, коли це можливо. Надайте готові до виробництва функції, такі як показники, перевірки працездатності та зовнішня конфігурація. Абсолютна відсутність генерації коду та жодних вимог щодо конфігурації XML"
            },
            jsonWebToken: {
                description: "Веб-токен JSON (JWT) — це відкритий стандарт, який визначає компактний і самодостатній спосіб безпечної передачі інформації між сторонами як об’єкт JSON. Цю інформацію можна перевірити та довіряти їй, оскільки вона має цифровий підпис. Хоча JWT можна зашифрувати, щоб також забезпечити секретність між сторонами, ми зосередимося на підписаних токенах. Підписані токени можуть підтвердити цілісність претензій, що містяться в ньому, тоді як зашифровані токени приховують ці претензії від інших сторін. Коли токени підписуються за допомогою пар відкритих/приватних ключів, підпис також засвідчує, що лише сторона, яка володіє закритим ключем, є тією, яка підписала його."
            },
            postgreSql: {
                description: "PostgreSQL — це потужна об’єктно-реляційна база даних з відкритим вихідним кодом, яка використовує та розширює мову SQL у поєднанні з багатьма функціями, які безпечно зберігають і масштабують найскладніші дані. Витоки PostgreSQL сягають 1986 року як частини проекту POSTGRES в Каліфорнійському університеті в Берклі та мають понад 35 років активного розвитку на основній платформі. PostgreSQL заслужив міцну репутацію завдяки своїй перевіреній архітектурі, надійності, цілісності даних, надійному набору функцій, розширюваності та відданості спільноти з відкритим кодом, яка стоїть за програмним забезпеченням, щоб постійно надавати ефективні та інноваційні рішення."
            },
            bcrypt: {
                description: "bcrypt — це функція хешування паролів, розроблена Нільсом Провосом і Девідом Мазьєром, заснована на шифрі Blowfish і представлена ​​на USENIX у 1999 році. Окрім використання солі для захисту від атак веселкової таблиці, bcrypt є адаптивною функцією: з часом кількість ітерацій можна збільшити, щоб зробити його повільнішим, тож він залишається стійким до атак грубої сили навіть із збільшенням обчислювальної потужності. Функція bcrypt є типовим алгоритмом хешування пароля для OpenBSD і була типовою для деяких дистрибутивів Linux, таких як SUSE Linux. Існують реалізації bcrypt у C, C++, C#, Embarcadero Delphi, Elixir, Go, Java, JavaScript, Perl, PHP, Ruby та інших мовах."
            },
            jest: {
                description: "Jest — це чудова платформа для тестування JavaScript, зосереджена на простоті. Зробіть тести, які легко відстежують великі об’єкти. Миттєві знімки живуть або разом із вашими тестами, або вбудовано. Тести розпаралелюються шляхом виконання їх у власних процесах для максимальної продуктивності."
            },
            mySql: {
                description: "MySQL HeatWave — це повністю керована служба бази даних для транзакцій, аналітики в реальному часі в сховищах даних і озерах даних, а також служб машинного навчання без складності, затримок і вартості дублювання ETL. Він доступний на OCI, AWS і Azure. Найповніший набір розширених функцій, інструментів керування та технічної підтримки для досягнення найвищого рівня масштабованості, безпеки, надійності та безвідмовної роботи MySQL. MySQL Cluster дозволяє користувачам вирішувати проблеми баз даних веб-, хмарних і комунікаційних служб наступного покоління з безкомпромісною масштабованістю, часом безвідмовної роботи та гнучкістю."
            },
            sqlite: {
                description: "SQLite — це бібліотека мовою C, яка реалізує невелику, швидку, самодостатню, високонадійну, повнофункціональну систему баз даних SQL. SQLite є найбільш використовуваним механізмом баз даних у світі. SQLite вбудовано в усі мобільні телефони та більшість комп’ютерів і поставляється разом із незліченною кількістю інших програм, якими люди користуються щодня. Формат файлу SQLite є стабільним, кросплатформним і зворотно сумісним, і розробники зобов’язуються зберегти його до 2050 року. Файли бази даних SQLite зазвичай використовуються як контейнери для передачі багатого вмісту між системами та як довгостроковий архівний формат. для даних."
            },
            prisma: {
                description: "Node.js і TypeScript ORM наступного покоління. Prisma відкриває новий рівень досвіду розробника під час роботи з базами даних завдяки своїй інтуїтивно зрозумілій моделі даних, автоматичним міграціям, безпеці типів і автозавершенню. Схема Prisma є інтуїтивно зрозумілою та дає змогу декларувати таблиці бази даних у зрозумілий для людини спосіб, перетворюючи ваш досвід моделювання даних у задоволення. Ви визначаєте свої моделі вручну або аналізуєте їх із існуючої бази даних."
            },
            hibernate: {
                description: "Hibernate ORM дозволяє розробникам легше писати програми, дані яких переживають процес застосування. Як структура об’єктного/реляційного відображення (ORM), Hibernate займається збереженням даних у реляційних базах даних (через JDBC). На додаток до власного \"рідного\" API, Hibernate також є реалізацією специфікації Java Persistence API (JPA). Таким чином, його можна легко використовувати в будь-якому середовищі, що підтримує JPA, включаючи програми Java SE, сервери програм Java EE, контейнери Enterprise OSGi тощо. Hibernate підтримує відкладену ініціалізацію, численні стратегії отримання та оптимістичне блокування з автоматичним керуванням версіями та мітками часу. Hibernate не вимагає спеціальних таблиць або полів бази даних і генерує більшу частину SQL під час ініціалізації системи, а не під час виконання. Hibernate стабільно забезпечує кращу продуктивність порівняно з простим кодом JDBC як з точки зору продуктивності розробника, так і продуктивності під час виконання."
            },
            jpa: {
                description: "Jakarta Persistence (JPA; раніше Java Persistence API) — це специфікація програмного інтерфейсу прикладної програми Jakarta EE, яка описує керування реляційними даними в корпоративних програмах Java. Постійна сутність — це легкий клас Java, стан якого зазвичай зберігається в таблиці в реляційній базі даних. Екземпляри такої сутності відповідають окремим рядкам у таблиці. Сутності зазвичай мають зв’язки з іншими сутностями, і ці зв’язки виражаються через метадані об’єктного/реляційного відображення (ORM). Ці метадані можна вказати безпосередньо у файлі класу сутності за допомогою анотацій або в окремому файлі XML-дескриптора, що поширюється разом із програмою."
            },
            maven: {
                description: "Apache Maven — це програмний інструмент для керування та розуміння проектів. Базуючись на концепції об’єктної моделі проекту (POM), Maven може керувати збіркою проекту, звітністю та документацією з центральної частини інформації."
            }
        }

    },
    german: {
        title: "Sprache",
        titles: {
            portuguese: "portugiesisch",
            english: "englisch",
            spanish: "spanisch",
            japanese: "japanisch",
            ukrainian: "ukrainisch",
            german: "deutsch",
            french: "französisch",
            russian: "russisch",
            chinese: "chinesisch"
        },
        whatsButton: "Sprechen Sie über WhatsApp",
        apresentationTitle: "Erlebnisse durch Technologie schaffen",
        apresentationDescription: "Ich bin ein Full-Stack-Webentwickler mit Abschluss an der Kenzie Academy Brasil, der an mehreren Projekten teilnimmt, komplexe Probleme löst und neue Fähigkeiten entwickeln möchte",
        apresentationButtons: ["Projekte", "Technologien"],
        stacksTitle: "Werkzeuge, die ich beherrsche (klicken Sie hier, um mehr zu erfahren)",
        stacksDescription: {
            footerMessage: "Website:",
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
                description: "Als asynchrone ereignisgesteuerte JavaScript-Laufzeitumgebung ist Node.js für die Erstellung skalierbarer Netzwerkanwendungen konzipiert. Node.js ähnelt im Design Systemen wie Rubys Event Machine und Pythons Twisted und wird von diesen beeinflusst. Node.js führt das Ereignismodell noch einen Schritt weiter. Es stellt eine Ereignisschleife als Laufzeitkonstrukt statt als Bibliothek dar. In anderen Systemen gibt es immer einen blockierenden Aufruf, um die Ereignisschleife zu starten. Dass Node.js ohne Threads entworfen wurde, bedeutet nicht, dass Sie nicht die Vorteile mehrerer Kerne in Ihrer Umgebung nutzen können, was Ihnen ermöglicht, Sockets zwischen Prozessen zu teilen, um einen Lastausgleich über Ihre Kerne zu ermöglichen."
            },
            styledComponents: {
                description: "CSS für das <Component/> Age. Gestalten Sie Ihren Stil mit Geschwindigkeit, starkem Tippen und Flexibilität."
            },
            react: {
                description: "Die Bibliothek für Web- und native Benutzeroberflächen. Mit React können Sie Benutzeroberflächen aus einzelnen Teilen, sogenannten Komponenten, erstellen. Erstellen Sie Ihre eigenen React-Komponenten wie Thumbnail, LikeButton und Video. Kombinieren Sie sie dann zu ganzen Bildschirmen, Seiten und Apps."
            },
            typeScript: {
                description: "TypeScript ist JavaScript mit Syntax für Typen. TypeScript ist eine stark typisierte Programmiersprache, die auf JavaScript aufbaut und Ihnen in jeder Größenordnung bessere Tools bietet. TypeScript versteht JavaScript und verwendet Typinferenz, um Ihnen großartige Tools ohne zusätzlichen Code bereitzustellen."
            },
            docker: {
                description: "Erstellen Sie von Anfang an bessere und sichere Software. Entwickeln Sie Ihre eigenen einzigartigen Anwendungen mit Docker-Images und erstellen Sie mehrere Container mit Docker Compose. Docker funktioniert mit allen Entwicklungstools wie VS Code, CircleCI und GitHub. Konsistente Ausführung in jeder Umgebung, von lokalem Kubernetes bis hin zu AWS ECS, Azure ACI, Google GKE und mehr."
            },
            tailwind: {
                description: "Erstellen Sie schnell moderne Websites, ohne jemals Ihren HTML-Code zu verlassen. Ein Utility-First-CSS-Framework voller Klassen wie Flex, Pt-4, Text-Center und Rotate-90, die so zusammengestellt werden können, dass jedes Design direkt in Ihrem Markup erstellt wird.",
            },
            sass: {
                description: "CSS mit Superkräften. Sass ist die ausgereifteste, stabilste und leistungsstärkste professionelle CSS-Erweiterungssprache der Welt.",
            },
            stitches: {
                description: "CSS-in-JS mit nahezu null Laufzeit, SSR, Unterstützung mehrerer Varianten und einem erstklassigen Entwicklererlebnis. Vermeidet unnötige Requisiteninterpolationen zur Laufzeit und ist dadurch leistungsfähiger als andere Stilbibliotheken. Stitches verfügt über eine dedizierte React-Bibliothek, aber @stitches/core funktioniert mit jedem Framework, einschließlich Vue, Svelte und sogar Vanilla HTML. Vollgepackt mit nützlichen Funktionen wie Design, Smart Tokens, CSS-Requisite, Dienstprogrammen und einer vollständig typisierten API."
            },
            nextJs: {
                description: "Das React Framework für das Web. Next.js wird von einigen der weltweit größten Unternehmen verwendet und ermöglicht Ihnen die Erstellung von Full-Stack-Webanwendungen durch die Erweiterung der neuesten React-Funktionen und die Integration leistungsstarker Rust-basierter JavaScript-Tools für schnellste Builds.",
            },
            zod: {
                description: "Zod ist eine TypeScript-First-Schema-Deklarations- und Validierungsbibliothek. Der Begriff „Schema“ bezieht sich allgemein auf jeden Datentyp, von einer einfachen Zeichenfolge bis hin zu einem komplexen verschachtelten Objekt. Zod ist so entwicklerfreundlich wie möglich konzipiert. Das Ziel besteht darin, doppelte Typdeklarationen zu eliminieren. Mit Zod deklarieren Sie einmal einen Validator und Zod leitet automatisch den statischen TypeScript-Typ ab. Es ist einfach, einfachere Typen zu komplexen Datenstrukturen zusammenzusetzen.",
            },
            axios: {
                description: "Axios ist ein HTTP-basierter Client, der für Node.js und den Browser bereitgestellt wird. Es ist isomorph, Sie können den Browser nicht mehr verwenden und Node.js nicht mehr auf der Code-Basis verwenden. Der Server muss nicht in den USA oder der native Code von Node.js (Modul http) verwendet werden, da der Client (Server) XMLHttpRequests nicht benötigt.",
            },
            expressJs: {
                description: "Schnelles, flexibles und minimalistisches Webframework für Node.js. Es handelt sich um ein minimales und flexibles Node.js-Webanwendungsframework, das eine Reihe robuster Funktionen für Web- und mobile Anwendungen bietet."
            },
            nestJs: {
                description: "Ein fortschrittliches Node.js-Framework zum Erstellen effizienter, zuverlässiger und skalierbarer serverseitiger Anwendungen. Bietet Ihnen echte Flexibilität, da dank der modularen Architektur die Verwendung beliebiger anderer Bibliotheken möglich ist. Ein anpassungsfähiges Ökosystem, das ein vollwertiges Rückgrat für alle Arten von serverseitigen Anwendungen darstellt. Nutzt die neuesten JavaScript-Funktionen und bringt Designmuster und ausgereifte Lösungen in die Welt von Node.j."
            },
            python: {
                description: "Python ist eine allgemeine Programmiersprache auf hohem Niveau. Seine Designphilosophie betont die Lesbarkeit des Codes durch die Verwendung deutlicher Einrückungen. Python ist dynamisch typisiert. Es unterstützt mehrere Programmierparadigmen, einschließlich strukturierter (insbesondere prozeduraler), objektorientierter und funktionaler Programmierung. Aufgrund ihrer umfassenden Standardbibliothek wird sie oft als batteriebetriebene Sprache bezeichnet"
            },
            django: {
                description: "Django ist ein High-Level-Python-Webframework, das eine schnelle Entwicklung und ein klares, pragmatisches Design fördert. Es wurde von erfahrenen Entwicklern entwickelt und nimmt Ihnen einen Großteil des Aufwands der Webentwicklung ab, sodass Sie sich auf das Schreiben Ihrer App konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source. Django wurde entwickelt, um Entwicklern dabei zu helfen, Anwendungen so schnell wie möglich vom Konzept bis zur Fertigstellung zu bringen. Nimmt Sicherheit ernst und hilft Entwicklern, viele häufige Sicherheitsfehler zu vermeiden. Einige der meistbesuchten Websites im Web nutzen die Fähigkeit von Django, schnell und flexibel zu skalieren."
            },
            java: {
                description: "Java ist eine klassenbasierte, objektorientierte Programmiersprache auf hoher Ebene, die so konzipiert ist, dass sie möglichst wenige Implementierungsabhängigkeiten aufweist. Es handelt sich um eine Allzweck-Programmiersprache, mit der Programmierer einmal schreiben und überall ausführen können (WORA). Das bedeutet, dass kompilierter Java-Code auf allen Plattformen ausgeführt werden kann, die Java unterstützen, ohne dass eine Neukompilierung erforderlich ist. Java-Anwendungen werden normalerweise zu Bytecode kompiliert, der auf jeder Java Virtual Machine (JVM) unabhängig von der zugrunde liegenden Computerarchitektur ausgeführt werden kann. Die Syntax von Java ähnelt der von C und C++, verfügt jedoch über weniger Low-Level-Funktionen als beide. Die Java-Laufzeit bietet dynamische Funktionen (z. B. Reflektion und Änderung des Laufzeitcodes), die in herkömmlichen kompilierten Sprachen normalerweise nicht verfügbar sind."
            },
            springBoot: {
                description: "Mit Spring Boot können Sie ganz einfach eigenständige Spring-basierte Anwendungen in Produktionsqualität erstellen, die Sie „einfach ausführen“ können. Erstellen Sie eigenständige Spring-Anwendungen. Betten Sie Tomcat, Jetty oder Undertow direkt ein (keine Bereitstellung von WAR-Dateien erforderlich). Stellen Sie eigene „Starter“-Abhängigkeiten bereit, um Ihre Build-Konfiguration zu vereinfachen. Konfigurieren Sie Spring- und Drittanbieter-Bibliotheken nach Möglichkeit automatisch. Stellen Sie produktionsbereite Funktionen wie Metriken, Zustandsprüfungen und externalisierte Konfiguration bereit. Absolut keine Codegenerierung und keine XML-Konfiguration erforderlich"
            },
            jsonWebToken: {
                description: "JSON Web Token (JWT) ist ein offener Standard, der eine kompakte und eigenständige Möglichkeit zur sicheren Übertragung von Informationen zwischen Parteien als JSON-Objekt definiert. Diese Informationen können überprüft und vertrauenswürdig sein, da sie digital signiert sind. Obwohl JWTs verschlüsselt werden können, um auch die Geheimhaltung zwischen den Parteien zu gewährleisten, konzentrieren wir uns auf signierte Token. Signierte Token können die Integrität der darin enthaltenen Ansprüche überprüfen, während verschlüsselte Token diese Ansprüche vor anderen Parteien verbergen. Wenn Token mit öffentlichen/privaten Schlüsselpaaren signiert werden, bescheinigt die Signatur auch, dass nur die Partei, die den privaten Schlüssel besitzt, auch diejenige ist, die ihn signiert hat."
            },
            postgreSql: {
                description: "PostgreSQL ist ein leistungsstarkes, objektrelationales Open-Source-Datenbanksystem, das die SQL-Sprache nutzt und erweitert, kombiniert mit vielen Funktionen, die die kompliziertesten Daten-Workloads sicher speichern und skalieren. Die Ursprünge von PostgreSQL reichen bis ins Jahr 1986 als Teil des POSTGRES-Projekts an der University of California in Berkeley zurück und es kann auf mehr als 35 Jahre aktive Entwicklung der Kernplattform zurückblicken. PostgreSQL hat sich einen guten Ruf für seine bewährte Architektur, Zuverlässigkeit, Datenintegrität, seinen robusten Funktionsumfang, seine Erweiterbarkeit und das Engagement der Open-Source-Community hinter der Software für die kontinuierliche Bereitstellung leistungsstarker und innovativer Lösungen erworben."
            },
            bcrypt: {
                description: "bcrypt ist eine Passwort-Hashing-Funktion, die von Niels Provos und David Mazières entwickelt wurde, auf der Blowfish-Verschlüsselung basiert und 1999 auf der USENIX vorgestellt wurde. Neben der Integration eines Salts zum Schutz vor Rainbow-Table-Angriffen ist bcrypt eine adaptive Funktion: Im Laufe der Zeit erhöht sich die Anzahl der Iterationen kann erhöht werden, um es langsamer zu machen, sodass es auch bei zunehmender Rechenleistung resistent gegen Brute-Force-Suchangriffe bleibt. Die bcrypt-Funktion ist der Standard-Passwort-Hash-Algorithmus für OpenBSD und war der Standard für einige Linux-Distributionen wie SUSE Linux. Es gibt Implementierungen von bcrypt in C, C++, C#, Embarcadero Delphi, Elixir, Go, Java, JavaScript, Perl, PHP, Ruby und anderen Sprachen."
            },
            jest: {
                description: "Jest ist ein entzückendes JavaScript-Test-Framework, bei dem die Einfachheit im Vordergrund steht. Führen Sie Tests durch, mit denen Sie problemlos den Überblick über große Objekte behalten. Snapshots werden entweder live neben Ihren Tests erstellt oder inline eingebettet. Tests werden parallelisiert, indem sie in ihren eigenen Prozessen ausgeführt werden, um die Leistung zu maximieren."
            },
            mySql: {
                description: "MySQL HeatWave ist ein vollständig verwalteter Datenbankdienst für Transaktionen, Echtzeitanalysen über Data Warehouses und Data Lakes hinweg sowie Dienste für maschinelles Lernen, ohne die Komplexität, Latenz und Kosten einer ETL-Duplizierung. Es ist auf OCI, AWS und Azure verfügbar. Der umfassendste Satz erweiterter Funktionen, Verwaltungstools und technischer Support, um ein Höchstmaß an MySQL-Skalierbarkeit, Sicherheit, Zuverlässigkeit und Betriebszeit zu erreichen. Mit MySQL Cluster können Benutzer die Datenbankherausforderungen von Web-, Cloud- und Kommunikationsdiensten der nächsten Generation mit kompromissloser Skalierbarkeit, Verfügbarkeit und Agilität meistern."
            },
            sqlite: {
                description: "SQLite ist eine C-Sprachbibliothek, die eine kleine, schnelle, eigenständige, hochzuverlässige SQL-Datenbank-Engine mit vollem Funktionsumfang implementiert. SQLite ist die am häufigsten verwendete Datenbank-Engine der Welt. SQLite ist in allen Mobiltelefonen und den meisten Computern integriert und wird in unzähligen anderen Anwendungen gebündelt, die Menschen täglich nutzen. Das SQLite-Dateiformat ist stabil, plattformübergreifend und abwärtskompatibel, und die Entwickler verpflichten sich, dies bis zum Jahr 2050 beizubehalten. SQLite-Datenbankdateien werden häufig als Container für die Übertragung umfangreicher Inhalte zwischen Systemen und als Langzeitarchivierungsformat verwendet für Daten."
            },
            prisma: {
                description: "Node.js und TypeScript ORM der nächsten Generation. Dank seines intuitiven Datenmodells, automatisierter Migrationen, Typsicherheit und automatischer Vervollständigung eröffnet Prisma eine neue Ebene der Entwicklererfahrung bei der Arbeit mit Datenbanken. Das Prisma-Schema ist intuitiv und ermöglicht es Ihnen, Ihre Datenbanktabellen für Menschen lesbar zu deklarieren – was Ihre Datenmodellierungserfahrung zu einem Vergnügen macht. Sie definieren Ihre Modelle manuell oder überprüfen sie anhand einer vorhandenen Datenbank."
            },
            hibernate: {
                description: "Mit Hibernate ORM können Entwickler einfacher Anwendungen schreiben, deren Daten den Anwendungsprozess überdauern. Als Object/Relational Mapping (ORM)-Framework befasst sich Hibernate mit der Datenpersistenz in Bezug auf relationale Datenbanken (über JDBC). Neben seiner eigenen „nativen“ API ist Hibernate auch eine Implementierung der Java Persistence API (JPA)-Spezifikation. Daher kann es problemlos in jeder Umgebung verwendet werden, die JPA unterstützt, einschließlich Java SE-Anwendungen, Java EE-Anwendungsservern, Enterprise OSGi-Containern usw. Hibernate unterstützt verzögerte Initialisierung, zahlreiche Abrufstrategien und optimistisches Sperren mit automatischer Versionierung und Zeitstempelung. Hibernate erfordert keine speziellen Datenbanktabellen oder -felder und generiert einen Großteil der SQL zur Systeminitialisierungszeit statt zur Laufzeit. Hibernate bietet durchweg eine bessere Leistung als reiner JDBC-Code, sowohl hinsichtlich der Entwicklerproduktivität als auch der Laufzeitleistung."
            },
            jpa: {
                description: "Jakarta Persistence (JPA; früher Java Persistence API) ist eine Spezifikation der Jakarta EE-Anwendungsprogrammierschnittstelle, die die Verwaltung relationaler Daten in Java-Unternehmensanwendungen beschreibt. Eine Persistenzentität ist eine leichtgewichtige Java-Klasse, deren Zustand normalerweise in einer Tabelle in einer relationalen Datenbank gespeichert wird. Instanzen einer solchen Entität entsprechen einzelnen Zeilen in der Tabelle. Entitäten haben typischerweise Beziehungen zu anderen Entitäten, und diese Beziehungen werden durch Object/Relational Mapping (ORM)-Metadaten ausgedrückt. Diese Metadaten können mithilfe von Anmerkungen direkt in der Entitätsklassendatei oder in einer separaten XML-Deskriptordatei angegeben werden, die mit der Anwendung verteilt wird."
            },
            maven: {
                description: "Apache Maven ist ein Software-Projektmanagement- und Verständnistool. Basierend auf dem Konzept eines Projektobjektmodells (POM) kann Maven die Erstellung, Berichterstattung und Dokumentation eines Projekts von einer zentralen Informationseinheit aus verwalten."
            }
        }

    },
    french: {
        title: "Langue",
        titles: {
            portuguese: "portugais",
            english: "anglais",
            spanish: "espagnol",
            japanese: "japonais",
            ukrainian: "ukrainien",
            german: "allemand",
            french: "français",
            russian: "russe",
            chinese: "chinois"
        },
        whatsButton: "Parlez sur WhatsApp",
        apresentationTitle: "Créer des expériences grâce à la technologie",
        apresentationDescription: "Je suis un développeur Web Full Stack diplômé de la Kenzie Academy Brasil, participant à plusieurs projets, résolvant des problèmes de haut niveau et cherchant à développer de nouvelles compétences.",
        apresentationButtons: ["Projets", "Les technologies"],
        stacksTitle: "Outils que je maîtrise (cliquez pour en savoir plus)",
        stacksDescription: {
            footerMessage: "Page web:",
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
                description: "En tant que runtime JavaScript asynchrone piloté par événements, Node.js est conçu pour créer des applications réseau évolutives. Node.js est similaire dans sa conception et influencé par des systèmes tels que Ruby's Event Machine et Python's Twisted. Node.js pousse le modèle d'événement un peu plus loin. Il présente une boucle d'événements comme une construction d'exécution plutôt que comme une bibliothèque. Dans d'autres systèmes, il y a toujours un appel bloquant pour démarrer la boucle d'événements. Node.js étant conçu sans threads, cela ne signifie pas que vous ne pouvez pas profiter de plusieurs cœurs dans votre environnement, ce qui vous permet de partager des sockets entre les processus pour permettre l'équilibrage de charge sur vos cœurs."
            },
            styledComponents: {
                description: "CSS pour l'âge <Component/>. Créez votre style avec rapidité, frappe efficace et flexibilité."
            },
            react: {
                description: "La bibliothèque pour les interfaces utilisateur Web et natives. React vous permet de créer des interfaces utilisateur à partir d'éléments individuels appelés composants. Créez vos propres composants React comme Thumbnail, LikeButton et Video. Combinez-les ensuite en écrans, pages et applications entiers."
            },
            typeScript: {
                description: "TypeScript est JavaScript avec une syntaxe pour les types. TypeScript est un langage de programmation fortement typé qui s'appuie sur JavaScript, vous offrant de meilleurs outils à n'importe quelle échelle. TypeScript comprend JavaScript et utilise l'inférence de type pour vous offrir d'excellents outils sans code supplémentaire."
            },
            docker: {
                description: "Créez des logiciels meilleurs et sécurisés dès le départ. Développez vos propres applications uniques avec des images Docker et créez plusieurs conteneurs à l'aide de Docker Compose. Docker fonctionne avec tous les outils de développement tels que VS Code, CircleCI et GitHub. Exécutez-le de manière cohérente dans n'importe quel environnement, depuis Kubernetes sur site jusqu'à AWS ECS, Azure ACI, Google GKE, et bien plus encore."
            },
            tailwind: {
                description: "Créez rapidement des sites Web modernes sans jamais quitter votre code HTML. Un framework CSS utilitaire rempli de classes comme flex, pt-4, text-center et rotate-90 qui peuvent être composées pour créer n'importe quelle conception, directement dans votre balisage.",
            },
            sass: {
                description: "CSS avec des super pouvoirs. Sass est le langage d'extension CSS de qualité professionnelle le plus mature, stable et puissant au monde.",
            },
            stitches: {
                description: "CSS-in-JS avec un temps d'exécution proche de zéro, SSR, prise en charge de plusieurs variantes et une expérience de développement de premier ordre. Évite les interpolations d'accessoires inutiles au moment de l'exécution, ce qui le rend plus performant que les autres bibliothèques de style. Stitches a une bibliothèque React dédiée, mais @stitches/core fonctionne avec n'importe quel framework, y compris Vue, Svelte et même HTML Vanilla. Plein de fonctionnalités utiles telles que des thèmes, des jetons intelligents, des accessoires CSS, des utilitaires et une API entièrement typée."
            },
            nextJs: {
                description: "Le framework React pour le Web. Utilisé par certaines des plus grandes entreprises du monde, Next.js vous permet de créer des applications Web complètes en étendant les dernières fonctionnalités de React et en intégrant de puissants outils JavaScript basés sur Rust pour les versions les plus rapides.",
            },
            zod: {
                description: "Zod est une bibliothèque de déclaration et de validation de schéma basée sur TypeScript. Le terme schéma est utilisé pour désigner de manière générale tout type de données, depuis une simple chaîne jusqu'à un objet imbriqué complexe. Zod est conçu pour être aussi convivial que possible pour les développeurs. L’objectif est d’éliminer les déclarations de type dupliquées. Avec Zod, vous déclarez un validateur une fois et Zod déduira automatiquement le type TypeScript statique. Il est facile de composer des types plus simples dans des structures de données complexes.",
            },
            axios: {
                description: "Axios est un client HTTP basé sur des promesses pour Node.js et pour le navigateur. C'est isomórfico, je peux utiliser le navigateur et Node.js avec ma même base de code. Le serveur n'utilise pas le code natif de Node.js (module http), mais le client (navigateur) utilise XMLHttpRequests.",
            },
            expressJs: {
                description: "Framework Web rapide, flexible et minimaliste pour Node.js. Il s'agit d'un framework d'application Web Node.js minimal et flexible qui fournit un ensemble robuste de fonctionnalités pour les applications Web et mobiles."
            },
            nestJs: {
                description: "Un framework Node.js progressif pour créer des applications côté serveur efficaces, fiables et évolutives. Vous offre une véritable flexibilité en permettant l'utilisation de n'importe quelle autre bibliothèque grâce à une architecture modulaire. Un écosystème adaptable qui constitue une épine dorsale à part entière pour toutes sortes d’applications côté serveur. Bénéficie des dernières fonctionnalités JavaScript, apportant des modèles de conception et des solutions matures au monde Node.js."
            },
            python: {
                description: "Python est un langage de programmation généraliste de haut niveau. Sa philosophie de conception met l'accent sur la lisibilité du code grâce à l'utilisation d'une indentation significative. Python est typé dynamiquement. Il prend en charge plusieurs paradigmes de programmation, notamment la programmation structurée (en particulier procédurale), orientée objet et fonctionnelle. Il est souvent décrit comme un langage avec piles en raison de sa bibliothèque standard complète."
            },
            django: {
                description: "Django est un framework Web Python de haut niveau qui encourage un développement rapide et une conception propre et pragmatique. Construit par des développeurs expérimentés, il prend en charge une grande partie des tracas du développement Web, afin que vous puissiez vous concentrer sur l'écriture de votre application sans avoir à réinventer la roue. C'est gratuit et open source. Django a été conçu pour aider les développeurs à faire passer les applications du concept à la réalisation le plus rapidement possible. Prend la sécurité au sérieux et aide les développeurs à éviter de nombreuses erreurs de sécurité courantes. Certains des sites les plus fréquentés du Web exploitent la capacité de Django à évoluer de manière rapide et flexible."
            },
            java: {
                description: "Java est un langage de programmation de haut niveau, basé sur des classes et orienté objet, conçu pour avoir le moins de dépendances d'implémentation possible. Il s'agit d'un langage de programmation à usage général destiné à permettre aux programmeurs d'écrire une fois, d'exécuter n'importe où (WORA), ce qui signifie que le code Java compilé peut s'exécuter sur toutes les plates-formes prenant en charge Java sans avoir besoin de recompiler. Les applications Java sont généralement compilées en bytecode pouvant s'exécuter sur n'importe quelle machine virtuelle Java (JVM), quelle que soit l'architecture informatique sous-jacente. La syntaxe de Java est similaire à celle du C et du C++, mais comporte moins de fonctionnalités de bas niveau que l'un ou l'autre. Le runtime Java fournit des fonctionnalités dynamiques (telles que la réflexion et la modification du code d'exécution) qui ne sont généralement pas disponibles dans les langages compilés traditionnels."
            },
            springBoot: {
                description: "Spring Boot facilite la création d'applications Spring autonomes de qualité production que vous pouvez « simplement exécuter ». Créez des applications Spring autonomes. Intégrez directement Tomcat, Jetty ou Undertow (pas besoin de déployer des fichiers WAR). Fournissez des dépendances « de démarrage » avisées pour simplifier la configuration de votre build. Configurez automatiquement les bibliothèques Spring et tierces autant que possible. Fournissez des fonctionnalités prêtes pour la production telles que des métriques, des contrôles de santé et une configuration externalisée. Absolument aucune génération de code et aucune exigence de configuration XML"
            },
            jsonWebToken: {
                description: "JSON Web Token (JWT) est un standard ouvert qui définit un moyen compact et autonome de transmettre en toute sécurité des informations entre les parties en tant qu'objet JSON. Ces informations peuvent être vérifiées et fiables car elles sont signées numériquement. Bien que les JWT puissent être chiffrés pour assurer également la confidentialité entre les parties, nous nous concentrerons sur les jetons signés. Les jetons signés peuvent vérifier l'intégrité des revendications qu'ils contiennent, tandis que les jetons cryptés masquent ces revendications aux autres parties. Lorsque les tokens sont signés à l’aide de paires de clés publique/privée, la signature certifie également que seule la partie détenant la clé privée est celle qui l’a signée."
            },
            postgreSql: {
                description: "PostgreSQL est un puissant système de base de données relationnelle objet open source qui utilise et étend le langage SQL combiné à de nombreuses fonctionnalités permettant de stocker et de faire évoluer en toute sécurité les charges de travail de données les plus complexes. Les origines de PostgreSQL remontent à 1986 dans le cadre du projet POSTGRES de l'Université de Californie à Berkeley et comptent plus de 35 ans de développement actif sur la plateforme principale. PostgreSQL s'est forgé une solide réputation grâce à son architecture éprouvée, sa fiabilité, son intégrité des données, son ensemble de fonctionnalités robustes, son extensibilité et le dévouement de la communauté open source derrière le logiciel pour fournir systématiquement des solutions performantes et innovantes."
            },
            bcrypt: {
                description: "bcrypt est une fonction de hachage de mot de passe conçue par Niels Provos et David Mazières, basée sur le chiffre Blowfish et présentée à USENIX en 1999. En plus d'incorporer un sel pour se protéger contre les attaques de table arc-en-ciel, bcrypt est une fonction adaptative : au fil du temps, le nombre d'itérations peut être augmenté pour le rendre plus lent, de sorte qu'il reste résistant aux attaques de recherche par force brute même avec une puissance de calcul croissante. La fonction bcrypt est l'algorithme de hachage de mot de passe par défaut pour OpenBSD et était la valeur par défaut pour certaines distributions Linux telles que SUSE Linux. Il existe des implémentations de bcrypt en C, C++, C#, Embarcadero Delphi, Elixir, Go, Java, JavaScript, Perl, PHP, Ruby et d'autres langages."
            },
            jest: {
                description: "Jest est un délicieux framework de test JavaScript axé sur la simplicité. Réalisez des tests qui permettent de suivre facilement des objets volumineux. Les instantanés sont en direct soit à côté de vos tests, soit intégrés en ligne. Les tests sont parallélisés en les exécutant dans leurs propres processus pour maximiser les performances."
            },
            mySql: {
                description: "MySQL HeatWave est un service de base de données entièrement géré pour les transactions, l'analyse en temps réel dans les entrepôts de données et les lacs de données, ainsi que les services d'apprentissage automatique, sans la complexité, la latence et le coût de la duplication ETL. Il est disponible sur OCI, AWS et Azure. L'ensemble le plus complet de fonctionnalités avancées, d'outils de gestion et de support technique pour atteindre les plus hauts niveaux d'évolutivité, de sécurité, de fiabilité et de disponibilité de MySQL. MySQL Cluster permet aux utilisateurs de relever les défis des bases de données des services Web, cloud et de communication de nouvelle génération avec une évolutivité, une disponibilité et une agilité sans compromis."
            },
            sqlite: {
                description: "SQLite est une bibliothèque en langage C qui implémente un petit moteur de base de données SQL rapide, autonome, de haute fiabilité et complet. SQLite est le moteur de base de données le plus utilisé au monde. SQLite est intégré à tous les téléphones mobiles et à la plupart des ordinateurs et est intégré à d'innombrables autres applications que les gens utilisent quotidiennement. Le format de fichier SQLite est stable, multiplateforme et rétrocompatible et les développeurs s'engagent à le conserver jusqu'en 2050. Les fichiers de base de données SQLite sont couramment utilisés comme conteneurs pour transférer du contenu riche entre les systèmes et comme format d'archivage à long terme. pour les données."
            },
            prisma: {
                description: "Node.js et TypeScript ORM de nouvelle génération. Prisma ouvre un nouveau niveau d'expérience de développeur lorsqu'il travaille avec des bases de données grâce à son modèle de données intuitif, ses migrations automatisées, sa sécurité de type et sa saisie semi-automatique. Le schéma Prisma est intuitif et vous permet de déclarer vos tables de base de données d'une manière lisible par l'homme, ce qui rend votre expérience de modélisation de données un plaisir. Vous définissez vos modèles à la main ou les introspectez à partir d’une base de données existante."
            },
            hibernate: {
                description: "Hibernate ORM permet aux développeurs d'écrire plus facilement des applications dont les données survivent au processus de candidature. En tant que framework de mappage objet/relationnel (ORM), Hibernate se préoccupe de la persistance des données telle qu'elle s'applique aux bases de données relationnelles (via JDBC). En plus de sa propre API « native », Hibernate est également une implémentation de la spécification Java Persistence API (JPA). En tant que tel, il peut être facilement utilisé dans n'importe quel environnement prenant en charge JPA, y compris les applications Java SE, les serveurs d'applications Java EE, les conteneurs Enterprise OSGi, etc. Hibernate prend en charge l'initialisation paresseuse, de nombreuses stratégies de récupération et le verrouillage optimiste avec gestion automatique des versions et horodatage. Hibernate ne nécessite aucune table ou champ de base de données spécial et génère une grande partie du SQL au moment de l'initialisation du système plutôt qu'au moment de l'exécution. Hibernate offre systématiquement des performances supérieures par rapport au code JDBC simple, à la fois en termes de productivité des développeurs et de performances d'exécution."
            },
            jpa: {
                description: "Jakarta Persistence (JPA ; anciennement Java Persistence API) est une spécification d'interface de programmation d'application Jakarta EE qui décrit la gestion des données relationnelles dans les applications Java d'entreprise. Une entité de persistance est une classe Java légère dont l'état est généralement conservé dans une table d'une base de données relationnelle. Les instances d'une telle entité correspondent à des lignes individuelles du tableau. Les entités ont généralement des relations avec d'autres entités, et ces relations sont exprimées via des métadonnées de mappage objet/relationnel (ORM). Ces métadonnées peuvent être spécifiées directement dans le fichier de classe d'entité à l'aide d'annotations ou dans un fichier de descripteur XML distinct distribué avec l'application."
            },
            maven: {
                description: "Apache Maven est un outil de gestion et de compréhension de projets logiciels. Basé sur le concept de modèle objet de projet (POM), Maven peut gérer la construction, le reporting et la documentation d'un projet à partir d'une information centrale."
            }
        }

    },
    russian: {
        title: "Язык",
        titles: {
            portuguese: "португальский",
            english: "Английский",
            spanish: "испанский",
            japanese: "Японский",
            ukrainian: "украинец",
            german: "Немецкий",
            french: "Французский",
            russian: "Русский",
            chinese: "Китайский"
        },
        whatsButton: "Поговорите в WhatsApp",
        apresentationTitle: "Создание опыта с помощью технологий",
        apresentationDescription: "Я веб-разработчик Full Stack, окончил Академию Кензи в Бразилии, участвую в нескольких проектах, решаю проблемы высокого уровня и стремлюсь развивать новые навыки.",
        apresentationButtons: ["Проекты", "Технологии"],
        stacksTitle: "Инструменты, которыми я владею (нажмите, чтобы узнать больше)",
        stacksDescription: {
            footerMessage: "веб-страница:",
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
                description: "Node.js — асинхронная среда выполнения JavaScript, управляемая событиями, предназначенная для создания масштабируемых сетевых приложений. Node.js по конструкции похож на такие системы, как Ruby Event Machine и Python Twisted, и находится под их влиянием. Node.js развивает модель событий немного дальше. Он представляет цикл событий как конструкцию времени выполнения, а не как библиотеку. В других системах всегда есть блокирующий вызов для запуска цикла событий. То, что Node.js разработан без потоков, не означает, что вы не можете использовать преимущества нескольких ядер в своей среде, что позволяет вам совместно использовать сокеты между процессами, чтобы обеспечить балансировку нагрузки по вашим ядрам."
            },
            styledComponents: {
                description: "CSS для эпохи <Component/>. Создавайте свой стиль со скоростью, строгой типизацией и гибкостью."
            },
            react: {
                description: "Библиотека для веб- и собственных пользовательских интерфейсов. React позволяет создавать пользовательские интерфейсы из отдельных частей, называемых компонентами. Создайте свои собственные компоненты React, такие как Thumbnail, LikeButton и Video. Затем объедините их в целые экраны, страницы и приложения."
            },
            typeScript: {
                description: "TypeScript — это JavaScript с синтаксисом типов. TypeScript — это строго типизированный язык программирования, основанный на JavaScript, предоставляющий вам лучшие инструменты в любом масштабе. TypeScript понимает JavaScript и использует вывод типов, предоставляя вам отличные инструменты без дополнительного кода."
            },
            docker: {
                description: "Создавайте лучшее и безопасное программное обеспечение с самого начала. Разрабатывайте свои собственные уникальные приложения с помощью образов Docker и создавайте несколько контейнеров с помощью Docker Compose. Docker работает со всеми инструментами разработки, такими как VS Code, CircleCI и GitHub. Последовательная работа в любой среде: от локальных Kubernetes до AWS ECS, Azure ACI, Google GKE и других."
            },
            tailwind: {
                description: "Быстро создавайте современные веб-сайты, не выходя из HTML. Утилита CSS-фреймворка, наполненная такими классами, как flex, pt-4, text-center и Rotate-90, которые можно скомпоновать для создания любого дизайна прямо в вашей разметке.",
            },
            sass: {
                description: "CSS с суперспособностями. Sass — самый зрелый, стабильный и мощный язык расширения CSS профессионального уровня в мире.",
            },
            stitches: {
                description: "CSS-in-JS с практически нулевым временем выполнения, SSR, многовариантной поддержкой и лучшими в своем классе возможностями для разработчиков. Избегает ненужных интерполяций свойств во время выполнения, что делает его более производительным, чем другие библиотеки стилей. У Stitches есть специальная библиотека React, но @stitches/core работает с любым фреймворком, включая Vue, Svelte и даже ванильный HTML. Содержит множество полезных функций, таких как темы, смарт-токены, CSS-проп, утилиты и полностью типизированный API."
            },
            nextJs: {
                description: "React Framework для Интернета. Next.js, используемый некоторыми крупнейшими мировыми компаниями, позволяет создавать полнофункциональные веб-приложения за счет расширения новейших функций React и интеграции мощных инструментов JavaScript на основе Rust для максимально быстрой сборки.",
            },
            zod: {
                description: "Zod — это библиотека объявления и проверки схемы, основанная на TypeScript. Термин «схема» используется для обозначения любого типа данных: от простой строки до сложного вложенного объекта. Zod спроектирован так, чтобы быть максимально удобным для разработчиков. Цель состоит в том, чтобы устранить дублирующиеся объявления типов. В Zod вы объявляете валидатор один раз, и Zod автоматически определяет статический тип TypeScript. Простые типы легко объединить в сложные структуры данных.",
            },
            axios: {
                description: "Axios — это клиент HTTP, основанный на обещаниях для Node.js и навигации. Это изоморфизм, поэтому в базе нет навигации и нет Node.js в виде основной базы кода. Не используйте сервер в США или код Node.js (по модулю http), а также не используйте клиент (навигатор) в США XMLHttpRequests.",
            },
            expressJs: {
                description: "Быстрый, гибкий и минималистичный веб-фреймворк для Node.js. Это минимальная и гибкая платформа веб-приложений Node.js, предоставляющая надежный набор функций для веб-приложений и мобильных приложений."
            },
            nestJs: {
                description: "Прогрессивная среда Node.js для создания эффективных, надежных и масштабируемых серверных приложений. Дает вам настоящую гибкость, позволяя использовать любые другие библиотеки благодаря модульной архитектуре. Адаптируемая экосистема, которая является полноценной основой для всех видов серверных приложений. Использует преимущества новейших функций JavaScript, привнося шаблоны проектирования и зрелые решения в мир Node.js."
            },
            python: {
                description: "Python — это язык программирования высокого уровня общего назначения. Его философия дизайна подчеркивает читаемость кода за счет значительных отступов. Python динамически типизирован. Он поддерживает несколько парадигм программирования, включая структурированное (особенно процедурное), объектно-ориентированное и функциональное программирование. Его часто называют языком с батарейками из-за обширной стандартной библиотеки."
            },
            django: {
                description: "Django — это веб-фреймворк Python высокого уровня, который способствует быстрой разработке и чистому, прагматичному дизайну. Созданный опытными разработчиками, он берет на себя большую часть хлопот веб-разработки, поэтому вы можете сосредоточиться на написании своего приложения, не изобретая велосипед. Это бесплатно и с открытым исходным кодом. Django был разработан, чтобы помочь разработчикам максимально быстро доводить приложения от концепции до завершения. Серьезно относится к безопасности и помогает разработчикам избежать многих распространенных ошибок безопасности. Некоторые из самых загруженных сайтов в сети используют способность Django быстро и гибко масштабироваться."
            },
            java: {
                description: "Java — это высокоуровневый объектно-ориентированный язык программирования на основе классов, который спроектирован так, чтобы иметь как можно меньше зависимостей реализации. Это язык программирования общего назначения, предназначенный для того, чтобы программисты могли писать один раз и запускать где угодно (WORA). Это означает, что скомпилированный код Java может работать на всех платформах, поддерживающих Java, без необходимости перекомпиляции. Приложения Java обычно компилируются в байт-код, который может работать на любой виртуальной машине Java (JVM) независимо от базовой компьютерной архитектуры. Синтаксис Java похож на синтаксис C и C++, но имеет меньше возможностей низкого уровня, чем любой из них. Среда выполнения Java предоставляет динамические возможности (такие как отражение и модификация кода среды выполнения), которые обычно недоступны в традиционных компилируемых языках."
            },
            springBoot: {
                description: "Spring Boot позволяет легко создавать автономные приложения на базе Spring промышленного уровня, которые можно «просто запустить». Создавайте автономные приложения Spring. Встраивайте Tomcat, Jetty или Undertow напрямую (нет необходимости развертывать файлы WAR). Предоставьте самоуверенные «начальные» зависимости, чтобы упростить конфигурацию сборки. По возможности автоматически настраивайте Spring и сторонние библиотеки. Предоставляйте готовые к использованию функции, такие как метрики, проверки работоспособности и внешняя конфигурация. Абсолютно нет генерации кода и нет необходимости в настройке XML."
            },
            jsonWebToken: {
                description: "JSON Web Token (JWT) — это открытый стандарт, определяющий компактный и автономный способ безопасной передачи информации между сторонами в виде объекта JSON. Эту информацию можно проверить и ей можно доверять, поскольку она имеет цифровую подпись. Хотя JWT могут быть зашифрованы для обеспечения секретности между сторонами, мы сосредоточимся на подписанных токенах. Подписанные токены могут проверять целостность содержащихся в них утверждений, а зашифрованные токены скрывают эти утверждения от других сторон. Когда токены подписываются с использованием пар открытого/закрытого ключей, подпись также удостоверяет, что только сторона, владеющая закрытым ключом, является той, которая его подписала."
            },
            postgreSql: {
                description: "PostgreSQL — это мощная объектно-реляционная система баз данных с открытым исходным кодом, которая использует и расширяет язык SQL в сочетании со многими функциями, которые позволяют безопасно хранить и масштабировать самые сложные рабочие нагрузки с данными. Истоки PostgreSQL восходят к 1986 году как часть проекта POSTGRES в Калифорнийском университете в Беркли и насчитывают более 35 лет активной разработки базовой платформы. PostgreSQL заслужил прочную репутацию благодаря своей проверенной архитектуре, надежности, целостности данных, надежному набору функций, расширяемости и преданности сообщества открытого исходного кода, стоящего за программным обеспечением, для последовательного предоставления производительных и инновационных решений."
            },
            bcrypt: {
                description: "bcrypt — это функция хеширования паролей, разработанная Нильсом Провосом и Дэвидом Мазьером на основе шифра Blowfish и представленная на USENIX в 1999 году. Помимо включения соли для защиты от атак радужных таблиц, bcrypt является адаптивной функцией: с течением времени счетчик итераций можно увеличить, чтобы сделать его медленнее, чтобы он оставался устойчивым к атакам методом перебора даже при увеличении вычислительной мощности. Функция bcrypt является алгоритмом хеширования паролей по умолчанию для OpenBSD, а также для некоторых дистрибутивов Linux, таких как SUSE Linux. Существуют реализации bcrypt на C, C++, C#, Embarcadero Delphi, Elixir, Go, Java, JavaScript, Perl, PHP, Ruby и других языках."
            },
            jest: {
                description: "Jest — это восхитительная среда тестирования JavaScript, ориентированная на простоту. Создавайте тесты, позволяющие легко отслеживать крупные объекты. Снимки живут либо вместе с вашими тестами, либо встроены в систему. Тесты распараллеливаются путем их запуска в отдельных процессах для максимизации производительности."
            },
            mySql: {
                description: "MySQL HeatWave — это полностью управляемая служба базы данных для транзакций, аналитики в реальном времени в хранилищах и озерах данных, а также служб машинного обучения без сложностей, задержек и затрат, связанных с дублированием ETL. Он доступен на OCI, AWS и Azure. Самый полный набор расширенных функций, инструментов управления и технической поддержки для достижения высочайшего уровня масштабируемости, безопасности, надежности и бесперебойной работы MySQL. MySQL Cluster позволяет пользователям решать задачи баз данных веб-, облачных и коммуникационных сервисов следующего поколения с бескомпромиссной масштабируемостью, временем безотказной работы и гибкостью."
            },
            sqlite: {
                description: "SQLite — это библиотека языка C, которая реализует небольшой, быстрый, автономный, высоконадежный, полнофункциональный механизм базы данных SQL. SQLite — наиболее используемый движок базы данных в мире. SQLite встроен во все мобильные телефоны и большинство компьютеров и входит в состав множества других приложений, которые люди используют каждый день. Формат файлов SQLite стабилен, кроссплатформен и обратно совместим, и разработчики обещают сохранить его таким до 2050 года. Файлы базы данных SQLite обычно используются в качестве контейнеров для передачи богатого контента между системами и в качестве долгосрочного архивного формата. для данных."
            },
            prisma: {
                description: "Node.js нового поколения и TypeScript ORM. Prisma открывает новый уровень опыта разработчиков при работе с базами данных благодаря интуитивно понятной модели данных, автоматизированной миграции, безопасности типов и автодополнению. Схема Prisma интуитивно понятна и позволяет объявлять таблицы базы данных в удобочитаемой форме, что превращает процесс моделирования данных в удовольствие. Вы определяете свои модели вручную или анализируете их на основе существующей базы данных."
            },
            hibernate: {
                description: "Hibernate ORM позволяет разработчикам легче писать приложения, данные которых переживут процесс приложения. Будучи структурой объектно-реляционного сопоставления (ORM), Hibernate занимается сохранением данных применительно к реляционным базам данных (через JDBC). Помимо собственного «родного» API, Hibernate также является реализацией спецификации Java Persistence API (JPA). Таким образом, его можно легко использовать в любой среде, поддерживающей JPA, включая приложения Java SE, серверы приложений Java EE, контейнеры Enterprise OSGi и т. д. Hibernate поддерживает отложенную инициализацию, многочисленные стратегии выборки и оптимистическую блокировку с автоматическим управлением версиями и отметкой времени. Hibernate не требует специальных таблиц или полей базы данных и генерирует большую часть SQL-запросов во время инициализации системы, а не во время выполнения. Hibernate неизменно обеспечивает превосходную производительность по сравнению с обычным кодом JDBC как с точки зрения производительности разработчиков, так и с точки зрения производительности во время выполнения."
            },
            jpa: {
                description: "Jakarta Persistence (JPA; ранее Java Persistence API) — это спецификация интерфейса программирования приложений Jakarta EE, описывающая управление реляционными данными в корпоративных Java-приложениях. Объект персистентности — это облегченный класс Java, состояние которого обычно сохраняется в таблице реляционной базы данных. Экземпляры такой сущности соответствуют отдельным строкам таблицы. Сущности обычно имеют отношения с другими сущностями, и эти отношения выражаются через метаданные объектно-реляционного сопоставления (ORM). Эти метаданные можно указать непосредственно в файле класса сущности с помощью аннотаций или в отдельном файле XML-дескриптора, распространяемом вместе с приложением."
            },
            maven: {
                description: "Apache Maven — это инструмент управления и анализа программных проектов. Основываясь на концепции объектной модели проекта (POM), Maven может управлять сборкой проекта, отчетами и документацией из центральной части информации."
            }
        }

    },
    chinese: {
        title: "语言",
        titles: {
            portuguese: "葡萄牙语",
            english: "英语",
            spanish: "西班牙语",
            japanese: "日本人",
            ukrainian: "乌克兰",
            german: "德语",
            french: "法语",
            russian: "俄语",
            chinese: "中国人"
        },
        whatsButton: "在 Whatsapp 上交谈",
        apresentationTitle: "通过技术创造体验",
        apresentationDescription: "我是一名全端 Web 開發人員，畢業於巴西 Kenzie Academy 參與多個項目，解決高級問題並尋求發展新技能",
        apresentationButtons: ["项目", "技术"],
        stacksTitle: "我掌握的工具（点击查看更多）",
        stacksDescription: {
            footerMessage: "网页:",
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
                description: "作为异步事件驱动的 JavaScript 运行时，Node.js 旨在构建可扩展的网络应用程序。 Node.js 在设计上与 Ruby 的 Event Machine 和 Python 的 Twisted 等系统类似，并受其影响。 Node.js 将事件模型进一步发展。它将事件循环呈现为运行时构造而不是库。在其他系统中，总是有一个阻塞调用来启动事件循环。 Node.js 设计为无线程并不意味着您不能利用环境中的多个核心，这允许您在进程之间共享套接字以实现核心上的负载平衡。"
            },
            styledComponents: {
                description: "<Component/>时代的CSS。以速度、强大的打字能力和灵活性来设计您的风格。"
            },
            react: {
                description: "Web 和本机用户界面的库。 React 允许您使用称为组件的各个部分构建用户界面。创建您自己的 React 组件，例如缩略图、LikeButton 和视频。然后将它们组合到整个屏幕、页面和应用程序中。"
            },
            typeScript: {
                description: "TypeScript 是具有类型语法的 JavaScript。 TypeScript 是一种基于 JavaScript 构建的强类型编程语言，可为您提供任何规模的更好工具。 TypeScript 理解 JavaScript 并使用类型推断为您提供出色的工具，而无需额外的代码。"
            },
            docker: {
                description: "从一开始就制作更好、更安全的软件。使用 Docker 映像开发您自己独特的应用程序，并使用 Docker Compose 创建多个容器。 Docker 可与所有开发工具配合使用，例如 VS Code、CircleCI 和 GitHub。在任何环境中一致运行，从本地 Kubernetes 到 AWS ECS、Azure ACI、Google GKE 等。"
            },
            tailwind: {
                description: "无需离开 HTML 即可快速构建现代网站。一个实用程序优先的CSS框架，包含flex、pt-4、text-center和rotate-90等类，可以组合这些类来直接在标记中构建任何设计。",
            },
            sass: {
                description: "CSS 具有超能力。 Sass 是世界上最成熟、最稳定、最强大的专业级 CSS 扩展语言。",
            },
            stitches: {
                description: "CSS-in-JS 具有接近零的运行时间、SSR、多变体支持和一流的开发人员体验。避免运行时不必要的道具插值，使其比其他样式库性能更高。 Stitches 有一个专用的 React 库，但 @stitches/core 适用于任何框架，包括 Vue、Svelte，甚至普通 HTML。充满了有用的功能，如主题、智能令牌、css prop、utils 和完全类型化的 API。"
            },
            nextJs: {
                description: "Web 的 React 框架。 Next.js 被世界上一些最大的公司所使用，它使您能够通过扩展最新的 React 功能并集成强大的基于 Rust 的 JavaScript 工具来创建全栈 Web 应用程序，以实现最快的构建。",
            },
            zod: {
                description: "Zod 是一个 TypeScript 优先的模式声明和验证库。术语架构广泛地指代任何数据类型，从简单的字符串到复杂的嵌套对象。 Zod 的设计目标是尽可能对开发人员友好。目标是消除重复的类型声明。使用 Zod，您声明一次验证器，Zod 将自动推断静态 TypeScript 类型。将更简单的类型组合成复杂的数据结构很容易。",
            },
            axios: {
                description: "Axios 是一个基于 HTTP 的客户端，可用于 Node.js 和 navegador 的消息。这是一个异构体，它的导航器和 Node.js 都是基于代码的消息。没有使用 Node.js (modulo http) 的服务器或本地代码，也没有使用 XMLHttpRequests 的客户端 (navegador)。",
            },
            expressJs: {
                description: "适用于 Node.js 的快速、灵活且简约的 Web 框架。它是一个最小且灵活的 Node.js Web 应用程序框架，为 Web 和移动应用程序提供了一组强大的功能。"
            },
            nestJs: {
                description: "一个先进的 Node.js 框架，用于构建高效、可靠和可扩展的服务器端应用程序。由于模块化架构，允许使用任何其他库，为您提供真正的灵活性。一个适应性强的生态系统，是各种服务器端应用程序的成熟支柱。利用最新的 JavaScript 功能，将设计模式和成熟的解决方案引入 Node.js 世界。"
            },
            python: {
                description: "Python 是一种高级通用编程语言。其设计理念强调使用显着缩进的代码可读性。 Python 是动态类型的。它支持多种编程范式，包括结构化（特别是过程式）、面向对象和函数式编程。由于其全面的标准库，它通常被描述为一种包含电池的语言"
            },
            django: {
                description: "Django 是一个高级 Python Web 框架，鼓励快速开发和简洁、务实的设计。它由经验丰富的开发人员构建，解决了 Web 开发的大部分麻烦，因此您可以专注于编写应用程序，而无需重新发明轮子。它是免费且开源的。 Django 旨在帮助开发人员尽快将应用程序从概念变为完成。认真对待安全性并帮助开发人员避免许多常见的安全错误。网络上一些最繁忙的网站利用 Django 快速灵活扩展的能力。"
            },
            java: {
                description: "Java 是一种高级、基于类、面向对象的编程语言，其设计目的是尽可能减少实现依赖性。它是一种通用编程语言，旨在让程序员编写一次，随处运行（WORA），这意味着编译后的 Java 代码可以在所有支持 Java 的平台上运行，而无需重新编译。 Java 应用程序通常被编译为可以在任何 Java 虚拟机 (JVM) 上运行的字节码，无论底层计算机体系结构如何。 Java 的语法与 C 和 C++ 类似，但比它们中的任何一个具有更少的低级设施。 Java 运行时提供了传统编译语言通常不具备的动态功能（例如反射和运行时代码修改）。"
            },
            springBoot: {
                description: "Spring Boot 可以轻松创建独立的、生产级的基于 Spring 的应用程序，您可以“直接运行”。创建独立的 Spring 应用程序。直接嵌入Tomcat、Jetty或Undertow（无需部署WAR文件）。提供固执己见的“入门”依赖项以简化您的构建配置。尽可能自动配置 Spring 和第 3 方库。提供生产就绪的功能，例如指标、运行状况检查和外部化配置。完全不需要生成代码，也不需要 XML 配置"
            },
            jsonWebToken: {
                description: "JSON Web Token (JWT) 是一种开放标准，它定义了一种紧凑且独立的方式，用于在各方之间以 JSON 对象的形式安全地传输信息。该信息可以被验证和信任，因为它是经过数字签名的。尽管 JWT 可以加密以在各方之间提供保密性，但我们将重点关注签名令牌。签名令牌可以验证其中包含的声明的完整性，而加密令牌则向其他方隐藏这些声明。当使用公钥/私钥对对令牌进行签名时，签名还证明只有持有私钥的一方才是对其进行签名的一方。"
            },
            postgreSql: {
                description: "PostgreSQL 是一个功能强大的开源对象关系数据库系统，它使用并扩展了 SQL 语言，并结合了许多可安全存储和扩展最复杂数据工作负载的功能。 PostgreSQL 的起源可以追溯到 1986 年，作为加州大学伯克利分校 POSTGRES 项目的一部分，并且在核心平台上拥有超过 35 年的积极开发经验。 PostgreSQL 因其经过验证的架构、可靠性、数据完整性、强大的功能集、可扩展性以及软件背后的开源社区始终如一地提供高性能和创新解决方案的奉献精神而赢得了良好的声誉。"
            },
            bcrypt: {
                description: "bcrypt 是由 Niels Provos 和 David Mazières 设计的密码散列函数，基于 Blowfish 密码，并于 1999 年在 USENIX 上提出。除了结合盐来防止彩虹表攻击外，bcrypt 还是一个自适应函数：随着时间的推移，迭代计数可以增加以使其变慢，因此即使计算能力不断增加，它仍然可以抵抗暴力搜索攻击。 bcrypt 函数是 OpenBSD 的默认密码哈希算法，也是某些 Linux 发行版（例如 SUSE Linux）的默认算法。 bcrypt 有 C、C++、C#、Embarcadero Delphi、Elixir、Go、Java、JavaScript、Perl、PHP、Ruby 和其他语言的实现。"
            },
            jest: {
                description: "Jest 是一个令人愉快的 JavaScript 测试框架，注重简单性。进行轻松跟踪大型物体的测试。快照可以与测试一起存在，也可以嵌入内嵌。通过在自己的进程中运行测试来并行化测试，以最大限度地提高性能。"
            },
            mySql: {
                description: "MySQL HeatWave 是一项完全托管的数据库服务，适用于跨数据仓库和数据湖的事务、实时分析以及机器学习服务，并且没有 ETL 复制的复杂性、延迟和成本。它可在 OCI、AWS 和 Azure 上使用。最全面的高级功能、管理工具和技术支持，可实现最高水平的 MySQL 可扩展性、安全性、可靠性和正常运行时间。 MySQL Cluster 使用户能够以不妥协的可扩展性、正常运行时间和敏捷性应对下一代 Web、云和通信服务的数据库挑战。"
            },
            sqlite: {
                description: "SQLite是一个C语言库，它实现了一个小型、快速、独立、高可靠性、功能齐全的SQL数据库引擎。 SQLite 是世界上使用最广泛的数据库引擎。 SQLite 内置于所有手机和大多数计算机中，并捆绑在人们每天使用的无数其他应用程序中。 SQLite 文件格式稳定、跨平台且向后兼容，开发人员承诺在 2050 年之前保持这种状态。SQLite 数据库文件通常用作在系统之间传输丰富内容的容器，并用作长期存档格式用于数据。"
            },
            prisma: {
                description: "下一代 Node.js 和 TypeScript ORM。凭借其直观的数据模型、自动迁移、类型安全和自动完成功能，Prisma 在使用数据库时将开发人员体验提升到了新的水平。 Prisma 架构非常直观，可让您以人类可读的方式声明数据库表 — 让您的数据建模体验变得愉悦。您可以手动定义模型或从现有数据库中反思它们。"
            },
            hibernate: {
                description: "Hibernate ORM 使开发人员能够更轻松地编写数据比应用程序进程寿命更长的应用程序。作为一个对象/关系映射 (ORM) 框架，Hibernate 关注数据持久性，因为它适用于关系数据库（通过 JDBC）。除了它自己的“原生”API 之外，Hibernate 也是 Java Persistence API (JPA) 规范的实现。因此，它可以轻松地在任何支持 JPA 的环境中使用，包括 Java SE 应用程序、Java EE 应用程序服务器、企业 OSGi 容器等。Hibernate 支持延迟初始化、多种获取策略以及具有自动版本控制和时间戳的乐观锁定。 Hibernate 不需要特殊的数据库表或字段，并且在系统初始化时而不是运行时生成大部分 SQL。无论是在开发人员生产力还是运行时性能方面，Hibernate 始终提供优于直接 JDBC 代码的性能。"
            },
            jpa: {
                description: "Jakarta Persistence（JPA；以前称为 Java Persistence API）是 Jakarta EE 应用程序编程接口规范，描述企业 Java 应用程序中关系数据的管理。持久性实体是一个轻量级 Java 类，其状态通常保存到关系数据库中的表中。此类实体的实例对应于表中的各个行。实体通常与其他实体具有关系，并且这些关系通过对象/关系映射（ORM）元数据来表达。该元数据可以通过使用注释直接在实体类文件中指定，也可以在随应用程序分发的单独 XML 描述符文件中指定。"
            },
            maven: {
                description: "Apache Maven 是一个软件项目管理和理解工具。基于项目对象模型 (POM) 的概念，Maven 可以通过中央信息来管理项目的构建、报告和文档。"
            }
        }

    }
}