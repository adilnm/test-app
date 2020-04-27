import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      newNote:'',
      notes:[]
    }
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
    
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.setState({
      notes:[...this.state.notes,this.state.newNote]
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="newNote"/>
          <input type="submit"/>
        </form>
        <ul>
          {this.state.notes.map((note,index)=><li key={index}>{note}</li>)}
        </ul>
      </div>
    )
  }
}
