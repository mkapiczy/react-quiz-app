import {CREATE_COURSE, QuizActionTypes} from "../types";
import {Quiz} from "../../types";

const createQuiz = (quiz: Quiz): QuizActionTypes => {
    return {type: CREATE_COURSE, payload: quiz}
}

export {
    createQuiz
}