import { signal } from '@angular/core';
import { Experience } from '../shared/models/experience.model';

export const EXPERIENCES_EN = signal<Experience[]>([
  {
    title: 'Data Analyst',
    company: 'Tata Consultancy Services (TCS)',
    period: 'Apr 2025 – Present',
    location: 'Remote',
    description: `I work on a quality team focused on interaction auditing, performance analysis, and continuous improvement of operational processes for a major energy industry client.
I perform detailed analyses of operational data using SQL, Excel, Power BI, and Databricks, building reports, metrics, and KPIs that ensure traceability, accuracy, and decision-making support.
I also help automate audit workflows using Genesys, ServiceNow, and Power Automate, standardizing information, reducing manual steps, and increasing operational efficiency.
This role strengthens data governance and quality, improves delivery reliability, and supports business areas in making data-driven decisions.`,
    tools: [
      'Power BI',
      'Excel',
      'Power Automate',
      'SQL',
      'Databricks',
      'Genesys',
      'ServiceNow',
      'Data Quality',
      'Process Optimization',
      'Audit Analytics',
    ],
    logo: 'assets/img/enterprise/tata_consultancy_services_logo.jpg',
  },
  {
    title: 'Data Analyst',
    company: 'Capgemini',
    period: 'Sep 2024 – Sep 2025',
    location: 'Remote',
    description: `I worked on analytical solution development, building interactive dashboards and reports with Power BI and Tableau, integrating data from multiple sources using SQL and Azure data services.
I helped optimize ETL and ELT processes in cloud environments, improving performance, reliability, and organization of analytical data assets.
I also took part in internal technology enablement programs, including the FICO Blaze Advisor Academy and low-code platforms such as PegaSystems, completing over 550 hours of technical training and internal certifications.
This experience strengthened my skills in data analysis, system integration, and analytical solution design to support decision-making.`,
    tools: [
      'Power BI',
      'Tableau',
      'SQL',
      'Azure',
      'Databricks',
      'ETL',
      'Low-Code',
      'PegaSystems',
      'Business Intelligence',
      'Data Analytics',
    ],
    logo: 'assets/img/enterprise/capgemini_logo.jpg',
  },
  {
    title: 'Data Analyst / Assistant Data Engineer',
    company: 'Programmers – Beyond IT Brazil',
    period: 'Aug 2023 – Sep 2024',
    location: 'Remote',
    description: `I worked on Data Engineering and Artificial Intelligence projects, supporting the preparation of data used to train machine learning models.
Using the SuperAnnotate platform, I performed image labeling, description, and validation tasks, ensuring dataset quality, consistency, and standardization for data science teams.
I also contributed to data preprocessing and quality control activities, reducing noise and improving the reliability of AI models.
This experience expanded my understanding of data pipelines, dataset preparation, and quality governance in AI projects.`,
    tools: [
      'Python',
      'Data Engineering',
      'Machine Learning',
      'NLP',
      'SuperAnnotate',
      'Data Labeling',
      'Data Quality',
      'AI Automation',
    ],
    logo: 'assets/img/enterprise/programmersbeyondit_logo.jpg',
  },
  {
    title: 'Developer',
    company: 'Wipro',
    period: 'Jul 2022 – Oct 2023',
    location: 'Remote',
    description: `I took part in the Java Full Stack Developer program, building web applications and APIs with Java, Spring Boot, Angular, TypeScript, HTML, and CSS, integrated with databases such as MongoDB.
I deepened my knowledge of system architecture, application integration, and cloud computing fundamentals, working with Azure, AWS, and GCP environments.
This experience solidified my foundation in software development and system integration, paving the way for my transition into data and analytics.`,
    tools: [
      'Java',
      'Spring Boot',
      'Angular',
      'TypeScript',
      'MongoDB',
      'APIs',
      'Cloud Computing',
      'Azure',
      'AWS',
      'GCP',
      'System Integration',
    ],
    logo: 'assets/img/enterprise/wipro_logo.jpg',
  },
  {
    title: 'Software Engineer',
    company: 'Banco PAN',
    period: 'Feb 2023 – Jun 2023',
    location: 'Remote',
    description: `I worked on the development and maintenance of landing pages and responsive interfaces using HTML, CSS, Angular, and JavaScript, with a strong focus on performance and user experience (UX).
I contributed to deployment and approval workflows in production using the Lumis platform, ensuring visual consistency, quality, and stability of digital deliveries.
This experience strengthened my skills in web development, process automation, and delivery best practices in large corporate environments.`,
    tools: [
      'HTML',
      'CSS',
      'JavaScript',
      'Angular',
      'UX',
      'Lumis Platform',
      'Front-End Development',
      'Process Automation',
      'Continuous Improvement',
    ],
    logo: 'assets/img/enterprise/banco_pan_logo.jpg',
  },
]);

export const EXPERIENCES_PT = signal<Experience[]>([
  {
    title: 'Analista de Dados',
    company: 'Tata Consultancy Services (TCS)',
    period: 'Abr 2025 – Presente',
    location: 'Remoto',
    description: `Atuo em um time de qualidade com foco em auditoria de interações, análise de performance e melhoria contínua de processos operacionais em um grande cliente da indústria de energia.
Realizo análises detalhadas de dados operacionais utilizando SQL, Excel, Power BI e Databricks, estruturando relatórios, métricas e indicadores que garantem rastreabilidade, precisão e suporte à tomada de decisão.
Contribuo para a automação de fluxos de auditoria utilizando Genesys, ServiceNow e Power Automate, padronizando informações, reduzindo etapas manuais e aumentando a eficiência operacional.
Essa atuação fortalece a governança e a qualidade dos dados, melhora a confiabilidade das entregas e apoia as áreas de negócio na tomada de decisões baseadas em dados.`,
    tools: [
      'Power BI',
      'Excel',
      'Power Automate',
      'SQL',
      'Databricks',
      'Genesys',
      'ServiceNow',
      'Qualidade de Dados',
      'Otimização de Processos',
      'Análise de Auditoria',
    ],
    logo: 'assets/img/enterprise/tata_consultancy_services_logo.jpg',
  },
  {
    title: 'Analista de Dados',
    company: 'Capgemini',
    period: 'Set 2024 – Set 2025',
    location: 'Remoto',
    description: `Atuei no desenvolvimento de soluções analíticas, criando dashboards interativos e relatórios com Power BI e Tableau, integrando dados de múltiplas fontes via SQL e serviços de dados em Azure.
Participei da otimização de processos de ETL e ELT em ambientes em nuvem, aumentando desempenho, confiabilidade e organização das bases de dados usadas em análises.
Integrei iniciativas internas de capacitação tecnológica, incluindo a Academia FICO Blaze Advisor e estudos em plataformas low-code como PegaSystems, acumulando mais de 550 horas de aprendizado e certificações internas.
Essa experiência consolidou minha atuação em análise de dados, integração de sistemas e construção de soluções analíticas voltadas ao suporte à decisão.`,
    tools: [
      'Power BI',
      'Tableau',
      'SQL',
      'Azure',
      'Databricks',
      'ETL',
      'Low-Code',
      'PegaSystems',
      'Business Intelligence',
      'Análise de Dados',
    ],
    logo: 'assets/img/enterprise/capgemini_logo.jpg',
  },
  {
    title: 'Analista de Dados / Assistente de Engenheiro de Dados',
    company: 'Programmers – Beyond IT Brazil',
    period: 'Ago 2023 – Set 2024',
    location: 'Remoto',
    description: `Atuei em projetos de Engenharia de Dados e Inteligência Artificial, colaborando na preparação de dados utilizados no treinamento de modelos de machine learning.
Utilizando a plataforma SuperAnnotate, realizei rotulagem, descrição e validação de imagens, garantindo qualidade, consistência e padronização dos datasets para times de ciência de dados.
Também participei de atividades de pré-processamento e controle de qualidade de dados, reduzindo ruídos e melhorando a confiabilidade dos modelos de IA.
Essa experiência ampliou minha visão sobre pipelines de dados, preparação de datasets e governança de qualidade em projetos de IA.`,
    tools: [
      'Python',
      'Engenharia de Dados',
      'Machine Learning',
      'NLP',
      'SuperAnnotate',
      'Rotulagem de Dados',
      'Qualidade de Dados',
      'Automação com IA',
    ],
    logo: 'assets/img/enterprise/programmersbeyondit_logo.jpg',
  },
  {
    title: 'Desenvolvedor',
    company: 'Wipro',
    period: 'Jul 2022 – Out 2023',
    location: 'Remoto',
    description: `Participei do programa Java Full Stack Developer, desenvolvendo aplicações web e APIs com Java, Spring Boot, Angular, TypeScript, HTML e CSS, integradas a bancos de dados como MongoDB.
Aprofundei conhecimentos em arquitetura de sistemas, integração de aplicações e fundamentos de computação em nuvem, explorando ambientes Azure, AWS e GCP.
Essa experiência consolidou minha base em desenvolvimento de software e integração de sistemas, servindo como alicerce para minha transição para a área de dados e analytics.`,
    tools: [
      'Java',
      'Spring Boot',
      'Angular',
      'TypeScript',
      'MongoDB',
      'APIs',
      'Computação em Nuvem',
      'Azure',
      'AWS',
      'GCP',
      'Integração de Sistemas',
    ],
    logo: 'assets/img/enterprise/wipro_logo.jpg',
  },
  {
    title: 'Engenheiro de Software',
    company: 'Banco PAN',
    period: 'Fev 2023 – Jun 2023',
    location: 'Remoto',
    description: `Atuei no desenvolvimento e manutenção de landing pages e interfaces responsivas, utilizando HTML, CSS, Angular e JavaScript, com foco em performance e experiência do usuário (UX).
Participei de processos de publicação e homologação de páginas em produção por meio da plataforma Lumis, garantindo padronização visual, qualidade e estabilidade das entregas digitais.
Essa experiência reforçou minha atuação em desenvolvimento web, automação de processos e boas práticas de entrega em ambientes corporativos de grande porte.`,
    tools: [
      'HTML',
      'CSS',
      'JavaScript',
      'Angular',
      'UX',
      'Plataforma Lumis',
      'Desenvolvimento Front-End',
      'Automação de Processos',
      'Melhoria Contínua',
    ],
    logo: 'assets/img/enterprise/banco_pan_logo.jpg',
  },
]);
