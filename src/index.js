import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comment from './Comment';
import registerServiceWorker from './registerServiceWorker';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React',
    author: {
        name: 'Hello Kitty',
        avatarUrl:
            'http://placekitten.com/g/64/64',

    }
}
ReactDOM.render(<Comment date={comment.date} author={comment.author} text={comment.text} />, document.getElementById('root'));

registerServiceWorker();
