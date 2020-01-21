export interface Answer {
    id: number,
    value: string
}

export interface Question {
    id: number,
    value: string,
    answers: Array<Answer>
    correctAnswerId?: number
}

export interface Quiz {
    id: number,
    title: string,
    questions: Array<Question>
}

export interface QuizState {
    quizzes: Quiz[]
    quiz: Quiz
}

export type AppState = QuizState
