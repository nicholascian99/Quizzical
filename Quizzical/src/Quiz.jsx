import { useState, useEffect } from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'


export default function Quiz(){
    const [questionsArray, setQuestionsArray] = useState([])
    // const [quizFormState, setQuizFormState] = useState({})

// fetches the quiz questions and sets my questionArray state with it
    useEffect(() => {
        async function fetchData(){
          const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
          const data = await res.json()
          setQuestionsArray(data.results)
            }fetchData()
    console.log(questionsArray)

        }, [])

    // useEffect(() => {
    //     questionsArray.forEach((question, index) => {
    //         setQuizFormState(prevQuizFormState => {
    //             return {
    //                 ...prevQuizFormState,
    //                 [`Question${index}`]:""
    //             }
    //         })
    //     })
    // },[questionsArray])
    
    // console.log(quizFormState.Question1)
    // console.log(questionsArray)

           // returns a question component for each question object and 
           //gives it a random key since none are provided
            const questionElements = questionsArray.map((currentQuestion, index) => {
                
            const questionId = nanoid()
            return <Question
                        key={questionId}
                        id={questionId}
                        // answerId={answerId}
                        prompt={currentQuestion}
                        // quizForm={quizFormState}
                        questionIndex={index}
                        />
        })
        
        //returns quiz template with questions inserted in
    return(
        <div className='quizForm'>
            {questionElements}
            <footer>
                <p>You scored 3/5 correct answers</p>
                <button>Check Answers</button>
            </footer>
        </div>
    )
}