"use client";
import Header from "@/app/components/Header";
import { useParams, useRouter } from "next/navigation";
import { useState, useLayoutEffect } from "react";
import TaskEdit from "../components/TaskEdit";
import TaskView from "../components/TaskView";
import Footer from "@/app/components/Footer";

export default function TaskDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState({ text: "", description: "" });

  // Load tasks from localStorage BEFORE paint
  useLayoutEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      const parsed = JSON.parse(stored).map((t) => ({
        ...t,
        status: t.status || "active",
      }));
      setTasks(parsed);

      const current = parsed.find((t) => String(t.id) === String(id));
      setTask(current || null);

      if (current) {
        setEditValue({
          text: current.text,
          description: current.description,
        });
      }
    }
  }, [id]);

  // Save tasks whenever they change
  useLayoutEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // Delete task
  const deleteTask = () => {
    const updated = tasks.filter((t) => String(t.id) !== String(id));
    setTasks(updated);
    router.push("/tasks");
  };

  // Save edits
  const saveEdit = () => {
    if (!editValue.text.trim()) return;

    const updated = tasks.map((t) =>
      String(t.id) === String(id)
        ? { ...t, text: editValue.text, description: editValue.description }
        : t
    );

    setTasks(updated);
    setTask({ ...task, ...editValue });
    setEditing(false);
  };

  // Toggle task complete/active
  const toggleTask = (id) => {
    const updated = tasks.map((t) =>
      String(t.id) === String(id)
        ? { ...t, status: t.status === "completed" ? "active" : "completed" }
        : t
    );

    setTasks(updated);
    const current = updated.find((t) => String(t.id) === String(id));
    setTask(current);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  // Not found case
  if (!task) {
    return (
      <main className="p-6">
        <Header />
        <p className="text-gray-600">Task not found.</p>
        <Footer />
      </main>
    );
  }

  // Normal render
  return (
    <main
      style={{ backgroundImage: "url(/images/beauty.jpg)" }}
      className="h-screen w-full bg-cover bg-center min-h-screen flex flex-col"
    >
      <Header />
      <div className="flex-grow container mx-auto p-6 max-w-xl my-4 bg-black/30 backdrop-blur-md shadow rounded-lg">
        {editing ? (
          <TaskEdit
            editValue={editValue}
            setEditValue={setEditValue}
            saveEdit={saveEdit}
            cancelEdit={() => setEditing(false)}
          />
        ) : (
          <TaskView
            task={task}
            startEdit={() => setEditing(true)}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        )}
      </div>
      <Footer />
    </main>
  );
}
