import './AnswerCardField.scss'
import {Answer} from "../../../types";
import React, {ChangeEvent} from "react";
import classNames from "classnames";

interface Props {
    answer: Answer,
    isCorrect: boolean
    onChange: (answer: Answer) => void,
    onIsCorrectChanged: (answeId: number) => void
}

const AnswerCardField2: React.FC<Props> = (props: Props) => {
    const handleAnswerValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange({...props.answer, value: event.currentTarget.value})
    }

    const cardClassNames = classNames('card border-primary', {
        "border-success": props.isCorrect,
    })

    const cardHeaderClassNames = classNames('card-header border-primary bg-primary', {
        'border-success bg-success': props.isCorrect,
    })
    return (
        <div className="col-sm-6 answer-card-column">
            <div className={cardClassNames}>
                <div className={cardHeaderClassNames} onClick={() => props.onIsCorrectChanged(props.answer.id)}>
                    {props.answer.id}
                </div>
                <div className="card-body">
                    <input className="form-control" type="text" value={props.answer.value}
                           onChange={handleAnswerValueChange} placeholder={`Answer ${props.answer.id}`}/>
                </div>
            </div>
        </div>
    )
}

export default AnswerCardField2