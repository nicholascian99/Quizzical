import { useState} from 'react'
import { nanoid } from 'nanoid'
import AnswerTile from './AnswerTile'

export default function Question({prompt, questionNumber, answers}){
    const [answersArray, setAnswersArray] = useState(
        [answers].map((currentAnswer, index) => (
        {

            questionNumber:prompt.question,
            id:nanoid(),
            isCorrect:(prompt.correct_answer === currentAnswer && true),
        }
    )))
// console.log(answersArray)

console.log(questionNumber)



    function handleAnswerChange(id, value){
        setAnswersArray(prevAnswersArray => {
            return prevAnswersArray.map((answer) => {
                return answer.id === id ? {
                    ...answer,
                    currentAnswer: value,
                    selectedAnswer: value
                    // selectedAnswer:!answer.selectedAnswer
                } : answer
            })
        })
} 


    const shuffledAnswersArray = array => {
        for(let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        shuffledAnswersArray(answersArray)
    }


// maps through my array of all answers and returns an answer element for 
// each one
    const answerElements = answersArray.map(answer => {
        return (
                <AnswerTile
                    key={answer.id}
                    id={answer.id}
                    answer={decodeHtmlEntities(answer.currentAnswer)}
                    handleAnswerChange={handleAnswerChange}
                    questionIndex={questionNumber}
                    // answersArray={ans}
                    // promptQuestion={prompt.question}
                     />
        )
    })

    




//function return. 
    return(
        <div className='questionContainer'>
            <h2>{decodeHtmlEntities(prompt.question)}</h2>
            <div className="answersContainer">
                {answerElements}
            </div>
            <hr></hr>
        </div>
    )
}




