import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='display-3'>Calculadora Dólar</h1>
      <img src="/public/dollar.png" width='50' />
    </>
  )
}

export default App
