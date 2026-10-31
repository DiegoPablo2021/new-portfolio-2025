export type Skill = {
  name: string;
  icon: string;
  percentage: number;
  showProficiency?: boolean;
};

export type SkillGroup = {
  title: string;
  icon: string;
  items: Array<string>;
};

export type SkillSection = {
  id: string;
  title: string;
  subtitle: string;
  skills: Array<Skill>;
  groups?: Array<SkillGroup>;
};
