import { useState, useEffect } from 'react'
import './index.css'
import StartingScreen from "./StartingScreen"
import Quiz from './Quiz'

function App() {
  const [quizStarted, setQuizStarted] = useState(false)

  function startQuiz(){
    setQuizStarted(true)
  }

  

  return (
    <>
      <div className='backgroundEl-blue-small'></div>
      <div className='backgroundEl-yellow-small'> </div>
      { quizStarted ? <Quiz/> :
                      <StartingScreen
                        startQuiz={startQuiz} /> }
    </>
  )
}

export default App
