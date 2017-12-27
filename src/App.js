import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   } 
// }

function SayHi(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <SayHi name="Trieu" />
      <SayHi name="Thi" />
      <SayHi name="Hoang" />
      <SayHi name="Thang" />
    </div>
  );
}

export default App;
