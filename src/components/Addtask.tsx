import React, { useContext, useEffect, useRef, useState } from "react";
import { TasksContext } from "../contexts/TasksContext";

const Addtask = () => {
  const { tasks, addTask, deleteTask, toggleTaskStatus } =
    useContext(TasksContext);

  const inputRef = useRef(null);

  const handleAddTask = () => {
    if (inputRef?.current?.value?.trim()) {
      addTask(inputRef.current.value);
    }
    inputRef.current.value = "";
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex gap-2 w-full max-w-md">
        <input
          ref={inputRef}
          className="flex-1 bg-white px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter a task..."
        />
        <button
          onClick={() => handleAddTask()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Addtask;
