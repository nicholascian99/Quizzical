// import {useState} from 'react'
// import { nanoid } from 'nanoid'


export default function AnswerTile({id, answer, handleAnswerChange, questionNumber, checkedAnswer, userAnswers}){

    const checked = answer === checkedAnswer

    const styles = {
        backgroundColor: checked ? "lightblue": "white" 
        // correct ? "lightred" : inccorect ? "lightgreen" : "white"
    }
// console.log(userAnswers)
    // if(checkedAnswer){
    // console.log(checkedAnswer)
// }
    // console.log(isCorrect)

    return (
        <label 
            style={styles}
            htmlFor={id} 
            className="answer-label" >{answer} 
                    <input  
                        onChange={handleAnswerChange}
                        type="radio"
                        className="answer-input"
                        value={answer}
                        id={id}
                        name={questionNumber}
                        checked={checked}
                    />
        </label>
    )
}