import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "./Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export interface Todo_Type {
  id: number;
  name: string;
  description: string;
  due_date: number;
}

export interface ServerData {
  data: Array<Todo_Type>;
}

const DEFAULT_TODO = { name: "", description: "", due_date: 0, id: 0 };
const DEFAULT_TODOS = [DEFAULT_TODO];

const App = () => {
  const [todos, setTodos] = useState(DEFAULT_TODOS);
  const [newTodo, setNewTodo] = useState(DEFAULT_TODO);
  const [modalOpen, setModalOpen] = useState(false);
  const [inEditMode, setInEditMode] = useState(false);

  const getAllTodos = () => {
    axios.get("/api/todos").then((res: ServerData) => {
      setTodos(res.data);
    });
  };

  useEffect(() => {
    getAllTodos();
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    if (id === "description") {
      setNewTodo({ ...newTodo, description: value });
    } else if (id === "name") {
      setNewTodo({ ...newTodo, name: value });
    }
  };

  const handleUpdateTodo = () => {
    axios.put("/api/todos", newTodo).then(() => {
      getAllTodos();
    });
    setModalOpen(false);
    setInEditMode(false);
    setNewTodo(DEFAULT_TODO);
  };

  const handleSaveTodo = () => {
    setModalOpen(false);
    axios.post("/api/todos", newTodo).then(() => {
      getAllTodos();
    });
    setNewTodo(DEFAULT_TODO);
  };

  const handleDeleteTodo = (id: number) => {
    axios.delete(`api/todos/${id}`).then(() => {
      getAllTodos();
    });
  };

  const handleCloseModal = () => {
    setNewTodo(DEFAULT_TODO);
    setModalOpen(false);
    setInEditMode(false);
  };

  const handleOpenEditModal = (id: number) => {
    let todoToEdit = todos.filter(todo => todo.id === id)[0];
    setNewTodo(todoToEdit);
    setInEditMode(true);
    setModalOpen(true);
  };

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
            {todos.map((todo: Todo_Type) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.name}</td>
                  <td>{todo.description}</td>
                  <td>{todo.due_date}</td>
                  <td className="Button">
                    <Button
                      onClick={() => handleDeleteTodo(todo.id)}
                      variant="warning"
                    >
                      Delete
                    </Button>
                    <Button onClick={() => handleOpenEditModal(todo.id)}>
                      Edit
                    </Button>
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
                <Button onClick={() => setModalOpen(true)} variant="primary">
                  Add Todo
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <Modal
        modalOpen={modalOpen}
        closeModal={handleCloseModal}
        handleFormChange={handleFormChange}
        handleConfirm={inEditMode ? handleUpdateTodo : handleSaveTodo}
        inEditMode={inEditMode}
        newTodo={newTodo}
      />
    </div>
  );
};

export default App;
