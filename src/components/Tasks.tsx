import React, { useContext } from "react";
import { Task, TasksContext } from "../contexts/TasksContext";
import { motion } from "framer-motion";

const Tasks = () => {
  const { tasks, deleteTask, toggleTaskStatus } = useContext(TasksContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
      <ul className="space-y-4">
        {tasks.map((task:Task, index:number) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className={`flex items-center justify-between p-4 border rounded-lg shadow-md ${
              task.status === "done" ? "bg-green-100 border-green-500" : "bg-white"
            }`}
          >
            <span className={`text-lg ${task.status === "done" ? "line-through text-gray-500" : ""}`}>
              {task.text}
            </span>

            <div className="flex gap-2">
              <motion.button
                onClick={() => toggleTaskStatus(index)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className={`px-4 py-2 rounded-lg text-white transition ${
                  task.status === "done" ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {task.status === "done" ? "Mark as Pending" : "Mark as Done"}
              </motion.button>

              <motion.button
                onClick={() => deleteTask(index)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
