
export interface Book {
  id: string;
  isbn:string;
  name: string;
  author: string;
  genre: string;
  status: "available" | "borrowed";
  publishedYear: number;
  image: "";
}
export interface NewBook {
  name: string;
  author: string;
  genre: string;
  isbn: string;
  publishedYear: number;
  status: "available" | "borrowed";
}
