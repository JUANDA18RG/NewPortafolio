export interface ExperienceItem {
  id: string;
  image: string;
  link: string;
  titleKey: string;
  descriptionKey: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp1",
    image: "https://logo.clearbit.com/google.com",
    link: "https://linkedin.com",
    titleKey: "experience.exp1_title",
    descriptionKey: "experience.exp1_desc",
  },
  {
    id: "exp2",
    image: "https://logo.clearbit.com/microsoft.com",
    link: "https://linkedin.com",
    titleKey: "experience.exp2_title",
    descriptionKey: "experience.exp2_desc",
  },
  {
    id: "exp3",
    image: "https://logo.clearbit.com/amazon.com",
    link: "https://linkedin.com",
    titleKey: "experience.exp3_title",
    descriptionKey: "experience.exp3_desc",
  },
  {
    id: "exp4",
    image: "https://logo.clearbit.com/meta.com",
    link: "https://linkedin.com",
    titleKey: "experience.exp4_title",
    descriptionKey: "experience.exp4_desc",
  },
];
