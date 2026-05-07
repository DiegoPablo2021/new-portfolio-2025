import { Component, input } from '@angular/core';
import { ProjectCase } from '../../shared/models/project-case.model';

@Component({
  selector: 'app-project-case',
  imports: [],
  templateUrl: './project-case.html',
  styleUrl: './project-case.scss',
})
export class ProjectCasePage {
  projectCase = input<ProjectCase | undefined>();
  currentTheme = input.required<'light' | 'dark'>();
  currentLanguage = input.required<'en' | 'pt'>();

  screenshotKind(src: string, kind?: 'showcase' | 'screenshot' | 'artifact') {
    if (kind) {
      return kind;
    }

    if (src.endsWith('.svg')) {
      return 'showcase';
    }

    if (src.endsWith('.gif')) {
      return 'artifact';
    }

    return 'screenshot';
  }
}
