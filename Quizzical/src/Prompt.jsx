import { useState, useEffect} from 'react'
import { nanoid } from 'nanoid'
// import Question from './Question'
import AnswerTile from './AnswerTile'

export default function Prompt({questionNumber, promptIndex, question, answerOptions, userAnswers, setUserAnswers, correctAnswer, handleAnswerChange}){

    //Decodes the offputting html syntax that is noramlly returned to the questions
    function decodeHtmlEntities(html){
        const doc = new DOMParser().parseFromString(html, 'text/html')
        return doc.documentElement.textContent
    }
    //handles the answer click and changes the user answers based on the click
    // console.log(userAnswers)
    function handleAnswerChange(event){
        const {value, name} = event.target
        setUserAnswers(prevUserAnswers => {
            return prevUserAnswers.map((userAnswer, index) => {
                 if(name === `Question${index+1}answer`)  {
                        return {
                                    [questionNumber]:value,
                                    isCorrect:""
                                }
                }else{
                        return userAnswer
                    }
            })
        })
    }

    const answerTileElements = answerOptions.map(answer => {
        const questionId = nanoid()

        return (
                <AnswerTile
                    key={questionId}
                    id={questionId}
                    answer={decodeHtmlEntities(answer)}
                    checkedAnswer={userAnswers[promptIndex][questionNumber]}
                    handleAnswerChange={handleAnswerChange}
                    questionNumber={questionNumber}
                    userAnswers={userAnswers}
                    isCorrect={userAnswers[promptIndex].isCorrect}
                    />
        )
    })


    return (
        <>
            <div className='promptContainer'>
                <h2>{decodeHtmlEntities(question)}</h2>
                <div className="answersContainer">
                    {answerTileElements}
                </div>
                <hr></hr>
            </div>
        </>
    )
}

