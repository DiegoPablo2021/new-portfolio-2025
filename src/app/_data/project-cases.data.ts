import { ProjectCase } from '../shared/models/project-case.model';

export const PROJECT_CASES_EN: ProjectCase[] = [
  {
    slug: 'linkedin-career-intelligence-lakehouse',
    title: 'LinkedIn Career Intelligence Lakehouse',
    category: 'Data Engineering Case',
    summary:
      'End-to-end analytics engineering case that turns LinkedIn exports into a reproducible app with Python, DuckDB, dbt and Streamlit.',
    problem:
      'LinkedIn exports arrive as many disconnected CSV files with uneven structures and low immediate analytical value. The goal was to transform that raw material into a navigable analytics product with technical reliability and executive storytelling.',
    stack: ['Python', 'DuckDB', 'dbt', 'Streamlit', 'Pytest', 'SQLFluff'],
    architecture: [
      'LinkedIn CSV exports are profiled and standardized in a Python ingestion layer.',
      'Cleaned tables are persisted into a local DuckDB warehouse with bronze-oriented organization.',
      'dbt structures the analytical layer through staging, intermediate and marts models.',
      'A Streamlit app consumes curated marts to present executive KPIs, domain pages and analytical narratives.',
    ],
    screenshots: [
      {
        src: 'assets/projects/linkedin_lakehouse_stack_flow.svg',
        alt: 'Lakehouse architecture flow',
        caption: 'High-level end-to-end flow from raw LinkedIn exports to the Streamlit analytics app.',
      },
      {
        src: 'assets/projects/lakehouse-home-highlight.svg',
        alt: 'Lakehouse home page',
        caption: 'Home page with executive KPIs and business questions built on top of curated marts.',
      },
      {
        src: 'assets/projects/lakehouse-health-highlight.svg',
        alt: 'Lakehouse health page',
        caption: 'Operational health page showing coverage, inventory and pipeline-readiness indicators.',
      },
    ],
    metrics: [
      {
        label: 'Files inventoried',
        value: '91',
        detail: 'Current export inventory tracked and validated for ingestion coverage.',
      },
      {
        label: 'Connections analyzed',
        value: '9.697',
        detail: 'Professional network transformed into structured analytical views.',
      },
      {
        label: 'Analytical domains',
        value: '14+',
        detail: 'Coverage across profile, career, learning, jobs, health and supporting operational layers.',
      },
    ],
    githubUrl: 'https://github.com/DiegoPablo2021/linkedin-career-intelligence-lakehouse',
  },
  {
    slug: 'data-dashboard',
    title: 'Data Dashboard',
    category: 'Business Intelligence Case',
    summary:
      'Executive sales dashboard focused on revenue, KPIs and commercial performance analysis using Power BI and relational modeling.',
    problem:
      'Business stakeholders needed a consolidated commercial view capable of tracking revenue behavior, financial indicators and strategic performance in a single dashboard.',
    stack: ['Power BI', 'DAX', 'Excel', 'Data Modeling'],
    architecture: [
      'Source spreadsheets are consolidated and organized for business reporting.',
      'A relational model structures dimensions and facts for sales analysis.',
      'DAX measures calculate KPIs, revenue composition and performance indicators.',
      'The final Power BI experience surfaces executive insights through interactive visuals and summary cards.',
    ],
    screenshots: [
      {
        src: 'assets/projects/dashboard_neon_flow.png',
        alt: 'Dashboard architecture',
        caption: 'Visual flow highlighting the business intelligence architecture behind the dashboard.',
      },
      {
        src: 'assets/projects/01-dashboard.jpg',
        alt: 'Dashboard preview',
        caption: 'Interface preview with commercial KPIs, charts and executive views.',
      },
    ],
    metrics: [
      {
        label: 'Main focus',
        value: 'Sales KPIs',
        detail: 'Designed to surface revenue, discount strategy and product performance signals.',
      },
      {
        label: 'Modeling style',
        value: 'Relational',
        detail: 'Structured around business entities to support reusable executive analysis.',
      },
      {
        label: 'Consumption',
        value: 'Executive dashboard',
        detail: 'Interactive BI layer intended for fast managerial interpretation.',
      },
    ],
    githubUrl: 'https://github.com/DiegoPablo2021/dashboard-comercial',
  },
  {
    slug: 'triggo-case-study',
    title: 'Triggo Case Study',
    category: 'Machine Learning + Analytics Case',
    summary:
      'Technical challenge combining automated clustering, analytics storytelling and a more production-minded structure for experimentation and validation.',
    problem:
      'The challenge required extracting business value from a large e-commerce dataset while balancing analytical exploration, automated segmentation logic and clearer engineering practices.',
    stack: ['Python', 'Machine Learning', 'Pytest', 'Logging', 'Notebook Dashboard'],
    architecture: [
      'Raw e-commerce data is explored and prepared for segmentation analysis.',
      'Clustering logic adapts through silhouette-score-based selection.',
      'Logging and tests improve traceability and confidence in the pipeline behavior.',
      'Notebook and dashboard outputs translate technical segmentation into business-oriented actions.',
    ],
    screenshots: [
      {
        src: 'assets/projects/ml_pipeline_dashboard.png',
        alt: 'Triggo dashboard overview',
        caption: 'Combined machine learning and analytics presentation prepared for the technical challenge.',
      },
      {
        src: 'assets/projects/ml_pipeline_dashboard_content.png',
        alt: 'Triggo detailed dashboard',
        caption: 'Detailed analytical content translating clustering outputs into business insights.',
      },
      {
        src: 'assets/projects/triggo_demo.gif',
        alt: 'Triggo demo',
        caption: 'Animated preview of the interactive output and analytical flow.',
      },
    ],
    metrics: [
      {
        label: 'Core capability',
        value: 'Dynamic clustering',
        detail: 'Cluster definition adapts using silhouette logic instead of a fixed number of groups.',
      },
      {
        label: 'Engineering layer',
        value: 'Tests + logs',
        detail: 'Added operational practices to make the challenge output more reproducible.',
      },
      {
        label: 'Business angle',
        value: 'Actionable segments',
        detail: 'Outputs are framed to support marketing and commercial interpretation.',
      },
    ],
    githubUrl: 'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025',
  },
  {
    slug: 'olist-analytics-data-engineering',
    title: 'Olist Analytics & Data Engineering',
    category: 'Data Engineering + BI Case',
    summary:
      'Portfolio project centered on ETL, warehouse modeling and executive analytics for the Brazilian Olist e-commerce dataset.',
    problem:
      'The objective was to turn a broad public e-commerce dataset into a structured analytical foundation capable of supporting business intelligence views and operational exploration.',
    stack: ['Python', 'PostgreSQL', 'ETL', 'Power BI', 'SQL'],
    architecture: [
      'Raw Olist datasets are ingested and transformed through ETL routines.',
      'PostgreSQL organizes the warehouse layer for curated analytical consumption.',
      'Business-ready tables support performance, customer and delivery analysis.',
      'Power BI exposes the final executive consumption layer for business storytelling.',
    ],
    screenshots: [
      {
        src: 'assets/projects/olist_architecture_flow.png',
        alt: 'Olist architecture flow',
        caption: 'Architecture view connecting ingestion, warehouse modeling and BI consumption.',
      },
      {
        src: 'assets/projects/03-olist.png',
        alt: 'Olist analytics preview',
        caption: 'Preview of the analytical output created from the Olist dataset.',
      },
    ],
    metrics: [
      {
        label: 'Dataset context',
        value: 'Brazilian e-commerce',
        detail: 'Built around a rich public dataset with commercial, logistics and customer dimensions.',
      },
      {
        label: 'Data layer',
        value: 'Warehouse',
        detail: 'Structured to support downstream BI and business exploration.',
      },
      {
        label: 'Consumption',
        value: 'Power BI',
        detail: 'Executive layer focused on decision support and KPI visibility.',
      },
    ],
    githubUrl: 'https://github.com/DiegoPablo2021/olist-analytics',
  },
  {
    slug: 'lighthouse-dados-ai',
    title: 'Lighthouse-Dados-AI',
    category: 'Data Science Case',
    summary:
      'End-to-end data science case combining EDA, predictive modeling and recommendation-oriented reasoning.',
    problem:
      'The challenge was to investigate a real-world dataset, surface patterns through exploration and build predictive and recommendation-driven outputs that could support better decision-making.',
    stack: ['Python', 'EDA', 'Predictive Modeling', 'Recommendation Systems'],
    architecture: [
      'Exploratory data analysis identifies data quality patterns and initial hypotheses.',
      'Feature preparation supports predictive and recommendation-oriented workflows.',
      'Modeling experiments generate interpretable analytical outputs.',
      'The final deliverable packages the data science journey as an end-to-end case.',
    ],
    screenshots: [
      {
        src: 'assets/projects/lighthouse_end_to_end.png',
        alt: 'Lighthouse end-to-end flow',
        caption: 'Project flow summarizing the end-to-end data science process.',
      },
    ],
    metrics: [
      {
        label: 'Main scope',
        value: 'EDA + modeling',
        detail: 'Blends analytical exploration with predictive reasoning.',
      },
      {
        label: 'Output style',
        value: 'End-to-end case',
        detail: 'Framed as a portfolio-ready data science narrative rather than isolated notebooks.',
      },
      {
        label: 'Use case',
        value: 'Prediction + recommendation',
        detail: 'Focuses on insights that can guide decision-making and personalization.',
      },
    ],
    githubUrl: 'https://github.com/DiegoPablo2021/Desafio-Lighthouse-Dados-AI',
  },
  {
    slug: 'strategic-sales-analysis',
    title: 'Strategic Sales Analysis',
    category: 'Business Intelligence Case',
    summary:
      'Executive dashboard created for Jaar Consult evaluation, combining commercial performance analysis, discount strategy and product KPI monitoring.',
    problem:
      'The case required translating sales behavior into a concise executive dashboard that could support pricing interpretation, product analysis and commercial monitoring.',
    stack: ['Power BI', 'DAX', 'Data Modeling', 'Business KPI Design'],
    architecture: [
      'Commercial data is organized into a model that supports product and sales analysis.',
      'DAX measures calculate key business KPIs and analytical comparisons.',
      'Visuals are arranged to highlight executive interpretation of performance and discount strategy.',
      'The final dashboard provides a compact decision-support layer for the evaluation scenario.',
    ],
    screenshots: [
      {
        src: 'assets/projects/jaar_end_to_end.png',
        alt: 'Jaar Consult dashboard flow',
        caption: 'Architecture-style visual that summarizes the technical and executive layers of the dashboard.',
      },
    ],
    metrics: [
      {
        label: 'Analytical lens',
        value: 'Sales performance',
        detail: 'Focused on product, discount and performance interpretation.',
      },
      {
        label: 'Decision support',
        value: 'Executive dashboard',
        detail: 'Structured for fast managerial reading during evaluation.',
      },
      {
        label: 'Technical core',
        value: 'Model + DAX',
        detail: 'Built on semantic modeling and measure logic for KPI computation.',
      },
    ],
    githubUrl: 'https://github.com/DiegoPablo2021/PBI-Jaar-Consult',
  },
];

export const PROJECT_CASES_PT: ProjectCase[] = [
  {
    slug: 'linkedin-career-intelligence-lakehouse',
    title: 'LinkedIn Career Intelligence Lakehouse',
    category: 'Case de Engenharia de Dados',
    summary:
      'Case end-to-end de analytics engineering que transforma exports do LinkedIn em um app reproduzível com Python, DuckDB, dbt e Streamlit.',
    problem:
      'Os exports do LinkedIn chegam como vários CSVs desconectados, com estruturas heterogêneas e pouco valor analítico imediato. O objetivo foi transformar esse material bruto em um produto analítico navegável, confiável e com storytelling executivo.',
    stack: ['Python', 'DuckDB', 'dbt', 'Streamlit', 'Pytest', 'SQLFluff'],
    architecture: [
      'Os CSVs do LinkedIn passam por profiling e padronização em uma camada de ingestão em Python.',
      'As tabelas limpas são persistidas em um warehouse local em DuckDB com organização orientada a bronze.',
      'O dbt estrutura a camada analítica com modelos staging, intermediate e marts.',
      'Um app em Streamlit consome os marts para apresentar KPIs executivos, páginas por domínio e narrativas analíticas.',
    ],
    screenshots: [
      {
        src: 'assets/projects/linkedin_lakehouse_stack_flow.svg',
        alt: 'Fluxo da arquitetura do Lakehouse',
        caption: 'Visão end-to-end do fluxo entre exports brutos do LinkedIn e o app analítico em Streamlit.',
      },
      {
        src: 'assets/projects/lakehouse-home-highlight.svg',
        alt: 'Home do Lakehouse',
        caption: 'Home com KPIs executivos e perguntas de negócio construídas sobre marts curados.',
      },
      {
        src: 'assets/projects/lakehouse-health-highlight.svg',
        alt: 'Health do Lakehouse',
        caption: 'Página operacional mostrando cobertura, inventário e indicadores de prontidão do pipeline.',
      },
    ],
    metrics: [
      {
        label: 'Arquivos inventariados',
        value: '91',
        detail: 'Inventário atual monitorado e validado para cobertura da ingestão.',
      },
      {
        label: 'Conexões analisadas',
        value: '9.697',
        detail: 'Rede profissional transformada em visões analíticas estruturadas.',
      },
      {
        label: 'Domínios analíticos',
        value: '14+',
        detail: 'Cobertura de profile, career, learning, jobs, health e camadas operacionais de apoio.',
      },
    ],
    githubUrl: 'https://github.com/DiegoPablo2021/linkedin-career-intelligence-lakehouse',
  },
  {
    slug: 'data-dashboard',
    title: 'Dashboard de Dados',
    category: 'Case de Business Intelligence',
    summary:
      'Dashboard executivo de vendas com foco em faturamento, KPIs e análise de performance comercial usando Power BI e modelagem relacional.',
    problem:
      'O contexto exigia uma visão comercial consolidada capaz de acompanhar faturamento, indicadores financeiros e performance estratégica em um único dashboard executivo.',
    stack: ['Power BI', 'DAX', 'Excel', 'Modelagem de Dados'],
    architecture: [
      'Planilhas de origem são consolidadas e organizadas para relatórios de negócio.',
      'Um modelo relacional estrutura dimensões e fatos para análise de vendas.',
      'Medidas em DAX calculam KPIs, composição de receita e indicadores de performance.',
      'A experiência final em Power BI expõe insights executivos por meio de visuais interativos e cards resumo.',
    ],
    screenshots: [
      {
        src: 'assets/projects/dashboard_neon_flow.png',
        alt: 'Arquitetura do dashboard',
        caption: 'Fluxo visual destacando a arquitetura de business intelligence por trás do dashboard.',
      },
      {
        src: 'assets/projects/01-dashboard.jpg',
        alt: 'Preview do dashboard',
        caption: 'Prévia da interface com KPIs comerciais, gráficos e leituras executivas.',
      },
    ],
    metrics: [
      {
        label: 'Foco principal',
        value: 'KPIs de vendas',
        detail: 'Pensado para evidenciar faturamento, estratégia de descontos e performance de produtos.',
      },
      {
        label: 'Modelagem',
        value: 'Relacional',
        detail: 'Estruturada em torno de entidades de negócio para análises executivas reutilizáveis.',
      },
      {
        label: 'Consumo',
        value: 'Dashboard executivo',
        detail: 'Camada de BI interativa voltada para leitura gerencial rápida.',
      },
    ],
    githubUrl: 'https://github.com/DiegoPablo2021/dashboard-comercial',
  },
  {
    slug: 'triggo-case-study',
    title: 'Estudo de Caso Triggo',
    category: 'Case de Machine Learning + Analytics',
    summary:
      'Desafio técnico que combina clusterização automatizada, storytelling analítico e uma estrutura mais orientada à produção para experimentação e validação.',
    problem:
      'O desafio exigia extrair valor de negócio de um grande dataset de e-commerce, equilibrando exploração analítica, lógica automatizada de segmentação e práticas de engenharia mais consistentes.',
    stack: ['Python', 'Machine Learning', 'Pytest', 'Logging', 'Dashboard em Notebook'],
    architecture: [
      'Os dados brutos de e-commerce são explorados e preparados para análise de segmentação.',
      'A lógica de clusterização se adapta por seleção baseada em silhouette score.',
      'Logs e testes melhoram rastreabilidade e confiança no comportamento do pipeline.',
      'Os outputs em notebook e dashboard traduzem a segmentação técnica em ações orientadas ao negócio.',
    ],
    screenshots: [
      {
        src: 'assets/projects/ml_pipeline_dashboard.png',
        alt: 'Visão geral do dashboard Triggo',
        caption: 'Visão combinada de machine learning e analytics preparada para o desafio técnico.',
      },
      {
        src: 'assets/projects/ml_pipeline_dashboard_content.png',
        alt: 'Detalhe do dashboard Triggo',
        caption: 'Conteúdo analítico detalhado traduzindo a clusterização em insights de negócio.',
      },
      {
        src: 'assets/projects/triggo_demo.gif',
        alt: 'Demo do projeto Triggo',
        caption: 'Prévia animada da navegação e do fluxo analítico apresentado.',
      },
    ],
    metrics: [
      {
        label: 'Capacidade central',
        value: 'Clusterização dinâmica',
        detail: 'A definição dos clusters se adapta via silhouette em vez de número fixo de grupos.',
      },
      {
        label: 'Camada de engenharia',
        value: 'Testes + logs',
        detail: 'Práticas operacionais adicionadas para deixar a entrega mais reproduzível.',
      },
      {
        label: 'Ângulo de negócio',
        value: 'Segmentos acionáveis',
        detail: 'Os outputs são enquadrados para apoiar decisões de marketing e performance.',
      },
    ],
    githubUrl: 'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025',
  },
  {
    slug: 'olist-analytics-data-engineering',
    title: 'Engenharia de Dados & Analytics Olist',
    category: 'Case de Engenharia de Dados + BI',
    summary:
      'Projeto de portfólio centrado em ETL, modelagem de warehouse e analytics executivo sobre o dataset brasileiro de e-commerce Olist.',
    problem:
      'O objetivo foi transformar um dataset público amplo de e-commerce em uma base analítica estruturada, capaz de sustentar visões de business intelligence e exploração operacional.',
    stack: ['Python', 'PostgreSQL', 'ETL', 'Power BI', 'SQL'],
    architecture: [
      'Os datasets brutos do Olist são ingeridos e transformados por rotinas ETL.',
      'O PostgreSQL organiza a camada de warehouse para consumo analítico curado.',
      'Tabelas orientadas a negócio suportam análise de performance, clientes e entregas.',
      'O Power BI expõe a camada final de consumo executivo para storytelling de negócio.',
    ],
    screenshots: [
      {
        src: 'assets/projects/olist_architecture_flow.png',
        alt: 'Fluxo da arquitetura Olist',
        caption: 'Arquitetura conectando ingestão, modelagem de warehouse e consumo em BI.',
      },
      {
        src: 'assets/projects/03-olist.png',
        alt: 'Preview analítico Olist',
        caption: 'Prévia do output analítico construído a partir do dataset Olist.',
      },
    ],
    metrics: [
      {
        label: 'Contexto dos dados',
        value: 'E-commerce brasileiro',
        detail: 'Construído sobre um dataset rico em dimensões comerciais, logísticas e de clientes.',
      },
      {
        label: 'Camada de dados',
        value: 'Warehouse',
        detail: 'Estruturada para sustentar BI e exploração orientada a negócio.',
      },
      {
        label: 'Consumo',
        value: 'Power BI',
        detail: 'Camada executiva focada em suporte à decisão e visibilidade de KPIs.',
      },
    ],
    githubUrl: 'https://github.com/DiegoPablo2021/olist-analytics',
  },
  {
    slug: 'lighthouse-dados-ai',
    title: 'Lighthouse-Dados-AI',
    category: 'Case de Data Science',
    summary:
      'Case end-to-end de ciência de dados combinando EDA, modelagem preditiva e raciocínio orientado a recomendações.',
    problem:
      'O desafio era investigar um dataset real, revelar padrões por exploração e construir outputs preditivos e recomendadores capazes de apoiar melhores decisões.',
    stack: ['Python', 'EDA', 'Modelagem Preditiva', 'Sistemas de Recomendação'],
    architecture: [
      'A análise exploratória identifica padrões de qualidade e hipóteses iniciais.',
      'A preparação de atributos sustenta fluxos preditivos e orientados a recomendação.',
      'Experimentos de modelagem geram outputs analíticos interpretáveis.',
      'A entrega final empacota a jornada de ciência de dados como um case end-to-end.',
    ],
    screenshots: [
      {
        src: 'assets/projects/lighthouse_end_to_end.png',
        alt: 'Fluxo end-to-end Lighthouse',
        caption: 'Fluxo do projeto resumindo o processo completo de ciência de dados.',
      },
    ],
    metrics: [
      {
        label: 'Escopo principal',
        value: 'EDA + modelagem',
        detail: 'Combina exploração analítica com raciocínio preditivo.',
      },
      {
        label: 'Formato de entrega',
        value: 'Case end-to-end',
        detail: 'Apresentado como narrativa de portfólio, e não como notebook isolado.',
      },
      {
        label: 'Uso analítico',
        value: 'Predição + recomendação',
        detail: 'Foco em insights que apoiam decisão e personalização.',
      },
    ],
    githubUrl: 'https://github.com/DiegoPablo2021/Desafio-Lighthouse-Dados-AI',
  },
  {
    slug: 'strategic-sales-analysis',
    title: 'Análise Estratégica de Vendas',
    category: 'Case de Business Intelligence',
    summary:
      'Dashboard executivo criado para a avaliação da Jaar Consult, combinando análise de performance comercial, estratégia de descontos e monitoramento de KPIs de produto.',
    problem:
      'O case exigia traduzir comportamento de vendas em um dashboard executivo conciso, capaz de apoiar leitura de preços, análise de produtos e acompanhamento comercial.',
    stack: ['Power BI', 'DAX', 'Modelagem de Dados', 'Design de KPIs'],
    architecture: [
      'Os dados comerciais são organizados em um modelo voltado à análise de vendas e produtos.',
      'Medidas em DAX calculam KPIs centrais e comparações analíticas.',
      'Os visuais são estruturados para evidenciar leitura executiva de performance e desconto.',
      'O dashboard final entrega uma camada compacta de suporte à decisão para o contexto da avaliação.',
    ],
    screenshots: [
      {
        src: 'assets/projects/jaar_end_to_end.png',
        alt: 'Fluxo do dashboard Jaar Consult',
        caption: 'Visual de arquitetura resumindo as camadas técnicas e executivas do dashboard.',
      },
    ],
    metrics: [
      {
        label: 'Lente analítica',
        value: 'Performance de vendas',
        detail: 'Foco em produto, descontos e interpretação de performance.',
      },
      {
        label: 'Suporte à decisão',
        value: 'Dashboard executivo',
        detail: 'Estruturado para leitura gerencial rápida durante a avaliação.',
      },
      {
        label: 'Base técnica',
        value: 'Modelo + DAX',
        detail: 'Construído sobre modelagem semântica e medidas para cálculo de KPIs.',
      },
    ],
    githubUrl: 'https://github.com/DiegoPablo2021/PBI-Jaar-Consult',
  },
];

export function getProjectCaseBySlug(language: 'en' | 'pt', slug: string): ProjectCase | undefined {
  const cases = language === 'pt' ? PROJECT_CASES_PT : PROJECT_CASES_EN;
  return cases.find((projectCase) => projectCase.slug === slug);
}
