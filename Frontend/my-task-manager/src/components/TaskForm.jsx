import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSave, taskToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setDueDate(taskToEdit.due_date.split('T')[0]);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, due_date: dueDate });
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 rounded">
      <div>
        <label className="block font-medium">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label className="block font-medium">Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label className="block font-medium">Due Date</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="w-full p-2 border rounded" required />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;