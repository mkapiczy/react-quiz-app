import './QuestionFormField.scss'
import React, {ChangeEvent} from 'react';
import AnswerField from "../AnswerField/AnswerField";
import {Answer, Question} from "../../../types";
import _ from "lodash";

interface Props {
    question: Question,
    totalNumberOfQuestions: number,
    onQuestionChange: (question: Question) => void
}

const QuestionFormField: React.FC<Props> = (props: Props) => {
    const handleQuestionTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onQuestionChange({...props.question, value: event.currentTarget.value})
    }

    const handleAnswerChange = (answer: Answer): void => {
        props.onQuestionChange({
            ...props.question,
            answers: _.sortBy([...props.question.answers.filter(a => a.id !== answer.id), answer], 'id')
        })
    }

    const handleCorrectAnswerChanged = (correctAnswerId: number): void => {
        props.onQuestionChange({
            ...props.question,
            correctAnswerId
        })
    }

    const isAnswerCorrect = (answer: Answer) => answer.id === props.question.correctAnswerId

    return (
        <div className="container-fluid">
            <div className="row form-group">
                <label htmlFor="questionTitleInput">
                    QuestionField ({props.question.id}/{props.totalNumberOfQuestions})
                </label>
                <input type="text" className="form-control" id="questionTitleInput" placeholder="QuestionField"
                       value={props.question.value} onChange={handleQuestionTitleChange}/>
            </div>
            <ol className="list-group list-group-flush answers-list">
                {props.question.answers.map(a =>
                    <AnswerField key={a.id} isCorrect={isAnswerCorrect(a)} answer={a}
                                 onChange={handleAnswerChange} onIsCorrectChanged={handleCorrectAnswerChanged}/>)}
            </ol>
        </div>
    )
}

export default QuestionFormField