import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from "./redux/configureStore";
import {Provider as ReactProvider} from 'react-redux'

const store = configureStore()
ReactDOM.render(
    <ReactProvider store={store}>
        <Router>
            <App/>
        </Router>
    </ReactProvider>,
    document.getElementById('root'));
