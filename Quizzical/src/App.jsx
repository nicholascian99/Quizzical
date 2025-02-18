import { useState} from 'react'
import StartingScreen from "./StartingScreen"
import Quiz from './Quiz'


function App() {
  const [quizStarted, setQuizStarted] = useState(false)
  
  function startQuiz(){
    setQuizStarted(true)
  }

  return (
    <>
      <div className={quizStarted ? 'backgroundEl-blue-small': 'backgroundEl-blue-large'}></div>
      <div className={quizStarted ? 'backgroundEl-yellow-small': 'backgroundEl-yellow-large'}> </div>
      { quizStarted ? 
          <Quiz
            setQuizStarted={setQuizStarted}
            /> :
          <StartingScreen
            startQuiz={startQuiz} 
          /> 
      }
    </>
  )
}

export default App
