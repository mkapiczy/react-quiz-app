import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from "./redux/configureStore";
import {Provider as ReactProvider} from 'react-redux'
import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_SERVER_ADDRESS;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const store = configureStore()
ReactDOM.render(
    <ReactProvider store={store}>
        <Router>
            <App/>
        </Router>
    </ReactProvider>,
    document.getElementById('root'));
