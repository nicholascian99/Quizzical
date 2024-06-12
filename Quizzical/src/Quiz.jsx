import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Prompt from './Prompt'



export default function Quiz(){
    const [questionsArray, setQuestionsArray] = useState([])
    const [userAnswers, setUserAnswers] = useState([
        {
            Question1answer:"",
            isCorrect:"",
        },
        {
            Question2answer:"",
            isCorrect:"",
        },
        {
            Question3answer:"",
            isCorrect:"",
        },
        {
            Question4answer:"",
            isCorrect:"",
        },
        {
            Question5answer:"",
            isCorrect:"",
        }
    ])
    console.log(userAnswers)



    function decodeHtmlEntities(html){
        const doc = new DOMParser().parseFromString(html, 'text/html')
        return doc.documentElement.textContent
    }

    
//  utility function that mixes up the order of the answers in each prompt
    const shuffledAnswersArray = array => {
        for(let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return array
    }

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

    

    const promptElements = questionsArray.map((currentQuestion, index) => {
        const questionId = nanoid()

        console.log(currentQuestion.correctAnswer)

        return <Prompt
                key={questionId}
                questionid={questionId}
                question={currentQuestion.question}
                answerOptions={currentQuestion.answers}
                questionNumber={`Question${index+1}answer`}
                promptIndex={index}
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}
                correctAnswer={currentQuestion.correctAnswer}

            />
    })

    function handleSubmit(){

        const correctAnswers = questionsArray.map(question => {
            return decodeHtmlEntities(question.correctAnswer)
        })
        
        
        setUserAnswers(prevUserAnswers => {
            const stringedAnswers = userAnswers[0]
            return prevUserAnswers.map((prevUserAnswer, index) => (
                // console.log(prevUserAnswer),
                // console.log(correctAnswers),
                {
                    ...prevUserAnswer,
                    isCorrect:prevUserAnswer[`Question${index+1}answer`] ===  correctAnswers[index]
                }
            ))
        })

        //Tally the scores and present the score//
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


