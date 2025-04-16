import { useState } from 'react'
import Header from './Components/Header Components/Header'
import './App.css'
import Body from './Components/Body Components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Body/>
    </>
  )
}

export default App
