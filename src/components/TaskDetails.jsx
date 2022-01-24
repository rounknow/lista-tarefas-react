import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();
    const history = useNavigate();

    const handleBackButtonClick = () =>{

       history(-1);
    }

    return ( 
    <>

        <div className="back-button-container" onClick={handleBackButtonClick}>
            <Button>Voltar</Button>
        </div>
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur alias commodi facilis quod doloremque modi?
            </p>
        </div>
    </> 
    );
}
 
export default TaskDetails;