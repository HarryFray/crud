import React, { useState } from "react";
import { connect } from "react-redux";
import ReduxForm from "./reduxForm";
import { addBook, deleteBook } from "./actions/index";
export interface Book {
  id: number;
  title: string;
  author: string;
  percentComplete: number;
}

const CrudRedux = ({
  path,
  books,
  addBook,
  deleteBook,
}: {
  path: string;
  books: Book[];
  addBook: (book: Book) => { type: string; payload: Book };
  deleteBook: (book: Book) => { type: string; payload: Book };
}) => {
  let [currentBook, setCurrentBook] = useState({
    id: 0,
    title: "",
    author: "",
    percentComplete: 1,
  });

  const onFormUpdate = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.currentTarget.value;
    const name = ev.currentTarget.name;
    setCurrentBook({ ...currentBook, [name]: value });
  };
  return (
    <>
      <div className="BookTable">
        <table>
          <tr>
            <th className="BookCol">#</th>
            <th className="BookCol">Title</th>
            <th className="BookCol">Author</th>
            <th className="BookCol">Percent Complete</th>
          </tr>
          {books.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.percentComplete}%</td>
                <td>
                  <button onClick={() => deleteBook(book)}>Delete me :(</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <button
        onClick={() => {
          addBook(currentBook);
        }}
      >
        add book
      </button>
      <ReduxForm onChange={onFormUpdate} currentBook={currentBook} />
    </>
  );
};

const mapState = (state: { books: Book[] }) => ({
  books: state.books,
});

const mapDispatch = {
  addBook,
  deleteBook,
};

export default connect(mapState, mapDispatch)(CrudRedux);
