import React, { ChangeEvent } from "react";
import { Book } from "./CrudRedux";

interface reduxFormProps {
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  currentBook: Book;
}

const ReduxForm = ({ currentBook, onChange }: reduxFormProps) => {
  return (
    <div>
      <form className="ReduxForm">
        <label>
          ID: 
          <input
            type="text"
            name="id"
            value={currentBook.id}
            onChange={onChange}
          />
        </label>
        <label>
          Title: 
          <input
            type="text"
            name="title"
            value={currentBook.title}
            onChange={onChange}
          />
        </label>
        <label>
          Author: 
          <input
            type="text"
            name="author"
            value={currentBook.author}
            onChange={onChange}
          />
        </label>
        <label>
          Percent Complete: 
          <input
            type="text"
            name="percentComplete"
            value={currentBook.percentComplete}
            onChange={onChange}
          />
        </label>
      </form>
    </div>
  );
};

export default ReduxForm;
