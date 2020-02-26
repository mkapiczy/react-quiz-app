import {Quiz} from "../../types";

export const CREATE_QUIZ = 'CREATE_QUIZ';
export const LOAD_QUIZZES_SUCCESS = "LOAD_QUIZZES_SUCCESS";

interface CreateQuizAction {
    type: typeof CREATE_QUIZ,
    payload: Quiz
}

interface LoadQuizzesAction {
    type: typeof LOAD_QUIZZES_SUCCESS,
    payload: Array<Quiz>
}

export type QuizActionTypes = CreateQuizAction | LoadQuizzesAction