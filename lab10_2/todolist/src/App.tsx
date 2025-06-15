import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './redux/store';
import { addTask, toggleTask, editTask, deleteTask } from './redux/slice';
import './index.css';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const tasks = useSelector((state: RootState) => state.todos.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    if (inputValue.trim()) {
      dispatch(addTask(inputValue));
      setInputValue('');
    }
  };

  const handleEdit = (task: {id: number, text: string}) => {
    setInputValue(task.text);
    setEditId(task.id);
  };

  const handleUpdate = () => {
    if (inputValue.trim() && editId !== null) {
      dispatch(editTask({id: editId, text: inputValue}));
      setInputValue('');
      setEditId(null);
    }
  };

  const handleToggle = (id: number) => {
    dispatch(toggleTask(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="taskContainer">
      <h1 className="header">Todo List</h1>
      <div className="inputContainer">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="taskInput"
          placeholder="Введите задачу"
        />
        {editId !== null ? (
          <button className="saveButton" onClick={handleUpdate}>
            Сохранить
          </button>
        ) : (
          <button className="addButton" onClick={handleAdd}>
            Добавить
          </button>
        )}
      </div>
      <ul className="taskList">
        {tasks.map(task => (
          <li 
            key={task.id} 
            className={`taskItem ${task.completed ? 'completed' : ''}`}
          >
            <div className="taskContent">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
                className="checkbox"
              />
              <span className="taskText">{task.text}</span>
            </div>
            <div className="taskActions">
              <button 
                className="editButton" 
                onClick={() => handleEdit(task)}
              >
                Редактировать
              </button>
              <button 
                className="deleteButton" 
                onClick={() => handleDelete(task.id)}
              >
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;