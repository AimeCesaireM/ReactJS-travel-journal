import React from 'react';
import Card from './components/Card.js'
import Navbar from './components/Navbar.js'
import array from './data.js';


export default function App() {
const cards = array.map ( (item) => {
    return (
        <Card
        key = {item.id}
        {... item}
         />
    )
})
  return (
      <div>
        <Navbar />
        {cards}
      </div>
  )
}