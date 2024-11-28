import React from 'react'
import Pht from './Pht'
import Tva from './Tva'
import Buttons from './Buttons'
import Resultat from './Resultat'
import '../components/style/all_style.css'


const CalculTTC = () => {
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

export default CalculTTC