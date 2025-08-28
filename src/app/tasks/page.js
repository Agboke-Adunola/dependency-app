"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import TaskInput from "../components/TaskInput";
import TaskFilters from "../components/TaskFilters";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TasksPage() {
 const [tasks, setTasks] = useState(() => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  }
  return [];
});

  const [filter, setFilter] = useState("all");
  const router = useRouter();


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    const loadTasks = () => {
      const stored = localStorage.getItem("tasks");
      if (stored) setTasks(JSON.parse(stored));
    };

    loadTasks();

    // Listen for `popstate` (when user clicks back/forward)
    window.addEventListener("popstate", loadTasks);

    return () => window.removeEventListener("popstate", loadTasks);
  }, []);

  const handleAddTask = ({ text, description }) => {
    const newTask = {
      id: Date.now(),
      text,
      description,
      status: "active",
    };
    setTasks((prev) => [...prev, newTask]);
  };

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
      className="min-h-screen flex flex-col bg-cover bg-center"
    >
      <Header />

      <div className="flex-grow container mx-auto p-4 max-w-2xl">
        <TaskInput onAdd={handleAddTask} />
        <TaskFilters onChange={setFilter} />

        {filteredTasks.length === 0 ? (
          <p className="text-lg font-bold text-center text-gray-200 mt-10">
            No tasks yet. Add your first task 👇
          </p>
        ) : (
          <ul className="space-y-3">
            {filteredTasks.map((task) => (
              <li
                key={task.id}
                onClick={() => router.push(`/tasks/${task.id}`)}
                className="flex cursor-pointer justify-between items-center bg-gray-400 p-3 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={task.status === "completed"}
                    onChange={() => toggleTask(task.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span
                    className={`text-lg ${
                      task.status === "completed"
                        ? "line-through text-gray-500"
                        : ""
                    }`}
                  >
                    {task.text}
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(task.id);
                  }}
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Footer />
    </main>
  );
}
