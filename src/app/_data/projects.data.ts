import { signal } from "@angular/core";
import { Project } from "../shared/models/project.model";

const PROJECTS_DATA_EN: Array<Project> = [
  {
    slug: 'linkedin-career-intelligence-lakehouse',
    title: 'LinkedIn Career Intelligence Lakehouse',
    description:
      'End-to-end data engineering and BI case that transforms LinkedIn exports into an analytics platform with Python ingestion, DuckDB warehouse, dbt modeling, Streamlit storytelling, and an executive Power BI dashboard.',
    viewLink:
      'https://github.com/DiegoPablo2021/linkedin-career-intelligence-lakehouse',
    appLink: 'https://linkedin-career-intelligence-lakehouse-demo.streamlit.app/',
    dashboardLink:
      'https://app.powerbi.com/view?r=eyJrIjoiZjRhZDVlMzgtOWU5Mi00ZTM4LTgwYjAtYTlhNjA0NzU4M2Q0IiwidCI6Ijg3OGFhNjMyLTM4Y2MtNDZhZS1hNTYzLTEwZGQ1YzIyMjYxNSJ9',
    sourceCode: 'https://github.com/DiegoPablo2021/linkedin-career-intelligence-lakehouse',
    imageUrl: 'assets/projects/linkedin_lakehouse_stack_flow.svg',
  },
  {
    slug: 'data-dashboard',
    title: 'Data Dashboard',
    description:
      'Executive commercial intelligence case in Power BI that turns spreadsheet-based operations into a governed KPI layer with relational modeling, DAX metrics and decision-ready revenue analysis.',
    viewLink:
      'https://github.com/DiegoPablo2021/dashboard-comercial/raw/1689a5ab3aaa710f106952eea3305dbd85e0d622/dashboard-comercia.pbix',
    sourceCode: 'https://github.com/DiegoPablo2021/dashboard-comercial',
    imageUrl: 'assets/projects/data_dashboard_showcase_card.svg',
  },
  {
    slug: 'triggo-case-study',
    title: 'Triggo Case Study',
    description:
      'Technical case that combines machine learning, analytics storytelling and production-minded engineering through dynamic clustering, centralized logging, automated tests and business-ready customer segmentation.',
    viewLink:
      'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025/blob/main/dashboard.ipynb',
    sourceCode: 'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025',
    imageUrl: 'assets/projects/triggo_showcase_card.svg',
  },
  {
    slug: 'olist-analytics-data-engineering',
    title: 'Olist Analytics & Data Engineering',
    description:
      'End-to-end analytics engineering case over the Olist ecosystem, combining ETL automation, PostgreSQL warehouse design and an executive BI layer for e-commerce performance analysis.',
    viewLink: 'https://github.com/DiegoPablo2021/olist-analytics',
    sourceCode: 'https://github.com/DiegoPablo2021/olist-analytics',
    imageUrl: 'assets/projects/olist_showcase_card.svg',
  },
  {
    slug: 'lighthouse-dados-ai',
    title: 'Lighthouse-Dados-AI',
    description:
      'End-to-end data science case focused on exploratory analysis, predictive modeling and recommendation logic to support better commercial and product decision-making.',
    viewLink: 'https://github.com/DiegoPablo2021/Desafio-Lighthouse-Dados-AI',
    sourceCode: 'https://github.com/DiegoPablo2021/Desafio-Lighthouse-Dados-AI',
    imageUrl: 'assets/projects/lighthouse_showcase_card.svg',
  },
  {
    slug: 'strategic-sales-analysis',
    title: 'Strategic Sales Analysis',
    description:
      'Executive Power BI case for sales strategy and pricing analysis, connecting commercial performance, promotional behavior and product KPIs into a concise decision-support experience.',
    viewLink: 'https://github.com/DiegoPablo2021/PBI-Jaar-Consult',
    sourceCode: 'https://github.com/DiegoPablo2021/PBI-Jaar-Consult',
    imageUrl: 'assets/projects/strategic_sales_showcase_card.svg',
  },
];

export const PROJECTS_DATA_PT: Array<Project> = [
  {
    slug: 'linkedin-career-intelligence-lakehouse',
    title: 'LinkedIn Career Intelligence Lakehouse',
    description:
      'Case end-to-end de engenharia de dados e BI que transforma exports do LinkedIn em uma plataforma analítica com ingestão em Python, DuckDB, modelagem dbt, storytelling em Streamlit e dashboard executivo em Power BI.',
    viewLink:
      'https://github.com/DiegoPablo2021/linkedin-career-intelligence-lakehouse',
    appLink: 'https://linkedin-career-intelligence-lakehouse-demo.streamlit.app/',
    dashboardLink:
      'https://app.powerbi.com/view?r=eyJrIjoiZjRhZDVlMzgtOWU5Mi00ZTM4LTgwYjAtYTlhNjA0NzU4M2Q0IiwidCI6Ijg3OGFhNjMyLTM4Y2MtNDZhZS1hNTYzLTEwZGQ1YzIyMjYxNSJ9',
    sourceCode: 'https://github.com/DiegoPablo2021/linkedin-career-intelligence-lakehouse',
    imageUrl: 'assets/projects/linkedin_lakehouse_stack_flow.svg',
  },
  {
    slug: 'data-dashboard',
    title: 'Dashboard de Dados',
    description:
      'Case de inteligência comercial em Power BI que transforma operações baseadas em planilhas em uma camada governada de KPIs com modelagem relacional, métricas em DAX e leitura executiva de faturamento.',
    viewLink:
      'https://github.com/DiegoPablo2021/dashboard-comercial/raw/1689a5ab3aaa710f106952eea3305dbd85e0d622/dashboard-comercia.pbix',
    sourceCode: 'https://github.com/DiegoPablo2021/dashboard-comercial',
    imageUrl: 'assets/projects/data_dashboard_showcase_card.svg',
  },
  {
    slug: 'triggo-case-study',
    title: 'Estudo de Caso Triggo',
    description:
      'Case técnico que combina machine learning, storytelling analítico e engenharia orientada à produção com clusterização dinâmica, logs centralizados, testes automatizados e segmentação acionável de clientes.',
    viewLink:
      'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025/blob/main/dashboard.ipynb',
    sourceCode: 'https://github.com/DiegoPablo2021/Case_Trainee_Triggo_2025',
    imageUrl: 'assets/projects/triggo_showcase_card.svg',
  },
  {
    slug: 'olist-analytics-data-engineering',
    title: 'Engenharia de Dados & Analytics Olist',
    description:
      'Case end-to-end de analytics engineering sobre o ecossistema Olist, combinando automação ETL, desenho de warehouse em PostgreSQL e uma camada executiva de BI para performance em e-commerce.',
    viewLink: 'https://github.com/DiegoPablo2021/olist-analytics',
    sourceCode: 'https://github.com/DiegoPablo2021/olist-analytics',
    imageUrl: 'assets/projects/olist_showcase_card.svg',
  },
  {
    slug: 'lighthouse-dados-ai',
    title: 'Lighthouse-Dados-AI',
    description:
      'Case end-to-end de ciência de dados com foco em exploração analítica, modelagem preditiva e lógica de recomendação para apoiar decisões de produto e negócio.',
    viewLink: 'https://github.com/DiegoPablo2021/Desafio-Lighthouse-Dados-AI',
    sourceCode: 'https://github.com/DiegoPablo2021/Desafio-Lighthouse-Dados-AI',
    imageUrl: 'assets/projects/lighthouse_showcase_card.svg',
  },
  {
    slug: 'strategic-sales-analysis',
    title: 'Análise Estratégica de Vendas',
    description:
      'Case executivo em Power BI para análise de vendas e pricing, conectando performance comercial, comportamento promocional e KPIs de produto em uma experiência concisa de suporte à decisão.',
    viewLink: 'https://github.com/DiegoPablo2021/PBI-Jaar-Consult',
    sourceCode: 'https://github.com/DiegoPablo2021/PBI-Jaar-Consult',
    imageUrl: 'assets/projects/strategic_sales_showcase_card.svg',
  },
];

export const PROJECTS_EN_SIGNAL = signal<Project[]>(PROJECTS_DATA_EN);
export const PROJECTS_PT_SIGNAL = signal<Project[]>(PROJECTS_DATA_PT);
