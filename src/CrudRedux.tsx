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
  heros,
  add,
  del,
}: {
  add: (book: Book) => { type: string; payload: Book };
  update: (book: Book) => { type: string; payload: Book };
  del: (book: Book) => { type: string; payload: Book };
  books: Book[];
  path: string;
  heros: { count: number; images: string[] };
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
        <h1 role="alert">Hero Authors:{heros.count}</h1>
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
      Hero collection:
      {heros.images.map((img) => {
        return <img key={img} alt="" src={img}></img>;
      })}
    </>
  );
};

const mapState = (state: {
  books: Book[];
  heros: { count: number; images: string[] };
}) => ({
  books: state.books,
  heros: state.heros,
});

const mapDispatch = {
  add: addBook,
  del: deleteBook,
  update: updateBook,
};

export default connect(mapState, mapDispatch)(CrudRedux);
