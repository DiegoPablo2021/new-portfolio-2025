import { ProjectCase } from '../shared/models/project-case.model';

export const PROJECT_CASES_EN: ProjectCase[] = [
  {
    slug: 'linkedin-career-intelligence-lakehouse',
    title: 'LinkedIn Career Intelligence Lakehouse',
    category: 'Data Engineering Case',
    summary:
      'End-to-end data engineering and BI case that turns LinkedIn exports into a reproducible analytics platform with Python, DuckDB, dbt, Streamlit and an executive Power BI dashboard.',
    problem:
      'LinkedIn exports arrive as many disconnected CSV files with uneven structures and low immediate analytical value. The goal was to transform that raw material into a navigable analytics product with technical reliability and executive storytelling.',
    stack: ['Python', 'DuckDB', 'dbt', 'Streamlit', 'Power BI', 'DAX', 'Pytest', 'SQLFluff'],
    architecture: [
      'LinkedIn CSV exports are profiled and standardized in a Python ingestion layer.',
      'Cleaned tables are persisted into a local DuckDB warehouse with bronze-oriented organization.',
      'dbt structures the analytical layer through staging, intermediate and marts models.',
      'A Streamlit app consumes curated marts to present executive KPIs, domain pages and analytical narratives.',
      'A premium Power BI semantic layer adds historical snapshots, observability metrics and executive HTML/CSS dashboards for portfolio-grade BI storytelling.',
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
      {
        src: 'assets/projects/showcase/linkedin_lakehouse_dashboard_showcase.png',
        alt: 'Executive Power BI dashboard',
        caption: 'Executive Power BI layer with premium KPIs, governed historical snapshots and observability-driven monitoring.',
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
    appUrl: 'https://linkedin-career-intelligence-lakehouse-demo.streamlit.app/',
    dashboardUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiZjRhZDVlMzgtOWU5Mi00ZTM4LTgwYjAtYTlhNjA0NzU4M2Q0IiwidCI6Ijg3OGFhNjMyLTM4Y2MtNDZhZS1hNTYzLTEwZGQ1YzIyMjYxNSJ9',
  },
  {
    slug: 'data-dashboard',
    title: 'Data Dashboard',
    category: 'Business Intelligence Case',
    summary:
      'Executive commercial intelligence case built in Power BI to transform spreadsheet-driven reporting into a cleaner KPI layer for revenue, pricing and sales performance monitoring.',
    problem:
      'The business challenge was to replace fragmented spreadsheet reading with a concise executive view that could explain revenue behavior, pricing pressure and commercial performance in a single narrative.',
    stack: ['Power BI', 'DAX', 'Excel', 'Data Modeling'],
    architecture: [
      'Source spreadsheets are consolidated into a reporting-ready analytical base.',
      'A relational model structures fact and dimension tables for repeatable KPI analysis.',
      'DAX measures encapsulate revenue logic, pricing views and commercial performance metrics.',
      'The final Power BI layer exposes a compact executive dashboard optimized for managerial reading.',
    ],
    screenshots: [
      {
        src: 'assets/projects/data_dashboard_showcase_card.svg',
        alt: 'Dashboard architecture',
        caption: 'Premium showcase thumbnail aligning the project with the portfolio visual system while summarizing the executive BI scope.',
      },
      {
        src: 'assets/projects/01-dashboard.jpg',
        alt: 'Dashboard preview',
        caption: 'Executive view with commercial KPIs, distribution charts and revenue-focused interpretation.',
      },
    ],
    metrics: [
      {
        label: 'Primary lens',
        value: 'Revenue control',
        detail: 'Built to make pricing, revenue concentration and commercial performance easier to interpret.',
      },
      {
        label: 'Semantic core',
        value: 'Relational model',
        detail: 'Business entities were modeled to support reusable DAX and executive slicing.',
      },
      {
        label: 'Consumption layer',
        value: 'Power BI',
        detail: 'Interactive executive dashboard designed for fast managerial reading.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Relational semantic model',
        detail: 'The dashboard was structured around dimensions and facts instead of flat spreadsheets to make KPI logic reusable and reduce downstream complexity.',
      },
      {
        title: 'DAX-driven KPI layer',
        detail: 'Core revenue and pricing measures were centralized in DAX so business logic stays maintainable and aligned across views.',
      },
      {
        title: 'Executive-first layout',
        detail: 'Visual hierarchy was prioritized to surface the most decision-relevant metrics before deeper chart exploration.',
      },
    ],
    businessImpact: [
      {
        title: 'Faster commercial reading',
        detail: 'The dashboard compresses multiple spreadsheet views into a single executive narrative for managers and stakeholders.',
      },
      {
        title: 'Better pricing visibility',
        detail: 'Revenue and discount indicators make it easier to understand performance drivers and promotional pressure.',
      },
      {
        title: 'More consistent KPI governance',
        detail: 'Centralized measures reduce interpretive drift between manual reports and executive dashboards.',
      },
    ],
    executiveNarrative:
      'This project demonstrates how a relatively common spreadsheet-based reporting problem can be elevated into a governed executive BI experience, where semantic modeling and DAX transform raw commercial numbers into structured managerial decision support.',
    githubUrl: 'https://github.com/DiegoPablo2021/dashboard-comercial',
  },
  {
    slug: 'triggo-case-study',
    title: 'Triggo Case Study',
    category: 'Machine Learning + Analytics Case',
    summary:
      'Technical challenge that blends machine learning segmentation, analytics storytelling and production-minded engineering practices to translate large-scale e-commerce behavior into actionable business clusters.',
    problem:
      'The case required extracting segmentation value from a large Olist-based dataset while keeping the solution explainable for business use and structured enough to look closer to a production-ready analytics artifact than a one-off notebook.',
    stack: ['Python', 'Machine Learning', 'Pytest', 'Logging', 'Notebook Dashboard'],
    architecture: [
      'Raw e-commerce data is profiled and prepared for customer segmentation analysis.',
      'A clustering pipeline evaluates segment candidates through silhouette-score-based logic.',
      'Logging and tests provide traceability and confidence around experimentation behavior.',
      'The final notebook/dashboard layer translates technical segments into actionable business narratives.',
    ],
    screenshots: [
      {
        src: 'assets/projects/triggo_showcase_card.svg',
        alt: 'Triggo dashboard overview',
        caption: 'Premium showcase thumbnail summarizing clustering logic, business segmentation and the machine learning narrative.',
        kind: 'showcase',
      },
      {
        src: 'assets/projects/ml_pipeline_dashboard_content.png',
        alt: 'Triggo detailed dashboard',
        caption: 'Detailed analytical view showing how clustering outputs were converted into commercial and marketing-oriented insight.',
        kind: 'screenshot',
      },
      {
        src: 'assets/projects/triggo_demo.gif',
        alt: 'Triggo demo',
        caption: 'Animated preview of the analytical flow used to communicate the solution during the challenge.',
        kind: 'artifact',
      },
    ],
    metrics: [
      {
        label: 'Core capability',
        value: 'Dynamic clustering',
        detail: 'Cluster selection adapts through silhouette logic rather than a fixed, arbitrary number of groups.',
      },
      {
        label: 'Engineering layer',
        value: 'Tests + logs',
        detail: 'Operational practices were added to move the solution closer to a reproducible ML artifact.',
      },
      {
        label: 'Business angle',
        value: 'Actionable segments',
        detail: 'Outputs are framed to support marketing, CRM and commercial interpretation.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Silhouette-based cluster selection',
        detail: 'Instead of forcing an arbitrary number of segments, the solution uses silhouette logic to support a more defensible clustering strategy.',
      },
      {
        title: 'Object-oriented pipeline structure',
        detail: 'A more modular implementation was used to make experimentation, reuse and maintenance stronger than a purely notebook-centric approach.',
      },
      {
        title: 'Operational traceability',
        detail: 'Logging and Pytest were added to increase confidence in transformations, clustering steps and business-facing outputs.',
      },
    ],
    businessImpact: [
      {
        title: 'Sharper segmentation narrative',
        detail: 'The resulting clusters are easier to translate into differentiated actions for retention, activation and commercial focus.',
      },
      {
        title: 'Better challenge maturity',
        detail: 'The solution goes beyond exploratory modeling by showing engineering discipline and operational thinking.',
      },
      {
        title: 'Bridge between ML and action',
        detail: 'Instead of stopping at model output, the case frames segmentation as a driver for concrete marketing and business decisions.',
      },
    ],
    executiveNarrative:
      'This case shows the ability to move from raw behavioral data to an explainable segmentation layer while preserving business relevance. The final value is not only the clustering itself, but the disciplined translation of model output into action-oriented analytics.',
    githubUrl: 'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025',
  },
  {
    slug: 'olist-analytics-data-engineering',
    title: 'Olist Analytics & Data Engineering',
    category: 'Data Engineering + BI Case',
    summary:
      'End-to-end analytics engineering project that turns the Olist e-commerce dataset into a structured warehouse and executive BI layer for performance, logistics and customer analysis.',
    problem:
      'The goal was to transform a broad public e-commerce dataset into a more production-like analytical foundation, combining ETL discipline, warehouse design and executive consumption for business interpretation.',
    stack: ['Python', 'PostgreSQL', 'ETL', 'Power BI', 'SQL'],
    architecture: [
      'Raw Olist files are ingested and standardized through ETL routines.',
      'A PostgreSQL warehouse organizes the curated analytical layer.',
      'Business-ready tables support sales, logistics, customer and operational analysis.',
      'Power BI delivers the executive consumption layer for KPI reading and storytelling.',
    ],
    screenshots: [
      {
        src: 'assets/projects/olist_showcase_card.svg',
        alt: 'Olist architecture flow',
        caption: 'Premium showcase thumbnail connecting ETL, warehouse modeling and executive BI consumption.',
        kind: 'showcase',
      },
      {
        src: 'assets/projects/02-etl.jpg',
        alt: 'Olist ETL layer',
        caption: 'Data engineering perspective highlighting the ETL and warehouse preparation layer.',
        kind: 'screenshot',
      },
      {
        src: 'assets/projects/03-olist.png',
        alt: 'Olist analytics preview',
        caption: 'Analytical preview showing how the curated warehouse supports business-facing interpretation.',
        kind: 'screenshot',
      },
    ],
    metrics: [
      {
        label: 'Dataset context',
        value: 'Brazilian e-commerce',
        detail: 'Built over a multi-domain dataset with commercial, logistics and customer dimensions.',
      },
      {
        label: 'Data layer',
        value: 'Warehouse',
        detail: 'Structured to support curated downstream BI and business exploration.',
      },
      {
        label: 'Consumption',
        value: 'Power BI',
        detail: 'Executive layer focused on KPI visibility and decision support.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Warehouse-first design',
        detail: 'The project favors a curated warehouse instead of analysis directly on raw files, making the analytical layer cleaner and more scalable.',
      },
      {
        title: 'SQL-centered business modeling',
        detail: 'Business entities and metrics are expressed through SQL-friendly warehouse logic to improve maintainability and reporting readiness.',
      },
      {
        title: 'Separated engineering and BI concerns',
        detail: 'ETL, warehouse and visualization responsibilities were kept distinct to make the project feel closer to a real analytics stack.',
      },
    ],
    businessImpact: [
      {
        title: 'Operational visibility',
        detail: 'The data model supports interpretation across sales, delivery and customer dimensions instead of isolated KPI reading.',
      },
      {
        title: 'Decision-ready curation',
        detail: 'The executive BI layer becomes stronger because the source data was curated upstream in a warehouse layer.',
      },
      {
        title: 'Production-style framing',
        detail: 'The project demonstrates engineering maturity by showing how raw public data can be structured into a reusable business asset.',
      },
    ],
    executiveNarrative:
      'This project is a strong demonstration of analytics engineering fundamentals: ingest, organize, model and expose business-ready data. The value lies not only in dashboard output, but in showing the discipline required to build a reusable analytical foundation.',
    githubUrl: 'https://github.com/DiegoPablo2021/olist-analytics',
  },
  {
    slug: 'lighthouse-dados-ai',
    title: 'Lighthouse-Dados-AI',
    category: 'Data Science Case',
    summary:
      'End-to-end data science case that combines exploratory analysis, predictive modeling and recommendation-oriented reasoning into a structured business-facing narrative.',
    problem:
      'The challenge was to investigate a real dataset, surface hidden patterns and build predictive and recommendation-oriented outputs that could support better product or commercial decisions.',
    stack: ['Python', 'EDA', 'Predictive Modeling', 'Recommendation Systems'],
    architecture: [
      'Exploratory data analysis identifies quality patterns, anomalies and decision-relevant hypotheses.',
      'Feature preparation supports predictive and recommendation-oriented workflows.',
      'Modeling experiments generate interpretable outputs with decision-support potential.',
      'The final deliverable packages the full journey as a coherent end-to-end case.',
    ],
    screenshots: [
      {
        src: 'assets/projects/lighthouse_showcase_card.svg',
        alt: 'Lighthouse end-to-end flow',
        caption: 'Premium showcase thumbnail framing the project around exploratory analysis, prediction and recommendation logic.',
        kind: 'showcase',
      },
      {
        src: 'assets/projects/lighthouse_end_to_end.png',
        alt: 'Lighthouse analytical architecture',
        caption: 'End-to-end visual framing of the data science flow, connecting exploratory analysis, predictive modeling and recommendation logic.',
        kind: 'artifact',
      },
    ],
    metrics: [
      {
        label: 'Main scope',
        value: 'EDA + modeling',
        detail: 'Balances exploratory analysis with predictive reasoning and recommendation logic.',
      },
      {
        label: 'Output style',
        value: 'End-to-end case',
        detail: 'Presented as a portfolio-grade narrative instead of isolated notebook exercises.',
      },
      {
        label: 'Use case',
        value: 'Prediction + recommendation',
        detail: 'Focuses on insights that can guide decision-making and personalization.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Exploration before modeling',
        detail: 'The project emphasizes data understanding first, reducing the risk of building models detached from actual signal and data quality constraints.',
      },
      {
        title: 'Interpretable modeling path',
        detail: 'The analytical flow favors explainable outputs that can be communicated to stakeholders rather than treating modeling as a black box exercise.',
      },
      {
        title: 'Recommendation-oriented framing',
        detail: 'The case extends beyond prediction to show how analytical outputs can support recommendation and next-best-action reasoning.',
      },
    ],
    businessImpact: [
      {
        title: 'Higher decision confidence',
        detail: 'The workflow creates a bridge between raw data patterns and more informed commercial or product decisions.',
      },
      {
        title: 'Broader analytical maturity',
        detail: 'The project shows competence across EDA, feature reasoning, modeling and recommendation logic in one cohesive case.',
      },
      {
        title: 'Portfolio-grade communication',
        detail: 'The case is structured to communicate both technical competence and business relevance to non-specialist stakeholders.',
      },
    ],
    executiveNarrative:
      'This project demonstrates a balanced data science approach: understanding the data deeply, modeling with intent and framing outputs so they can actually support real decisions. The strongest signal is the ability to translate analytical complexity into business-oriented interpretation.',
    githubUrl: 'https://github.com/DiegoPablo2021/Desafio-Lighthouse-Dados-AI',
  },
  {
    slug: 'strategic-sales-analysis',
    title: 'Strategic Sales Analysis',
    category: 'Business Intelligence Case',
    summary:
      'Executive Power BI case developed for Jaar Consult evaluation, combining commercial performance, pricing pressure and product KPIs in a compact decision-support dashboard.',
    problem:
      'The challenge was to turn sales and discount behavior into an executive dashboard that could support pricing interpretation, product analysis and concise commercial monitoring for decision-makers.',
    stack: ['Power BI', 'DAX', 'Data Modeling', 'Business KPI Design'],
    architecture: [
      'Commercial data is organized into a semantic model that supports product and sales analysis.',
      'DAX measures calculate pricing, promotion and performance KPIs.',
      'Visuals are arranged to prioritize executive interpretation over dashboard noise.',
      'The final Power BI layer provides a compact decision-support experience for the evaluation context.',
    ],
    screenshots: [
      {
        src: 'assets/projects/strategic_sales_showcase_card.svg',
        alt: 'Strategic sales executive view',
        caption: 'Premium showcase thumbnail positioning the dashboard as an executive layer for pricing, promotions and product performance.',
        kind: 'showcase',
      },
      {
        src: 'assets/projects/strategic_sales_promotions.png',
        alt: 'Promotions analysis dashboard',
        caption: 'Focused view of promotions and discount behavior used to explain pricing and revenue pressure.',
        kind: 'screenshot',
      },
      {
        src: 'assets/projects/strategic_sales_products.png',
        alt: 'Product performance dashboard',
        caption: 'Product analysis layer showing how commercial performance is decomposed across the portfolio.',
        kind: 'screenshot',
      },
    ],
    metrics: [
      {
        label: 'Analytical lens',
        value: 'Sales performance',
        detail: 'Focused on product, pricing and commercial performance interpretation.',
      },
      {
        label: 'Decision support',
        value: 'Executive dashboard',
        detail: 'Structured for fast managerial reading in a case-based evaluation setting.',
      },
      {
        label: 'Technical core',
        value: 'Model + DAX',
        detail: 'Built on semantic modeling and DAX measure logic for KPI computation.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Executive-first KPI prioritization',
        detail: 'The layout emphasizes the metrics most relevant to commercial monitoring before deeper breakdowns, improving executive readability.',
      },
      {
        title: 'DAX as analytical contract',
        detail: 'Pricing, discount and performance rules were centralized in measures to keep business logic stable across visuals.',
      },
      {
        title: 'Multi-view decision support',
        detail: 'The dashboard separates high-level performance, promotions and product analysis into views that complement each other without overwhelming the user.',
      },
    ],
    businessImpact: [
      {
        title: 'Sharper discount interpretation',
        detail: 'The case makes it easier to relate promotions to performance outcomes instead of reading discounting in isolation.',
      },
      {
        title: 'Faster sales diagnosis',
        detail: 'Decision-makers can move from top-level KPIs to product and pricing signals in a compact reporting flow.',
      },
      {
        title: 'Stronger BI communication',
        detail: 'The dashboard presents technical modeling maturity in a format that remains accessible to business stakeholders.',
      },
    ],
    executiveNarrative:
      'This case highlights the value of semantic BI design in commercial analytics: when modeling, DAX and layout are aligned, the dashboard becomes more than a report and starts acting as a compact diagnostic layer for pricing and sales decisions.',
    githubUrl: 'https://github.com/DiegoPablo2021/PBI-Jaar-Consult',
  },
];

export const PROJECT_CASES_PT: ProjectCase[] = [
  {
    slug: 'linkedin-career-intelligence-lakehouse',
    title: 'LinkedIn Career Intelligence Lakehouse',
    category: 'Case de Engenharia de Dados',
    summary:
      'Case end-to-end de engenharia de dados e BI que transforma exports do LinkedIn em uma plataforma analítica reproduzível com Python, DuckDB, dbt, Streamlit e dashboard executivo em Power BI.',
    problem:
      'Os exports do LinkedIn chegam como vários CSVs desconectados, com estruturas heterogêneas e pouco valor analítico imediato. O objetivo foi transformar esse material bruto em um produto analítico navegável, confiável e com storytelling executivo.',
    stack: ['Python', 'DuckDB', 'dbt', 'Streamlit', 'Power BI', 'DAX', 'Pytest', 'SQLFluff'],
    architecture: [
      'Os CSVs do LinkedIn passam por profiling e padronização em uma camada de ingestão em Python.',
      'As tabelas limpas são persistidas em um warehouse local em DuckDB com organização orientada a bronze.',
      'O dbt estrutura a camada analítica com modelos staging, intermediate e marts.',
      'Um app em Streamlit consome os marts para apresentar KPIs executivos, páginas por domínio e narrativas analíticas.',
      'Uma camada semântica premium em Power BI adiciona snapshots históricos, métricas de observability e dashboards executivos em HTML/CSS para storytelling de BI.',
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
      {
        src: 'assets/projects/showcase/linkedin_lakehouse_dashboard_showcase.png',
        alt: 'Dashboard executivo em Power BI',
        caption: 'Camada executiva em Power BI com KPIs premium, snapshots históricos governados e monitoramento orientado por observability.',
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
    appUrl: 'https://linkedin-career-intelligence-lakehouse-demo.streamlit.app/',
    dashboardUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiZjRhZDVlMzgtOWU5Mi00ZTM4LTgwYjAtYTlhNjA0NzU4M2Q0IiwidCI6Ijg3OGFhNjMyLTM4Y2MtNDZhZS1hNTYzLTEwZGQ1YzIyMjYxNSJ9',
  },
  {
    slug: 'data-dashboard',
    title: 'Dashboard de Dados',
    category: 'Case de Business Intelligence',
    summary:
      'Case de inteligência comercial em Power BI criado para transformar relatórios baseados em planilhas em uma camada executiva mais limpa de KPIs, faturamento e leitura de performance.',
    problem:
      'O contexto exigia substituir leituras fragmentadas em planilhas por uma visão comercial consolidada, capaz de explicar comportamento de receita, pressão de preços e performance em uma única narrativa executiva.',
    stack: ['Power BI', 'DAX', 'Excel', 'Modelagem de Dados'],
    architecture: [
      'Planilhas de origem são consolidadas em uma base pronta para consumo analítico.',
      'Um modelo relacional organiza fatos e dimensões para análise recorrente de KPIs.',
      'Medidas em DAX encapsulam lógica de receita, pricing e indicadores de performance.',
      'A camada final em Power BI entrega uma experiência executiva compacta voltada à leitura gerencial.',
    ],
    screenshots: [
      {
        src: 'assets/projects/data_dashboard_showcase_card.svg',
        alt: 'Arquitetura do dashboard',
        caption: 'Thumbnail premium que alinha o projeto ao design system do portfólio enquanto resume o escopo executivo da solução de BI.',
      },
      {
        src: 'assets/projects/01-dashboard.jpg',
        alt: 'Preview do dashboard',
        caption: 'Visão executiva com KPIs comerciais, gráficos de distribuição e leitura orientada a faturamento.',
      },
    ],
    metrics: [
      {
        label: 'Lente principal',
        value: 'Controle de receita',
        detail: 'Pensado para facilitar a leitura de faturamento, pricing e concentração de performance.',
      },
      {
        label: 'Núcleo semântico',
        value: 'Modelo relacional',
        detail: 'Organizado em entidades de negócio para sustentar DAX reutilizável e análise executiva consistente.',
      },
      {
        label: 'Camada de consumo',
        value: 'Power BI',
        detail: 'Dashboard executivo interativo voltado para leitura gerencial rápida.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Modelagem semântica relacional',
        detail: 'A solução foi estruturada em fatos e dimensões, evitando dependência de planilhas planas e facilitando a manutenção da lógica analítica.',
      },
      {
        title: 'Camada de KPIs em DAX',
        detail: 'A lógica de receita, pricing e performance foi centralizada em medidas para preservar consistência entre visuais e reduzir ambiguidade.',
      },
      {
        title: 'Leitura executiva em primeiro plano',
        detail: 'A hierarquia visual foi desenhada para expor rapidamente os sinais mais relevantes antes da exploração detalhada.',
      },
    ],
    businessImpact: [
      {
        title: 'Leitura comercial mais rápida',
        detail: 'O dashboard substitui várias leituras manuais por uma única camada de interpretação gerencial.',
      },
      {
        title: 'Maior visibilidade de pricing',
        detail: 'Indicadores de receita e descontos ajudam a explicar pressão promocional e drivers de performance.',
      },
      {
        title: 'Governança de KPI mais consistente',
        detail: 'A centralização da lógica em DAX reduz desvios de interpretação entre relatórios e análises executivas.',
      },
    ],
    executiveNarrative:
      'Este projeto mostra como um problema aparentemente comum de reporting em planilhas pode ser elevado para uma experiência de BI executivo governada, em que modelagem semântica e DAX transformam números brutos em suporte real à decisão.',
    githubUrl: 'https://github.com/DiegoPablo2021/dashboard-comercial',
  },
  {
    slug: 'triggo-case-study',
    title: 'Estudo de Caso Triggo',
    category: 'Case de Machine Learning + Analytics',
    summary:
      'Desafio técnico que combina segmentação por machine learning, storytelling analítico e práticas de engenharia mais orientadas à produção para transformar comportamento de e-commerce em clusters acionáveis.',
    problem:
      'O desafio exigia extrair valor de segmentação de um grande dataset baseado em Olist, mantendo a solução explicável para o negócio e estruturada o suficiente para se aproximar de um artefato analítico mais reproduzível do que um notebook pontual.',
    stack: ['Python', 'Machine Learning', 'Pytest', 'Logging', 'Dashboard em Notebook'],
    architecture: [
      'Os dados brutos de e-commerce são perfilados e preparados para análise de segmentação.',
      'Um pipeline de clusterização avalia segmentos candidatos por lógica baseada em silhouette score.',
      'Logs e testes aumentam rastreabilidade e confiança sobre o comportamento da solução.',
      'A camada final em notebook/dashboard traduz a segmentação técnica em narrativas orientadas ao negócio.',
    ],
    screenshots: [
      {
        src: 'assets/projects/triggo_showcase_card.svg',
        alt: 'Visão geral do dashboard Triggo',
        caption: 'Thumbnail premium resumindo lógica de clusterização, segmentação de negócio e a narrativa de machine learning do case.',
        kind: 'showcase',
      },
      {
        src: 'assets/projects/ml_pipeline_dashboard_content.png',
        alt: 'Detalhe do dashboard Triggo',
        caption: 'Visão analítica detalhada mostrando como a clusterização foi convertida em insight comercial e de marketing.',
        kind: 'screenshot',
      },
      {
        src: 'assets/projects/triggo_demo.gif',
        alt: 'Demo do projeto Triggo',
        caption: 'Prévia animada do fluxo analítico usado para comunicar a solução durante o desafio.',
        kind: 'artifact',
      },
    ],
    metrics: [
      {
        label: 'Capacidade central',
        value: 'Clusterização dinâmica',
        detail: 'A seleção de clusters se adapta por silhouette, evitando grupos definidos de forma arbitrária.',
      },
      {
        label: 'Camada de engenharia',
        value: 'Testes + logs',
        detail: 'Práticas operacionais adicionadas para aproximar a entrega de um artefato de ML mais reproduzível.',
      },
      {
        label: 'Ângulo de negócio',
        value: 'Segmentos acionáveis',
        detail: 'Os outputs foram moldados para apoiar decisões de marketing, CRM e performance comercial.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Seleção de clusters por silhouette',
        detail: 'A solução evita impor um número fixo de segmentos e usa silhouette para sustentar uma escolha mais defensável.',
      },
      {
        title: 'Pipeline orientado a objetos',
        detail: 'A implementação modular melhora reuso, legibilidade e manutenção em relação a uma abordagem puramente notebook-centric.',
      },
      {
        title: 'Rastreabilidade operacional',
        detail: 'Logs e Pytest foram adicionados para elevar confiança em transformações, etapas de clusterização e outputs voltados ao negócio.',
      },
    ],
    businessImpact: [
      {
        title: 'Narrativa de segmentação mais forte',
        detail: 'Os clusters finais ficam mais fáceis de traduzir em ações para retenção, ativação e foco comercial.',
      },
      {
        title: 'Maior maturidade no desafio',
        detail: 'A solução vai além da exploração e demonstra disciplina de engenharia e pensamento operacional.',
      },
      {
        title: 'Ponte entre ML e ação',
        detail: 'O case não para no output do modelo e enquadra a segmentação como motor para decisões concretas.',
      },
    ],
    executiveNarrative:
      'Este case mostra a capacidade de sair de dados brutos de comportamento para uma camada de segmentação explicável sem perder relevância de negócio. O valor não está apenas na clusterização, mas na tradução disciplinada do output do modelo em analytics acionável.',
    githubUrl: 'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025',
  },
  {
    slug: 'olist-analytics-data-engineering',
    title: 'Engenharia de Dados & Analytics Olist',
    category: 'Case de Engenharia de Dados + BI',
    summary:
      'Projeto end-to-end de analytics engineering que transforma o dataset de e-commerce Olist em warehouse estruturado e camada executiva de BI para análise de performance, logística e clientes.',
    problem:
      'O objetivo foi transformar um dataset público amplo de e-commerce em uma fundação analítica mais próxima de produção, combinando disciplina de ETL, desenho de warehouse e consumo executivo orientado ao negócio.',
    stack: ['Python', 'PostgreSQL', 'ETL', 'Power BI', 'SQL'],
    architecture: [
      'Os arquivos brutos do Olist são ingeridos e padronizados por rotinas ETL.',
      'Um warehouse em PostgreSQL organiza a camada analítica curada.',
      'Tabelas orientadas a negócio suportam análise de vendas, logística, clientes e operação.',
      'O Power BI entrega a camada final de consumo executivo para leitura de KPIs e storytelling.',
    ],
    screenshots: [
      {
        src: 'assets/projects/olist_showcase_card.svg',
        alt: 'Fluxo da arquitetura Olist',
        caption: 'Thumbnail premium conectando ETL, modelagem de warehouse e consumo executivo em BI.',
        kind: 'showcase',
      },
      {
        src: 'assets/projects/02-etl.jpg',
        alt: 'Camada ETL do Olist',
        caption: 'Perspectiva de engenharia de dados destacando a preparação ETL e a camada de warehouse.',
        kind: 'screenshot',
      },
      {
        src: 'assets/projects/03-olist.png',
        alt: 'Preview analítico Olist',
        caption: 'Prévia do output analítico mostrando como o warehouse curado sustenta interpretação de negócio.',
        kind: 'screenshot',
      },
    ],
    metrics: [
      {
        label: 'Contexto dos dados',
        value: 'E-commerce brasileiro',
        detail: 'Construído sobre um dataset multidomínio com dimensões comerciais, logísticas e de clientes.',
      },
      {
        label: 'Camada de dados',
        value: 'Warehouse',
        detail: 'Estruturada para sustentar BI curado e exploração orientada a negócio.',
      },
      {
        label: 'Consumo',
        value: 'Power BI',
        detail: 'Camada executiva focada em suporte à decisão e visibilidade de KPIs.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Desenho warehouse-first',
        detail: 'O projeto privilegia uma camada curada em warehouse em vez de análise direta sobre arquivos brutos, tornando a base mais escalável e reaproveitável.',
      },
      {
        title: 'Modelagem orientada a SQL',
        detail: 'Entidades e métricas de negócio foram estruturadas de forma compatível com consumo analítico recorrente e manutenção mais limpa.',
      },
      {
        title: 'Separação entre engenharia e visualização',
        detail: 'ETL, warehouse e BI foram tratados como responsabilidades distintas para reforçar maturidade arquitetural.',
      },
    ],
    businessImpact: [
      {
        title: 'Visibilidade operacional ampliada',
        detail: 'O modelo suporta interpretação de vendas, logística e clientes em vez de leituras isoladas de KPI.',
      },
      {
        title: 'Curadoria pronta para decisão',
        detail: 'A camada de BI executiva ganha força porque os dados já chegam modelados e confiáveis do warehouse.',
      },
      {
        title: 'Demonstração de maturidade de stack',
        detail: 'O projeto evidencia a capacidade de transformar dados públicos brutos em ativo analítico reutilizável.',
      },
    ],
    executiveNarrative:
      'Este projeto é uma demonstração forte de analytics engineering: ingerir, organizar, modelar e expor dados prontos para negócio. O valor não está apenas no dashboard, mas em mostrar a disciplina necessária para construir uma fundação analítica reaproveitável.',
    githubUrl: 'https://github.com/DiegoPablo2021/olist-analytics',
  },
  {
    slug: 'lighthouse-dados-ai',
    title: 'Lighthouse-Dados-AI',
    category: 'Case de Data Science',
    summary:
      'Case end-to-end de ciência de dados que combina exploração analítica, modelagem preditiva e raciocínio orientado a recomendações em uma narrativa mais estruturada para negócio.',
    problem:
      'O desafio era investigar um dataset real, revelar padrões relevantes e construir outputs preditivos e recomendadores capazes de apoiar decisões de produto ou negócio com mais confiança.',
    stack: ['Python', 'EDA', 'Modelagem Preditiva', 'Sistemas de Recomendação'],
    architecture: [
      'A análise exploratória identifica padrões de qualidade, anomalias e hipóteses iniciais.',
      'A preparação de atributos sustenta fluxos preditivos e orientados a recomendação.',
      'Experimentos de modelagem geram outputs interpretáveis com potencial de apoio à decisão.',
      'A entrega final organiza a jornada de ciência de dados como um case coeso end-to-end.',
    ],
    screenshots: [
      {
        src: 'assets/projects/lighthouse_showcase_card.svg',
        alt: 'Fluxo end-to-end Lighthouse',
        caption: 'Thumbnail premium enquadrando o projeto em torno de exploração analítica, predição e recomendação.',
        kind: 'showcase',
      },
      {
        src: 'assets/projects/lighthouse_end_to_end.png',
        alt: 'Arquitetura analítica do Lighthouse',
        caption: 'Enquadramento visual end-to-end do fluxo de data science, conectando exploração, modelagem preditiva e recomendação.',
        kind: 'artifact',
      },
    ],
    metrics: [
      {
        label: 'Escopo principal',
        value: 'EDA + modelagem',
        detail: 'Equilibra exploração analítica com raciocínio preditivo e lógica de recomendação.',
      },
      {
        label: 'Formato de entrega',
        value: 'Case end-to-end',
        detail: 'Apresentado como narrativa de portfólio, e não como exercício isolado em notebook.',
      },
      {
        label: 'Uso analítico',
        value: 'Predição + recomendação',
        detail: 'Foco em insights que apoiam decisão e personalização.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Exploração antes da modelagem',
        detail: 'A solução privilegia entendimento profundo dos dados antes de modelar, reduzindo risco de decisões analíticas desconectadas do sinal real.',
      },
      {
        title: 'Modelagem interpretável',
        detail: 'O fluxo analítico favorece outputs explicáveis, o que melhora comunicação com stakeholders e utilidade prática da solução.',
      },
      {
        title: 'Enquadramento orientado a recomendação',
        detail: 'O case vai além da predição e mostra como o output analítico pode sustentar lógica de recomendação e next best action.',
      },
    ],
    businessImpact: [
      {
        title: 'Maior confiança na decisão',
        detail: 'O fluxo conecta padrões brutos de dados a hipóteses mais úteis para decisões comerciais ou de produto.',
      },
      {
        title: 'Maturidade analítica mais ampla',
        detail: 'O projeto demonstra capacidade em EDA, construção de atributos, modelagem e raciocínio de recomendação em um único case.',
      },
      {
        title: 'Comunicação mais forte',
        detail: 'O caso foi estruturado para traduzir complexidade técnica em leitura clara para públicos não especialistas.',
      },
    ],
    executiveNarrative:
      'Este projeto demonstra uma abordagem equilibrada de data science: entender os dados com profundidade, modelar com intenção e apresentar resultados de forma útil para decisões reais. O principal sinal aqui é a capacidade de transformar complexidade analítica em interpretação orientada ao negócio.',
    githubUrl: 'https://github.com/DiegoPablo2021/Desafio-Lighthouse-Dados-AI',
  },
  {
    slug: 'strategic-sales-analysis',
    title: 'Análise Estratégica de Vendas',
    category: 'Case de Business Intelligence',
    summary:
      'Case executivo em Power BI desenvolvido para a avaliação da Jaar Consult, combinando performance comercial, pressão promocional e KPIs de produto em um dashboard conciso de suporte à decisão.',
    problem:
      'O desafio era transformar comportamento de vendas e descontos em um dashboard executivo capaz de apoiar leitura de pricing, análise de produtos e acompanhamento comercial com objetividade.',
    stack: ['Power BI', 'DAX', 'Modelagem de Dados', 'Design de KPIs'],
    architecture: [
      'Os dados comerciais são organizados em um modelo semântico voltado à análise de vendas e produtos.',
      'Medidas em DAX calculam KPIs de pricing, promoção e performance.',
      'Os visuais são estruturados para priorizar leitura executiva em vez de excesso de informação.',
      'A camada final em Power BI entrega uma experiência compacta de suporte à decisão para o contexto da avaliação.',
    ],
    screenshots: [
      {
        src: 'assets/projects/strategic_sales_showcase_card.svg',
        alt: 'Visão executiva da análise estratégica de vendas',
        caption: 'Thumbnail premium posicionando o dashboard como camada executiva para pricing, promoções e performance de produto.',
        kind: 'showcase',
      },
      {
        src: 'assets/projects/strategic_sales_promotions.png',
        alt: 'Análise de promoções',
        caption: 'Camada dedicada à leitura de promoções e comportamento de desconto para explicar pressão de pricing.',
        kind: 'screenshot',
      },
      {
        src: 'assets/projects/strategic_sales_products.png',
        alt: 'Performance de produtos',
        caption: 'Análise de produtos mostrando como a performance comercial é decomposta ao nível do portfólio.',
        kind: 'screenshot',
      },
    ],
    metrics: [
      {
        label: 'Lente analítica',
        value: 'Performance de vendas',
        detail: 'Foco em produto, pricing e interpretação da performance comercial.',
      },
      {
        label: 'Suporte à decisão',
        value: 'Dashboard executivo',
        detail: 'Estruturado para leitura gerencial rápida em um contexto de avaliação executiva.',
      },
      {
        label: 'Base técnica',
        value: 'Modelo + DAX',
        detail: 'Construído sobre modelagem semântica e DAX para cálculo e governança dos KPIs.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Priorização executiva de KPIs',
        detail: 'O layout privilegia primeiro as métricas mais relevantes para acompanhamento comercial antes de aprofundar em breakdowns.',
      },
      {
        title: 'DAX como contrato analítico',
        detail: 'As regras de pricing, desconto e performance foram centralizadas em medidas para manter a lógica estável entre visuais.',
      },
      {
        title: 'Leitura em múltiplas camadas',
        detail: 'A experiência separa visão executiva, promoções e performance de produto para ampliar clareza sem poluir o dashboard.',
      },
    ],
    businessImpact: [
      {
        title: 'Leitura de desconto mais precisa',
        detail: 'O case facilita relacionar promoções a resultados de performance, em vez de analisar desconto isoladamente.',
      },
      {
        title: 'Diagnóstico comercial mais rápido',
        detail: 'A navegação entre KPIs executivos, promoções e produtos acelera a identificação de sinais relevantes para decisão.',
      },
      {
        title: 'Comunicação de BI mais madura',
        detail: 'A entrega combina consistência técnica com formato acessível para stakeholders de negócio.',
      },
    ],
    executiveNarrative:
      'Este case destaca o valor do design semântico em BI comercial: quando modelagem, DAX e hierarquia visual caminham juntos, o dashboard deixa de ser apenas um relatório e passa a funcionar como uma camada compacta de diagnóstico para decisões de pricing e vendas.',
    githubUrl: 'https://github.com/DiegoPablo2021/PBI-Jaar-Consult',
  },
];

export function getProjectCaseBySlug(language: 'en' | 'pt', slug: string): ProjectCase | undefined {
  const cases = language === 'pt' ? PROJECT_CASES_PT : PROJECT_CASES_EN;
  return cases.find((projectCase) => projectCase.slug === slug);
}
