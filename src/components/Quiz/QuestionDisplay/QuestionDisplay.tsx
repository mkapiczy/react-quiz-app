import './QuestionDisplay.scss'
import React from 'react';
import {Answer, Question} from "../../../types";
import AnswersDisplay from "../AnswersDisplay/AnswersDisplay";

interface Props {
    question: Question,
    totalNumberOfQuestions: number,
    selectedAnswer: Answer | null,
    isAnswerCorrect: boolean,
    onAnswerSelect: (answer: Answer) => void
}

const QuestionField: React.FC<Props> = (props: Props) => {


    return (
        <div className="container-fluid">
            <div className="row text-center">
                <div className="card border-warning question-card">
                    <div className="card-header bg-warning border-warning">
                        Question ({props.question.id}/{props.totalNumberOfQuestions})
                    </div>
                    <div className="card-body">
                        <p className="card-text">{props.question.value}</p>
                    </div>
                </div>
            </div>
            <AnswersDisplay answers={props.question.answers} onAnswerSelect={props.onAnswerSelect}
                            isAnswerCorrect={props.isAnswerCorrect} selectedAnswer={props.selectedAnswer}/>
        </div>
    )
}

export default QuestionField