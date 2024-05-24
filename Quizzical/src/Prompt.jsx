import { useState, useEffect} from 'react'
import { nanoid } from 'nanoid'
// import Question from './Question'
import AnswerTile from './AnswerTile'


export default function Prompt({questionNumber, question, answerOptions, userAnswers, setUserAnswers, correctAnswer, handleAnswerChange}){

    //Decodes the offputting html syntax that is noramlly returned to the questions
    function decodeHtmlEntities(html){
        const doc = new DOMParser().parseFromString(html, 'text/html')
        return doc.documentElement.textContent
    }
    //handles the answer click and changes the user answers based on the click
    function handleAnswerChange(event){
        const {value} = event.target
        // console.log(event.target)
        // setUserAnswers(prevUserAnswers => (
        //     [
        //         ...prevUserAnswers,
        //         {
        //             [questionNumber]:value,
        //             isCorrect:correctAnswer === value,
        //         }
        //     ]
        // ))
        console.log(event.target)

    }
    function handleSubmit(){
        /*
        will map through userAnswers and will give a "isCorrect" property to each one, assigning it correctly and in doing so
        will change the background color of the correct answer and the clicked answer. This will also make it easier to keep track
        of how many correct answers there are in total
        */
    //    console.log(userAnswers.filter(answer => answer.checked === true))
    console.log(userAnswers[0][questionNumber])
    }


    const answerTileElements = answerOptions.map(( answer, index) => {
        const questionId = nanoid()
        // const currentAnswer = userAnswers[0][questionNumber]
        return (
                <AnswerTile
                    key={questionId}
                    id={questionId}
                    answer={decodeHtmlEntities(answer)}
                    handleAnswerChange={handleAnswerChange}
                    questionNumber={questionNumber}
                    // checkedAnswer={userAnswers[0][questionNumber]}
                    userAnswers={userAnswers}
                    // isCorrect={userAnswers[index + 1].isCorrect}
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

