import React from 'react'
import { useRef } from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initial_state, reducer } from '../redux/ReducerPreference'
import Langue from './Langue'
import Lecteur from './Lecteur'
import Notification from './Notification'
import Theme from './Theme'

const Home = () => {
 
  return (
    <div>
      <Langue />
      <Notification />
      <Theme />
      <Lecteur />
    </div>
  )
}

export default Home