import React, {useState} from 'react';
import {connect, ConnectedProps} from "react-redux";
import {QuizState} from "../../types";
import * as quizActions from "../../redux/actions/quizActions"
import {useDispatch} from "react-redux";

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
    const dispatch = useDispatch()

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const quiz = {...state.quiz, title: event.currentTarget.value}
        setState({quiz})
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(quizActions.createQuiz(state.quiz))
        const quiz = {...state.quiz, title: ""}
        setState({quiz})
    }

    return (
        <div className="jumbotron">
            <h1>Quiz</h1>
            <p>This is a quiz from Javascript</p>
            <form onSubmit={handleSubmit}>
                <h3>Add course</h3>
                <input type="text" onChange={handleChange} value={state.quiz.title}/>
                <input type="submit" value="Save"/>
            </form>
        </div>
    )
}

const mapStateToProps = (state: QuizState) => {
    console.log("mapStateToProps", state)
    return {
        quizzes: state.quizzes
    }
}

const connectStateAndProps = connect(mapStateToProps)
export default connectStateAndProps(Quiz);