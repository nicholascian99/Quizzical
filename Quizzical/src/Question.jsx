import React from 'react'

export default function Question(props){
console.log(props.question)
    return(
        <form className='questionForm'>
            <h2>{props.question.question}</h2>
            <div className="answersContainer">
                <div htmlFor="answer1" className="answer">
                    <label >{props.question.correct_answer}
                        <input  
                            type="radio"
                            value="This is an answer"
                            id="answer1"
                            name="answer"
                        />
                    </label>
                </div>
                <div htmlFor="answer2" className="answer">
                    <label >{props.question.incorrect_answers[0]}
                        <input  
                            type="radio"
                            value="This is an answer"
                            name="answer"
                        />
                    </label>
                </div>
                <div htmlFor="answer3" className="answer">
                    <label>{props.question.incorrect_answers[1]}
                        <input  
                            type="radio"
                            value="This is an answer"
                            name="answer"
                        />
                    </label>
                </div>
                <div htmlFor="answer4" className="answer">
                    <label>{props.question.incorrect_answers[2]}
                        <input
                            type="radio"
                            value="This is an answer"
                            name="answer"
                        />
                    </label>
                </div>
            </div>
            <hr></hr>
        </form>
    )
}