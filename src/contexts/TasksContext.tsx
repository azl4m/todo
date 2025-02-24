import React, { createContext, ReactNode, useReducer, useState } from "react";
import Tasks from "../components/Tasks";

export interface Task {
  text: string;
  status: "pending" | "done";
}

export interface TasksContextType {
  tasks: Task[];
  addTask: (taskText: string) => void;
  deleteTask: (index: number) => void;
  toggleTaskStatus: (index: number) => void;
}
enum TaskActionTypes {
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  TOGGLE_TASK_STATUS = "TOGGLE_TASK_STATUS",
}

// Action Types
type TaskAction =
  | { type: TaskActionTypes.ADD_TASK; payload: string }
  | { type: TaskActionTypes.DELETE_TASK; payload: number }
  | { type: TaskActionTypes.TOGGLE_TASK_STATUS; payload: number };

const taskReducer = (state:Task[],action:TaskAction):Task[]=>{
    switch(action.type){
        case TaskActionTypes.ADD_TASK:
            return [...state,{text:action.payload,status:"pending"}];
        case TaskActionTypes.DELETE_TASK:
            return state.filter((_:Task,idx:number)=>idx!==action.payload);
        case TaskActionTypes.TOGGLE_TASK_STATUS:
            return state.map((task:Task,idx:number)=>
                idx===action.payload?{...task,status:task.status==="done"?"pending":"done"}:task  
        )
        default:
            return state
    }
}
const TasksContext = createContext<TasksContextType | undefined>(undefined);
const TasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const[tasks,dispatch] = useReducer(taskReducer,[])
  const addTask = (tasksText: string) => {
    dispatch({type:TaskActionTypes.ADD_TASK,payload:tasksText})
  };
  const deleteTask = (index: number) => {
    dispatch({type:TaskActionTypes.DELETE_TASK,payload:index})
  };
  const toggleTaskStatus = (index: number) => {
    dispatch({type:TaskActionTypes.TOGGLE_TASK_STATUS,payload:index})
  };
  return (
    <TasksContext.Provider
      value={{ tasks, addTask, deleteTask, toggleTaskStatus }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
