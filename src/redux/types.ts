import {Quiz} from "../types";

export const CREATE_COURSE = 'CREATE_COURSE'

interface CreateCourseAction {
    type: typeof CREATE_COURSE,
    payload: Quiz
}

export type QuizActionTypes = CreateCourseAction