import React from 'react'
import initial_state from '../redux/ReducerPreference'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as ActionsCreators from '../redux/ActionsCreators';

const Theme = () => {
  const [theme,setTheme] = useState("light")
  const dispatch= useDispatch();
  const stored = useSelector((state) =>state);

  const handleTheme =()=>{
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    dispatch(ActionsCreators.changeTheme(theme));
  }
  return (
    <div>
      <button onClick={handleTheme}>{theme}</button>
    </div>
  )
}

export default Theme