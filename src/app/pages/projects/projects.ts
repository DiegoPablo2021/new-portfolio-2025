import { Component, computed, input, signal } from '@angular/core';
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

  readonly featuredCount = 3;
  showAll = signal(false);

  visibleProjects = computed(() =>
    this.showAll() ? this.projects() : this.projects().slice(0, this.featuredCount)
  );

  toggleLabel = computed(() => {
    const total = this.projects().length;
    if (this.currentLanguage() === 'pt') {
      return this.showAll() ? 'Mostrar destaques' : `Ver todos os ${total} projetos`;
    }
    return this.showAll() ? 'Show featured' : `View all ${total} projects`;
  });

  sectionEyebrow = computed(() => {
    return this.currentLanguage() === 'pt' ? 'Do problema à decisão' : 'From problem to decision';
  });

  sectionTitle = computed(() => {
    return this.currentLanguage() === 'pt' ? 'Projetos em destaque' : 'Featured projects';
  });

  sectionSubtitle = computed(() => {
    return this.currentLanguage() === 'pt'
      ? 'Casos de analytics, BI e engenharia de dados, da pergunta ao resultado.'
      : 'Analytics, BI and data engineering cases, from question to outcome.';
  });
}
