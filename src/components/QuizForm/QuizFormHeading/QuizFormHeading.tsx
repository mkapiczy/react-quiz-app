import React, {ChangeEvent} from "react";

interface Props {
    quizTitle: string,
    onQuizTitleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const QuizFormHeading: React.FC<Props> = (props: Props) => {
    return (
        <div className="jumbotron">
            <div className="row text-center">
                <div className="col-md-2 col-sm-12"><p className="h3">New Quiz</p></div>
                <div className="col-md-10 col-sm-12">
                    <input type="text" className="form-control" id="quizTitleInput"
                           placeholder="Quiz title" value={props.quizTitle} onChange={props.onQuizTitleChange}/>
                </div>
            </div>
        </div>
    )
}

export default QuizFormHeading