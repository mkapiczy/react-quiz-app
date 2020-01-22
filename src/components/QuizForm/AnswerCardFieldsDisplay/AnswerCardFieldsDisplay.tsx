import _ from "lodash";
import React, {ChangeEvent} from "react";
import {Answer, Question} from "../../../types";
import AnswerCardField2 from "../AnswerCardField/AnswerCardField";

interface Props {
    question: Question,
    totalNumberOfQuestions: number,
    onQuestionChange: (question: Question) => void
}

const AnswerCardFieldsDisplay: React.FC<Props> = (props: Props) => {

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
        <ol className="list-group list-group-flush answers-list">
            {_.chunk(props.question.answers, 2).map(a =>
                <div className="row">
                    <AnswerCardField2 isCorrect={isAnswerCorrect(a[0])} answer={a[0]}
                                      onChange={handleAnswerChange} onIsCorrectChanged={handleCorrectAnswerChanged}/>
                    <AnswerCardField2 isCorrect={isAnswerCorrect(a[1])} answer={a[1]}
                                      onChange={handleAnswerChange} onIsCorrectChanged={handleCorrectAnswerChanged}/>

                </div>)
            }
        </ol>
    )
}
export default AnswerCardFieldsDisplay