import { useState, useEffect } from "react";
import BookCatalog from "../components/dashboard/bookCatalog";
import Sidebar from "../components/dashboard/sideBar";
import StatCard from "../components/dashboard/statCard";
import type { Book } from "../interfaces/BookInterface";
import { returnBorrowedBooksService } from "../services/showBooksService";
import { useAuth } from "../context/userContext";
import type { OrderBook } from "../interfaces/orderInterface";
import BorrowedBookCatalog from "../components/borrowedDashboard/borrowedBooksCatalog";

function UserBorrowedBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [orderDate, setOrderDate] = useState<OrderBook[]>([]);
  const { loading } = useAuth();
  useEffect(() => {
    async function fetchBooks() {
      const response = await returnBorrowedBooksService();
      setBooks(
        response.data.data.orders.map((order: { book: Book }) => order.book),
      );
      setOrderDate(
        response.data.data.orders.map((order: any) => ({
          book: order.book._id,
          borrowedAt: order.borrowedAt,
          dueDate: order.dueDate, 
        })),
      );
    }

    fetchBooks();
  }, []);
  function handleReturnBook(isbn: string) {}
  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <main className="userBorrowedBooksLayout">
      <Sidebar />

      <section className="userBorrowedBooksMain">
        <header className="userBorrowedBooksHeader">
          <div>
            <h1>Meus livros emprestados</h1>
            <p>
              Confira os livros que você emprestou, atente-se para não passar da
              data de devolução!
            </p>
          </div>
        </header>
    
        <section className="statsGrid">
          <StatCard
            title="Livros emprestados"
            value={books.length}
            description="Não se esqueca de devolver"
            variant="orange"
          />
        </section>
        <BorrowedBookCatalog
          books={books}
          onBookBorrowed={handleReturnBook}
         
          order={orderDate}
        ></BorrowedBookCatalog>
      </section>
    </main>
  );
}

export default UserBorrowedBooks;
