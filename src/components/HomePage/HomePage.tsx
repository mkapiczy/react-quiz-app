import './HomePage.scss'
import React from "react";
import {NavLink} from "react-router-dom";

const HomePage: React.FC = () => {
    return (
        <div className="container-fluid">
            <div className="h1 text-center" style={{marginBottom: "5vmin"}}>Welcome to Quiz App!</div>
            <div className="container">
                <div className="row card-row">
                    <div className="card bg-light home-card text-center">
                        <div className="card-header font-weight-bold">
                            <NavLink to="/quiz-list" exact>Take one of our quizzes</NavLink>
                        </div>
                        <div className="card-body ">
                            Check out our list of available quizzes.
                        </div>
                    </div>
                </div>
                <div className="row card-row">
                    <div className="card bg-light home-card text-center">
                        <div className="card-header font-weight-bold">
                            <NavLink to="/new-quiz" exact>Create your own quiz</NavLink>
                        </div>
                        <div className="card-body">
                            Create your own custom set of questions and answers!
                        </div>
                    </div>
                </div>
                <div className="row card-row">
                    <div className="card bg-light home-card text-center">
                        <div className="card-header font-weight-bold">
                            <NavLink to="/quiz/random" exact>Take a randomly generated quiz based on Open Trivia API</NavLink>
                        </div>
                        <div className="card-body">
                            Try your luck with our random quiz generator!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage