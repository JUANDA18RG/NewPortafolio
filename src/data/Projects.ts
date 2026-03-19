export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  color: string;
  demo?: string;
  repo?: string;
  status: "production" | "personal" | "wip";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MiPlante",
    description:
      "Sistema de creditos para compras segun estrato y tipo de persona.",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "#8e24aa",
    status: "production",
  },
  {
    id: 2,
    title: "Contento V2",
    description:
      "Plataforma para impulsar e-commerce: personalizacion de tiendas, categorias, marcas y gestion de productos para vender de forma profesional.",
    tags: ["React", "Node.js", "E-commerce"],
    color: "#6a1b9a",
    status: "production",
  },
  {
    id: 3,
    title: "Sistema de Entrevistas con IA",
    description:
      "Plataforma de entrevistas donde la IA evalua habilidades de programacion y conocimientos con opcion multiple; permite crear entrevistas por area.",
    tags: ["IA", "Evaluacion", "Web App"],
    color: "#4a148c",
    status: "production",
  },
  {
    id: 4,
    title: "Tablero Canva con IA",
    description:
      "Tablero inteligente que, a partir de una meta o tarea, genera un plan para iniciar, organizar rutina y priorizar actividades.",
    tags: ["IA", "Productividad", "Planificacion"],
    color: "#7b1fa2",
    status: "production",
  },
  {
    id: 5,
    title: "ERP Clinico con IA",
    description:
      "ERP para una clinica de renombre, enfocado en automatizar procesos obsoletos y optimizarlos con inteligencia artificial.",
    tags: ["ERP", "IA", "Automatizacion"],
    color: "#9c27b0",
    status: "wip",
  },
  {
    id: 6,
    title: "Nuevo Portafolio",
    description:
      "Portafolio personal moderno con cambio de idioma, animaciones avanzadas y una experiencia interactiva cuidada.",
    tags: ["React", "TypeScript", "i18n"],
    color: "#ab47bc",
    status: "production",
  },
  {
    id: 7,
    title: "Portfolio para Deportistas",
    description:
      "Plataforma tipo LinkedIn para deportistas, donde pueden mostrar habilidades, logros y perfil deportivo. Actualmente en desarrollo.",
    tags: ["Sports", "Perfil", "Comunidad"],
    color: "#7e57c2",
    status: "wip",
  },
  {
    id: 8,
    title: "DropiAdmin",
    description:
      "Proyecto para ayudar a usuarios a validar si un pedido es viable para venta por Dropi, hacer seguimiento de guias y enviar notificaciones.",
    tags: ["E-commerce", "Dropi", "Tracking"],
    color: "#5e35b1",
    status: "wip",
  },
];
