import './QuizFormHeading.scss'
import React, {ChangeEvent} from "react";
import classNames from "classnames";

interface Props {
    quizTitle: string,
    onQuizTitleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onCloseTooltip: ()=>void,
    isValid: boolean
}

const QuizFormHeading: React.FC<Props> = (props: Props) => {
    return (
        <div className="jumbotron h-25" style={{marginTop: 0}}>
            <div className="row text-center">
                <div className="col-md-2 col-sm-12 vertical-align"><p className="h3">New Quiz</p></div>
                <div id="quizTitleColumn" className="col-md-10 col-sm-12 vertical-align">
                    <input type="text" className={classNames('form-control', {'is-invalid': !props.isValid})}
                           id="quizTitleInput"
                           placeholder="Quiz title" value={props.quizTitle} onChange={props.onQuizTitleChange}/>
                    <div className="invalid-tooltip" >
                        <button className="btn cancel" onClick={props.onCloseTooltip}>x</button>
                        <p id="tooltipText"className="font-weight-bold"> Please make sure that the quiz title together with all
                            questions and answers are filled and that a correct answer for every question is selected!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizFormHeading