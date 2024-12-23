import * as Actions from './ActionsTypes'

export const changeTheme = (theme) =>{
    return {
        type : Actions.THEME,
        payload : theme,
    }
}

export const changeLangue = (langue) =>{
    return {
        type : Actions.LANGUE,
        payload : langue,
    }
}

export const changeNotifications = (notification) =>{
    return {
        type : Actions.NOTIFICATION,
        payload : notification
    }
}

