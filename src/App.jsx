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
          <Route path='/products'>
            <Route index Component={Products} />
            <Route path=":id" Component={DetailProduct} />
          </Route>
          <Route path='/about' Component={About} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
