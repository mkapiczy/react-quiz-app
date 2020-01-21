import React from "react";

interface Props {
    title: string
}

const QuizHeading: React.FC<Props> = (props: Props) => {
    return (
        <div className="h1 text-center" style={{marginBottom: "5vmin"}}>
            {props.title}
        </div>
    )
}

export default QuizHeading