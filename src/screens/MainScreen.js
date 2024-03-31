import React, { useState } from "react";
import StatusTaskCard from "../components/StatusTaskCard";
import { Person } from "@mui/icons-material";
import AddTaskCard from "../components/AddTaskCard";
const MainScreen = () => {
  // status array to map all acceptable status 
  const status = [
    "Pending",
    "In Progress",
    "Completed",
    "Deployed",
    "Deferred",
  ];
  // State for storing tasks
  const [tasks, setTasks] = useState([
    {
      taskName: "Task1",
      taskDescription: "Make a list of 5 vegetables",
      assignee: "Pravin",
      priority: "P1",
      status: "Completed",
    },
    {
      taskName: "Task2",
      taskDescription: "Create wireframes for homepage",
      assignee: "Jane",
      priority: "P0",
      status: "Pending",
    },
    {
      taskName: "Task3",
      taskDescription: "Implement user authentication",
      assignee: "John",
      priority: "P1",
      status: "In Progress",
    },
    {
      taskName: "Task4",
      taskDescription: "Optimize database queries",
      assignee: "Mike",
      priority: "P2",
      status: "Deployed",
    },
    {
      taskName: "Task5",
      taskDescription: "Write unit tests for backend API",
      assignee: "Alice",
      priority: "P0",
      status: "Deferred",
    },
    {
      taskName: "Task6",
      taskDescription: "Design landing page graphics",
      assignee: "Sarah",
      priority: "P2",
      status: "Pending",
    },
  ]);
  // State for switching Adding task window
  const[add,setAdd]=useState(false);
  const onAddTask=(task)=>{
    setTasks([...tasks, task])
    console.log(tasks);
  }
  return (
    <>
    <div className="main-screen-main-div">
      <div className="main-screen-top-div">
        <h2>Task Board</h2>
        <Person fontSize="large"/>
      </div>
      <div className="main-screen-tasks-div">
        <div className="main-screen-add-task-filter-div">
          <div className="main-screen-filter-div">
            <h4>Filter by:</h4>
            <input placeholder={"Assignee Name"}></input>
            <select defaultValue={"Priority"}>
              <option value={"P0"}>P0</option>
              <option value={"P1"}>P1</option>
              <option value={"P2"}>P2</option>
            </select>
          </div>
          <div>
            <button onClick={()=>setAdd(true)}>Add New Task</button>
          </div>
        </div>

        <div className="main-screen-sort-div">
          <h4>Sort By:</h4>
          <select defaultValue={"Priority"}>
            <option value={"P0"}>P0</option>
            <option value={"P1"}>P1</option>
            <option value={"P2"}>P2</option>
          </select>
        </div>
        <div className="main-screen-status-div">
          {status.map((s) => (
            <StatusTaskCard key={s} getStatus={s} tasks={tasks} setTasks={setTasks} />
          ))}
        </div>
      </div>
    </div>
    {add?<AddTaskCard onAddTask={onAddTask} setAdd={setAdd}/>:null}
    </>
  );
};

export default MainScreen;
