export interface SkillType {
  name: string;
  description: string;
  x: number;
  y: number;
  icon: string;
  color: string;
}

export interface SkillNodeProps extends SkillType {
  delay?: number;
}