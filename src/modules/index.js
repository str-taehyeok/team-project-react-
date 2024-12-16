import {combineReducers} from "redux";
import petsonal from "./petsonal";
import user from "./user";
import admin from "./admin";

const rootReducer = combineReducers({
    petsonal,
    user,
    admin
})

export default rootReducer;