import React, { useState } from "react";
import EditableTaskCard from "./EditableTaskCard";
import DeleteTask from "./DeleteTask";
import "../index.css";

const TaskCard = ({ task, onUpdateTask, onDeleteTask }) => {
  const [radio, setRadio] = useState(false);
  const [status, setStatus] = useState(task?.status);
  const [priority, setPriority] = useState(task?.priority);
  const [deleteTask, setDeleteTask] = useState(false);
  const [edit, setEdit] = useState(false);
  const onRadioClicked = () => {
    setRadio(!radio);
  };
  const onEditClicked = () => {
    setEdit(true);
    setRadio(false);
  };
  const onDeleteClicked=()=>{
    setDeleteTask(true);
    setRadio(false);

  }
  return (
    <>
      <div className="task-card">
        <div className="task-card-top">
          <p className="task-card-top-text">{task?.taskName}</p>
          <div className="task-card-top-priority-label">
            <p>{task?.priority}</p>
          </div>
        </div>
        <div className="task-card-divider"></div>
        <div className="task-card-task-desc">
          <p>{task?.taskDescription}</p>
        </div>
        <div className="task-card-middle">
          <p>{task?.assignee}</p>
          <div>
            <button
              className="task-middle-button"
              onClick={() => onRadioClicked()}
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
            {radio ? (
              <div className="task-card-dropdown">
                <button onClick={() => onEditClicked()}>Edit</button>
                <div className="task-card-divider" ></div>
                <button onClick={()=>onDeleteClicked()}>Delete</button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="task-card-bottom">
          <button>{task?.status}</button>
        </div>
      </div>
      {edit ? (
        <EditableTaskCard
          setEdit={setEdit}
          setStatus={setStatus}
          status={status}
          priority={priority}
          setPriority={setPriority}
          task={task}
          onUpdateTask={onUpdateTask}
        />
      ) : null}
      {deleteTask?<DeleteTask setDeleteTask={setDeleteTask} task={task} onDeleteTask={onDeleteTask}/>:null
      }
    </>
  );
};
export default TaskCard;
