import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComboBox from './components/Authocomplete_DropDown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <ComboBox/>
      <p className="read-the-docs">
        Select a Language you want to work with.
      </p>

      <button type="button">Next</button>
    </>
  )
}

export default App
