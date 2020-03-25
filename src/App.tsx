import React, { useEffect } from "react";
import "./App.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

interface Todo_Type {
  id: string;
  name: string;
  description: string;
  dueDate: number;
}

let TEST_DATA = [
  { id: "123", name: "jog", description: "run around town lake", dueDate: 234 },
  { id: "345", name: "read", description: "relax on porch with Matt Ridley", dueDate: 768 }

];

function App() {

useEffect(() => {
fetch('/').then(res => {
  console.log(res)
})
})

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
            </tr>
          </thead>
          <tbody>
            {TEST_DATA.map((todo: Todo_Type, i) => {
              return (
                <tr key={todo.id}>
                  <td>{i}</td>
                  <td>{todo.name}</td>
                  <td>{todo.description}</td>
                  <td>{todo.dueDate}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
