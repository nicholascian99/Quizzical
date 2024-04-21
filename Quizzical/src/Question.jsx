import { useState} from 'react'
import { nanoid } from 'nanoid'
import Answer from './Answer'

export default function Question(props){
    const [answers, setAnswers] = useState([])
// console.log(props.question)
    
    const answersArray = [...props.question.incorrect_answers,
                            props.question.correct_answer]
    const shuffledAnswersArray = array => {
        for(let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
    shuffledAnswersArray(answersArray)


    const answerElements = answersArray.map(answer => {
        const answerId = nanoid()
        return (
                <Answer
                    key={answerId}
                    id={answerId}
                    answer={answer}
                    // clicked={handleAnswerClick}
                     />
        )
    })

    function decodeHtmlEntities(html){
        const doc = new DOMParser().parseFromString(html, 'text/html')
        return doc.documentElement.textContent
    }

    return(
        <form className='questionForm'>
            <h2>{decodeHtmlEntities(props.question.question)}</h2>
            <div className="answersContainer">
                {answerElements}
            </div>
            <hr></hr>
        </form>
    )
}