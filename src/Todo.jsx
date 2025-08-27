import { useState } from "react";
import React from "react";

export default function Todo(){
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const handleAdd = (e) => {
        e.preventDefault();
        const text = newTask.trim();
        if (!text)return;
        const task = {id: Date.now(), text}
        setTasks(prev => [task, ...prev]);
        setNewTask("");

    };
    const handleDelete = (id) => {
        setTasks(prev => prev.filter(t => t.id !== id));
    };
    return(
        <div className="container">
      <div className="home">
        <div className="home-text">
          <h1>Simple ToDo App</h1>
          <p>This todo app for test design.</p>
        </div>
        <div className="input-task">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
            placeholder="Write Text here . . ."
          />
           <button className="btn-add" id="btn-desktop" onClick={handleAdd}>
            + Add New
          </button> 
        </div>
        <div className="liner2"></div>

        <ul className="ul-task">
            {tasks.map(t => (
                <li className="li-task" key={t.id}>
                    {t.text}
                    <button className="btn-delete" onClick={() => handleDelete(t.id)}>X</button>
                </li>
            ))}
        </ul>
        <p id="task-count">
          Total Tasks:<span className="number">{tasks.length}</span>
        </p>
        <button className="btn-add" id="btn-mobile" onClick={handleAdd}>
          + Add New
        </button>
      </div>
    </div>
    );
}
