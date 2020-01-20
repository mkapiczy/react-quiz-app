import React, {ChangeEvent, ReactPropTypes, useState} from 'react';
import {Answer} from "../../types";

interface Props {
    answer: Answer,
    isCorrect:boolean
    onChange: (answer: Answer) => void,
    onIsCorrectChanged: (answeId:number)=>void
}

const NewAnswer: React.FC<Props> = (props: Props) => {

    const handleAnswerValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange({...props.answer, value: event.currentTarget.value})
    }

    return (
        <div className="row">
            <li className="list-group-item" style={{width: "100%"}}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"
                              style={{marginRight: "5%", backgroundColor: (props.isCorrect ? "#28A745" : "")}}
                              onClick={() =>props.onIsCorrectChanged(props.answer.id)}>{props.answer.id}</span>
                    </div>
                    <input style={{width: "80%"}} className="form-control" type="text" value={props.answer.value}
                           onChange={handleAnswerValueChange} placeholder={`Answer ${props.answer.id}`}/>
                </div>
            </li>
        </div>
    )
}

export default NewAnswer;