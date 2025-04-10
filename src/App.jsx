import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormComponent from './FormComponent'
import ContactList from './DisplayRecord'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FormComponent />
     <ContactList />
    </>
  )
}

export default App
