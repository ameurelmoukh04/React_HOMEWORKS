import { createStore } from "redux";
import { reducer } from "./ReducerPreference";

const store = createStore(reducer)
export default store;