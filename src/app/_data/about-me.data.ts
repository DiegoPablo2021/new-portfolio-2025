import { signal } from '@angular/core';
import { AboutSection } from '../shared/models/about.model';
import {
  faUserGraduate,
  faChartLine,
  faBrain,
  faCogs,
  faProjectDiagram,
  faSearch,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

export const ABOUT_ME_EN = signal<AboutSection[]>([
  {
    id: 'overview',
    title: 'Overview',
    content: `I’m a Mid-level Data Analyst at Conta Azul with experience in data engineering and analytics, specializing in the extraction, transformation, and visualization of information to support strategic decision-making and process optimization.`,
    icon: faChartLine,
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills & Background',
    content: `With over 11 years of experience in sales and customer service, I’ve developed essential soft skills such as effective communication, analytical thinking, problem-solving, teamwork, resilience, and adaptability — competencies that now strengthen my approach to data analysis and business intelligence.`,
    icon: faBrain,
  },
  {
    id: 'education-certifications',
    title: 'Education & Certifications',
    content: `I hold a solid academic and technical foundation in technology and data, with a degree in Systems Analysis and Development, a completed postgraduate qualification in Big Data, ongoing postgraduate studies in Data Engineering, and certifications in Scrum, Oracle Cloud, Databricks, and AWS Generative AI.`,
    icon: faUserGraduate,
  },
  {
    id: 'technical-skills',
    title: 'Technical Skills',
    content: `My hands-on experience includes SQL, BigQuery, Looker, Dataform, Python, Power BI, Excel, Databricks, Git, and GitHub, applying agile methodologies and data governance best practices to deliver reliable insights and scalable solutions.`,
    icon: faCogs,
  },
  {
    id: 'career-path',
    title: 'Career Path',
    content: `Throughout my career, I’ve evolved from software and full-stack development to the data and artificial intelligence field, gaining a broad perspective on system integration, data quality, and process automation.`,
    icon: faProjectDiagram,
  },
  {
    id: 'current-focus',
    title: 'Current Focus',
    content: `At Conta Azul, I work with analytics and BI using BigQuery, Looker and Dataform on GCP. My focus includes SaaS metrics, data modeling and reliable analytical deliveries through Git and GitHub.`,
    icon: faSearch,
  },
  // {
  //   id: 'passion',
  //   title: 'Passion & Tools',
  //   content: `I’m passionate about contributing to projects in Data Analytics, Business Intelligence, and Data Engineering, using tools like Python (Pandas, NumPy, Matplotlib), SQL (PostgreSQL, MySQL), and Power BI to create interactive dashboards and KPI-driven analyses that enable smarter, data-driven decisions.`,
  //   icon: faLaptopCode,
  // },
]);

export const ABOUT_ME_PT = signal<AboutSection[]>([
  {
    id: 'overview',
    title: 'Visão Geral',
    content: `Sou Analista de Dados Pleno na Conta Azul, com experiência em engenharia e análise de dados, especializado na extração, transformação e visualização de informações para apoiar a tomada de decisões estratégicas e a otimização de processos.`,
    icon: faChartLine,
  },
  {
    id: 'soft-skills',
    title: 'Habilidades Comportamentais',
    content: `Com mais de 11 anos de experiência em vendas e atendimento ao cliente, desenvolvi habilidades essenciais como comunicação eficaz, pensamento analítico, resolução de problemas, trabalho em equipe, resiliência e adaptabilidade — competências que hoje fortalecem minha atuação em análise de dados e business intelligence.`,
    icon: faBrain,
  },
  {
    id: 'education-certifications',
    title: 'Formação & Certificações',
    content: `Possuo uma base sólida em tecnologia e dados, com graduação em Análise e Desenvolvimento de Sistemas, pós-graduação concluída em Big Data, pós-graduação em Engenharia de Dados em andamento e certificações em Scrum, Oracle Cloud, Databricks e AWS Generative AI.`,
    icon: faUserGraduate,
  },
  {
    id: 'technical-skills',
    title: 'Competências Técnicas',
    content: `Tenho experiência prática com SQL, BigQuery, Looker, Dataform, Python, Power BI, Excel, Databricks, Git e GitHub, aplicando metodologias ágeis e boas práticas de governança de dados para entregar insights confiáveis e soluções escaláveis.`,
    icon: faCogs,
  },
  {
    id: 'career-path',
    title: 'Trajetória Profissional',
    content: `Ao longo da minha carreira, evoluí do desenvolvimento de software e full-stack para a área de dados e inteligência artificial, adquirindo uma visão ampla sobre integração de sistemas, qualidade de dados e automação de processos.`,
    icon: faProjectDiagram,
  },
  {
    id: 'current-focus',
    title: 'Foco Atual',
    content: `Na Conta Azul, atuo com analytics e BI usando BigQuery, Looker e Dataform no GCP. Meu foco inclui métricas SaaS, modelagem de dados e entregas analíticas com versionamento em Git e GitHub.`,
    icon: faSearch,
  },
  // {
  //   id: 'passion',
  //   title: 'Paixão & Ferramentas',
  //   content: `Sou apaixonado por contribuir com projetos em Análise de Dados, Business Intelligence e Engenharia de Dados, utilizando ferramentas como Python (Pandas, NumPy, Matplotlib), SQL (PostgreSQL, MySQL) e Power BI para criar dashboards interativos e análises orientadas por KPIs que promovem decisões mais inteligentes e baseadas em dados.`,
  //   icon: faLaptopCode,
  // },
]);
