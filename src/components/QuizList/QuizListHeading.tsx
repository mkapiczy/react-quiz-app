import React from "react";

const QuizListHeading: React.FC = () => {
    return (
        <div className="container">
            <div className="h1 text-center">
                Quiz List
            </div>
            <div className="h5 text-center" style={{marginBottom: "5vmin"}}>
                Select quiz you'd like to take!
            </div>
        </div>
    )
}

export default QuizListHeading