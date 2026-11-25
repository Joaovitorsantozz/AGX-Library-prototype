import "../index.css";
import BookCatalog from "../components/dashboard/bookCatalog";
import Sidebar from "../components/dashboard/sideBar";
import StatCard from "../components/dashboard/statCard";
import { useAuth } from "../context/userContext";

import { useEffect, useState } from "react";
import { returnBooksService } from "../services/showBooksService";
import type { Book } from "../interfaces/BookInterface";
function Dashboard() {
  const { loading } = useAuth();
  const [books, setBooks] = useState<Book[]>([]);
  function handleBookBorrowed(isbn: string) {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.isbn === isbn ? { ...book, status: "borrowed" } : book,
      ),
    );
  }
  useEffect(() => {
    async function fetchBooks() {
      const response = await returnBooksService();
      setBooks(response.data.data);
    }

    fetchBooks();
  }, []);
  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <main className="dashboardLayout">
      <Sidebar />

      <section className="dashboardMain">
        <header className="dashboardHeader">
          <div>
            <h1>Dashboard e Catálogo</h1>
            <p>Visão geral do acervo e consulta rápida de livros.</p>
          </div>
        </header>

        <section className="statsGrid">
          <StatCard
            title="Livros disponíveis"
            value={books.length}
            description="Prontos para empréstimo"
            variant="green"
          />
          {/* 
Faz mais sentido assim, nao listar o que nao pode ser pego
          <StatCard
            title="Livros emprestados"
            value={books.filter((book) => book.status == "borrowed").length}
            description="Em circulação ativa"
            variant="orange"
          /> */}
        </section>

        <BookCatalog books={books} onBookBorrowed={handleBookBorrowed}  />
      </section>
    </main>
  ); 
}

export default Dashboard;
