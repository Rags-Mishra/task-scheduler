import React, { useState } from "react";
const EditableTaskCard = ({
  setEdit,
  setStatus,
  status,
  priority,
  setPriority,
  onUpdateTask,
  task
}) => {
  const [statusValue, setStatusValue] = useState(status);
  const [priorityValue, setPriorityValue] = useState(priority);
  return (
    <div className="edit-task-main-div">
      <div className="edit-task-card-top">
          <h3>Edit Task</h3>
          <button onClick={() => setEdit(false)}>
            <span>x</span>
          </button>
        </div>
      <div className="edit-task-card">
        
        <div className="edit-task-card-non-editable-div">
          <p>Title:</p>
          <div>
            <p>{task?.taskName}</p>
          </div>
        </div>
        <div className="edit-task-card-non-editable-div">
          <p>Description:</p>
          <div>
            <p>{task?.taskDescription}</p>
          </div>
        </div>
        <div className="edit-task-card-non-editable-div">
          <p>Team:</p>
          <div>
            <p>Avengers</p>
          </div>
        </div>
        <div className="edit-task-card-non-editable-div">
          <p>Assignee</p>
          <div>
            <p>@{task?.assignee}</p>
          </div>
        </div>
        <div className="edit-task-card-editable-div">
          <div>
            <label>Priority:</label>
            <select onChange={(e) => setPriorityValue(e.target.value)} defaultValue={task?.priority}>
              <option value={"P0"}>P0</option>
              <option value={"P1"}>P1</option>
              <option value={"P2"}>P2</option>
            </select>
          </div>
          <div>
            <label>Status:</label>
            <select
              onChange={(e) => setStatusValue(e.target.value)}
              defaultValue={task?.status}
            >
              <option value={"Pending"}>Pending</option>
              <option value={"In Progress"}>In Progress</option>
              <option value={"Deployed"}>Deployed</option>
              <option value={"Completed"}>Completed</option>
              <option value={"Deferred"}>Deferred</option>
            </select>
          </div>
        </div>
        <div className="edit-task-card-button-div">
          <button
            onClick={() => {
              setStatus(statusValue);
              setPriority(priorityValue);
              onUpdateTask({...task, status:statusValue, priority:priorityValue});
              setEdit(false);
            }}
          >
            Submit
          </button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  );
};
export default EditableTaskCard;
