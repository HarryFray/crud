import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import BSModal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Todo_Type } from "./App";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface Modal_Input_Type {
  closeModal: () => void;
  modalOpen: boolean;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleConfirm: () => void;
  inEditMode: boolean;
  newTodo: Todo_Type;
  handleDateChange: (date: Date) => void;
}

const Modal = ({
  modalOpen,
  closeModal,
  handleFormChange,
  handleConfirm,
  inEditMode,
  newTodo,
  handleDateChange
}: Modal_Input_Type) => {
  return (
    <BSModal show={modalOpen} onHide={closeModal}>
      <BSModal.Header closeButton>
        <BSModal.Title>{inEditMode ? "Edit Todo" : "New Todo"}</BSModal.Title>
      </BSModal.Header>
      <BSModal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control value={newTodo.name} onChange={handleFormChange} />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={newTodo.description}
              onChange={handleFormChange}
            />
          </Form.Group>
          <Form.Group className="DatePicker">
            <Form.Label>Due Date</Form.Label>
            <DatePicker
              className="DateInput"
              selected={new Date(newTodo.due_date)}
              onChange={handleDateChange}
            />
          </Form.Group>
        </Form>
      </BSModal.Body>
      <BSModal.Footer>
        <Button onClick={closeModal} variant="secondary">
          Close
        </Button>
        <Button type="submit" variant="primary" onClick={handleConfirm}>
          {inEditMode ? "Update" : "Create"}
        </Button>
      </BSModal.Footer>
    </BSModal>
  );
};

export default Modal;
