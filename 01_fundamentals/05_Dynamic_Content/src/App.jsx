import React from 'react'
import Greeting from './components/Greeting';
import ProductInfo from './components/ProductInfo';

const App = () => {
  const myName = "Saksham";
  const multiply = (a, b) => a * b;
  const specialClass = "simple-class";
  return (
    <section>
      <p>2+2={2 + 2}</p>
      <h1>{myName}</h1>
      <p>My Friends List:{["John", "Jane", "Doe"]}</p>
      <p>2*2={multiply(2, 2)}</p>
      <p className={specialClass}>This is special class</p>
      <Greeting />
      <ProductInfo />
    </section >
  )
}

export default App