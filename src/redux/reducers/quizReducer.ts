import {CREATE_QUIZ, QuizActionTypes} from "../actions/actionTypes";
import {AppState, QuizState} from "../../types";

const initialState: QuizState = {
    quizzes: [{
        id: 0,
        title: 'Quiz 0',
        questions: [{
            id: 1,
            value: 'What is your name?',
            answers: [{id: 1, value: 'Answer 1'}, {id: 2, value: 'Answer 2'}, {id: 3, value: 'Answer 3'}, {
                id: 4,
                value: 'Answer 4'
            }],
            correctAnswerId: 1
        },
            {
                id: 2,
                value: 'How old are you?',
                answers: [{id: 1, value: 'Answer 1'}, {id: 2, value: 'Answer 2'}, {id: 3, value: 'Answer 3'}, {
                    id: 4,
                    value: 'Answer 4'
                }],
                correctAnswerId: 2
            }]
    }, {id: 1, title: 'Quiz 1', questions: []}]
}
const quizReducer = (state: AppState = initialState, action: QuizActionTypes): AppState => {
    switch (action.type) {
        case CREATE_QUIZ:
            return {
                ...state,
                quizzes: [...state.quizzes, action.payload]
            }
        default:
            return state
    }
}

export default quizReducer