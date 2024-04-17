import React from 'react'

export default function Question(){
    return(
        <form className='questionForm'>
            <h1>This is the question</h1>
            <div className="answersContainer">
                <button>This is an answer</button>
                <button>This is an answer</button>
                <button>This is an answer</button>
                <button>This is an answer</button>
            </div>
            <hr></hr>
        </form>
    )
}