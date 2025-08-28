export default function TaskEdit({ editValue, setEditValue, saveEdit, cancelEdit }) {
  return (
    <>
      {/* Title */}
      <label className="block text-white font-medium mb-2">Task Title</label>
      <input
        type="text"
        value={editValue.text}
        onChange={(e) =>
          setEditValue((prev) => ({ ...prev, text: e.target.value }))
        }
        className="flex-grow p-3 rounded-lg mb-5 w-full border-none text-white 
                   focus:outline-none focus:ring-2 focus:ring-fuchsia-500 bg-black/40 
                   min-h-[56px]"
        placeholder="Task Title"
      />

      {/* Description */}
      <label className="block text-white font-medium mb-2">
        Task Description
      </label>
      <textarea
        value={editValue.description}
        onChange={(e) =>
          setEditValue((prev) => ({
            ...prev,
            description: e.target.value,
          }))
        }
        className="flex-grow w-full p-3 mb-5 rounded-lg border-none outline-none text-white 
                   focus:outline-none focus:ring-2 focus:ring-fuchsia-500 bg-black/40 
                   min-h-[120px]"
        placeholder="Task Description"
        rows={4}
      />

      {/* Actions */}
      <div className="flex space-x-3">
        <button
          onClick={saveEdit}
          className="px-4 py-2 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-700"
        >
          Save
        </button>
        <button
          onClick={cancelEdit}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </>
  );
}
