"use client";
import { useState } from "react";

export default function TaskInput({ onAdd }) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;
    onAdd(value.trim());
    setValue("");
  };

  return (
    <div className="flex items-center mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Add a new task..."
        className="flex-grow p-3 rounded-l-lg border-none mx-5 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 bg-black/40"
      />
      <button
        onClick={handleAdd}
        className="bg-fuchsia-600 text-white px-5 py-3 rounded-xl hover:bg-fuchsia-700 transition"
      >
        Add
      </button>
    </div>
  );
}
