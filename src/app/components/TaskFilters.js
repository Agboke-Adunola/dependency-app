"use client";
import { useState } from "react";

export default function TaskFilters({ onChange }) {
  const [active, setActive] = useState("all");

  const handleClick = (f) => {
    setActive(f);
    onChange(f);
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex space-x-2">
        <button
          onClick={() => handleClick("all")}
          className={`px-3 py-1 rounded-lg ${
            active === "all"
              ? "bg-fuchsia-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleClick("active")}
          className={`px-3 py-1 rounded-lg ${
            active === "active"
              ? "bg-fuchsia-600 text-white"
              : "bg-gray-400 hover:bg-gray-500"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => handleClick("completed")}
          className={`px-3 py-1 rounded-lg ${
            active === "completed"
              ? "bg-fuchsia-600 text-white"
              : "bg-gray-400 hover:bg-gray-500"
          }`}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
