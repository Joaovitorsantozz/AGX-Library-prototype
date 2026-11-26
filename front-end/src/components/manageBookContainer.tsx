import { useState } from "react";
import type { Book } from "../interfaces/BookInterface";
import { ErrorMessage, Field, Form, Formik } from "formik";

interface NewBook {
  name: string;
  author: string;
  genre: string;
  isbn: string;
  publishedYear: number;
  status: "available" | "borrowed";
}

interface ManageBooksProps {
  books: Book[];
  deleteFunction: (isbn: string) => void;
}

function ManageBooks({ books,deleteFunction }: ManageBooksProps) {
  const handleSubmit = () => {};
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.isbn.includes(search),
  );
  return (
    <main className="manageBooksMain">
      <header className="manageBooksHeader">
        <div>
          <h1>Gerenciar livros</h1>
          <p>
            Área administrativa para cadastro, consulta e exclusão de livros do
            acervo.
          </p>
        </div>

        <button
          className="registerBookButton"
          onClick={() =>
            document.getElementById("bookForm")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          + Cadastrar novo livro
        </button>
      </header>

      <section className="bookFormSection" id="bookForm">
        <div className="sectionTitle">
          <h2>Novo livro no acervo</h2>
          <span>Preencha os campos obrigatórios</span>
        </div>

        <Formik
          initialValues={{
            name: "",
            author: "",
            genre: "",
            isbn: "",
            publishedYear: new Date().getFullYear(),
            status: "available" as "available" | "borrowed",
          }}
          onSubmit={handleSubmit}
        >
          <Form className="bookForm">
            <div className="formGrid">
              <div className="formGroup">
                <label htmlFor="name">Nome do livro</label>

                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ex: Padrões de Projeto"
                />

                <ErrorMessage name="name" component="span" />
              </div>

              <div className="formGroup">
                <label htmlFor="author">Autor</label>

                <Field
                  type="text"
                  name="author"
                  id="author"
                  placeholder="Ex: Erich Gamma"
                />

                <ErrorMessage name="author" component="span" />
              </div>

              <div className="formGroup">
                <label htmlFor="genre">Gênero</label>

                <Field
                  type="text"
                  name="genre"
                  id="genre"
                  placeholder="Ex: Engenharia de Software"
                />

                <ErrorMessage name="genre" component="span" />
              </div>

              <div className="formGroup">
                <label htmlFor="isbn">ISBN</label>

                <Field
                  type="text"
                  name="isbn"
                  id="isbn"
                  placeholder="978-8537616103"
                />

                <ErrorMessage name="isbn" component="span" />
              </div>

              <div className="formGroup">
                <label htmlFor="publishedYear">Ano de publicação</label>

                <Field
                  type="number"
                  name="publishedYear"
                  id="publishedYear"
                  placeholder="2024"
                />

                <ErrorMessage name="publishedYear" component="span" />
              </div>

              <div className="formGroup">
                <label htmlFor="status">Status do livro</label>

                <Field as="select" name="status" id="status">
                  <option value="available">Disponível</option>
                  <option value="borrowed">Emprestado</option>
                </Field>

                <ErrorMessage name="status" component="span" />
              </div>
            </div>

            <div className="formActions">
              <button type="reset" className="clearButton">
                Limpar
              </button>

              <button type="submit" className="saveBookButton">
                Salvar livro
              </button>
            </div>
          </Form>
        </Formik>
      </section>

      <section className="registeredBooksSection">
        <div className="registeredBooksHeader">
          <h2>Acervo cadastrado</h2>

          <div className="bookSearch">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Filtrar por título ou ISBN..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="booksTableContainer">
          <table className="booksTable">
            <thead>
              <tr>
                <th>Livro</th>
                <th>Gênero</th>
                <th>ISBN</th>
                <th>Ano</th>
                <th>Status</th>
                <th>Ação</th>
              </tr>
            </thead>

            <tbody>
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <tr key={book.id}>
                    <td>
                      <div className="tableBookInfo">
                        <strong>{book.name}</strong>
                        <span>{book.author}</span>
                      </div>
                    </td>

                    <td>{book.genre}</td>
                    <td>{book.isbn}</td>
                    <td>{book.publishedYear}</td>

                    <td>
                      <span
                        className={`bookStatus ${
                          book.status === "available" ? "available" : "borrowed"
                        }`}
                      >
                        {book.status === "available"
                          ? "Disponível"
                          : "Emprestado"}
                      </span>
                    </td>

                    <td>
                      <button
                        className="deleteBookButton"
                        onClick={() => deleteFunction(book.isbn)}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="emptyBooks">
                    Nenhum livro encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="booksCount">
          Exibindo {filteredBooks.length} de {books.length} livros
        </p>
      </section>
    </main>
  );
}

export default ManageBooks;
