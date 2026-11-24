import { useEffect, useState } from "react";

import BookCard from "./bookCard";
import { returnBooksService } from "../../services/showBooksService";
import type { Book } from "../../interfaces/BookInterface";


function BookCatalog() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBooks() {
      const response = await returnBooksService();
      setBooks(response.data.data);
    }

    fetchBooks();
  }, []);
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
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}

export default BookCatalog;
