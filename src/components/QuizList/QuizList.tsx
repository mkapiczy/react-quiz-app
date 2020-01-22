import './QuizList.scss'
import React from 'react';
import {QuizState} from "../../types";
import {connect, ConnectedProps} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import * as quizActions from "../../redux/actions/quizActions";
import {NavLink} from 'react-router-dom'
import QuizListHeading from "./QuizListHeading";

type PropsFromRedux = ConnectedProps<typeof connectStateAndProps>
type Props = PropsFromRedux

const QuizList: React.FC<Props> = (props: Props) => {

    return (
        <div className="container-fluid">
            <QuizListHeading/>
            <div className="list-group" style={{width: "50%", marginLeft: "auto", marginRight: "auto"}}>
                <div className="list-group-item font-weight-bold list-group-item-dark">
                    <div className="row">
                        <div className="col-lg-10 col-md-9">Quiz Title</div>
                        <div className="col-lg-2 col-md-3">Rating</div>
                    </div>
                </div>
                {props.quizzes ? props.quizzes.map((q) =>
                    <NavLink to={`/quiz/${q.id}`} exact>
                        <div className="list-group-item list-group-item-action">
                            <div className="row">
                                <div className="col-lg-10 col-md-9">{q.title}</div>
                                <div className="col-lg-2 col-md-3">
                                    <span className="badge badge-pill badge-primary">{Math.floor(Math.random() * (100 - 0 + 1) + 0)}</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
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