import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

function CreateTask({ modal, toggle, save, setModal }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const handleSave = () => {
    let taskObj = {};
    taskObj["name"] = taskName;
    taskObj["description"] = taskDescription;
    save(taskObj);
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>

        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task Name</label>
              <input
                type={"text"}
                className="form-control"
                value={taskName}
                onChange={(e) => {
                  setTaskName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows={5}
                className="form-control"
                value={taskDescription}
                onChange={(e) => {
                  setTaskDescription(e.target.value);
                }}
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{" "}
          <Button
            onClick={() => {
              setModal(false);
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateTask;
