"use client";
import { useRouter } from "next/navigation";

export default function TaskView({ task, startEdit, deleteTask }) {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => router.push("/tasks")}
          className="px-4 py-2 bg-gray-500 text-white rounded cursor-pointer hover:bg-gray-600"
        >
          ← Back
        </button>

       
      </div>

      <label className="block text-gray-300 font-medium mb-2">Task Title</label>
      <h1 className="text-2xl font-bold mb-5 min-h-[56px] flex items-center">
        {task.text}
      </h1>

      <label className="block text-gray-300 font-medium mb-2">
        Task Description
      </label>
      <p className="text-gray-200 mb-5 min-h-[120px]">
        {task.description || "No description provided."}
      </p>

      {}
      <div className="flex gap-3">
        <button
          onClick={startEdit}
          className="px-4 py-2 bg-gray-300 rounded-lg text-black-200 cursor-pointer hover:bg-gray-400"
        >
          Edit
        </button>
        <button
          onClick={deleteTask}
          className="px-4 py-2 bg-red-500 rounded-lg text-white cursor-pointer hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </>
  );
}
