export default function AnswerTile({id, answer, handleAnswerChange, questionNumber, checkedAnswer, isCorrect, correctAnswer}){


    //THIS SEGMENT IS CHECKING IF AN ANSWER IS:
    // CHECKED AND/OR CORRECT; 
    // AND THEN STYLING THEM ACCORDINGLY;
    //<<<-------------------------------------------------------------------->>>
    const checked = answer === checkedAnswer
    const correct = isCorrect !== '' && answer === correctAnswer
    const checkedCorrect = checked && isCorrect
    const checkedIncorrect = checked && isCorrect === false ? true : false

    const styles = {
        backgroundColor: checkedCorrect ? "lightgreen" : correct ? "#AFF9BB" : checkedIncorrect ? "#F8BCBC" : checked ? "lightblue" : "white",
        opacity: isCorrect === false ? "50%" : null
    }
    //<<<-------------------------------------------------------------------->>>


    return (
        <label 
            style={styles}
            // htmlFor={id} 
            className="answer-label" >{answer} 
                    <input  
                        onChange={handleAnswerChange}
                        type="radio"
                        className="answerInput"
                        value={answer}
                        name={questionNumber}
                        disabled={isCorrect !== ''}
                        // checked={checked}
                    />
        </label>
    )
}



{/* <AnswerTile
                    key={questionId}
                    id={questionId}
                    answer={decodeHtmlEntities(answer)}
                    checkedAnswer={userAnswers[promptIndex][questionNumber]}
                    handleAnswerChange={handleAnswerChange}
                    questionNumber={questionNumber}
                    userAnswers={userAnswers}
                    isCorrect={userAnswers[promptIndex].isCorrect}
                    correctAnswer={correctAnswer}
                    /> */}