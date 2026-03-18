import ColegioTalento from "../assets/Talentos.png";
import Zero from "../assets/Zero.png";
import Contento from "../assets/Contento.png";

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
    image: Contento,
    link: "https://linkedin.com",
    titleKey: "experience.exp1_title",
    descriptionKey: "experience.exp1_desc",
  },
  {
    id: "exp2",
    image: Zero,
    link: "https://linkedin.com",
    titleKey: "experience.exp2_title",
    descriptionKey: "experience.exp2_desc",
  },
  {
    id: "exp3",
    image: ColegioTalento,
    link: "https://linkedin.com",
    titleKey: "experience.exp3_title",
    descriptionKey: "experience.exp3_desc",
  },
];
