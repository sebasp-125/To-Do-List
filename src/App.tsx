import { useState } from 'react';
import './styles/TodoList.css'

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  //couter Pendings Tasks
  const [PendingsTasks, SetPendings_Tasks] = useState<number>(0);
  //Estado completed
  const [CompletedTasks, SetCompleted] = useState<boolean>();

  const AddTask = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue('');
      SetPendings_Tasks(PendingsTasks + 1)
    }
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    SetPendings_Tasks(PendingsTasks - 1)
  };

  const completed = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    SetPendings_Tasks(PendingsTasks - 1)
    SetCompleted(true)
  };

  return (
    <div className="App">
      <div>
        <h1 className='title'>Todo List</h1>
        <div className='todo-container'>
          <label className='input-label'>New Task</label>
          <input
            id="taskInput"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="New Task"
            className='task-input'
          />
          <button className='add-btn' onClick={AddTask}>Add Task</button>
          <h3>Tareas Pendientes: {PendingsTasks}</h3>
          <table className='task-table'>
            <thead>
              <tr>
                <th>Task</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={index} className={CompletedTasks ? 'completed-task' : ''}>
                  <td>{todo}</td>
                  <td>
                    <button className='delete-btn' onClick={() => handleDeleteTodo(index)}>Delete</button>
                    <button className='completed-btn' onClick={() => completed(index)}>Completed</button>
                    <button className='completed-btn' onClick={() => completed(index)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

}

export default App;
