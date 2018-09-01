import React from 'react'
import ReactDOM from 'react-dom'

// const element = <h1>HELLO from REACT</h1>

const element = () => {
  const a = 5
  return <h1>Hola Mundo</h1>
}


ReactDOM.render(
  element(),
  document.getElementById('root')
)

console.log('Hola Mundo');
console.log('hot reload1');
console.log('hot reload2');
