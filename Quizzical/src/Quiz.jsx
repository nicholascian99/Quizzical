import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Prompt from './Prompt'


export default function Quiz(){
    const [questionsArray, setQuestionsArray] = useState([])
    const [userAnswers, setUserAnswers] = useState()

// fetches the quiz questions and sets my questionArray state with it
    useEffect(() => {
        async function fetchData(){
            const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            const data = await res.json()
            setQuestionsArray(data.results.map((result) => {
                return {
                            question:result.question,
                            answers:shuffledAnswersArray([result.correct_answer, ...result.incorrect_answers]),
                            correctAnswer:result.correct_answer
                        }
            }))
        }fetchData()
    }, [])

    //utility function that mixes up the order of the answers in each prompt 
    const shuffledAnswersArray = array => {
        for(let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return array
    }

    const promptElements = questionsArray.map((currentQuestion, index) => {
        const questionId = nanoid()
        return <Prompt
                key={questionId}
                questionid={questionId}
                question={currentQuestion.question}
                answerOptions={currentQuestion.answers}
                questionNumber={[`Question ${index+1}`]}
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}
                correctAnswer={currentQuestion.correctAnswer}
            />
    })


    function handleSubmit(){
        // let key
        // for(key in userAnswers){
            
        // }
        // console.log(userAnswers[0][questionNumber])


        userAnswers.forEach((answer, index )=> {
            console.log(answer[`Question ${index+1}`])
        })

        // userAnswers.forEach(answer => console.log(answer))
    }

    return(
        <div className='quizForm'>
            {promptElements}
            <footer>
                {/* <p>You scored {score}/5 correct answers</p> */}
                <button onClick={handleSubmit}>Check Answers</button>
            </footer>
        </div>
    )
}


