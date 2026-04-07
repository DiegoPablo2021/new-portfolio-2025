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
}
