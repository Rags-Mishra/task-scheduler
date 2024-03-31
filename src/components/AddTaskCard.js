import React, { useState } from "react";

const AddTask = ({ onAddTask, setAdd }) => {
  const [task, setTask] = useState({
    taskName: "",
    taskDescription: "",
    assignee: "",
    priority: "",
    status: "Pending",
  });
  const [priority, setPriority] = useState("P0");
  const onSubmit = () => {
    const updatedTask = { ...task, priority: priority };
    onAddTask(updatedTask);
    console.log("priority", priority);
    setAdd(false);
  };
  return (
    <div className="edit-task-main-div">
      <div className="edit-task-card-top">
        <h3>Create a Task</h3>
        <button onClick={() => setAdd(false)}>
          <span>x</span>
        </button>
      </div>
      <div className="edit-task-card">
        <div className="add-task-input-div">
          <label>Title:</label>
          <input
            value={task.taskName}
            onChange={(e) => setTask({ ...task, taskName: e.target.value })}
          ></input>
        </div>
        <div className="add-task-input-div">
          <label>Description:</label>
          <textarea
            type="text"
            value={task.taskDescription}
            onChange={(e) =>
              setTask({ ...task, taskDescription: e.target.value })
            }
          ></textarea>
        </div>
        <div className="add-task-input-div">
          <label>Team:</label>
          <input></input>
        </div>
        <div className="add-task-input-div">
          <label>Assignee:</label>
          <input
            value={task.assignee}
            onChange={(e) => setTask({ ...task, assignee: e.target.value })}
          ></input>
        </div>
        <div className="edit-task-card-editable-div">
          <div>
            <label>Priority:</label>
            <select
              value={priority}
              defaultValue={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value={"P0"}>P0</option>
              <option value={"P1"}>P1</option>
              <option value={"P2"}>P2</option>
            </select>
          </div>
        </div>
        <div className="edit-task-card-button-div">
          <button
            onClick={() => {
              onSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
