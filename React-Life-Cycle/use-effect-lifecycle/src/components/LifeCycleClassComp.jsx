import React, { Component } from 'react'
import Counter from './Counter';

export default class LifeCycleClassComp extends Component {
    constructor(){
        super();
        this.state ={
            count:0
        }
    }
    componentDidMount(){
        console.log('componentDidMount => when component render first time')
    }
    increment(){
        this.setState({count: this.state.count+1})
    }
  render() {
    return (
      <>
      <h1>Life Cycle in Class Component</h1>

      {/* <h1>{this.state.count}</h1> */}
      <Counter number={this.state.count} />
      {/* <button onClick={this.increment.bind(this)}>lick Me</button> */}
      <button onClick={()=>{this.increment()}}>Click Me</button>
      
      </>
    )
  }
}
