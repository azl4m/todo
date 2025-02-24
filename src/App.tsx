import React from 'react'
import Addtask from './components/Addtask'
import Tasks from './components/Tasks'
import './App.css'
import { TasksProvider } from './contexts/TasksContext'
const App:React.FC = () => {
  return (
    <TasksProvider>
      <div className='bg-black' id='root'>
      <Addtask/>
      <Tasks/>
    </div>
    </TasksProvider>
    
  )
}

export default App
