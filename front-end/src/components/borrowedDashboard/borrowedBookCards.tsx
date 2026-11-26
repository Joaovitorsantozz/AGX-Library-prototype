import type { Book } from "../../interfaces/BookInterface";

import placeholder from "../../assets/bookSamplePlaceholder.png";
import p2 from "../../assets/book2.png";
import p3 from "../../assets/book3.png";
import p4 from "../../assets/book4.png";
import p5 from "../../assets/book5.png";
import { borrowBookService } from "../../services/borrowBookService";
import type { OrderBook } from "../../interfaces/orderInterface";
import { returnBookService } from "../../services/returnBookService";
interface BookCardProps {
  book: Book;
  onBookReturned: (isbn: string) => void;

  order?: OrderBook;
}

function BorrowedBookCard({ book, onBookReturned, order }: BookCardProps) {
  const placholders = [placeholder, p2, p3, p4, p5];
  const image = placholders[Math.floor(Math.random() * placholders.length)];

  async function handleReturnBook() {
    try {
      const response = await returnBookService(book.isbn);
      onBookReturned(book.isbn);
      if (response.data.success == true) {
        alert("Livro devolvido");
        
      }
    } catch (error) {
      alert("Erro ao devolver o livro");
      console.log("error ao devolver o livro", error);
    }
  }
  return (
    <article className="bookCard">
      <div className="bookCover">
        <img src={image} alt={`Capa de ${book.name}`} />
      </div>

      <div className="bookInfo">
        <div className="bookCategoryRow">
          <span className="bookCategory">{book.genre}</span>

          <span className={`bookStatus ${"borrowed"}`}>{"Emprestado"}</span>
        </div>

        <h3>{book.name}</h3>
        <p className="bookAuthor">{book.author}</p>
        <p className="bookAuthor">
          Emprestado em:{" "}
          {order?.borrowedAt
            ? new Date(order.borrowedAt).toLocaleDateString("pt-BR")
            : "Indisponível"}
        </p>

        <p className="bookAuthor">
          Devolver até:{" "}
          {order?.dueDate
            ? new Date(order.dueDate).toLocaleDateString("pt-BR")
            : "Indisponível"}
        </p>
        <p>{book.isbn}</p>
        <div className="bookActions">
          <button
            className={`borrowButton`}
            onClick={() => handleReturnBook()}
          >
            {"Devolver"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default BorrowedBookCard;
