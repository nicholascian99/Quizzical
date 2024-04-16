import React from 'react'
import Question from './Question'

export default function Quiz(){
    return(
        <div className='quizContainer'>
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <button>Check Answers</button>
        </div>
    )
}