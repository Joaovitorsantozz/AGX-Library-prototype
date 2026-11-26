import type { Book } from "./BookInterface";

export interface OrderBook {
  books: Book[];
  book:string;
  borrowedAt: string;
  dueDate: string;
  status:string;
}
