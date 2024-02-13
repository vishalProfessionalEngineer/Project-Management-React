import React, { useRef, useState } from "react";

export const NewTask = ({ onAdd }) => {
  const [enteredTask, SetEnteredTask] = useState();
  const modal = useRef();

  const handleChange = (event) => {
    SetEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    SetEnteredTask("");
  };

  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-slate-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};
