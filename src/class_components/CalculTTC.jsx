import Pht from '../class_components/Pht'
import Tva from '../class_components/Tva'
import Buttons from '../class_components/Buttons'
import Resultat from '../class_components/Resultat'
import '../components/style/all_style.css'
import React, { Component } from 'react'

export default class CalculTTC extends React.Component {
  render() {
    return (
      <div className='container' style={{width:"60%",backgroundColor:"skyblue",margin:"auto"}}>
      <h1 style={{}}>Calcul du PTTC</h1>
       <Pht />
       <Tva />
       <Buttons />
       <Resultat />
      </div>
    )
  }
}
