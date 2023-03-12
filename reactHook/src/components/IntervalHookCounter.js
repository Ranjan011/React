import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    // another way to increment the counter without using the dependency list is using prevState value
    const tick = () => {
        setCount(prevCount => prevCount+1)
    }
    useEffect(() => {
        const interval = setInterval(tick,1000)
        return () => {
            clearInterval(interval)
        }
    },[]) //if prevState is not used then specify the count dependency in list
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter
