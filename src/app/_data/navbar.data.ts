import { signal } from '@angular/core';
import { NavLink } from '../shared/models/nav-link.model';

export const NAVBAR_EN = signal<NavLink[]>([
  {
    label: 'Home',
    link: '',
  },
  {
    label: 'Projects',
    link: 'projects',
  },
  {
    label: 'About',
    link: 'about',
  },
  {
    label: 'Experience',
    link: 'experiences',
  },
  {
    label: 'Skills',
    link: 'hard-skills',
  },
  {
    label: 'Testimonials',
    link: 'testimonials',
  },
  {
    label: 'Contact',
    link: 'contact',
  },
]);

export const NAVBAR_PT = signal<NavLink[]>([
  {
    label: 'Início',
    link: 'home',
  },
  {
    label: 'Projetos',
    link: 'projects',
  },
  {
    label: 'Sobre',
    link: 'about',
  },
  {
    label: 'Experiência',
    link: 'experiences',
  },
  {
    label: 'Skills',
    link: 'hard-skills',
  },
  {
    label: 'Depoimentos',
    link: 'testimonials',
  },
  {
    label: 'Contato',
    link: 'contact',
  },
]);
