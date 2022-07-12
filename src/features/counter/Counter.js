import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counter.actions';

export function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <p>{counter.value}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
