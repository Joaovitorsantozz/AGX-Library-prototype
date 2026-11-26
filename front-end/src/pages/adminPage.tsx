import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/sideBar";
import ManageBooks from "../components/manageBookContainer";
import { useAuth } from "../context/userContext";
import type { newBook } from "../interfaces/newBookInterface";
import { showBooksService } from "../services/showBooksService";
import type { Book } from "../interfaces/BookInterface";

function AdminPage() {
  const { loading } = useAuth();
  const [book, setBooks] = useState<Book[]>([]);
  if (loading) {
    return <p>Carregando...</p>;
  }
  useEffect(() => {
    async function fetchBooks() {
      const response = await showBooksService();
      setBooks(response.data.data);
    }

    fetchBooks();
  }, []);
  return (
    <div className="dashboardLayout">
      <Sidebar></Sidebar>
      <ManageBooks books = {book}></ManageBooks>
    </div>
  );
}

export default AdminPage;
