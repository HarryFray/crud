import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import BSModal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Todo_Type } from "./App";

interface Modal_Input_Type {
  closeModal: () => void;
  modalOpen: boolean;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleConfirm: () => void;
  inEditMode: boolean;
  newTodo: Todo_Type;
}

const Modal = ({
  modalOpen,
  closeModal,
  handleFormChange,
  handleConfirm,
  inEditMode,
  newTodo
}: Modal_Input_Type) => {
  return (
    <BSModal show={modalOpen} onHide={closeModal}>
      <BSModal.Header closeButton>
        <BSModal.Title>{inEditMode ? "Edit Todo" : "New Todo"}</BSModal.Title>
      </BSModal.Header>
      <BSModal.Body>
        <Form>
          <Form.Group controlId="name" onChange={handleFormChange}>
            <Form.Label>Name</Form.Label>
            <Form.Control value={newTodo.name} />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="description" onChange={handleFormChange}>
            <Form.Label>Description</Form.Label>
            <Form.Control value={newTodo.description} />
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
