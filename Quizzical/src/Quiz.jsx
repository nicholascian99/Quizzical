import { useState, useEffect } from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'


export default function Quiz(){
    const [questionData, setQuestionData] = useState([])

    useEffect(() => {
        async function fetchData(){
          const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
          const data = await res.json()
          setQuestionData(data.results)
            }fetchData()
        }, [])

            
            const questionElements = questionData.map(currentQuestion => {
            const questionId = nanoid()
            return <Question
                        key={questionId}
                        id={questionId}
                        question={currentQuestion}/>
        })
        

    return(
        <div className='quizContainer'>
            {questionElements}
            <footer>
                <p>You score 3/5 correct answers</p>
                <button>Check Answers</button>
            </footer>
        </div>
    )
}

