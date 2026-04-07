export interface ProjectCaseMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectCaseScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectCase {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  stack: string[];
  architecture: string[];
  screenshots: ProjectCaseScreenshot[];
  metrics: ProjectCaseMetric[];
  githubUrl: string;
}
