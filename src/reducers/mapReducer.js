import {UPDATE_DISTRICTS} from '../actions/mapActions';

const initState = {
    districts: {}
}

export default function(state=initState, action){
    switch(action.type){
        case UPDATE_DISTRICTS:
            return{
                ...state,
                districts: action.payload
            }
        default:
            return state
    }
}