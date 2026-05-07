# Diego Portfolio 2025

[![Angular](https://img.shields.io/badge/Angular-20-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-Design_System-CC6699?logo=sass&logoColor=white)](https://sass-lang.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://diego-pablo.vercel.app)

Modern portfolio built to present analytics engineering, business intelligence and data science projects with a recruiter-friendly executive narrative, responsive project case pages and a premium dark visual system.

Live site: [diego-pablo.vercel.app](https://diego-pablo.vercel.app)

## Executive Overview

This repository is not a generic personal website. It is a structured showcase for production-minded analytics work, designed to communicate:

- business context before tooling
- architecture and technical decisions with clarity
- project storytelling that feels closer to a case study than a gallery
- a consistent premium presentation across data engineering, BI and data science projects

The portfolio balances two goals:

1. Present strong technical depth for analytics engineers, BI engineers and data leads.
2. Preserve readability for recruiters, hiring managers and non-specialist interviewers.

## What The Portfolio Highlights

Featured projects cover:

- executive Power BI and DAX solutions
- data engineering pipelines and warehouse design
- analytics engineering workflows
- machine learning and decision-support narratives
- end-to-end case studies with architecture, metrics and screenshots

Each featured project includes a dedicated `Details` experience with:

- problem framing
- architecture walkthrough
- stack summary
- key metrics
- technical decisions
- business impact
- screenshots and executive narrative

## Product Experience

The UI is intentionally designed as a polished dark portfolio with:

- responsive layout across desktop, tablet and mobile
- bilingual content (`PT` / `EN`)
- dark/light theme support
- reusable CTA patterns
- consistent project-card hierarchy
- case pages that behave like mini technical briefs

## Frontend Stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| Framework | Angular 20 | Single-page portfolio application |
| Language | TypeScript | Typed UI logic and data-driven sections |
| Styling | SCSS | Shared theme tokens and responsive layout system |
| Icons | Font Awesome + inline SVG | Consistent portfolio iconography |
| Deployment | Vercel | Production hosting |

## Solution Structure

```text
src/
  app/
    _data/                 # Portfolio content sources for cards and case pages
    pages/
      hero/                # Intro and positioning
      projects/            # Portfolio cards grid
      project-case/        # Deep-dive case study pages
      experience/          # Timeline and career experience
      skills/              # Hard and soft skill sections
      achievements/        # Certifications and achievements
      testimonials/        # Recommendations
      contact/             # Contact channels
    shared/
      models/              # Typed content contracts
      services/            # Cross-page state and utilities
      scss/                # Shared variables and design tokens
public/
  assets/
    projects/              # Thumbnails, diagrams and screenshots
docs/
  print1.png
  print2.png
```

## Featured Project Strategy

The portfolio is organized around project storytelling, not only project listing.

Examples:

- **LinkedIn Career Intelligence Lakehouse**: end-to-end data engineering, semantic modeling, snapshots, observability and executive Power BI.
- **Triggo Case Study**: machine learning segmentation with stronger engineering discipline and business interpretation.
- **Strategic Sales Analysis**: Power BI dashboarding focused on pricing, promotion and product performance.
- **Olist Analytics & Data Engineering**: ETL, warehouse design and BI consumption over public e-commerce data.

## Design Principles

This repository follows a few explicit UX decisions:

- premium but restrained visual language
- no unnecessary animation-heavy gimmicks
- strong hierarchy in project cards and case pages
- reusable CTA patterns instead of per-card ad hoc buttons
- screenshots used as evidence, not decoration

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm start
```

App runs at `http://localhost:4200`.

### Production build

```bash
npm run build
```

### Test

```bash
npm test
```

## Portfolio Engineering Notes

Key implementation choices:

- project content is data-driven through typed arrays instead of hard-coded page markup
- case pages reuse a common rendering structure with optional advanced sections
- assets are curated per project to preserve card consistency and avoid distorted thumbnails
- the project grid keeps a stable layout while allowing project-specific CTA combinations

## Screenshots

Dark mode previews:

![Portfolio preview 1](docs/print1.png)
![Portfolio preview 2](docs/print2.png)

## Future Improvements

- richer animation polish for case transitions
- more structured content localization
- optional filtering by project domain
- automated asset optimization for screenshots and thumbnails
- component-level visual regression validation

## Author

Built and maintained by Diego Pablo as a portfolio-grade showcase for analytics engineering, BI and data science work.
