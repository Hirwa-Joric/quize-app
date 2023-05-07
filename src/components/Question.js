import React, { useContext } from 'react'
import { QuizContext } from '../context/Quiz'

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQueston = quizState.question[quizState.currentQuestionIndex]
    return (
        <div>
            <div className="question">
                {currentQueston.question}
                
            </div>
        </div>
  )
}

export default Question