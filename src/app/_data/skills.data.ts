import { signal } from '@angular/core';
import { Skill, SkillGroup, SkillSection } from '../shared/models/skill.model';

const HARD_SKILL_GROUPS_EN: Array<SkillGroup> = [
  {
    title: 'Data',
    icon: 'assets/icons/database.svg',
    items: [
      'SQL',
      'BigQuery',
      'PostgreSQL / SQL Server',
      'DuckDB',
      'MongoDB / Firebase',
      'Databricks / Snowflake',
      'GCP / Azure / AWS',
      'Power BI / DAX',
      'Looker',
      'Excel',
      'ETL / ELT',
      'Data Modeling',
    ],
  },
  {
    title: 'Programming',
    icon: 'assets/icons/code.svg',
    items: [
      'Python',
      'Java / JavaScript / TypeScript',
      'Bash',
      'Git / GitHub',
      'Generative AI for code & analysis',
    ],
  },
  {
    title: 'Frameworks',
    icon: 'assets/icons/terminal.svg',
    items: [
      'Pandas / NumPy',
      'dbt',
      'PySpark',
      'Dataform',
      'Power Query',
      'Power Automate',
      'BPMN / Bizagi',
    ],
  },
];

const HARD_SKILL_GROUPS_PT: Array<SkillGroup> = [
  {
    title: 'Dados',
    icon: 'assets/icons/database.svg',
    items: [
      'SQL',
      'BigQuery',
      'PostgreSQL / SQL Server',
      'DuckDB',
      'MongoDB / Firebase',
      'Databricks / Snowflake',
      'GCP / Azure / AWS',
      'Power BI / DAX',
      'Looker',
      'Excel',
      'ETL / ELT',
      'Modelagem de Dados',
    ],
  },
  {
    title: 'Programação',
    icon: 'assets/icons/code.svg',
    items: [
      'Python',
      'Java / JavaScript / TypeScript',
      'Bash',
      'Git / GitHub',
      'IA generativa para código e análise',
    ],
  },
  {
    title: 'Frameworks',
    icon: 'assets/icons/terminal.svg',
    items: [
      'Pandas / NumPy',
      'dbt',
      'PySpark',
      'Dataform',
      'Power Query',
      'Power Automate',
      'BPMN / Bizagi',
    ],
  },
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
  skills: [],
  groups: HARD_SKILL_GROUPS_EN,
});

export const HARD_SKILLS_SECTION_PT = signal<SkillSection>({
  id: 'hard-skills',
  title: 'Hard Skills',
  subtitle: 'Tecnologias e ferramentas com as quais trabalho',
  skills: [],
  groups: HARD_SKILL_GROUPS_PT,
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
