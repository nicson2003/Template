import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './redux/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(actions.increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
