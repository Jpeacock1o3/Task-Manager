import React from 'react';

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-lg font-semibold">{task.title}</h2>
      <p>{task.description}</p>
      <p className="text-sm text-gray-500">Due: {new Date(task.due_date).toLocaleDateString()}</p>
      <div className="mt-2 flex gap-2">
        <button onClick={() => onEdit(task)} className="bg-yellow-400 px-2 py-1 rounded">Edit</button>
        <button onClick={() => onDelete(task.id)} className="bg-red-500 px-2 py-1 text-white rounded">Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;