import './styles/global.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { TasksContainer } from './components/TasksContainer'
import { Task } from './components/Task'

export function App() {
    return (
    <div>
     <Header />
     <Form />
     <div className='w-192 h-14 mx-auto'>
      <TasksContainer />
     </div>
     </div>
  )
}
