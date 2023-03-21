import React, { Component } from 'react'

 class LifeCycle extends Component {
    // constructor(){

    // }
    state = {

    }
    componentDidMount(){

        console.log("ComponentDidMount : When component render, When the component birth")
    }
    componentDidUpdate(){
        console.log('ComponentDidUpdate : ')
    }
    componentWillUnmount(){
        console.log("Removed")
    }
  render() {
    return (
      <>
      <h1>Life Cycle</h1>
        
      </>
    )
  }
}
export default LifeCycle;
