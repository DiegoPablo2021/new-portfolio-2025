export type Skill = {
  name: string;
  icon: string;
  percentage: number;
  showProficiency?: boolean;
};

export type SkillSection = {
  id: string;
  title: string;
  subtitle: string;
  skills: Array<Skill>;
};
