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
            <footer>
                <p>You score 3/5 correct answers</p>
                <button>Check Answers</button>
            </footer>
        </div>
    )
}