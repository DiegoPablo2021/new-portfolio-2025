import { Component, computed, input } from '@angular/core';
import { AboutSection } from '../../shared/models/about.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-about',
  imports: [FontAwesomeModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  currentTheme = input.required<'light' | 'dark'>();
  currentLanguage = input.required<'en' | 'pt'>();

  sectionEyebrow = computed(() => {
    return this.currentLanguage() === 'pt' ? 'Sobre mim' : 'About me';
  });

  sectionTitle = computed(() => {
    return this.currentLanguage() === 'pt' ? 'Visão de negócio. Base em tecnologia.' : 'Business vision. Technology foundation.';
  });

  sectionSubtitle = computed(() => {
    return this.currentLanguage() === 'pt'
      ? 'Minha jornada, minhas paixões e minhas competências.'
      : 'My journey, my passions, and my skills.';
  });

  aboutContent = input.required<AboutSection[]>();
}
