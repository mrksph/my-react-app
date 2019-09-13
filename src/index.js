import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Route} from 'react-router-dom'
import './index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from "./routes/Routes";
import Home from "./components/home";


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
