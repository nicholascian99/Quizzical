import { useState } from 'react'
import './index.css'
import StartingScreen from "./StartingScreen"
import Quiz from './Quiz'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='backgroundEl-blue'></div>
      <div className='backgroundEl-yellow'> </div>
      {/* <StartingScreen /> */}
      <Quiz />
    </>
  )
}

export default App
