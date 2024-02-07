import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const TodoApp = () => {
    const [job, setJob] = useState([]);
    const [newTask, setNewJob] = useState('');
  
    const handleInputChange = (event) => {
      setNewJob(event.target.value);
    };
  
    const addJob = () => {
        setJob( newJob);
      
    };
  
    return (
      <div>
        <h1>Todo App</h1>
        <input
          type="text"
          value={newJob}
          onChange={handleInputChange}
          placeholder="Add a new job"
        />
        <button onClick={addJob}>Add Job</button>
        <ul>
          {tasks.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>
    );
  };
  
}

export default App
