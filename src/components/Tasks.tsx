import React, { useContext, useEffect } from "react";
import { TasksContext } from "../contexts/TasksContext";
import { Task } from "../contexts/TasksContext";
const Tasks = () => {
  const { tasks, addTask, deleteTask, toggleTaskStatus } =
    useContext(TasksContext);
  const handleToggle = (index) => {
    toggleTaskStatus(index);
  };
  const handleDelete = (index) => {
    deleteTask(index);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-4 text-gray-800">
        To-do List
      </h1>

      <ul className="space-y-4">
        {tasks.map((task: Task, idx: number) => {
          return (
            <li className="flex flex-col gap-2 p-4 border border-gray-300 rounded-lg shadow-sm">
              <span className="text-lg font-medium text-gray-700">
                {task.text}
              </span>
              <p className="text-sm text-gray-500">Status: {task.status}</p>

              <div className="flex gap-2">
                <button
                  onClick={() => handleToggle(idx)}
                  className={`px-3 py-1 text-white rounded-md transition ${
                    task.status === "pending"
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  {task.status === "pending"
                    ? "Mark as Done"
                    : "Mark as Pending"}
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  onClick={() => handleDelete(idx)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tasks;
