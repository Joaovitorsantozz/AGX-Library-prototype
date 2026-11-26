import Axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/sideBar";
import ManageBooks from "../components/manageBookContainer";
import { useAuth } from "../context/userContext";
import type { Book } from "../interfaces/BookInterface";
import { showBooksService } from "../services/showBooksService";

function AdminPage() {
  const { loading } = useAuth();
  const [book, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBooks() {
      const response = await showBooksService();
      setBooks(response.data.data);
    }

    fetchBooks();
  }, []);
  const deleteBookHandler = async (isbn: String) => {
    try {
      const token = localStorage.getItem("token");
      await Axios.delete("http://localhost:3000/api/books/delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data:{
          isbn:isbn
        }
      });
      alert("Livro deletado");
      setBooks(book.filter((book) => book.isbn != isbn));
    } catch (error) {
      alert("Erro ao deletar livro");
      console.log("error",error);
    }
  };
    if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <div className="dashboardLayout">
      <Sidebar></Sidebar>
      <ManageBooks
        books={book}
        deleteFunction={deleteBookHandler}
      ></ManageBooks>
    </div>
  );
}

export default AdminPage;
