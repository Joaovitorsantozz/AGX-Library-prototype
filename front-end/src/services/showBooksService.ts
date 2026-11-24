import Axios from "axios";
export const returnBooksService = async () => {
  const token = localStorage.getItem("token");
  return await Axios.get("http://localhost:3000/api/books/show", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
