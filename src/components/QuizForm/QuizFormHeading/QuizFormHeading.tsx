import './QuizFormHeading.scss'
import React, {ChangeEvent} from "react";

interface Props {
    quizTitle: string,
    onQuizTitleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onCloseTooltip: ()=>void,
    isValid: boolean
}

const QuizFormHeading: React.FC<Props> = (props: Props) => {
    return (
        <div className="h1 text-center" style={{marginBottom: "5vmin"}}>
          New Quiz
        </div>
    )
}

export default QuizFormHeading