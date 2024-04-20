import React from 'react'

export default function StartingScreen(props){
  return(
    <div className='titleScreen'>
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button
        onClick={props.startQuiz} 
        className='startBtn'>Start Quiz</button>
    </div>
  )
}