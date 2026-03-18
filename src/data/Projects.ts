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
    title: "Portfolio Web",
    description:
      "Portafolio personal con React, TypeScript y animaciones avanzadas.",
    tags: ["React", "TypeScript", "Vite"],
    color: "#8e24aa",
    status: "production",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description: "Tienda online con carrito, pagos y panel de administración.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    color: "#6a1b9a",
    status: "production",
  },
  {
    id: 3,
    title: "Task Manager",
    description:
      "Gestión de tareas con drag & drop, etiquetas y colaboración en tiempo real.",
    tags: ["React", "Socket.io", "Express"],
    color: "#4a148c",
    status: "personal",
  },
  {
    id: 4,
    title: "Chat en Tiempo Real",
    description:
      "Aplicación de mensajería instantánea con salas privadas y notificaciones.",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    color: "#7b1fa2",
    status: "production",
  },
  {
    id: 5,
    title: "API REST",
    description:
      "API robusta con autenticación JWT, roles y documentación con Swagger.",
    tags: ["Node.js", "PostgreSQL", "JWT"],
    color: "#9c27b0",
    status: "production",
  },
  {
    id: 6,
    title: "Dashboard Analytics",
    description: "Panel de métricas interactivo con gráficas en tiempo real.",
    tags: ["React", "D3.js", "Python"],
    color: "#ab47bc",
    status: "wip",
  },
  {
    id: 7,
    title: "Blog Platform",
    description:
      "Plataforma de blogging con editor markdown y sistema de comentarios.",
    tags: ["Next.js", "Prisma", "MySQL"],
    color: "#7e57c2",
    status: "personal",
  },
  {
    id: 8,
    title: "Mobile Fitness App",
    description:
      "App de seguimiento de ejercicios y nutrición con estadísticas personales.",
    tags: ["React Native", "Expo", "Redux"],
    color: "#5e35b1",
    status: "wip",
  },
  {
    id: 9,
    title: "CLI Dev Tool",
    description:
      "Herramienta de línea de comandos para scaffolding de proyectos.",
    tags: ["Node.js", "TypeScript", "Ink"],
    color: "#512da8",
    status: "personal",
  },
];
