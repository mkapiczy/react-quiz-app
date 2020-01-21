import './QuizForm.scss'
import React, {ChangeEvent, useState} from 'react';
import {connect, ConnectedProps} from "react-redux";
import {Question, Quiz, QuizState} from "../../types";
import * as quizActions from "../../redux/actions/quizActions"
import {bindActionCreators, Dispatch} from "redux";
import _ from 'lodash'
import QuizFormButtonGroup from "./QuizFormButtonGroup/QuizFormButtonGroup";
import QuizFormHeading from "./QuizFormHeading/QuizFormHeading";
import QuestionsForm from "./QuestionsForm/QuestionsForm";
import {useHistory} from 'react-router-dom'

type PropsFromRedux = ConnectedProps<typeof connectStateAndProps>
type Props = PropsFromRedux

const QuizForm: React.FC<Props> = (props: Props) => {
    const newQuiz = {
        id: props.quizzes.length,
        title: "",
        questions: [{
            id: 1,
            value: "",
            answers: [{id: 1, value: ""}, {id: 2, value: ""}, {id: 3, value: ""}, {id: 4, value: ""}]
        }]
    }
    const history = useHistory()
    const [quiz, setQuiz] = useState<Quiz>(newQuiz)
    const [currentQuestionId, setCurrentQuestionId] = useState<number>(1)
    const [isValid, setIsValid] = useState<boolean>(true)
    const handleQuestionChange = (question: Question) => {
        setQuiz({...quiz, questions: _.orderBy([...quiz.questions.filter(q => q.id !== question.id), question], 'id')})
    }

    const handleQuizTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuiz({...quiz, title: event.currentTarget.value})
    }

    const saveQuiz = () => {
        if (isQuizValid()) {
            props.actions.createQuiz(quiz)
            history.push('/list');
        } else {
            setIsValid(false)
        }
    }

    const isQuizValid = () => _.every(quiz.questions, q => q.value && _.every(q.answers, a => a.value) && q.correctAnswerId)

    const addQuestion = () => {
        setQuiz({
            ...quiz, questions: _.orderBy([...quiz.questions, {
                id: quiz.questions.length + 1,
                value: "",
                answers: [{id: 1, value: ""}, {id: 2, value: ""}, {id: 3, value: ""}, {id: 4, value: ""}]
            }], 'id')
        })
        setCurrentQuestionId(currentQuestionId + 1)
    }

    const deleteQuestion = () => {
        if (quiz.questions.length > 1) {
            setQuiz({...quiz, questions: [...quiz.questions.filter(q => q.id !== currentQuestionId)]})
            setCurrentQuestionId(currentQuestionId - 1)
        }
    }

    const nextQuestion = () => {
        if (currentQuestionId < quiz.questions.length)
            setCurrentQuestionId(currentQuestionId + 1)
    }

    const prevQuestion = () => {
        if (currentQuestionId > 1)
            setCurrentQuestionId(currentQuestionId - 1)
    }

    const resetIsValid = () => {
        setIsValid(true)
    }

    return (
        <div id="quizForm" className="container-fluid">
            <QuizFormHeading quizTitle={quiz.title} onQuizTitleChange={handleQuizTitleChange} isValid={isValid}
                             onCloseTooltip={resetIsValid}/>
            <QuestionsForm question={quiz.questions[currentQuestionId - 1]}
                           totalNumberOfQuestions={quiz.questions.length}
                           onQuestionChange={handleQuestionChange}/>
            <QuizFormButtonGroup currentQuestionId={currentQuestionId} totalNumberOfQuestions={quiz.questions.length}
                                 goToPreviousQuestion={prevQuestion} goToNextQuesion={nextQuestion}
                                 deleteQuestion={deleteQuestion} addQuestion={addQuestion} saveQuiz={saveQuiz}/>

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
export default connectStateAndProps(QuizForm);