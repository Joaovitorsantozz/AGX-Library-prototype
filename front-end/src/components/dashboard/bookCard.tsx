import type { Book } from "../../interfaces/BookInterface";


import placeholder from "../../assets/bookSamplePlaceholder.png";
import p2 from "../../assets/book2.png";
import p3 from "../../assets/book3.png";
import p4 from "../../assets/book4.png";
import p5 from "../../assets/book5.png";
interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  const isAvailable = book.status === "available";
  const placholders = [placeholder,p2,p3,p4,p5];
  const image = placholders[Math.floor(Math.random() * placholders.length)];
  return (
    <article className="bookCard">
      <div className="bookCover">
        <img src={image} alt={`Capa de ${book.name}`} />
      </div>

      <div className="bookInfo">
        <div className="bookCategoryRow">
          <span className="bookCategory">{book.genre}</span>

          <span className={`bookStatus ${isAvailable ? "available" : "borrowed"}`}>
            {isAvailable ? "Disponível" : "Emprestado"}
          </span>
        </div>

        <h3>{book.name}</h3>
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
