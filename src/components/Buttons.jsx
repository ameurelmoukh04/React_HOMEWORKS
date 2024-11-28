import React from 'react'
import '../components/style/all_style.css'

const Buttons = () => {
  return (
    <div style={{width:"30%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <button>Calculer</button>
      <button>Inialiser</button>
    </div>
  )
}

export default Buttons