import { useState } from "react";



import type { Book } from "../../interfaces/BookInterface";
import type { OrderBook } from "../../interfaces/orderInterface";
import BorrowedBookCard from "./borrowedBookCards";

interface BookCatalogProps {
  books: Book[];
  order: OrderBook[];

  onBookBorrowed: (isbn: string) => void;
}

function BorrowedBookCatalog({
  books,
  order,
  onBookBorrowed,
}: BookCatalogProps) {
  const [search, setSearch] = useState("");

  return (
    <section className="bookCatalog">
      <div className="catalogHeader">
        <div>
          <h2>Catálogo de livros</h2>
          <p>Pesquise por título, autor ou filtre por categoria.</p>
        </div>

        <input
          type="search"
          placeholder="Buscar título ou autor..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="booksGrid">
        {books.map((book) => {
          const bookOrder = order.find((item) => item.book === book.id);

          return (
            <BorrowedBookCard
              key={book.id}
              book={book}
              onBookBorrowed={onBookBorrowed}
           
              order={bookOrder}
            />
          );
        })}
      </div>
    </section>
  );
}

export default BorrowedBookCatalog;
