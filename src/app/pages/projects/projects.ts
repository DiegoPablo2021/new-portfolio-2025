import { Component, computed, input } from '@angular/core';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  currentTheme = input.required<'light' | 'dark'>();
  currentLanguage = input.required<'en' | 'pt'>();
  projects = input.required<Project[]>();
  /** Quando true, renderiza a página dedicada com todos os projetos. */
  showAll = input(false);

  readonly featuredCount = 3;
  readonly descriptionLimit = 150;

  visibleProjects = computed(() =>
    this.showAll() ? this.projects() : this.projects().slice(0, this.featuredCount)
  );

  allProjectsLabel = computed(() => {
    const total = this.projects().length;
    return this.currentLanguage() === 'pt'
      ? `Mostrar todos os ${total} projetos`
      : `Show all ${total} projects`;
  });

  sectionEyebrow = computed(() => {
    return this.currentLanguage() === 'pt' ? 'Do problema à decisão' : 'From problem to decision';
  });

  sectionTitle = computed(() => {
    if (this.showAll()) {
      return this.currentLanguage() === 'pt' ? 'Todos os projetos' : 'All projects';
    }
    return this.currentLanguage() === 'pt' ? 'Projetos em destaque' : 'Featured projects';
  });

  sectionSubtitle = computed(() => {
    return this.currentLanguage() === 'pt'
      ? 'Casos de analytics, BI e engenharia de dados, da pergunta ao resultado.'
      : 'Analytics, BI and data engineering cases, from question to outcome.';
  });

  truncate(text: string): string {
    if (text.length <= this.descriptionLimit) {
      return text;
    }

    const cut = text.slice(0, this.descriptionLimit);
    const lastSpace = cut.lastIndexOf(' ');
    return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[\s,.;:]+$/, '')}…`;
  }
}
