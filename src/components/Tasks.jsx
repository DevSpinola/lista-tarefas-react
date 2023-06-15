import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handleTaskClick, removeTask}) => {
   
    return(
    <>
        {tasks.map(task => <Task handleTaskClick={handleTaskClick } removeTask={removeTask} task={task} />)}    
    
    </>
    )
}

export default Tasks