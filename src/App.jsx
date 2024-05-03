import React from 'react'
import Bookstore from './Bookstore'

function App() {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Bestseller Books</h1>
      <Bookstore className="bookstore"/>
    </div>
  )
}

export default App;