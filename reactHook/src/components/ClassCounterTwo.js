import React, { Component } from 'react'

class ClassCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }

    increment = () => {
        this.setState(prevState => {
            return{
                count : prevState.count +1
            }
        })
    }
    incrementFive = () => {
        this.setState(prevState => {
            return{
                count : prevState.count +5
            }
        })
    }
    
  render() {
    return (
      <div>
        Count : {this.state.count}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.incrementFive}>Increment 5</button>
      </div>
    )
  }
}

export default ClassCounterTwo
