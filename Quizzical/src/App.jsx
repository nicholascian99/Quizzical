import { useState } from 'react'
import './index.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='titleScreen'>
      <div className='backgroundEl-blue'></div>
      <div className='backgroundEl-yellow'> </div>
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button className='startBtn'>Start Quiz</button>
    </div>
  )
}

export default App
