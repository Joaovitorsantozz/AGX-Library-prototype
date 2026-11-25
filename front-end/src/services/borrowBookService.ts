import Axios from "axios";
export const borrowBookService = async (isbn: string) => {
  const token = localStorage.getItem("token");
  return await Axios.post(
    "http://localhost:3000/api/books/borrow",
    { isbn },
    { headers: { Authorization: `Bearer ${token}` } },
  );
};
