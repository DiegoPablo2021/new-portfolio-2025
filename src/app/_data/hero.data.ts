import { signal } from '@angular/core';
import { HeroSection } from '../shared/models/hero.model';

export const HERO_EN = signal<HeroSection>({
  "eyebrow": "Analytics · Business Intelligence",
  "greeting": "Hi, I'm",
  "name": "Diego Pablo",
  "intro": "I connect data, metrics and dashboards to turn business questions into decisions.",
  "skills": "Currently at Conta Azul · SQL, BigQuery, Looker and Dataform"
});

export const HERO_PT = signal<HeroSection>({
  "eyebrow": "Analytics · Business Intelligence",
  "greeting": "Oi, eu sou",
  "name": "Diego Pablo",
  "intro": "Conecto dados, indicadores e dashboards para transformar perguntas de negócio em decisões.",
  "skills": "Atualmente na Conta Azul · SQL, BigQuery, Looker e Dataform"
});
