
import React, { useState } from 'react';

function SubmitForm({ onCreateTask }) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "task") {
      setTask(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !description) {
      alert("Please fill in all the required fields.");
      return;
    }
    const newTask = { task, description };
    if (onCreateTask) {
      onCreateTask(newTask);
    }
    setTask("");
    setDescription("");

    console.log({ task: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="task">Task:</label>
        <input
          id="task"
          name="task"
          type="text"
          value={task}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitForm;

