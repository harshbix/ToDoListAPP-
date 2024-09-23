import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

interface Props {
  taskName: string;
  onDelete: () => void;   // Function to handle deletion
  onUpdate: (newTaskName: string) => void;  // Function to handle update
}

const EditTask = ({ taskName, onDelete, onUpdate }: Props) => {
  const [isEditing, setIsEditing] = useState(false);  // To toggle between edit and view modes
  const [editValue, setEditValue] = useState(taskName);  // Store edited task

  const handleEditClick = () => {
    setIsEditing(true);  // Toggle to edit mode
  };

  const handleSaveClick = () => {
    onUpdate(editValue);  // Call parent function to update the task
    setIsEditing(false);  // Toggle back to view mode
  };

  return (
    <div className="text-white">
      <div className="item ps-3">
        {isEditing ? (
          <>
            {/* Input for editing task */}
            <input
              type="text"
              className="form-control"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button className="btn text-white" onClick={handleSaveClick}>
              Save
            </button>
          </>
        ) : (
          <>
            <span>{taskName}</span>
            <button className="bi-pencil btn text-white" onClick={handleEditClick}></button>
            <button className="bi-trash btn text-white" onClick={onDelete}></button>
          </>
        )}
      </div>
    </div>
  );
};

export default EditTask;
