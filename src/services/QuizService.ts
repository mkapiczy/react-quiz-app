import http from "axios"
import {Quiz} from "../types";

export const getAll = (): Promise<any> => {
    http.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    return http.get("/quizzes").then((response: any) => {
            console.log(response);
            return response.data || [];
        }
    );
}

export const addQuiz = (quiz: Quiz): Promise<Quiz> => {
    console.log('addQuiz', quiz)
    return http.post("/quizzes", {
        ...quiz
    }).then((response: any) => {
        console.log(response);
        return response.data
    })

}

export default {
    getAll,
    addQuiz
}