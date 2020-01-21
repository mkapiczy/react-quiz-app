import './QuizButtonGroup.scss'
import React from "react";

interface Props {
    currentQuestionIdx: number,
    numberOfQuestions: number,
    areButtonsDisabled: boolean,
    onNextQuestion: () => void,
    onFinishQuiz: () => void
}

const QuizButtonGroup: React.FC<Props> = (props: Props) => {
    return (
        <>
            {props.currentQuestionIdx < props.numberOfQuestions - 1 ?
                <button type="button" className="btn btn-outline-dark btn-lg button-centered"
                        disabled={props.areButtonsDisabled} onClick={props.onNextQuestion}>
                    Next Question
                </button> :
                <button type="button" className="btn btn-outline-dark btn-lg button-centered"
                        disabled={props.areButtonsDisabled} onClick={props.onFinishQuiz}>
                    Finish Quiz
                </button>
            }
        </>
    )
}

export default QuizButtonGroup