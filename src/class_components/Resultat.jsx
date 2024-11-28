import React from 'react'


export default class Resultat extends React.Component {
  render() {
    return (
      <div>
      <label htmlFor="">Resultat : </label>
      <input type="text" readOnly  style={{border:"none",textAlign:"center"}} defaultValue="Result"/>
    </div>
    )
  }
}
