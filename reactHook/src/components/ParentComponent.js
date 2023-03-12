import React, {useState, useCallback} from 'react'
import Age from './Age'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
      setAge(age+1)
  },[age])

    const incrementSalary = useCallback(() => {
      setSalary(salary+1)
  },[salary]) 

  return (
    <div>
      <Title />
      <Age text="age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Age text="salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
