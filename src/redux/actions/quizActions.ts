import {CREATE_QUIZ, LOAD_QUIZZES_SUCCESS} from "./actionTypes";
import {Quiz} from "../../types";
import * as quizService from '../../services/QuizService'
import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";

const createQuiz = (quiz: Quiz): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return (dispatch: any) => {
        return quizService.addQuiz(quiz).then((quiz: Quiz) => {
            dispatch({type: CREATE_QUIZ, payload: quiz});
        }).catch((error: any) => {
            throw error
        })
    }
}

const loadQuizzes = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return (dispatch: any) => {
        return quizService.getAll().then((quizzes: any) => {
            dispatch({type: LOAD_QUIZZES_SUCCESS, payload: quizzes});
        }).catch((error: any) => {
            throw error
        })
    }
};

export {
    createQuiz,
    loadQuizzes
}