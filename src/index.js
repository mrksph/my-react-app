import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import Index from "./components/login";
import registerServiceWorker from './registerServiceWorker';
import AppRouter from "./routes/Routes";

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
