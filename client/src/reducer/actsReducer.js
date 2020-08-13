import {FETCH_ACTS} from "../action/types";

const initState = [];
export default function actsReducer (state= initState, action) {
 switch (action.type) {
     case FETCH_ACTS:

        return[...initState, ...action.data];

     default:
         return state ;
 }
}

