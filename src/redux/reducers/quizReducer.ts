import {CREATE_QUIZ, QuizActionTypes, LOAD_QUIZZES_SUCCESS} from "../actions/actionTypes";
import {AppState, QuizState} from "../../types";

const initialState: QuizState = {
    quizzes: []
}
const quizReducer = (state: AppState = initialState, action: QuizActionTypes): AppState => {
    console.log("Action", action)
    switch (action.type) {
        case CREATE_QUIZ:
            return {
                ...state,
                quizzes: [...state.quizzes, action.payload]
            }
        case LOAD_QUIZZES_SUCCESS:
            return {
                ...state,
                quizzes: [...action.payload]
            };
        default:
            return state
    }
}

export default quizReducer