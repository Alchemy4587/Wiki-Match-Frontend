import { useState } from 'react'
import './App.css'
import Paging from './components/paging'
import ComboBox from './components/Authocomplete_DropDown'

function App() {


  return (
    <>
    <h3>pagination</h3>
     <Paging/>
     
      <ComboBox/>
     
      <p className="read-the-docs">
        Select a Language you want to work with.
      </p>

      <button type="button">Next</button>
    </>
  )
}

export default App
