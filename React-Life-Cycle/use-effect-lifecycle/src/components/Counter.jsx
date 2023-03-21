import React, { Component } from 'react'

export default class Counter extends Component {
    componentDidUpdate(prevProps, preState){
        console.log(prevProps.number)
        console.log(this.props.number)
        if(prevProps.number !== this.props.number){
            console.log("componentDidUpdate will run when the component update")

        }
    }
  render() {
    return (
      <>
      <h1>{this.props.number}</h1>
        
      </>
    )
  }
}
