import React from 'react';
import {QuizState} from "../../types";
import {connect, ConnectedProps} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import * as quizActions from "../../redux/actions/quizActions";
import {useHistory} from 'react-router-dom'

type PropsFromRedux = ConnectedProps<typeof connectStateAndProps>
type Props = PropsFromRedux

const QuizList: React.FC<Props> = (props: Props) => {
    const history = useHistory()

    const selectQuiz = (quizId: number) => {
        props.actions.selectQuiz(quizId)
        history.push('/')
    }
    return (
        <div className="container-fluid">
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-2 col-sm-12"><p className="h3">Quiz List</p></div>
                    <div className="col-md-10 col-sm-12"><p>Select quiz you're interested in!</p></div>
                </div>
            </div>
            <ol className="list-group">
                {props.quizzes ? props.quizzes.map((q) => <a href="#"
                                                             className="list-group-item list-group-item-action"
                                                             key={q.title}
                                                             onClick={() => selectQuiz(q.id)}>
                    {q.title}
                </a>) : "No quizzes"}
            </ol>
        </div>
    )
}

const mapStateToProps = (state: QuizState) => {
    return {
        quizzes: state.quizzes
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(quizActions, dispatch)
    }
}

const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps)
export default connectStateAndProps(QuizList);