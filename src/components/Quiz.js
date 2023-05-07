import { useContext } from "react"
import { QuizContext } from "../context/Quiz"
import Question from "./Question"

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    return (
        <div className="quiz">
            {quizState.showResults && <div>Showing reulsts</div>}
            {!quizState.showResults && (
                <div>
                <div className="score">
                Question{quizState.currentQuestionIndex + 1} / {quizState.question.length}
            </div>
            <Question />
            <div className="next-button" onClick={()=>dispatch({type:'NEXT_QUESTION'})}>
                next question
            </div></div>
            )}

        </div>
  )
}

export default Quiz