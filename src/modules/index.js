import {combineReducers} from "redux";
import petsonal from "./petsonal";
import user from "./user";

const rootReducer = combineReducers({
    petsonal,
    user
})

export default rootReducer;