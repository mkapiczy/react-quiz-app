import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import {Route} from "react-router-dom"
import Quiz from "./Quiz/Quiz";
import QuizList from "./QuizList/QuizList";
import NewQuiz from "./QuizForm/QuizForm";
import HomePage from "./HomePage/HomePage";

const App: React.FC = () => {
    return (
        <div id="app" className="container-fluid">
            <Header/>
            <div className="container-fluid main-content">
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/quiz/:quizId" component={Quiz}/>
                <Route exact path="/quiz-list/" component={QuizList}/>
                <Route exact path="/new-quiz" component={NewQuiz}/>
            </div>
        </div>
    );
}

export default App;
