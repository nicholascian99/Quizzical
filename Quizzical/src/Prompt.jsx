import { useState} from 'react'
import { nanoid } from 'nanoid'
// import Question from './Question'
import AnswerTile from './AnswerTile'


export default function Prompt({questionNumber, question, answerOptions, userAnswers, setUserAnswers}){
    // const [userAnswers, setUserAnswers] = useState({})

    //Decodes the offputting html syntax that is noramlly returned to the questions
    function decodeHtmlEntities(html){
        const doc = new DOMParser().parseFromString(html, 'text/html')
        return doc.documentElement.textContent
    }

    


    
    function handleAnswerChange(event){
        const {id, name, value, checked} = event.target

        setUserAnswers(prevUserAnswers => (
            {
                ...prevUserAnswers,
                [questionNumber]:value,
            }
        ))
    }

    const answerTileElements = answerOptions.map((answer, index )=> {
        const questionId = nanoid()
        return (
                <AnswerTile
                    key={questionId}
                    id={questionId}
                    answer={decodeHtmlEntities(answer)}
                    handleAnswerChange={handleAnswerChange}
                    questionNumber={questionNumber}
                    checkedAnswer={userAnswers[questionNumber]}
                    userAnswers={userAnswers}
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

