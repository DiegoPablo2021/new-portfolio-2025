import { signal } from '@angular/core';
import { HeroSection } from '../shared/models/hero.model';

export const HERO_EN = signal<HeroSection>({
  "greeting": "Hi, I'm Diego Pablo",
  "intro": "A Mid-level Data Analyst at Conta Azul, connecting data, business metrics and dashboards to support better decisions.",
  "skills": "I work with SQL, BigQuery, Looker and Dataform on GCP, alongside experience with Python, Excel, Power BI and Databricks."
});

export const HERO_PT = signal<HeroSection>({
  "greeting": "Oi, eu sou Diego Pablo",
  "intro": "Sou Analista de Dados Pleno na Conta Azul e conecto dados, indicadores de negócio e dashboards para apoiar melhores decisões.",
  "skills": "Trabalho com SQL, BigQuery, Looker e Dataform no GCP, além de experiência com Python, Excel, Power BI e Databricks."
});
