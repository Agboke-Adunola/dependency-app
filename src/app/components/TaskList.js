"use client";
import { useState, useEffect } from "react";

export default function TaskList({ filter }) {
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  // ✅ Load tasks once when the component mounts
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []); // run once only

  // ✅ Persist whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id) =>
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "active" ? "completed" : "active" }
          : t
      )
    );

  const deleteTask = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditValue(task.text);
  };

  const saveEdit = (id) => {
    if (!editValue.trim()) return;
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: editValue.trim() } : t))
    );
    setEditingId(null);
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue("");
  };

  // ✅ Apply filter
  const filtered = tasks.filter((t) =>
    filter === "all"
      ? true
      : filter === "active"
      ? t.status === "active"
      : t.status === "completed"
  );

  return (
    <ul className="space-y-3">
      {filtered.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center bg-gray-400 p-3 rounded-lg shadow hover:shadow-md transition"
        >
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={task.status === "completed"}
              onChange={() => toggleTask(task.id)}
              className="w-5 h-5"
            />

            {editingId === task.id ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="border p-1 rounded"
              />
            ) : (
              <span
                className={`text-lg ${
                  task.status === "completed"
                    ? "line-through text-gray-500"
                    : ""
                }`}
              >
                {task.text}
              </span>
            )}
          </div>

          <div className="flex space-x-2">
            {editingId === task.id ? (
              <>
                <button
                  onClick={() => saveEdit(task.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => startEdit(task)}
                  className="text-green-800 hover:text-green-900"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-700 hover:text-red-900"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
