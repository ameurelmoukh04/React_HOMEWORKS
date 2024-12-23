

import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import initial_state from '../redux/ReducerPreference'
import * as ActionsCreators from '../redux/ActionsCreators'

const Notification = () => {
    const [notifications, setNotifications] = useState(initial_state.notifications)
    const stored = useSelector((state) => state);
    const dispatch = useDispatch()
    let text = 'active';

    const handleNotifications = (e) => {
        setNotifications(e.target.checked)
    }
    const handleClick = () => {

        dispatch(ActionsCreators.changeNotifications(notifications))
        console.log(stored.notifications);
        console.log(notifications);
    }

    return (
        <div>
            <label htmlFor="">active notifications : </label>
            <input type="checkbox" defaultChecked={stored.notifications} value="notifications" onChange={handleNotifications} />
            <button onClick={handleClick}>submit</button>
        </div>
    )
}






export default Notification