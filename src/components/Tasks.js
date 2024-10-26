import React, { useEffect, useState } from 'react';

function Tasks() {

  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div>
      <h2>Big List o Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.taskName}</li>
        ))}
      </ul>

    </div>
  ) 
}

export default Tasks;