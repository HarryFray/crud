import React, { useState } from "react";
import { connect } from "react-redux";
import ReduxForm from "./reduxForm";
import { addBook, deleteBook, updateBook } from "./actions/index";
export interface Book {
  id: number;
  title: string;
  author: string;
  percentComplete: number;
}

const CrudRedux = ({
  path,
  update,
  books,
  add,
  del,
}: {
  add: (book: Book) => { type: string; payload: Book };
  update: (book: Book) => { type: string; payload: Book };
  del: (book: Book) => { type: string; payload: Book };
  books: Book[];
  path: string;
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
                  <button onClick={() => del(book)}>Delete me :(</button>
                </td>
                <td>
                  <button onClick={() => setCurrentBook(book)}>edit</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <ReduxForm onChange={onFormUpdate} currentBook={currentBook} />
      <button
        onClick={() => {
          add(currentBook);
        }}
      >
        add book
      </button>
      <button
        onClick={() => {
          update(currentBook);
        }}
      >
        update book
      </button>
      <button
        onClick={() => {
          setCurrentBook({
            id: 0,
            title: "",
            author: "",
            percentComplete: 1,
          });
        }}
      >
        clear
      </button>
    </>
  );
};

const mapState = (state: { books: Book[] }) => ({
  books: state.books,
});

const mapDispatch = {
  add: addBook,
  del: deleteBook,
  update: updateBook,
};

export default connect(mapState, mapDispatch)(CrudRedux);
