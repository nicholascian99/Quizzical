import { useState, useEffect } from 'react'
import Question from './Question'

export default function Quiz(){
    // const [questionData, setQuestionData] = useState([])
    //use state instead of just returning elements in your useEffect

    useEffect(() => {
        async function fetchData(){
          const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
          const data = await res.json()
          console.log(data.results)
            data.results.map(questionData => {
                <Question
                    questions={questionData}/>
            })
        }fetchData()
      }, [])

    //NEED TO ADD THE DATA TO THE QUESTION COMPONENTS
    //ALSO NEED TO FIND OUT HOW TO HANDLE THE ERRORS IM GETTING WHEN THERE ARE TOO MANY REQUESTS IN A SHORT SPAN OF TIME


    return(
        <div className='quizContainer'>

            
            
            <footer>
                <p>You score 3/5 correct answers</p>
                <button>Check Answers</button>
            </footer>
        </div>
    )
}

