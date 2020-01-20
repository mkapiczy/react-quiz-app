import {QuizActionTypes} from "../types";
import {QuizState} from "../../types";

const initialState: QuizState = {
    quizzes: []
}
const quizReducer = (state: QuizState = initialState, action: QuizActionTypes): QuizState => {
    switch (action.type) {
        case "CREATE_COURSE":
            return {
                quizzes: [...state.quizzes, action.payload]
            }
        default:
            return state
    }
}

export default quizReducer