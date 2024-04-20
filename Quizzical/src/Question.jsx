import React from 'react'

export default function Question(props){
console.log(props.questionsData)
    return(
        <form className='questionForm'>
            <h2>This is the first Question</h2>
            <div className="answersContainer">
                <div htmlFor="answer1" className="answer">
                    <label >Answer 1
                        <input  
                            type="radio"
                            value="This is an answer"
                            id="answer1"
                            name="answer"
                        />
                    </label>
                </div>
                <div htmlFor="answer2" className="answer">
                    <label >Answer 2
                        <input  
                            type="radio"
                            value="This is an answer"
                            name="answer"
                        />
                    </label>
                </div>
                <div htmlFor="answer3" className="answer">
                    <label>Answer 3
                        <input  
                            type="radio"
                            value="This is an answer"
                            name="answer"
                        />
                    </label>
                </div>
                <div htmlFor="answer4" className="answer">
                    <label>Answer 4
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