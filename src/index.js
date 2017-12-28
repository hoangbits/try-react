import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comment from './Comment';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();


// function Clock(props) {
//     return (
//         <div>
//             <h1>Hi, Hoang</h1>
//             <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     );
// }

class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi, Hoang</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />
        ,
        document.getElementById('root')
    );
}


setInterval(tick, 1000);