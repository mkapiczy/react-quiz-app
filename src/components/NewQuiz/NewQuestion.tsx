import React, {ChangeEvent} from 'react';
import NewAnswer from "./NewAnswer";
import {Answer, Question} from "../../types";
import _ from "lodash";

interface Props {
    question: Question,
    totalNumberOfQuestions: number,
    onQuestionChange: (question: Question) => void
}

const NewQuestion: React.FC<Props> = (props: Props) => {
    const handleQuestionTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onQuestionChange({...props.question, value: event.currentTarget.value})
    }

    const handleAnswerValueChange = (answer: Answer): void => {
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

    return (
        <div className="container-fluid">
            <div className="row form-group">
                <label htmlFor="questionTitleInput">Question
                    ({props.question.id}/{props.totalNumberOfQuestions})</label>
                <input type="text" className="form-control" id="questionTitleInput" placeholder="Question"
                       value={props.question.value} onChange={handleQuestionTitleChange}/>
            </div>
            <ol className="list-group list-group-flush" style={{listStyleType: "none"}}>
                {props.question.answers.map(a =>
                    <NewAnswer key={a.id} isCorrect={a.id === props.question.correctAnswerId} answer={a}
                               onChange={handleAnswerValueChange} onIsCorrectChanged={handleCorrectAnswerChanged}/>)}
            </ol>
        </div>
    )
}


export default NewQuestion