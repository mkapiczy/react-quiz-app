import _ from "lodash";
import React from "react";
import {Answer} from "../../../types";
import AnswerCard from "../AnswerCard/AnswerCard";

interface Props {
    answers: Array<Answer>,
    onAnswerSelect: (answer: Answer) => void,
    selectedAnswer: Answer | null,
    isAnswerCorrect: boolean
}

const AnswersDisplay: React.FC<Props> = (props: Props) => {

    const handleSelectAnswer = (answer: Answer): void => {
        if (props.selectedAnswer === null)
            props.onAnswerSelect(answer)
    }

    const isSelected = (answer: Answer) => props.selectedAnswer !== null && props.selectedAnswer.id === answer.id

    return (
        <ol className="list-group list-group-flush answers-list">
            {_.chunk(props.answers, 2).map(a =>
                <div key={a[0].id} className="row">
                    <AnswerCard isCorrect={props.isAnswerCorrect} isSelected={isSelected(a[0])}
                                answer={a[0]} handleSelectAnswer={handleSelectAnswer}/>
                    <AnswerCard isCorrect={props.isAnswerCorrect} isSelected={isSelected(a[1])}
                                answer={a[1]} handleSelectAnswer={handleSelectAnswer}/>

                </div>)
            }
        </ol>
    )
}
export default AnswersDisplay