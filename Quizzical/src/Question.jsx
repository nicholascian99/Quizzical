import { useState} from 'react'
import { nanoid } from 'nanoid'
import AnswerTile from './AnswerTile'

export default function Question({prompt, questionIndex}){
    const [answersArray, setAnswersArray] = useState([
        ...prompt.incorrect_answers,
        prompt.correct_answer].map(currentAnswer => (
        {
            currentAnswer,
            id:nanoid(),
            correct:""
        }
    )))
// console.log(answersArray)

    



//     function handleAnswerChange(id, value){
//         setAnswersArray(prevAnswersArray => {
//             return prevAnswersArray.map((answer) => {
//                 return answer.id === id ? {...answer, [`Question ${questionIndex}`]: value} : answer
//             })
//         })
// } 


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
                    // handleAnswerChange={handleAnswerChange}
                    questionIndex={questionIndex}
                    // promptQuestion={prompt.question}
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
        <div className='questionContainer'>
            <h2>{decodeHtmlEntities(prompt.question)}</h2>
            <div className="answersContainer">
                {answerElements}
            </div>
            <hr></hr>
        </div>
    )
}




