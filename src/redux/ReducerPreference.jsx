export const initial_state = {
    theme: "light",
    language: "fr",
    notifications: true
}
import * as ActionsTypes from '../redux/ActionsTypes'
export const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ActionsTypes.LANGUE:
            return { ...state, language: state.language = action.payload };

        case ActionsTypes.NOTIFICATION:
            return { ...state, notifications: state.notifications = action.payload };

        case ActionsTypes.THEME:
            return { ...state, theme: state.theme = action.payload };
        default:
            return state
    }

}

export default initial_state;