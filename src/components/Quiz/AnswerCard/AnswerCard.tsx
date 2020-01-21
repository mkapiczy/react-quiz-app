import './AnswerCard.scss'
import classNames from "classnames";
import React from "react";
import {Answer} from "../../../types";

interface Props {
    isSelected: boolean,
    isCorrect: boolean,
    answer: Answer,
    handleSelectAnswer: (answer: Answer) => void
}

const AnswerCard: React.FC<Props> = (props: Props) => {
    const cardClassNames = classNames('card border-primary', {
        "border-success": props.isSelected && props.isCorrect,
        "border-danger": props.isSelected && !props.isCorrect
    })

    const cardHeaderClassNames = classNames('card-header border-primary bg-primary', {
        'border-success bg-success': props.isSelected && props.isCorrect,
        'border-danger bg-danger': props.isSelected && !props.isCorrect
    })
    return (
        <div className="col-sm-6 answer-card-column">
            <div className={cardClassNames}
                 onClick={() => props.handleSelectAnswer(props.answer)}>
                <div className={cardHeaderClassNames}>
                    {props.answer.id}
                </div>
                <div className="card-body">
                    <p className="card-text">{props.answer.value}</p>
                </div>
            </div>
        </div>
    )
}

export default AnswerCard