import './QuizList.scss'
import React from 'react';
import {QuizState} from "../../types";
import {connect, ConnectedProps} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import * as quizActions from "../../redux/actions/quizActions";
import {useHistory} from 'react-router-dom'
import QuizListHeading from "./QuizListHeading";

type PropsFromRedux = ConnectedProps<typeof connectStateAndProps>
type Props = PropsFromRedux

const QuizList: React.FC<Props> = (props: Props) => {
    const history = useHistory()

    const selectQuiz = (quizId: number) => {
        props.actions.selectQuiz(quizId)
        history.push('/quiz')
    }
    return (
        <div className="container-fluid">
            <QuizListHeading/>
            <div className="list-group" style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                <div className="list-group-item font-weight-bold list-group-item-dark">
                    <div className="row">
                        <div className="col-11">Quiz Title</div>
                        <div className="col-1">Rating</div>
                    </div>
                </div>
                {props.quizzes ? props.quizzes.map((q) =>
                    <a href="#" className="list-group-item list-group-item-action" onClick={() => selectQuiz(q.id)}>
                        <div className="row">
                            <div className="col-11">{q.title}</div>
                            <div className="col-1"><span className="badge badge-pill badge-primary pull-right">{ Math.floor(Math.random() * (100 - 0 + 1) + 0)}</span></div>
                        </div>


                    </a>
                ) : "No quizzes"}
            </div>
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