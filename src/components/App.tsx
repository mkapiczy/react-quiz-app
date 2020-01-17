import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import {Route} from "react-router-dom"
import Quiz from "./Quiz/Quiz";
import QuizList from "./QuizList/QuizList";

const App: React.FC = () => {
  return (
   <div className="container-fluid">
     <Header/>
     <Route exact path="/" component={Quiz}/>
     <Route exact path="/list" component={QuizList}/>
   </div>
  );
}

export default App;
