import React from 'react'

export default function Answer({id, answer}){
    return (
        <label htmlFor={id} className="answer" >{answer} 
                    <input  
                        type="radio"
                        value="This is an answer"
                        id={id}
                        name="answer"
                    />
                </label>
    )
}