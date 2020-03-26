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
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios.get("/api/todos").then((res: ServerData) => {
      setTodos(res.data);
    });
    
  }, );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log("MY FORM: ", event.target.value;
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
                  <td>{todo.dueDate}</td>
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            // onClick={() => setModalOpen(false)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
