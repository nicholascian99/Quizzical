import { useState, useEffect } from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'


export default function Quiz(){
    const [questionsArray, setQuestionsArray] = useState([])

    // console.log(questionsArray)
// fetches the quiz questions and sets my questionArray state with it
    useEffect(() => {
        async function fetchData(){
          const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
          const data = await res.json()
          setQuestionsArray(data.results)
            }fetchData()
        }, [])

           // returns a question component for each question object and 
           //gives it a random key since none are provided
            const questionElements = questionsArray.map(currentQuestion => {
            const questionId = nanoid()
            return <Question
                        key={questionId}
                        prompt={currentQuestion}/>
        })
        
        //returns quiz template with questions inserted in
    return(
        <div className='quizContainer'>
            {questionElements}
            <footer>
                <p>You scored 3/5 correct answers</p>
                <button>Check Answers</button>
            </footer>
        </div>
    )
}