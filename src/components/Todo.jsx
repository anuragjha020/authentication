import React, { useState, useEffect } from "react";
import "../styles/todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => setTask(e.target.value);

  const addTask = () => {
    if (!task.trim()) return;
    const newTodo = { id: Date.now(), text: task, completed: false };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  const editTask = (id, text) => {
    setEditId(id);
    setTask(text);
  };

  const saveEditedTask = () => {
    if (!task.trim()) return;
    setTodos(
      todos.map((todo) => (todo.id === editId ? { ...todo, text: task } : todo))
    );
    setEditId(null);
    setTask("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearAllTasks = () => setTodos([]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <div className="todo-wrapper">
        <h2 className="todo-title">My Todos</h2>
        <div className="input-group">
          <input
            type="text"
            className="input-field"
            value={task}
            onChange={handleChange}
            placeholder={editId ? "Edit your task..." : "Enter a new task"}
          />
          <button
            className="btn btn-primary"
            onClick={editId ? saveEditedTask : addTask}
          >
            {editId ? "Save Task" : "Add Task"}
          </button>
        </div>

        {todos.length > 0 ? (
          <>
            {" "}
            <div className="filter-buttons">
              <button
                className="btn btn-secondary"
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setFilter("active")}
              >
                Active
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
            </div>
            <ul className="todo-list">
              {filteredTodos.map((todo) => (
                <li
                  key={todo.id}
                  className={`todo-item ${
                    todo.completed ? "completed-task" : ""
                  }`}
                >
                  <span
                    className={`todo-text ${
                      todo.completed ? "strikethrough" : ""
                    }`}
                    onClick={() => toggleComplete(todo.id)}
                  >
                    {todo.text}
                  </span>
                  <div className="action-buttons">
                    <button
                      className="btn btn-warning"
                      onClick={() => editTask(todo.id, todo.text)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTask(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-danger btn-clear"
              onClick={clearAllTasks}
            >
              Clear All
            </button>
          </>
        ) : (
          <div className="todo-title">No task to show</div>
        )}
      </div>
    </div>
  );
};

export default Todo;
