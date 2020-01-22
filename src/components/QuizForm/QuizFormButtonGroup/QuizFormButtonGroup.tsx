import './QuizFormButtonGroup.scss'
import React from "react";

interface Props {
    currentQuestionId: number,
    totalNumberOfQuestions: number,
    goToPreviousQuestion: () => void,
    goToNextQuesion: () => void,
    deleteQuestion: () => void,
    addQuestion: () => void,
    saveQuiz: () => void,
}

const QuizFormButtonGroup: React.FC<Props> = (props: Props) => {
    const isPreviousQuestionDisabled = () => props.currentQuestionId <= 1
    const isNextQuestionDisabled = () => props.currentQuestionId >= props.totalNumberOfQuestions
    const isDeleteQuestionDisabled = () => props.totalNumberOfQuestions === 1
    return (
        <div className="container-fluid buttons">
            <div className="row first-row">
                <div className="col text-center">
                    <button type="button" className="btn btn-primary mb-2 btn-with-margin"
                            disabled={isPreviousQuestionDisabled()}
                            onClick={props.goToPreviousQuestion}>
                        Previous Question
                    </button>
                </div>

                <div className="col text-center">
                    <button type="button" className="btn btn-primary mb-2 btn-with-margin"
                            disabled={isNextQuestionDisabled()}
                            onClick={props.goToNextQuesion}>
                        Next Question
                    </button>
                </div>

            </div>

            <div className="row second-row">
                <div className="col text-center">
                    <button type="button" className="btn btn-dark mb-2 btn-with-margin"
                            disabled={isDeleteQuestionDisabled()}
                            onClick={props.deleteQuestion}>
                        Delete Question
                    </button>
                    <button type="button" className="btn btn-info mb-2 btn-with-margin"
                            onClick={props.addQuestion}>
                        New Question
                    </button>
                </div>
            </div>
            <div className="row third-row">
                <div className="col text-center">
                    <button type="submit" className="btn btn-success mb-2 btn-with-margin"
                            onClick={props.saveQuiz}>
                        Save Quiz
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuizFormButtonGroup