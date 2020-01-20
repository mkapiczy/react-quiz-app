import {Quiz} from "../../types";
export const CREATE_QUIZ = 'CREATE_QUIZ'

interface CreateQuizAction {
    type: typeof CREATE_QUIZ,
    payload: Quiz
}

export type QuizActionTypes = CreateQuizAction