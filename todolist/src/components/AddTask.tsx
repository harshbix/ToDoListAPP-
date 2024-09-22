
const AddTask = () => {
  return (
    <div className="pb-3">
      <input type="text" name="addTask" id="addTask" placeholder="What is the task Today?" className="w-75 p-3 text-white" />
      <button type="button" className="taskButton btn text-white">Add Task</button>
    </div>
  )
}

export default AddTask