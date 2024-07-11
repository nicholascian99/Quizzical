import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Prompt from './Prompt'

let userScore = 0


export default function Quiz({quizStarted, setQuizStarted}){
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



//  utility function that translates the htmlentities format
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

console.log("changes have been made")

    
// Defines the elements containing the 'prompt' components
    const promptElements = questionsArray.map((currentQuestion, index) => {
        const questionId = nanoid()


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

//Utility function for mapping through the answers and calculating the score
    function tallyScores(){
        userAnswers.forEach(userAnswer => {
            if(userAnswer.isCorrect){
                userScore++
            }
        })
    }


// A function whose sole purpose is handling what happens in the on-click of the 'check answers' button
    function handleSubmit(){
        const correctAnswers = questionsArray.map(question => {
            return decodeHtmlEntities(question.correctAnswer)
        })

        const answerButtons = document.getElementsByClassName("answerInput")

        answerButtons.disabled = true


        setUserAnswers(prevUserAnswers => {
            return prevUserAnswers.map((prevUserAnswer, index) => (
                {
                    ...prevUserAnswer,
                    isCorrect:prevUserAnswer[`Question${index+1}answer`] ===  correctAnswers[index] ? true : false
                }
            ))
        })
        }

// The function for restarting the game, which is called in the on-click of the 'play again' button
    function restartGame(){
        userScore = 0
        setQuizStarted(false)
    }

// Calling the tally scores function whenever this component is rendered, which should probably only
// be called when it is time to tally the scores
    tallyScores()

// The next 6 lines is defining variables to store the child elements of the footer
    const finalScoreElement = userAnswers[0].isCorrect === '' 
        ? null 
        : <p>You scored {userScore}/5 correct answers</p>
    const checkOrAgain = userAnswers[0].isCorrect === '' 
        ? <button id="submitButton" className='checkOrAgain' onClick={handleSubmit}>Check Answers</button> 
        : <button id="againButton" className='checkOrAgain' onClick={restartGame}>Play again</button>
                                                          
//returning the html for the quiz from this component
    return(
        <div className='quizForm'>
                    {promptElements}
            <footer className="footer">
                {finalScoreElement}
                {checkOrAgain}
            </footer>
        </div>
    )
}


