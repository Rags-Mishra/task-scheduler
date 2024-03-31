import React from 'react'

const DeleteTask = ({setDeleteTask,task,onDeleteTask}) => {
    const onClickYes=()=>{
        onDeleteTask(task);
    }
  return (
    <div className="edit-task-main-div">
        <div className="edit-task-card-top">
          <h3>Delete Task</h3>
          <button onClick={() => setDeleteTask(false)}>
            <span>x</span>
          </button>
        </div>
        <div className="edit-task-card">
        
        <p>Do you wish to delete the task</p>
        <div className='delete-task-lower-div'>
            <h4>{task?.taskName}</h4>
            <div>
            <button onClick={()=>onClickYes()}>Yes</button>
            <button onClick={()=>setDeleteTask(false)}>No</button>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default DeleteTask