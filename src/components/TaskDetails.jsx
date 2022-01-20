import React from 'react';

import Button from './Button';

const TaskDetails = () => {
    return ( 
    <>

        <div className="back-button-container">
            <Button>Voltar</Button>
        </div>
        <div className="task-details-container">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur alias commodi facilis quod doloremque modi?
            </p>
        </div>
    </> 
    );
}
 
export default TaskDetails;