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

  order?: OrderBook;
}

function BorrowedBookCard({ book, onBookBorrowed, order }: BookCardProps) {
  const isAvailable = status === "available";
  const placholders = [placeholder, p2, p3, p4, p5];
  const image = placholders[Math.floor(Math.random() * placholders.length)];
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

          <span className={`bookStatus ${"borrowed"}`}>{"Emprestado"}</span>
        </div>

        <h3>{book.name}</h3>
        <p className="bookAuthor">{book.author}</p>
        <p className="bookAuthor">
          {order != null ? order.borrowedAt : "nulo"}
        </p>
        <div className="bookActions">
          <button className={`borrowButton`} onClick={() =>(console.log("devolver"))}>
            {"Devolver"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default BorrowedBookCard;
