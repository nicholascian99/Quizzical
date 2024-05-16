import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Prompt from './Prompt'


export default function Quiz(){
    const [questionsArray, setQuestionsArray] = useState([])
    const [userAnswers, setUserAnswers] = useState({})
    
// fetches the quiz questions and sets my questionArray state with it
    useEffect(() => {
        async function fetchData(){
            const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            const data = await res.json()
            setQuestionsArray(data.results.map((result) => {

                
                
                return {
                            question:result.question,
                            answers:[result.correct_answer, ...result.incorrect_answers],
                            correctAnswer:result.correct_answer
                        }
            }))
        }fetchData()
    }, [])


    const promptElements = questionsArray.map((currentQuestion, index) => {
    const questionId = nanoid()
    return <Prompt
                key={questionId}
                questionid={questionId}
                question={currentQuestion.question}
                answerOptions={currentQuestion.answers}
                questionNumber={
                    [`Question ${index+1}`]
                }
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}
            />
    })

    function checkAnswers(){
        console.log(userAnswers)
        console.log(questionsArray)
    }

    return(
        <div className='quizForm'>

            {promptElements}
            
            <footer>
                <p>You scored 3/5 correct answers</p>
                <button onClick={checkAnswers}>Check Answers</button>
            </footer>
        </div>
    )
}
