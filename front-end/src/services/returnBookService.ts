import Axios from "axios";
export const returnBookService = async (isbn: string) => {
  const token = localStorage.getItem("token");
  return await Axios.patch(
    "http://localhost:3000/api/books/return",
    { isbn },
    { headers: { Authorization: `Bearer ${token}` } },
  );
};
