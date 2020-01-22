import './AnswerField.scss'
import React, {ChangeEvent} from 'react';
import {Answer} from "../../../types";
import classNames from "classnames";

interface Props {
    answer: Answer,
    isCorrect: boolean
    onChange: (answer: Answer) => void,
    onIsCorrectChanged: (answeId: number) => void
}

const AnswerField: React.FC<Props> = (props: Props) => {

    const handleAnswerValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange({...props.answer, value: event.currentTarget.value})
    }

    return (
        <div className="row">
            <li className="list-group-item">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className={classNames('input-group-text', {"selected": props.isCorrect})}>
                            <span className="answer-id">{props.answer.id}</span>
                            <input type="radio" checked={props.isCorrect}
                                   onChange={() => props.onIsCorrectChanged(props.answer.id)}/>
                        </div>
                    </div>
                    <input className="form-control" type="text" value={props.answer.value}
                           onChange={handleAnswerValueChange} placeholder={`Answer ${props.answer.id}`}/>
                </div>
            </li>
        </div>
    )
}

export default AnswerField;