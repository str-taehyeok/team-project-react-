import {combineReducers} from "redux";
import petsonal from "./petsonal";
import user from "./user";
import admin from "./admin";
import seller from "./seller";

const rootReducer = combineReducers({
    petsonal,
    user,
    admin,
    seller
})

export default rootReducer;