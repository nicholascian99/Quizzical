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
            className="answer" >{answer} 
                    <input  
                        onClick={() => handleAnswerClick(id)}
                        type="radio"
                        value="This is an answer"
                        id={id}
                        name="answer"
                    />
                </label>
    )
}