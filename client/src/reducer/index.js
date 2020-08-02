import {combineReducers} from "redux";
import actsReducer from "./actsReducer";

export default combineReducers({
    acts: actsReducer
});