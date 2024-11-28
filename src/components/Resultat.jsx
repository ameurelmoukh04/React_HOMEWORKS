import React from 'react'

const Resultat = () => {
  return (
    <div>
      <label htmlFor="">Resultat : </label>
      <input type="text" readOnly  style={{border:"none",textAlign:"center"}} defaultValue="Result"/>
    </div>
  )
}

export default Resultat