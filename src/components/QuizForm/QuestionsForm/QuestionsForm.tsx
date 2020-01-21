import QuestionField from "../QuestionField/QuestionField";
import React from "react";
import {Question} from "../../../types";

interface Props {
    question: Question,
    totalNumberOfQuestions: number,
    onQuestionChange: (question: Question) => void

}

const QuestionsForm: React.FC<Props> = (props: Props) => {
    return (
        <div className="container questions">
            <div className="row">
                <QuestionField question={props.question} totalNumberOfQuestions={props.totalNumberOfQuestions}
                               onQuestionChange={props.onQuestionChange}/>
            </div>
        </div>
    )
}

export default QuestionsForm