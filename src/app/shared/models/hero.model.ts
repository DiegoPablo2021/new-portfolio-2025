import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface HeroSection {
  eyebrow: string;
  greeting: string;
  name: string;
  intro: string;
  skills: string;
  icon?: IconProp;
}
