import {Quiz} from "../../types";
export const CREATE_QUIZ = 'CREATE_QUIZ'
export const SELECT_QUIZ = 'SELECT_QUIZ'

interface CreateQuizAction {
    type: typeof CREATE_QUIZ,
    payload: Quiz
}

interface SelectQuizAction {
    type: typeof SELECT_QUIZ,
    payload: number
}

export type QuizActionTypes = CreateQuizAction | SelectQuizAction