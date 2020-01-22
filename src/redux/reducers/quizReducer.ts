import {CREATE_QUIZ, QuizActionTypes} from "../actions/actionTypes";
import {AppState, QuizState} from "../../types";

const initialState: QuizState = {
    quizzes: [{
        id: 0,
        title: 'Javascript Quiz',
        questions: [
            {
                id: 1,
                value: 'What does CSS stand for?',
                answers: [{id: 1, value: 'Computer Style Sheets'}, {id: 2, value: 'Cascading Style Sheets'}, {
                    id: 3,
                    value: 'Creative Style Sheets'
                }, {
                    id: 4,
                    value: 'Colorful Style Sheets'
                }],
                correctAnswerId: 2
            },
            {
                id: 2,
                value: 'Where in an HTML document is the correct place to refer to an external style sheet?',
                answers: [{id: 1, value: "In the <head> section"}, {id: 2, value: 'In the <body> section'}, {
                    id: 3,
                    value: 'At the end of the document'
                }, {
                    id: 4,
                    value: 'You can\'t refer to an external style sheet'
                }],
                correctAnswerId: 1
            },
            {
                id: 3,
                value: 'Which HTML tag is used to define an internal style sheet?',
                answers: [{id: 1, value: "<style>"}, {id: 2, value: '<script>'}, {
                    id: 3,
                    value: '<headStyle>'
                }, {
                    id: 4,
                    value: '<css>'
                }],
                correctAnswerId: 2
            },
            {
                id: 4,
                value: 'Which HTML attribute is used to define inline styles?',
                answers: [{id: 1, value: "class"}, {id: 2, value: 'style'}, {
                    id: 3,
                    value: 'font'
                }, {
                    id: 4,
                    value: 'styles'
                }],
                correctAnswerId: 2
            },
            {
                id: 5,
                value: 'Which is the correct CSS syntax?',
                answers: [{id: 1, value: "{body:color=black;}"}, {id: 2, value: '{body;color:black;}'}, {
                    id: 3,
                    value: 'body:color=black;'
                }, {
                    id: 4,
                    value: 'body {color: black;}'
                }],
                correctAnswerId: 4
            },
            {
                id: 6,
                value: 'How do you insert a comment in a CSS file?',
                answers: [{id: 1, value: "' this is a comment"}, {
                    id: 2, value: '\n' +
                        '/* this is a comment */'
                }, {
                    id: 3,
                    value: '// this is a comment'
                }, {
                    id: 4,
                    value: '// this is a comment //'
                }],
                correctAnswerId: 2
            }]
    }]
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