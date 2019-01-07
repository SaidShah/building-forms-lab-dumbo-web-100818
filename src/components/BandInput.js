// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandInput extends Component {

  state={
    text: ''
  }

  handleChange=(e)=>{
    this.setState({text:e.target.value})
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({text: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
        <label>Name of band </label>
          <input type="text" name="name" value={this.state.text} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToState =(dispatch)=>{
  return{addBand: (bandName)=>dispatch({type: "ADD_BAND", payload:bandName})}
}

export default connect(null,mapDispatchToState)(BandInput)
