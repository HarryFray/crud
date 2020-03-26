import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

interface Todo_Type {
  id: string;
  name: string;
  description: string;
  dueDate: number;
}

interface ServerResponse {
  data: ServerData;
}

interface ServerData {
  data: Array<Todo_Type>;
}

const DEFAULT_TODOS = [{ id: "", name: "", description: "", dueDate: 0 }];

const App = () => {
  const [todos, setTodos] = useState(DEFAULT_TODOS);

  useEffect(() => {
    axios.get("/api/todos").then((res: ServerData) => {
      setTodos(res.data);
    });
  }, []);

  const onAdd = () => {};

  return (
    <div className="App-header">
      <div className="Table">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Todo</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo: Todo_Type, i) => {
              return (
                <tr key={todo.id}>
                  <td>{i}</td>
                  <td>{todo.name}</td>
                  <td>{todo.description}</td>
                  <td>{todo.dueDate}</td>
                  <td className="Button">
                    <Button variant="warning">Delete</Button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td>{""}</td>
              <td>{""}</td>
              <td>{""}</td>
              <td>{""}</td>
              <td className="Button">
                <Button variant="primary">Add Todo</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default App;
