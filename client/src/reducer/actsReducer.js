import {FETCH_ACTS} from "../action/types";


export default function actsReducer (state= [], action) {
 switch (action.type) {
     case FETCH_ACTS:
        
        return[...state, ...action.data];
 
     default:
         return state ;
 }
}

