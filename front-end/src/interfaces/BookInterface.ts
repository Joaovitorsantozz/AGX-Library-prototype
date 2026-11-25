
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