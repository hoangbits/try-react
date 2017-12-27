import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const element = <h2>this is a h2 element</h2>;

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
