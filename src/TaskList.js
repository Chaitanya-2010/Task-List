import React, { useState } from 'react';
import './TaskList.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTask = () => {
    if (title && description) {
      setTasks([...tasks, { title, description }]);
      setTitle('');
      setDescription('');
    } else {
      alert('Title and description cannot be empty');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="task-list-container">
      <h1>Task List</h1>
      <div className="task-form">
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
