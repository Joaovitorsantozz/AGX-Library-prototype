import Axios from "axios";
export const showBooksService = async () => {
  const token = localStorage.getItem("token");
  return await Axios.get("http://localhost:3000/api/books/show", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const showBorrowedBooksService = async () => {
  const token = localStorage.getItem("token");
  return await Axios.get("http://localhost:3000/api/books/user/borrowed", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
