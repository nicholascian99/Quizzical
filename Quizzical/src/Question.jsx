import { useState} from 'react'
import { nanoid } from 'nanoid'
import Answer from './Answer'

export default function Question({prompt}){
    const [answers, setAnswers] = useState([...prompt.incorrect_answers,
        prompt.correct_answer])


    // console.log(answer)

// put both the incorrect and correct answers into 1 array so that it can be
// shuffled
    // const answersArray = [...prompt.incorrect_answers,
    //                         prompt.correct_answer]

    const shuffledAnswers = array => {
        for(let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
    shuffledAnswers(answers)

// maps through my array of all answers and returns an answer element for 
// each one
    const answerElements = answers.map(answer => {
        const answerId = nanoid()
        function handleAnswerClick(id){
             setAnswers(prevAnswer =>{
                if(id === answerId){
                    console.log(id)
                }
             })
        }
        return (
                <Answer
                    key={answerId}
                    id={answerId}
                    answer={decodeHtmlEntities(answer)}
                    clicked={answer.clicked}
                    handleAnswerClick={handleAnswerClick}
                     />
        )
    })


//Decodes the offputting html syntax that is noramlly returned to the questions
    function decodeHtmlEntities(html){
        const doc = new DOMParser().parseFromString(html, 'text/html')
        return doc.documentElement.textContent
    }

//function return. 
    return(
        <form className='questionForm'>
            <h2>{decodeHtmlEntities(prompt.question)}</h2>
            <div className="answersContainer">
                {answerElements}
            </div>
            <hr></hr>
        </form>
    )
}