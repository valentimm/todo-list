import './styles/global.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { TasksContainer } from './components/TasksContainer'
import { Task } from './components/Task'

export function App() {
    return (
    <div>
     <Header />
     <Form />
     <TasksContainer />
     <div className='flex justify-center items-center w-184 h-20 m-auto'>
      <Task />
     </div>
    </div>
  )
}
