import './QuestionFormField.scss'
import React, {ChangeEvent} from 'react';
import {Question} from "../../../types";
import AnswerCardFieldsDisplay from "../AnswerCardFieldsDisplay/AnswerCardFieldsDisplay";

interface Props {
    question: Question,
    totalNumberOfQuestions: number,
    onQuestionChange: (question: Question) => void
}

const QuestionFormField: React.FC<Props> = (props: Props) => {
    const handleQuestionTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onQuestionChange({...props.question, value: event.currentTarget.value})
    }

    return (
        <div className="container-fluid">
            <div className="row text-center">
                <div className="card border-warning question-card">
                    <div className="card-header bg-warning border-warning align-content-center">
                        <p className="text-center">Question ({props.question.id}/{props.totalNumberOfQuestions})</p>
                    </div>
                    <div className="card-body">
                        <input type="text" className="form-control" id="questionTitleInput" placeholder="Question"
                               value={props.question.value} onChange={handleQuestionTitleChange}/>
                    </div>
                </div>
            </div>
            <AnswerCardFieldsDisplay question={props.question} totalNumberOfQuestions={props.totalNumberOfQuestions}
                                     onQuestionChange={props.onQuestionChange}/>
        </div>
    )
}

export default QuestionFormField