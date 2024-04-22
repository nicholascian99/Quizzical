import React from 'react'

export default function StartingScreen({startQuiz}){
  return(
    <div className='titleScreen'>
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button
        onClick={startQuiz} 
        className='startBtn'>Start Quiz</button>
    </div>
  )
}