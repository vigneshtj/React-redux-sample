import React from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { increment } from './Actions';
import { decrement } from './Actions';
import {toggle} from './Actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
        Hello React!
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(4))}>-</button>
        {isLogged?<h3>Valuable info.. I shouldn't see</h3>:<h2>not allowed</h2>}
        <button onClick={() => dispatch(toggle())}>Toggle!</button>
    </div>
  );
}

export default App;
