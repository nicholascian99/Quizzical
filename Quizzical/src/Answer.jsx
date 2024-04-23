import {useState} from 'react'

export default function Answer({id, answer, clicked, handleAnswerClick}){

// console.log(id)


    const styles = {
        backgroundColor: clicked ?  "#D6DBF5" : "white"
    }


    return (
        <label 
            style={styles}
            htmlFor={id} 
            className="answer-label" >{answer} 
                    <input  
                        // onClick={() => handleAnswerClick(id)}
                        type="radio"
                        // value={answer}
                        id={id}
                        name="answer"
                    />
                </label>
    )
}