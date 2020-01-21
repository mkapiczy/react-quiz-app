import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import {Route} from "react-router-dom"
import Quiz from "./Quiz/Quiz";
import QuizList from "./QuizList/QuizList";
import NewQuiz from "./QuizForm/QuizForm";

const App: React.FC = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <Route exact path="/" component={Quiz}/>
            <Route exact path="/list" component={QuizList}/>
            <Route exact path="/quiz/new" component={NewQuiz}/>
        </div>
    );
}

export default App;
