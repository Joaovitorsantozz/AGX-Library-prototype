import Axios from "axios";
export const returnBooksService = async () => {
  const token = localStorage.getItem("token");
  return await Axios.get("http://localhost:3000/api/books/show", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const returnBorrowedBooksService = async () => {
  const token = localStorage.getItem("token");
  return await Axios.get("http://localhost:3000/api/books/user/borrowed", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
