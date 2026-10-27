import { signal } from '@angular/core';
import { Skill, SkillSection } from '../shared/models/skill.model';

const TECHNICAL_HARD_SKILLS_EN: Array<Skill> = [
  {
    "name": "SQL",
    "icon": "assets/icons/database.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Python",
    "icon": "assets/icons/code.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "BigQuery",
    "icon": "assets/icons/database.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Looker",
    "icon": "assets/icons/chart-no-axes-column-increasing.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Dataform",
    "icon": "assets/icons/server.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Power BI",
    "icon": "assets/icons/chart-no-axes-column-increasing.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "DAX / Power Query",
    "icon": "assets/icons/chart-no-axes-column-increasing.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Excel",
    "icon": "assets/icons/chart-no-axes-column-increasing.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Pandas / NumPy",
    "icon": "assets/icons/code.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "PostgreSQL / SQL Server",
    "icon": "assets/icons/database.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "DuckDB",
    "icon": "assets/icons/database.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "MongoDB / Firebase",
    "icon": "assets/icons/database.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "GCP / Azure / AWS",
    "icon": "assets/icons/server.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Databricks / Snowflake",
    "icon": "assets/icons/server.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "dbt / PySpark",
    "icon": "assets/icons/terminal.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "ETL / ELT",
    "icon": "assets/icons/server.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Git / GitHub",
    "icon": "assets/icons/git-branch.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Power Automate",
    "icon": "assets/icons/terminal.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Bash",
    "icon": "assets/icons/terminal.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Genesys Cloud / ServiceNow",
    "icon": "assets/icons/server.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Java / JavaScript / TypeScript",
    "icon": "assets/icons/code.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Jira / Miro / Notion",
    "icon": "assets/icons/terminal.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Bizagi / BPMN",
    "icon": "assets/icons/terminal.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Data Modeling",
    "icon": "assets/icons/database.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Generative AI: analysis, code & documentation",
    "icon": "assets/icons/code.svg",
    "percentage": 0,
    "showProficiency": false
  }
];

const TECHNICAL_HARD_SKILLS_PT: Array<Skill> = [
  {
    "name": "SQL",
    "icon": "assets/icons/database.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Python",
    "icon": "assets/icons/code.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "BigQuery",
    "icon": "assets/icons/database.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Looker",
    "icon": "assets/icons/chart-no-axes-column-increasing.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Dataform",
    "icon": "assets/icons/server.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Power BI",
    "icon": "assets/icons/chart-no-axes-column-increasing.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "DAX / Power Query",
    "icon": "assets/icons/chart-no-axes-column-increasing.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Excel",
    "icon": "assets/icons/chart-no-axes-column-increasing.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Pandas / NumPy",
    "icon": "assets/icons/code.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "PostgreSQL / SQL Server",
    "icon": "assets/icons/database.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "DuckDB",
    "icon": "assets/icons/database.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "MongoDB / Firebase",
    "icon": "assets/icons/database.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "GCP / Azure / AWS",
    "icon": "assets/icons/server.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Databricks / Snowflake",
    "icon": "assets/icons/server.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "dbt / PySpark",
    "icon": "assets/icons/terminal.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "ETL / ELT",
    "icon": "assets/icons/server.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Git / GitHub",
    "icon": "assets/icons/git-branch.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Power Automate",
    "icon": "assets/icons/terminal.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Bash",
    "icon": "assets/icons/terminal.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Genesys Cloud / ServiceNow",
    "icon": "assets/icons/server.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Java / JavaScript / TypeScript",
    "icon": "assets/icons/code.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Jira / Miro / Notion",
    "icon": "assets/icons/terminal.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Bizagi / BPMN",
    "icon": "assets/icons/terminal.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "Modelagem de Dados",
    "icon": "assets/icons/database.svg",
    "percentage": 0,
    "showProficiency": false
  },
  {
    "name": "IA generativa: análise, código e documentação",
    "icon": "assets/icons/code.svg",
    "percentage": 0,
    "showProficiency": false
  }
];

// SOFT SKILLS - EN
export const TECHNICAL_SOFT_SKILLS_EN: Array<Skill> = [
  { name: 'Communication', icon: 'assets/icons/terminal.svg', percentage: 100 },
  { name: 'Teamwork', icon: 'assets/icons/terminal.svg', percentage: 85 },
  { name: 'Problem Solving', icon: 'assets/icons/terminal.svg', percentage: 70 },
  { name: 'Adaptability', icon: 'assets/icons/terminal.svg', percentage: 75 },
  { name: 'Empathy', icon: 'assets/icons/terminal.svg', percentage: 65 },
  { name: 'Time Management', icon: 'assets/icons/terminal.svg', percentage: 70 },
];

// SOFT SKILLS - PT
const TECHNICAL_SOFT_SKILLS_PT: Array<Skill> = [
  { name: 'Comunicação', icon: 'assets/icons/terminal.svg', percentage: 100 },
  { name: 'Trabalho em equipe', icon: 'assets/icons/terminal.svg', percentage: 85 },
  { name: 'Resolução de problemas', icon: 'assets/icons/terminal.svg', percentage: 70 },
  { name: 'Adaptabilidade', icon: 'assets/icons/terminal.svg', percentage: 75 },
  { name: 'Empatia', icon: 'assets/icons/terminal.svg', percentage: 65 },
  { name: 'Gestão do tempo', icon: 'assets/icons/terminal.svg', percentage: 70 },
];

export const HARD_SKILLS_SECTION_EN = signal<SkillSection>({
  id: 'hard-skills',
  title: 'Hard Skills',
  subtitle: 'Technologies and tools I work with',
  skills: TECHNICAL_HARD_SKILLS_EN,
});

export const HARD_SKILLS_SECTION_PT = signal<SkillSection>({
  id: 'hard-skills',
  title: 'Hard Skills',
  subtitle: 'Tecnologias e ferramentas com as quais trabalho',
  skills: TECHNICAL_HARD_SKILLS_PT,
});

export const SOFT_SKILLS_SECTION_EN = signal<SkillSection>({
  id: 'soft-skills',
  title: 'Soft Skills',
  subtitle: 'Personal and interpersonal skills',
  skills: TECHNICAL_SOFT_SKILLS_EN,
});

export const SOFT_SKILLS_SECTION_PT = signal<SkillSection>({
  id: 'soft-skills',
  title: 'Soft Skills',
  subtitle: 'Habilidades pessoais e interpessoais',
  skills: TECHNICAL_SOFT_SKILLS_PT,
});
