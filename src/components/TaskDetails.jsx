import React from "react";
import Button from "./Button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./TaskDetails.css";
const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          tenetur earum doloribus qui vero perferendis, dicta repellendus
          cupiditate dignissimos explicabo et repudiandae voluptates, neque
          reprehenderit eum omnis dolor doloremque error!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
