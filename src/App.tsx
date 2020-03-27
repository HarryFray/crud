import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

interface Todo_Type {
  id: string;
  name: string;
  description: string;
  due_date: number;
}

export interface ServerData {
  data: Array<Todo_Type>;
}

const DEFAULT_TODO = { name: "", description: "", due_date: 0, id: "" };
const DEFAULT_TODOS = [DEFAULT_TODO];

const App = () => {
  const [todos, setTodos] = useState(DEFAULT_TODOS);
  const [newTodo, setNewTodo] = useState(DEFAULT_TODO);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios.get("/api/todos").then((res: ServerData) => {
      setTodos(res.data);
    });
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    if (id === "description") {
      setNewTodo({ ...newTodo, description: value });
    } else if (id === "name") {
      setNewTodo({ ...newTodo, name: value });
    }
  };

  const handleSaveTodo = () => {
    setModalOpen(false);
    console.log("THIS IS WHERE NEW TODO WILL BE SAVED");
  };

  const handleCloseModal = () => {
    setNewTodo(DEFAULT_TODO);
    setModalOpen(false);
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
            {todos.map((todo: Todo_Type, i) => {
              return (
                <tr key={todo.id}>
                  <td>{i}</td>
                  <td>{todo.name}</td>
                  <td>{todo.description}</td>
                  <td>{todo.due_date}</td>
                  <td className="Button">
                    <Button variant="warning">Delete</Button>
                    <Button>Edit</Button>
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

      <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>New Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name" onChange={handleChange}>
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Enter name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="description" onChange={handleChange}>
              <Form.Label>Description</Form.Label>
              <Form.Control placeholder="Description" />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal} variant="secondary">
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleSaveTodo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
