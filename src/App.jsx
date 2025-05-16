import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from '../pages/Products'
import Homepage from '../pages/Homepage'
import About from '../pages/About'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/products' Component={Products} />
          <Route path='/about' Component={About} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
