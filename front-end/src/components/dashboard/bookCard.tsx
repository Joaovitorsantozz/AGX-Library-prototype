import type { Book } from "../../data/books";



interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  const isAvailable = book.status === "available";

  return (
    <article className="bookCard">
      <div className="bookCover">
        <img src={book.image} alt={`Capa de ${book.title}`} />
      </div>

      <div className="bookInfo">
        <div className="bookCategoryRow">
          <span className="bookCategory">{book.category}</span>

          <span className={`bookStatus ${isAvailable ? "available" : "borrowed"}`}>
            {isAvailable ? "Disponível" : "Emprestado"}
          </span>
        </div>

        <h3>{book.title}</h3>
        <p className="bookAuthor">{book.author}</p>

        <div className="bookActions">
      

          <button
            className={`borrowButton ${!isAvailable ? "disabled" : ""}`}
            disabled={!isAvailable}
          >
            {isAvailable ? "Emprestar" : "Indisponível"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default BookCard;
