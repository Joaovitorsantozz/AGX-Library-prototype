export interface newBook {
  name: string;
  author: string;
  price: number;
  genre: string;
  status: "available" | "borrowed";
  isbn: string;
  publishedYear: number;
}
