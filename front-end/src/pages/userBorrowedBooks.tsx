import { useState, useEffect } from "react";

import Sidebar from "../components/dashboard/sideBar";
import StatCard from "../components/dashboard/statCard";
import type { Book } from "../interfaces/BookInterface";
import { showBorrowedBooksService } from "../services/showBooksService";
import { useAuth } from "../context/userContext";
import type { OrderBook } from "../interfaces/orderInterface";
import BorrowedBookCatalog from "../components/borrowedDashboard/borrowedBooksCatalog";

function UserBorrowedBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [orderDate, setOrderDate] = useState<OrderBook[]>([]);
  const { loading } = useAuth();
  useEffect(() => {
    async function fetchBooks() {
      const response = await showBorrowedBooksService();

      setBooks(
        response.data.data.orders.map((order: any) => ({
          ...order.book,
          id: order.book._id,
        })),
      );
      setOrderDate(
        response.data.data.orders.map((order: any) => ({
          book: order.book._id,
          borrowedAt: order.borrowedAt,
          dueDate: order.dueDate,
          status: order.status,
        })),
      );
    }

    fetchBooks();
  }, []);
  function handleBookReturned(isbn: string) {
    setOrderDate((prevOrders) =>
      prevOrders.map((order) => {
        const book = books.find((book) => book.isbn === isbn);

        return book && order.book === book.id
          ? { ...order, status: "returned" }
          : order;
      }),
    );
  }
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
            value={orderDate.filter((order) => order.status == "active").length}
            description="Não se esqueca de devolver"
            variant="orange"
          />
        </section>
        <BorrowedBookCatalog
          books={books}
          onBookBorrowed={handleBookReturned}
          order={orderDate}
        ></BorrowedBookCatalog>
      </section>
    </main>
  );
}

export default UserBorrowedBooks;
