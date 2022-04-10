import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

function EditTask({ modal, toggle, updateTask, setModal, taskList }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  useEffect(() => {
    setTaskName(taskList.name);
    setTaskDescription(taskList.description);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["name"] = taskName;
    tempObj["description"] = taskDescription;
    updateTask(tempObj);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Task</ModalHeader>

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
          <Button color="primary" onClick={handleUpdate}>
            Done
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

export default EditTask;
