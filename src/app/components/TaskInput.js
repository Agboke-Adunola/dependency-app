"use client";
import { useState } from "react";

export default function TaskInput({ onAdd }) {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const handleAdd = () => {
    if (!value.trim()) return;
    onAdd({ text: value.trim(), description });
    setValue("");
    setDescription("")
  };

  return (
    <div className="flex flex-col gap-6  mb-6">
      <div className="flex flex-nowrap gap-4">

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Add a new task..."
        className="flex-grow p-3 rounded-lg border-none  text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 bg-black/40"
      />
      <button
        onClick={handleAdd}
        disabled={!value.trim()}
        className="bg-fuchsia-600 text-white px-5 py-3 cursor-pointer disabled:cursor-not-allowed rounded-xl hover:bg-fuchsia-700 transition"
      >
        Add
      </button>
      </div>
      <textarea
        type="text"
        value={description}
        rows={4}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Add a  Description..."
        className="flex-grow p-3 rounded-lg border-none outline-none text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 bg-black/40"
      />
      
    </div>
  );
}
