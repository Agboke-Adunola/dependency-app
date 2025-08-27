"use client";
import { useState, useEffect } from "react";

import TaskInput from "../components/TaskInput";
import TaskFilters from "../components/TaskFilters";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      status: "active",
    };
    setTasks((prev) => [...prev, newTask]);
  };
  console.log({ tasks });

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

  const filteredTasks = tasks.filter((t) =>
    filter === "all"
      ? true
      : filter === "active"
      ? t.status === "active"
      : t.status === "completed"
  );

  return (
    <main
      style={{ backgroundImage: "url(/images/beauty.jpg)" }}
      className="h-screen w-full bg-cover bg-center min-h-screen flex flex-col"
    >
      <Header />

      <div className="flex-grow container mx-auto p-4 max-w-2xl">
        <TaskInput onAdd={handleAddTask} />
        <TaskFilters onChange={setFilter} />

        <ul className="space-y-3">
          {filteredTasks.map((task) => (
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
                      className="text-green-500 hover:text-green-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </main>
  );
}
