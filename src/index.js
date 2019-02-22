import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

const app = (
        <App />
);      
ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
