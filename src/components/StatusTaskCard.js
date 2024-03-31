import React from "react";
import TaskCard from "./TaskCard.js";

const status = [
  {
    status: "Pending",
    color: "#909296",
  },
  {
    status: "In Progress",
    color: "#b36d05",
  },
  {
    status: "Completed",
    color: "#0f8203",
  },
  {
    status: "Deployed",
    color: "#7f05b3",
  },
  {
    status: "Deferred",
    color: "#b30570",
  },
];
const StatusTaskCard = ({ getStatus,tasks,setTasks }) => {
 

  let color = "";
  status.map((status) =>
    status.status === getStatus ? (color = status.color) : null
  );
  const onUpdateTask = (updatedTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((prevTask) =>
        prevTask?.taskName === updatedTask?.taskName
          ? {
              ...prevTask,
              status: updatedTask?.status,
              priority: updatedTask?.priority,
            }
          : prevTask
      );
      return updatedTasks;
    });
  };
const onDeleteTask=(deleteTask)=>{
    const updatedTasks=tasks.filter(prevTask=>prevTask!==deleteTask);
    setTasks(updatedTasks)
}
  return (
    <div className="status-task-card">
      <div className="status-task-card-top" style={{ backgroundColor: color }}>
        <h4>{getStatus}</h4>
      </div>
      {tasks.map((task) =>
        task.status === getStatus ? (
          <TaskCard key={task?.taskName} task={task} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask}/>
        ) : null
      )}
    </div>
  );
};

export default StatusTaskCard;
