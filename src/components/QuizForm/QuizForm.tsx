import React, {ChangeEvent, useState} from 'react';
import {connect, ConnectedProps} from "react-redux";
import {Question, Quiz, QuizState} from "../../types";
import * as quizActions from "../../redux/actions/quizActions"
import {bindActionCreators, Dispatch} from "redux";
import QuestionField from "./QuestionField/QuestionField";
import _ from 'lodash'
import QuizFormButtonGroup from "./QuizFormButtonGroup/QuizFormButtonGroup";
import QuizFormHeading from "./QuizFormHeading/QuizFormHeading";
import QuestionsForm from "./QuestionsForm/QuestionsForm";

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
    const [quiz, setQuiz] = useState<Quiz>(newQuiz)
    const [currentQuestionId, setCurrentQuestionId] = useState<number>(1)

    const handleQuestionChange = (question: Question) => {
        setQuiz({...quiz, questions: _.orderBy([...quiz.questions.filter(q => q.id !== question.id), question], 'id')})
    }

    const handleQuizTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuiz({...quiz, title: event.currentTarget.value})
    }

    const saveQuiz = () => {
        props.actions.createQuiz(quiz)
    }

    const isQuestionValid = (question: Question) => {
        return question.value && !_.some(question.answers, a => !a.value) && question.correctAnswerId
    }

    const addQuestion = () => {
        if (isQuestionValid(quiz.questions[currentQuestionId])) {
            setQuiz({
                ...quiz, questions: _.orderBy([...quiz.questions, {
                    id: quiz.questions.length + 1,
                    value: "",
                    answers: [{id: 1, value: ""}, {id: 2, value: ""}, {id: 3, value: ""}, {id: 4, value: ""}]
                }], 'id')
            })
            setCurrentQuestionId(currentQuestionId + 1)
        }
    }

    const deleteQuestion = () => {
        if (quiz.questions.length > 0) {
            setQuiz({...quiz, questions: [...quiz.questions.filter(q => q.id !== currentQuestionId + 1)]})
            setCurrentQuestionId(currentQuestionId - 1)
        }
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
            <QuizFormHeading quizTitle={quiz.title} onQuizTitleChange={handleQuizTitleChange}/>
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