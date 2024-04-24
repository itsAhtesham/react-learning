import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const increaseCounter = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    // in above whole process just one increment is done. work done in batches, so at end sees only one update has to be done.
    
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // if want to inc 4 times callback method is used.
  }
  const decreaseCounter = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increaseCounter}> Increase Counter {counter}</button>
      <br />
      <br />
      <button onClick={decreaseCounter}> Decrease Counter {counter}</button>

    </>
  )
}

export default App
