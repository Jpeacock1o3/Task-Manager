import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + '/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setTasks(res.data))
      .catch(err => console.error("Error fetching tasks:", err));
  }, []);

  const handleSave = async (task) => {
    if (taskToEdit) {
      await axios.put(`${API_URL}/${taskToEdit.id}`, task);
    } else {
      await axios.post(API_URL, task);
    }
    setTaskToEdit(null);
    fetchTasks();
  };

  const handleEdit = (task) => setTaskToEdit(task);
  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTasks();
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <TaskForm onSave={handleSave} taskToEdit={taskToEdit} />
        <hr className="my-6" />
        <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
