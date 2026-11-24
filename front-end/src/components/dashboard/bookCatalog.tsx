
import { useState } from "react";

import BookCard from "./bookCard";
import { books } from "../../data/books";

function BookCatalog() {
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
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

    
    </section>
  );
}

export default BookCatalog;
