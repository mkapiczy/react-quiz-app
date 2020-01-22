import React, {useState} from 'react';
import {connect, ConnectedProps} from "react-redux";
import {Answer, QuizState} from "../../types";
import * as quizActions from "../../redux/actions/quizActions"
import {bindActionCreators, Dispatch} from "redux";
import QuestionDisplay from "./QuestionDisplay/QuestionDisplay";
import QuizButtonGroup from "./QuizButtonGroup/QuizButtonGroup";
import QuizHeading from "./QuizHeading/QuizHeading";
import VictoryView from "./VictoryView/VictoryView";

type PropsFromRedux = ConnectedProps<typeof connectStateAndProps>
type Props = PropsFromRedux
const Quiz: React.FC<Props> = (props: Props) => {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null)
    const [score, setScore] = useState(0)
    const [isFinished, setIsFinished] = useState(false)
    const isAnswerCorrect = (answer: Answer | null): boolean => answer !== null && answer.id === props.selectedQuiz.questions[currentQuestionIdx].correctAnswerId

    const nextQuestion = () => {
        setSelectedAnswer(null)
        setCurrentQuestionIdx(currentQuestionIdx + 1)
    }

    const onAnswerSelect = (answer: Answer) => {
        setSelectedAnswer(answer)
        if (isAnswerCorrect(answer)) {
            setScore(score + 1)
        }

    }
    const finishQuiz = () => {
        setIsFinished(true)
    }

    const resetQuiz = () => {
        setIsFinished(false)
        setScore(0)
        setCurrentQuestionIdx(0)
        setSelectedAnswer(null)
    }

    return (
        <div className="container-fluid">
            <QuizHeading title={props.selectedQuiz.title}/>
            {isFinished ?
                <VictoryView score={score} maximum={props.selectedQuiz.questions.length} resetQuiz={resetQuiz}/> :
                <div className="container questions">
                    <div className="row">
                        <QuestionDisplay question={props.selectedQuiz.questions[currentQuestionIdx]}
                                         totalNumberOfQuestions={props.selectedQuiz.questions.length}
                                         selectedAnswer={selectedAnswer}
                                         isAnswerCorrect={isAnswerCorrect(selectedAnswer)}
                                         onAnswerSelect={onAnswerSelect}
                        />
                    </div>
                    <div className="row">
                        <QuizButtonGroup currentQuestionIdx={currentQuestionIdx}
                                         numberOfQuestions={props.selectedQuiz.questions.length}
                                         areButtonsDisabled={selectedAnswer === null}
                                         onNextQuestion={nextQuestion} onFinishQuiz={finishQuiz}/>
                    </div>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state: QuizState) => {
    console.log("mapStateToProps", state)
    return {
        quizzes: state.quizzes,
        selectedQuiz: state.quiz
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(quizActions, dispatch)
    }
}

const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps)
export default connectStateAndProps(Quiz);