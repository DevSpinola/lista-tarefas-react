import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";
const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState("");
  const HandleInputChange = (e) => {
    setInputData(e.target.value);
  };
  const handleAddTaskClick = ()=>{
    handleTaskAddition(inputData)
    setInputData('');
  }

  return (
    <div className="add-task-container">
      <input
        onChange={HandleInputChange}
        className="add-task-input"
        type="text"
        value={inputData}
      />

      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
