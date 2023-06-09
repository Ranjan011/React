import React from 'react'
import useCounter from '../hooks/useCounter';

function Two() {
    const [count, increment, decrement, reset] = useCounter(10,10);
    
  return (
    <div>
        Count = {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Two