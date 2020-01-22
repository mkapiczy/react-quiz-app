import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {connect, ConnectedProps} from "react-redux";
import {Answer, Quiz as QuizType, QuizState} from "../../types";
import * as quizActions from "../../redux/actions/quizActions"
import {bindActionCreators, Dispatch} from "redux";
import QuestionDisplay from "./QuestionDisplay/QuestionDisplay";
import QuizButtonGroup from "./QuizButtonGroup/QuizButtonGroup";
import QuizHeading from "./QuizHeading/QuizHeading";
import VictoryView from "./VictoryView/VictoryView";
import _ from 'lodash'

type PropsFromRedux = ConnectedProps<typeof connectStateAndProps>
type Props = PropsFromRedux


const Quiz: React.FC<Props> = (props: Props) => {
    const [selectedQuiz, setSelectedQuiz] = useState<QuizType | null>(null)
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null)
    const [score, setScore] = useState(0)
    const [isFinished, setIsFinished] = useState(false)
    const isAnswerCorrect = (answer: Answer | null): boolean => answer !== null && selectedQuiz !== null && answer.id === selectedQuiz.questions[currentQuestionIdx].correctAnswerId
    const {quizId} = useParams()

    useEffect(() => {
        if (quizId) {
            setSelectedQuiz(_.find(props.quizzes, {id: parseInt(quizId)}) || null)
        }
    }, [])

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

    if (selectedQuiz === null) {
        return null
    }
    return (
        <div className="container-fluid">
            <QuizHeading title={selectedQuiz.title}/>
            {isFinished ?
                <VictoryView score={score} maximum={selectedQuiz.questions.length} resetQuiz={resetQuiz}
                             quizId={selectedQuiz.id}/> :
                <div className="container questions">
                    <div className="row">
                        <QuestionDisplay question={selectedQuiz.questions[currentQuestionIdx]}
                                         totalNumberOfQuestions={selectedQuiz.questions.length}
                                         selectedAnswer={selectedAnswer}
                                         isAnswerCorrect={isAnswerCorrect(selectedAnswer)}
                                         onAnswerSelect={onAnswerSelect}
                        />
                    </div>
                    <div className="row">
                        <QuizButtonGroup currentQuestionIdx={currentQuestionIdx}
                                         numberOfQuestions={selectedQuiz.questions.length}
                                         areButtonsDisabled={selectedAnswer === null}
                                         onNextQuestion={nextQuestion} onFinishQuiz={finishQuiz}/>
                    </div>
                </div>
            }
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
export default connectStateAndProps(Quiz);