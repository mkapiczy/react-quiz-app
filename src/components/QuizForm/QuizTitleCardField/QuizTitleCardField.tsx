import classNames from "classnames";
import React, {ChangeEvent} from "react";

interface Props {
    isValid: boolean,
    quizTitle: string,
    handleQuizTitleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onCancelTooltip: () => void
}

const QuizTitleCardField: React.FC<Props> = (props: Props) => {
    return (
        <div className="container" style={{marginBottom: "5vmin"}}>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">Quiz Title:</span>
                </div>
                <input type="text" className={classNames('form-control', {'is-invalid': !props.isValid})}
                       id="quizTitleInput" value={props.quizTitle} onChange={props.handleQuizTitleChange}/>
                <div className="invalid-tooltip">
                    <button className="btn cancel" onClick={props.onCancelTooltip}>x</button>
                    <p id="tooltipText" className="font-weight-bold"> Please make sure that the quiz title together with
                        all
                        questions and answers are filled and that a correct answer for every question is selected!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default QuizTitleCardField