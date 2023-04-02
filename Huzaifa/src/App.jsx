import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>Huzaifa Usman | React Developer | DevOps</h1>
      </div>
      <div className="card">
        <p>Count is {count} </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount((count) => count = 0)}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
