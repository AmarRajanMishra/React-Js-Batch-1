import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'

export default class PureClassComp extends Component {
    constructor(props){
    super(props)
    this.state =  {
        name : 'My Component'
    }
}
updateData(){
    this.setState({
        name : "Code Improve"
    })
}
  render() {
    console.log('yes component called')
    return (
      <div>
        <MemoComp name={this.state.name} />
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.updateData()}>Update Data</button>
      </div>
    )
  }
}
