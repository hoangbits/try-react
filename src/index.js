import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

function SayHi(props) {
    return <h1>Hello, {props.name}</h1>;
}
const element = <SayHi name="Mason" />
ReactDOM.render(element, document.getElementById('root'));



registerServiceWorker();
