
export interface Book {
  id: string;
  isbn:string;
  name: string;
  author: string;
  genre: string;
  status: "available" | "borrowed";
  publishedYear: number;
  image: "../assets/bookSamplePlaceholder.png";
}
export interface NewBook {
  name: string;
  author: string;
  genre: string;
  isbn: string;
  publishedYear: number;
  status: "available" | "borrowed";
}
