import type { Book } from "../../interfaces/BookInterface";

import placeholder from "../../assets/bookSamplePlaceholder.png";
import p2 from "../../assets/book2.png";
import p3 from "../../assets/book3.png";
import p4 from "../../assets/book4.png";
import p5 from "../../assets/book5.png";
import { borrowBookService } from "../../services/borrowBookService";
import type { OrderBook } from "../../interfaces/orderInterface";
interface BookCardProps {
  book: Book;
  onBookBorrowed: (isbn: string) => void;
}

function BookCard({ book, onBookBorrowed }: BookCardProps) {
  const placholders = [placeholder, p2, p3, p4, p5];
  const index =
    book.isbn.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    placholders.length;

  const image = placholders[index];
  const borrowBook = async () => {
    console.log("func chamada");
    try {
      const response = await borrowBookService(book.isbn);
      onBookBorrowed(book.isbn);
      alert(response.data.message);
    } catch (error) {
      alert("Erro ao emprestar livro");
      console.log(error);
    }
  };
  return (
    <article className="bookCard">
      <div className="bookCover">
        <img src={image} alt={`Capa de ${book.name}`} />
      </div>

      <div className="bookInfo">
        <div className="bookCategoryRow">
          <span className="bookCategory">{book.genre}</span>

          <span
            className={`bookStatus ${book.status === "available" ? "available" : "borrowed"}`}
          >
            {book.status === "available" ? "Disponível" : "Emprestado"}
          </span>
        </div>

        <h3>{book.name}</h3>
        <p className="bookAuthor">{book.author}</p>

        <div className={"bookActions"}>
          <button
            className={`borrowButton ${book.status === "available" ? "" : "disabled"}`}
            onClick={() =>
              book.status === "available"
                ? borrowBook()
                : alert("Esse livro já esta emprestado")
            }
          >
            {book.status === "available" ? "Emprestar" : "Emprestado"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default BookCard;
