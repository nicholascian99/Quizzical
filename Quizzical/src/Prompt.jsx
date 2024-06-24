import { nanoid } from 'nanoid'
import AnswerTile from './AnswerTile'

export default function Prompt({questionNumber, promptIndex, question, answerOptions, userAnswers, setUserAnswers, correctAnswer, handleAnswerChange, decodeHtmlFunc}){
//handles the answer click and changes the user answers based on the click
    function handleAnswerChange(event){
        const {value, name} = event.target
        setUserAnswers(prevUserAnswers => {
            return prevUserAnswers.map((userAnswer, index) => {
                 if(name === `Question${index+1}answer`)  {
                        return {
                                    [questionNumber]:value,
                                    isCorrect:""
                                }
                }else{
                        return userAnswer
                    }
            })
        })
    }

//Defines the answer tile elements based solely off of the answer options

//isCorrect is only marked correct if the 'check answers' button has been pressed, allowing me to
//use that as a signifier that the check answers button has been pressed
    const answerTileElements = answerOptions.map(answer => {
        const questionId = nanoid()

        return (
                <AnswerTile
                    key={questionId}
                    // id={questionId}
                    answer={decodeHtmlFunc(answer)}
                    checkedAnswer={userAnswers[promptIndex][questionNumber]}
                    handleAnswerChange={handleAnswerChange}
                    questionNumber={questionNumber}
                    isCorrect={userAnswers[promptIndex].isCorrect}
                    correctAnswer={decodeHtmlFunc(correctAnswer)}
                    />
        )
    })

//Returns each prompt with the answer tiles inserted
    return (
        <>
            <div className='promptContainer'>
                <h2 className='promptQuestion'>{decodeHtmlFunc(question)}</h2>
                <div className="answersContainer">
                    {answerTileElements}
                </div>
                <hr></hr>
            </div>
        </>
    )
}

