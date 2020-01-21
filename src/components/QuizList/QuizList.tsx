import React from 'react';
import {QuizState} from "../../types";
import {connect, ConnectedProps} from "react-redux";

type PropsFromRedux = ConnectedProps<typeof connectStateAndProps>
type Props = PropsFromRedux

const QuizList: React.FC<Props> = (props: Props) => {
    return (
        <div className="container-fluid">
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-2 col-sm-12"><p className="h3">Quiz List</p></div>
                    <div className="col-md-10 col-sm-12"><p>Select quiz you're interested in!</p></div>
                </div>
            </div>
            <ol>
                {props.quizzes ? props.quizzes.map((q) => <li key={q.title}>{q.title}</li>) : "No quizzes"}
            </ol>
        </div>
    )
}

const mapStateToProps = (state: QuizState) => {
    return {
        quizzes: state.quizzes
    }
}

const connectStateAndProps = connect(mapStateToProps)
export default connectStateAndProps(QuizList);