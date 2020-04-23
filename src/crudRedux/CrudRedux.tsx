import React from "react";

export interface Book {
  id: number;
  title: string;
  author: string;
  percentComplete: number;
}

let Books: Book[] = [
  {
    id: 1,
    title: "Fooled By Randomness",
    author: "Nassim Nicholas",
    percentComplete: 2,
  },
  {
    id: 2,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    percentComplete: 40,
  },
  {
    id: 3,
    title: "Doing Good Better",
    author: "Willeam Macaskill",
    percentComplete: 90,
  },
];

const CrudRedux = ({ path }: { path: string }) => {
  return (
    <div className="BookTable">
      <table>
        <tr>
          <th className="BookCol">#</th>
          <th className="BookCol">Title</th>
          <th className="BookCol">Author</th>
          <th className="BookCol">Percent Complete</th>
        </tr>
        {Books.map((book) => {
          return (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.percentComplete}%</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default CrudRedux;
