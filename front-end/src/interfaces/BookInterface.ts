
export interface Book {
  id: number;
  name: string;
  author: string;
  genre: string;
  status: "available" | "borrowed";
  publishedYear: number;
  image: "../assets/bookSamplePlaceholder.png";
}