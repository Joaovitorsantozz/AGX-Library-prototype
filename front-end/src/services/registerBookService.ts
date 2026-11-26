import Axios from "axios";
import type { NewBook } from "../interfaces/BookInterface";
export const registerBookService = async (values: NewBook) => {
  return await Axios.post(
    "http://localhost:3000/api/books/register",
    {
      name: values.name,
      price: 0,
      author: values.author,
      genre: values.genre,
      status: values.status,
      isbn: values.isbn,
      publishedYear: values.publishedYear,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  );
};
