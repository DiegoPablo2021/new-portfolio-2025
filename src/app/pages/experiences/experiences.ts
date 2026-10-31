import { Component, computed, input } from '@angular/core';
import { Experience } from '../../shared/models/experience.model';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  currentTheme = input.required<'light' | 'dark'>();
  currentLanguage = input.required<'en' | 'pt'>();
  experiencesContent = input.required<Experience[]>();

  sectionEyebrow = computed(() => {
    return this.currentLanguage() === 'pt' ? 'Trajetória' : 'Career';
  });

  sectionTitle = computed(() => {
    return this.currentLanguage() === 'pt' ? 'Experiência que conecta' : 'Experience that connects';
  });

  sectionSubtitle = computed(() => {
    return this.currentLanguage() === 'pt'
      ? 'Minha jornada profissional e conquistas.'
      : 'My professional journey and achievements.';
  });
}
