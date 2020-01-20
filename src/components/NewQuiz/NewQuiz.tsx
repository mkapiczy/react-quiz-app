import React, {ChangeEvent, useState} from 'react';
import {connect, ConnectedProps} from "react-redux";
import {Question, Quiz, QuizState} from "../../types";
import * as quizActions from "../../redux/actions/quizActions"
import {bindActionCreators, Dispatch} from "redux";
import NewQuestion from "./NewQuestion";

type PropsFromRedux = ConnectedProps<typeof connectStateAndProps>
type Props = PropsFromRedux

const NewQuiz: React.FC<Props> = (props: Props) => {
    const newQuiz = {
        id: props.quizzes.length,
        title: "",
        questions: [{
            id: 1,
            value: "",
            answers: [{id: 1, value: ""}, {id: 2, value: ""}, {id: 3, value: ""}, {id: 4, value: ""}]
        }]
    }
    const [quiz, setQuiz] = useState<Quiz>(newQuiz)
    const [currentQuestionId, setCurrentQuestionId] = useState<number>(0)

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const updatedQuiz = {...quiz, title: event.currentTarget.value}
        setQuiz(updatedQuiz)
    }

    const handleSubmit = () => {
        props.actions.createQuiz(quiz)
    }

    const handleNewQuestion = () => {
        setQuiz({
            ...quiz, questions: [...quiz.questions, {
                id: quiz.questions.length + 1,
                value: "",
                answers: [{id: 1, value: ""}, {id: 2, value: ""}, {id: 3, value: ""}, {id: 4, value: ""}]
            }]
        })
        setCurrentQuestionId(currentQuestionId + 1)
    }

    const onQuestionChange = (question: Question) => {
        setQuiz({...quiz, questions: [...quiz.questions.filter(q => q.id !== question.id), question]})
    }

    const handleQuizTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuiz({...quiz, title: event.currentTarget.value})
    }

    const nextQuestion = () => {
        if (currentQuestionId < quiz.questions.length - 1)
            setCurrentQuestionId(currentQuestionId + 1)
    }

    const prevQuestion = () => {
        if (currentQuestionId > 0)
            setCurrentQuestionId(currentQuestionId - 1)
    }

    return (
        <div className="container-fluid">
            <div className="jumbotron">
                <div className="row text-center">
                    <div className="col-md-2 col-sm-12" style={{margin: "auto"}}><p className="h3">New Quiz</p></div>
                    <div className="col-md-10 col-sm-12" style={{margin: "auto"}}>
                        <input type="text" className="form-control" id="quizTitleInput"
                               placeholder="Quiz title" value={quiz.title} onChange={handleQuizTitleChange}/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <NewQuestion question={quiz.questions[currentQuestionId]}
                                 totalNumberOfQuestions={quiz.questions.length}
                                 onQuestionChange={onQuestionChange}/>
                </div>
                <div className="row" style={{marginTop: "1vmin"}}>
                    <div className="col text-center">
                        <button type="button" className="btn btn-primary mb-2" onClick={prevQuestion}>Previous Question</button>
                    </div>
                    <div className="col text-center">
                        <button type="button" className="btn btn-primary mb-2" onClick={nextQuestion}>Next Question</button>
                    </div>
                </div>
                <div className="row" style={{marginTop: "1vmin"}}>
                    <div className="col text-center">
                        <button type="button" className="btn btn-dark mb-2">Delete Question</button>
                        <button type="button" className="btn btn-info mb-2" onClick={handleNewQuestion}>New Question
                        </button>

                    </div>
                </div>
            </div>
            <div className="row" style={{marginTop: "3vmin"}}>
                <div className="col text-center">
                    <button type="submit" className="btn btn-success mb-2" onClick={handleSubmit}>Save Quiz</button>
                </div>
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
export default connectStateAndProps(NewQuiz);