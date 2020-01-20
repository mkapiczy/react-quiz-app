import React from 'react';
import {QuizState} from "../../types";
import {connect, ConnectedProps} from "react-redux";

type PropsFromRedux = ConnectedProps<typeof connectStateAndProps>
type Props = PropsFromRedux

const QuizList: React.FC<Props> = (props: Props) => {
    return (
        <div className="jumbotron">
            <h1>Quiz List</h1>
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