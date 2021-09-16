import React, {useState, useMemo} from 'react';
import logo from './logo.svg';
import './App.css';

interface CountInterface {
  count: number
  count2?: number
}

const App = () => {
  const [{count, count2}, setCount] = useState<CountInterface>({count: 10, count2: 20});

  return (
    <div className="App">
      <button onClick={() =>
          setCount(currentState => ({ count: currentState.count + 1 }))
        }>
        Increment
      </button>
        <div>count 1: {count}</div>
        <div>count 2: {count2}</div>
      <div>{count}</div>
    </div>
  );
}

export default App;
