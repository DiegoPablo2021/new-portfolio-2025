import { signal } from "@angular/core";
import { GetInTouch } from "../shared/models/get-in-touch.model";

export const GET_IN_TOUCH_EN = signal<GetInTouch>({
  heading: "Let's talk?",
  subheading: 'About data, projects and good questions.',
});

export const GET_IN_TOUCH_PT = signal<GetInTouch>({
  heading: 'Vamos conversar?',
  subheading: 'Sobre dados, projetos e boas perguntas.',
});
