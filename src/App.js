import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import TextControls from './components/TextControls'
import Result from './components/Result'
import NavBar from './components/NavBar'

function App() {
  const [textData, setTextData] = useState()
  useEffect(() => {
    if (textData === undefined) {
      setTextData('')
    }
  }, [textData])

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<TextControls setTextData={setTextData} />} />
        <Route path='/result' element={<Result textData={textData} />} />
      </Routes>
    </div>
  )
}

export default App
