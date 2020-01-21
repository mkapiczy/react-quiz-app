import {CREATE_QUIZ, QuizActionTypes, SELECT_QUIZ} from "./actionTypes";
import {Quiz} from "../../types";

const createQuiz = (quiz: Quiz): QuizActionTypes => {
    return {type: CREATE_QUIZ, payload: quiz}
}

const selectQuiz = (quizId: number): QuizActionTypes => {
    return {type: SELECT_QUIZ, payload: quizId}
}

export {
    createQuiz,
    selectQuiz
}