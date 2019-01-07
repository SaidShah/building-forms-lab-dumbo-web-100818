import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'

class BandsContainer extends Component {
    allBands=()=>{
    return  this.props.bands.map((eachBand,index) =>{
        return <li key={index}>{eachBand.text}</li>
      })
    }

  render() {
    return(
      <div>
        <BandInput/>
        <ul>
        {this.allBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps =(state)=>{
  return{bands: state.bands}
}

export default connect(mapStateToProps)(BandsContainer)
