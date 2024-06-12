import {useState} from 'react'
// import { nanoid } from 'nanoid'


export default function AnswerTile({id, answer, handleAnswerChange, questionNumber, checkedAnswer, isCorrect}){
    const [answerState, setAnswerState] = useState("unclicked")

    const checked = answer === checkedAnswer
    const checkedCorrect = checked && isCorrect ? true : false
    const checkedIncorrect = checked && isCorrect === false ? true : false

    console.log(checkedIncorrect)

    const styles = {
        backgroundColor: checkedCorrect ? "lightgreen" : checkedIncorrect ? "red" : checked ? "lightblue" : "white"
    }


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
                        // checked={checked}
                    />
        </label>
    )
}



