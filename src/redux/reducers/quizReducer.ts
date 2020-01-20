import {CREATE_QUIZ, QuizActionTypes} from "../actions/actionTypes";
import {QuizState} from "../../types";

const initialState: QuizState = {
    quizzes: []
}
const quizReducer = (state: QuizState = initialState, action: QuizActionTypes): QuizState => {
    switch (action.type) {
        case CREATE_QUIZ:
            return {
                quizzes: [...state.quizzes, action.payload]
            }
        default:
            return state
    }
}

export default quizReducer