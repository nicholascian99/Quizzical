import React from 'react'

export default function StartingScreen(){
  return(
    <div className='titleScreen'>
      <div className='backgroundEl-blue'></div>
      <div className='backgroundEl-yellow'> </div>
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button className='startBtn'>Start Quiz</button>
    </div>
  )
}