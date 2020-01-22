import {CREATE_QUIZ, QuizActionTypes} from "./actionTypes";
import {Quiz} from "../../types";

const createQuiz = (quiz: Quiz): QuizActionTypes => {
    return {type: CREATE_QUIZ, payload: quiz}
}


export {
    createQuiz,
}