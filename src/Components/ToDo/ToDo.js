import React, { useState } from "react";
import "./ToDo.css";

function ToDo() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const handleRemoveCompleted = () => {
    setTaskList(taskList.filter(item => !item.includes('✅')));
  };

  return (
    <div className="todo-container">
      <h2>To Do List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add Task</button>
      </form>
      <div className="todo-button">
      <ul>
        {taskList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => {
              setTaskList(taskList.map((task, i) => 
                i === index ? task + ' ✅' : task
              ));
            }}>✅ ?</button>
          </li>
        ))}
      </ul>
      </div>
      
      <button onClick={handleRemoveCompleted}>Remove Completed</button>
    </div>
  );
}

export default ToDo;
