export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: "available" | "borrowed";
}

export const books: Book[] = [
  {
    id: 1,
    title: "Arquitetura Limpa",
    author: "Robert C. Martin",
    category: "Engenharia de Software",
    image: "/src/assets/bookSamplePlaceholder.png",
    status: "available",
  },
  {
    id: 2,
    title: "Algoritmos: Teoria e Prática",
    author: "Thomas H. Cormen",
    category: "Ciência da Computação",
    image: "/src/assets/bookSamplePlaceholder.png",
    status: "available",
  },
  {
    id: 3,
    title: "Design de Interfaces",
    author: "Clara Vasconcelos",
    category: "Design",
    image: "/src/assets/bookSamplePlaceholder.png",
    status: "borrowed",
  },
  {
    id: 4,
    title: "Sistemas Web com React",
    author: "Rafael Mendonça",
    category: "Engenharia de Software",
    image: "/src/assets/bookSamplePlaceholder.png",
    status: "available",
  },
  {
    id: 5,
    title: "Modelagem de Banco de Dados",
    author: "Carlos Heuser",
    category: "Ciência da Computação",
    image: "/src/assets/bookSamplePlaceholder.png",
    status: "available",
  },
  {
    id: 6,
    title: "História da Computação",
    author: "Beatriz Tavares",
    category: "Ciência da Computação",
    image: "/src/assets/bookSamplePlaceholder.png",
    status: "borrowed",
  },
  {
    id: 7,
    title: "Arquitetura Limpa",
    author: "Robert C. Martin",
    category: "Engenharia de Software",
    image: "/src/assets/bookSamplePlaceholder.png",
    status: "available",
  },
  {
    id: 8,
    title: "Algoritmos: Teoria e Prática",
    author: "Thomas H. Cormen",
    category: "Ciência da Computação",
    image: "/src/assets/bookSamplePlaceholder.png",
    status: "available",
  },
  {
    id: 9,
    title: "Design de Interfaces",
    author: "Clara Vasconcelos",
    category: "Design",
    image: "/src/assets/bookSamplePlaceholder.png",
    status: "borrowed",
  },
  {
    id: 10,
    title: "Sistemas Web com React",
    author: "Rafael Mendonça",
    category: "Engenharia de Software",
    image: "/src/assets/bookSamplePlaceholder.png",
    status: "available",
  },
  {
    id: 11,
    title: "Modelagem de Banco de Dados",
    author: "Carlos Heuser",
    category: "Ciência da Computação",
    image: "/src/assets/bookSamplePlaceholder.png",
    status: "available",
  },
  {
    id: 12,
    title: "História da Computação",
    author: "Beatriz Tavares",
    category: "Ciência da Computação",
    image: "/src/assets/bookSamplePlaceholder.png",
    status: "borrowed",
  },
];
