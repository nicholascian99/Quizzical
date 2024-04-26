// import {useState} from 'react'
// import { nanoid } from 'nanoid'


export default function AnswerTile({id, answer, handleAnswerChange, questionIndex}){



    return (
        <label 
            // style={styles}
            htmlFor={id} 
            className="answer-label" >{answer} 
                    <input  
                        // onChange={() => handleAnswerChange(id)}
                        type="radio"
                        className="answer-input"
                        value={answer}
                        id={id}
                        name={`Question${questionIndex}`}
                    />
        </label>
    )
}

