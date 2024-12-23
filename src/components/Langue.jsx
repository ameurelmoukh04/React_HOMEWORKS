import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import initial_state from '../redux/ReducerPreference'
import * as ActionsCreators from '../redux/ActionsCreators'



const Langue = () => {
    const [langue,setLangue] = useState(initial_state.language)
    const dispatch = useDispatch()
    const storedLanguage = useSelector((state)=> state);
    
    const handleTheme=(e)=>{
        setLangue(e.target.value)

        
    }
    const handleClick =() =>{
        
        dispatch(ActionsCreators.changeLangue(langue))
        console.log(storedLanguage.language);
    }
  return (
    <div>
        <select value={langue} onChange={handleTheme}>
            <option value="fr">francais</option>
            <option value="en">english</option>
            <option value="ar">العربية</option>
            <option value="es">espagnol</option>
        </select>
        <button onClick={handleClick}>submit</button>
    </div>
  )
}

export default Langue