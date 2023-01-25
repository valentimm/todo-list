import './styles/global.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header'
import { Form } from './components/Form'

export function App() {
    return (
    <div>
     <Header />
     <Form />
    </div>
  )
}
