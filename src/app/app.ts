import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { DataService } from './shared/services/data.service';
import { Header } from "./shared/components/header/header";
import { ThemeService } from './shared/services/theme.service';
import { Hero } from "./pages/hero/hero";
import { About } from "./pages/about/about";
import { Experiences } from "./pages/experiences/experiences";
import { Badges } from "./pages/badges/badges";
import { SkillsWrapper } from "./pages/skills-wrapper/skills-wrapper";
import { Projects } from "./pages/projects/projects";
import { Testimonials } from "./pages/testimonials/testimonials";
import { Contact } from "./pages/contact/contact";
import { Footer } from "./shared/components/footer/footer";
import { ProjectCasePage } from './pages/project-case/project-case';
import { getProjectCaseBySlug } from './_data/project-cases.data';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Experiences, Badges, SkillsWrapper, Projects, Testimonials, Contact, Footer, ProjectCasePage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [DataService, ThemeService]
})
export class App {
  _dataService = inject(DataService);
  _themeService =inject(ThemeService);
  private caseSlug = signal<string | null>(this.getCaseSlugFromUrl());

  currentProjectCase = computed(() => {
    const slug = this.caseSlug();
    if (!slug) {
      return undefined;
    }

    return getProjectCaseBySlug(this.currentLanguage, slug);
  });

  get currentTheme() {
    return this._themeService.currentTheme();
  }

  get currentLanguage() {
    return this._dataService.currentLanguage();
  }

  private getCaseSlugFromUrl(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }

    return new URLSearchParams(window.location.search).get('case');
  }

  @HostListener('window:popstate')
  onPopState() {
    this.caseSlug.set(this.getCaseSlugFromUrl());
  }
}
