import { useState } from 'react'
import './App.css'
import Paging from './components/paging'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3>pagination</h3>
     <Paging/>
    </>
  )
}

export default App
