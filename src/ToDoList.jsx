import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]); // stores all tasks
  const [input, setInput] = useState(""); // stores what user is typing
  const [taskCount, setTaskCount] = useState(0);

  function addTask() {
    if (input.trim() === "") return;

    setTasks([...tasks, input]); // Creates a new array with new tasks
    setTaskCount(taskCount + 1);
    setInput("");
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index)); // Removes task at index

    if (taskCount > 0) {
      setTaskCount(taskCount - 1);
    }
  }

  return (
    <div>

      <input
        type="text"
        placeholder="Enter a task"
        value={input}   // controls input
        onChange={(e) => setInput(e.target.value)} // updates input state when user types
        onKeyDown={(e) => e.key === "Enter" && addTask()} // when the enter key is pressed, it also adds the task (goes to addTask function)
      />

      <button onClick={addTask}>+</button> 

      <p>There are currently {taskCount} task(s).</p>

      <ul>
        {tasks.map((task, index) => ( // Turns task array into list items
          <li key={index}>
            {task}
            <button className="delete-button" onClick={() => deleteTask(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
