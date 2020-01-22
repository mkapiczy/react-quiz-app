import React from "react";
import classNames from "classnames";
import {NavLink} from "react-router-dom";

interface Props {
    score: number,
    maximum: number,
    resetQuiz: () => void,
    quizId: number
}

const VictoryView: React.FC<Props> = (props: Props) => {
    const percentageScore = props.score / props.maximum * 100

    const progressBarClassNames = classNames(
        'progress-bar progress-bar-stripped', {
            'progress-bar-success': percentageScore >= 80,
            'progress-bar-info': percentageScore >= 60 && percentageScore < 80,
            'progress-bar-warning': percentageScore >= 40 && percentageScore < 60,
            'progress-bar-danger': percentageScore < 40
        }
    )
    return (
        <div className="container-fluid">
            <div className="h3">Your score: {props.score}/{props.maximum}</div>
            <div className="progress" style={{height: "2rem"}}>
                <div className={progressBarClassNames} role="progressbar"
                     aria-valuenow={percentageScore} aria-valuemin={0} aria-valuemax={100}
                     style={{width: percentageScore + "%", minWidth: "10%"}}>
                    {percentageScore}%
                </div>
            </div>
            <div className="container" style={{marginTop: "5vmin"}}>
                <div className="row">
                    <div className="col text-center">
                        <NavLink to={`/quiz/${props.quizId}`} onClick={props.resetQuiz} exact>
                                Retake the quiz
                        </NavLink>
                    </div>
                    <div className="col text-center">
                        <NavLink to="/quiz-list" exact>
                           Go back to quiz list
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default VictoryView