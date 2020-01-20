import React, {useState} from 'react';
import {connect, ConnectedProps} from "react-redux";
import {QuizState} from "../../types";
import * as quizActions from "../../redux/actions/quizActions"
import {bindActionCreators, Dispatch} from "redux";

interface SingleQuizState {
    quiz: {
        title: string
    }
}

type PropsFromRedux = ConnectedProps<typeof connectStateAndProps>
type Props = PropsFromRedux
const Quiz: React.FC<Props> = (props: Props) => {
    const [state, setState] = useState<SingleQuizState>({
        quiz: {
            title: ""
        }
    })

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const quiz = {...state.quiz, title: event.currentTarget.value}
        setState({quiz})
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const quiz = {...state.quiz, id: 0, title: "", questions: []}
        props.actions.createQuiz(quiz)
        setState({quiz})
    }

    return (
        <div className="container-fluid">
            <div className="jumbotron">
                <div className="row text-center">
                    <div className="col-md-2 col-sm-12" style={{margin: "auto"}}><p className="h3">Quiz</p></div>
                    <div className="col-md-10 col-sm-12" style={{margin: "auto"}}><p>This is a quiz from Javascript</p></div>
                </div>
            </div>
            <div className="container">
               Test
            </div>
        </div>
    )
}

const mapStateToProps = (state: QuizState) => {
    console.log("mapStateToProps", state)
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
export default connectStateAndProps(Quiz);