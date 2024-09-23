import { useState } from "react";
import EditTask from "./EditTask";

const AddTask = () => {
  const [value, setValue] = useState<string>("");   // State for input value
  const [tasks, setTasks] = useState<string[]>([]); // State for array of tasks (string[])

  const handleClick = () => {
    if (value.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, value]);   // Add new task
      setValue(""); // Clear the input field after adding
    }
  };

  // Function to delete a task by index
  const handleDelete = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  // Function to update a task by index
  const handleUpdate = (index: number, newTaskName: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => (i === index ? newTaskName : task))
    );
  };

  return (
    <>
      <div className="pb-5">
        <input
          type="text"
          name="addTask"
          id="addTask"
          placeholder="What is the task Today?"
          className="w-md-75 p-3 text-white"
          value={value} // Controlled input
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="button"
          className="taskButton btn text-white"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>

      {/* Display multiple tasks */}
      <div>
        {tasks.map((task, index) => (
          <EditTask
            key={index}
            taskName={task}
            onDelete={() => handleDelete(index)}          // Pass delete handler
            onUpdate={(newTaskName) => handleUpdate(index, newTaskName)}  // Pass update handler
          />
        ))}
      </div>
    </>
  );
};

export default AddTask;
