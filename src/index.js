import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

function tick() {
    const element = <h2>It is {new Date().toLocaleTimeString()}</h2>;
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
registerServiceWorker();
