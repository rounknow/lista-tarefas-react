import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import './App.css';

const App = () => {
  // let message = 'Hello World!!';
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true
    }
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return {...task, completed: !task.completed}
      }else{
        return task;
      }
    });

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) =>{
      const newTask = [...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      }]

      setTasks(newTask);
  }

  const handleTaskDeletion = (taskId) => {
    const newTask = tasks.filter(task => task.id !== taskId);

    setTasks(newTask);
  }

  return(
   
    <div className='container'>
      <Header />
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion} />
    </div>
  );
}

export default App;
