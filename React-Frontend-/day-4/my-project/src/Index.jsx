import React, { Component } from 'react'

export class Index extends Component {
    constructor() {
        super();
        this.state = {
        item: 0,
    }
    console.log("constructor called")
}
    componentDidMount(){
        console.log("constructor  did mount called")
    }
    handleButtonClick = () => {
        this.setState({item:this.state.item + 1})
    }
  render() {
    console.log("Render called")
    return (
        <>
      <div>Index</div>
      <p>Items: {this.state.item}</p>
        <button onClick={this.handleButtonClick}>Click Me</button>
      </>
    )
  }
}

export default Index